# Mum PC Helper

A complete field kit for safely maintaining and cleaning up a non-technical user's Windows PC. Built for confident helpers who want to do the right things in the right order without breaking anything.

## What it is

A structured set of 29 markdown documents covering everything needed for a safe, productive PC maintenance visit: what to ask, what to clean, which scripts to run, how to read the results, and how to log what you did.

**Design principles:**
- Audit first, clean second
- Obvious junk only — if unsure, leave it
- Never touch system folders
- One visit at a time — don't try to fix everything in one session

## Included docs

### Start here
- `Mum PC Helper Pack — Start Here.md` — the entry point every session
- `Mum PC Helper - Master Index.md` — front door for the whole pack
- `Mum PC Helper - Quick Run Card.md` — condensed one-page reference

### Workflow docs
- `Mum PC Helper - First Visit Checklist.md`
- `Mum PC Helper - Cleanup Order.md`
- `Mum PC Helper - What To Ask Mum.md`
- `Mum PC Helper - Session Notes.md`
- `Mum PC Helper - Results Interpretation Guide.md`
- `Mum PC Helper - Action Decision Tree.md`
- `Mum PC Helper - Visit Workflow One Pager.md`
- `Mum PC Helper - Browser Triage Guide.md`
- `Mum PC Helper - Connector Switching Rule.md`

### PowerShell scripts (run only if needed)
- `Mum PC Helper - PowerShell Disk Space Audit.md`
- `Mum PC Helper - PowerShell Downloads Folder Audit.md`
- `Mum PC Helper - PowerShell Installed Programs Export.md`
- `Mum PC Helper - PowerShell Startup Items Review.md`
- `Mum PC Helper - PowerShell Large Files Finder.md`
- `Mum PC Helper - Run Order for Scripts.md`

### Safety and tools
- `Mum PC Helper - Safe Tools List.md`
- `Mum PC Helper - Safe Scripts Plan.md`
- `Mum PC Helper - Safety Notes.md`
- `Mum PC Helper - User Guide.md`

### Product and packaging
- `Mum PC Helper - V1 Product Pack Definition.md`
- `Mum PC Helper - Canonical Product Structure.md`
- `PC Helper - Release Manifest.md`
- `PC Helper - V1 Release Checklist.md`
- `PC Helper - Final V1 Product Folder Spec.md`

## Quick start (every visit)

1. Open **Master Index**
2. Open **Quick Run Card**
3. Ask Mum the opening questions (from What To Ask Mum)
4. Run **Disk Space Audit** script
5. Run **Downloads Folder Audit** script
6. Clean obvious junk from Downloads
7. Tidy obvious Desktop clutter
8. Empty Recycle Bin
9. Recheck free space
10. Update **Session Notes**

## PowerShell script usage

Scripts are documented in markdown — copy the script content and paste into a PowerShell window. Run as the logged-in user (not as admin) unless the script explicitly states otherwise.

Run order: `Run Order for Scripts.md` covers the recommended sequence.

## Version

v1.0 — Complete field kit. All 29 core docs included.
