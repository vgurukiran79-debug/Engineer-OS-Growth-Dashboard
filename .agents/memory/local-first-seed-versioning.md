---
name: Local-first seed versioning
description: Why demo data versions must change when the browser data model or seed configuration changes.
---

When the local data model or initial demo configuration changes, bump the storage version and key together so existing browser sessions do not silently keep stale seed data.

**Why:** Browser localStorage survives code updates, so a corrected seed can appear broken during preview or for returning users if the old snapshot is still accepted.

**How to apply:** Treat the version as a migration boundary; update the accepted version, seed version, export/import validation, and visible storage label together.