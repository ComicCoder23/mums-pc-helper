# AGENTS.md — Mums PC Helper
# Last updated: 2026-05-22 | Remote: https://github.com/ComicCoder23/mums-pc-helper

---

## Project

**Name:** Mums PC Helper
**Purpose:** Guided Windows PC support kit for non-technical users. A structured field kit for safely maintaining and cleaning up a home PC. Designed for confident helpers visiting family/friends — covers what to ask, what to clean, which scripts to run, how to read results, and how to log the visit.
**Canonical path:** `D:\Repos\mums-pc-helper\`
**GitHub remote:** `ComicCoder23/mums-pc-helper` (live — pushed, v1.0 zip committed)
**Build %:** 75%

---

## Run Commands

No run commands for Boris. PowerShell scripts in this repo are AUDIT-ONLY and are for end-user deployment, not agent execution.

SAFETY RULE: Boris must NEVER run the PowerShell scripts in bulk or autonomously. Read-only inspection only. Scripts must only be run by Alan or a designated helper, directly on the target user's machine. See `scripts\Safety-Notes.txt` for the full safety boundary.

If Alan explicitly asks Boris to inspect a script, read it — do not execute it.

---

## Key Files

| File | Purpose |
|---|---|
| `README.md` | Root overview — 29 docs listed, quick-start, design principles |
| `release\PC Helper v1\01 Start Here\Mum PC Helper - Start Here.md` | Entry point for every support session |
| `release\PC Helper v1\02 Quick Guides\Mum PC Helper - Quick Run Card.md` | One-page condensed reference |
| `release\PC Helper v1\02 Quick Guides\Mum PC Helper - Visit Workflow One Pager.md` | Visit workflow |
| `release\PC Helper v1\02 Quick Guides\Mum PC Helper - Action Decision Tree.md` | Decision tree for unclear problems |
| `release\PC Helper v1\03 User Guide\Mum PC Helper - User Guide.md` | Fuller user instructions |
| `release\PC Helper v1\04 Scripts\` | 5 PowerShell audit scripts (READ-ONLY tools — see Safety Rule above) |
| `release\PC Helper v1\05 Script Notes\Safety-Notes.txt` | Script safety boundary — read before touching any .ps1 |
| `release\PC-Helper-v1.zip` | Packaged v1 product bundle |
| `scripts\Safety-Notes.txt` | Safety notes in root scripts folder |

---

## Boris Rules

- SAFETY RULE: PowerShell scripts in this pack are designed for deployment on non-technical users' Windows machines. Boris must NEVER execute them in bulk without Alan's explicit approval. Always read-only inspect first.
- Scripts are audit-only: they read folder sizes, read registry values, and write one plain text report to the Desktop. They do not delete, move, or modify anything. If a script asks for unexpected admin access, stop and alert Alan.
- Never push directly to `main`. Branch protection applies. Docs and AGENTS.md updates are allowed.
- GitHub (`ComicCoder23/mums-pc-helper`) is the source of truth — run `git pull` before any write.
- This is a distribution product — do not alter or restructure the `release\` folder without explicit instruction from Alan. The packaged structure must remain intact for end-user delivery.
- Alan's real name must never appear in commits, release files, or public content.
- Never modify the ZIP bundle without explicit instruction. Any new version requires a new versioned ZIP.

---

## Current State

**Build %:** 75%
**Status:** 29 structured markdown docs fully built. Master Index, Quick Run Card, 5 PowerShell scripts, V1 Product Pack Definition, and Release Manifest all exist. v1.0 zip committed to GitHub. On GitHub.

**Next actions (prioritised):**
1. Verify the root README is present and covers the full pack (confirmed — done).
2. Push any final local changes to GitHub.
3. Export `release\PC-Helper-v1.zip` to Google Drive for distribution.
4. Wire distribution to non-technical recipients (family/friends) — manual share of Drive link.

**Blockers:** None — ready to distribute once Drive export is done.

**Parked:**
- Google Drive API distribution scaffold is ready but needs GCP credentials to automate. Manual upload is the current path.
- GitHub push confirmed live. No further git setup needed.
