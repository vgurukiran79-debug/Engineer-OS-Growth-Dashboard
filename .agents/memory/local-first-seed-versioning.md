---
name: Local-first seed versioning
description: Why demo data versions must change when the browser data model or seed configuration changes.
---

When the local data model or initial demo configuration changes, bump the storage version and key together so existing browser sessions do not silently keep stale seed data.

**Why:** Browser localStorage survives code updates, so a corrected seed can appear broken during preview or for returning users if the old snapshot is still accepted.

**How to apply:** Treat the version as a migration boundary; update the accepted version, seed version, export/import validation, and visible storage label together.

Default subjects, timetable structure, and roadmap topics may be seeded as configuration, but they must not count as personal progress until the student records activity or changes status.

**Why:** A clean first-run workspace can still be useful without fabricating attendance, academic, growth, or learning statistics.

**How to apply:** Keep configuration seeds separate from event and progress calculations; derived metrics should use only explicit user activity.