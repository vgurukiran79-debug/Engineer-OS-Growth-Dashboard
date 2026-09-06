import { Router } from "express";

const router = Router();

type GuruRequest = {
  message?: unknown;
  context?: unknown;
  history?: unknown;
};

function text(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

router.post("/guru", async (req, res) => {
  const body = req.body as GuruRequest;
  const message = text(body.message).trim();

  if (!message) {
    res.status(400).json({ message: "Ask Guru AI a question first." });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(503).json({
      message: "Guru AI is not configured yet. Add GEMINI_API_KEY to the API server environment to enable it.",
    });
    return;
  }

  const context = text(body.context, "{}").slice(0, 120_000);
  const history = Array.isArray(body.history)
    ? body.history
        .filter((item): item is { role?: unknown; text?: unknown } => Boolean(item && typeof item === "object"))
        .slice(-8)
        .map((item) => `${text(item.role, "user")}: ${text(item.text)}`)
        .join("\n")
    : "";

  const prompt = [
    "You are Guru AI inside Engineer OS, a practical mentor for a second-year engineering student.",
    "Use only the student's supplied context. Never invent statistics, attendance, marks, achievements, deadlines, or completed work.",
    "If the context does not contain enough information, say exactly what is missing and suggest a concrete next action.",
    "Be concise, kind, and specific. Prefer a short plan or checklist when useful.",
    `Student context:\n${context}`,
    history ? `Recent conversation:\n${history}` : "",
    `Student question:\n${message}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 8192, temperature: 0.4 },
        }),
      },
    );

    const data = (await response.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
      error?: { message?: string };
    };

    if (!response.ok) {
      console.error("Gemini request failed", response.status, data.error?.message ?? "unknown error");
      res.status(502).json({
        message: "Guru AI could not reach Gemini right now. Check the API key and Gemini API access.",
      });
      return;
    }

    const reply = data.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("").trim();
    if (!reply) {
      res.status(502).json({ message: "Gemini returned no usable response. Try asking in a different way." });
      return;
    }

    res.json({ reply });
  } catch (error) {
    console.error("Guru request error", error);
    res.status(502).json({ message: "Guru AI is temporarily unavailable. Try again shortly." });
  }
});

export default router;