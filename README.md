# Mum PC Helper

**A safety-first Windows support field kit for non-technical home PCs.**

Guided checklists, audit-only PowerShell scripts, and a packaged v1 release pack — so a helper can arrive, ask the right questions, audit before cleaning, and leave clear notes for the next visit.

**Author:** [ComicCoder23](https://github.com/ComicCoder23) · **Status:** v1.0 field kit · **Pages:** [comiccoder23.github.io/mums-pc-helper](https://comiccoder23.github.io/mums-pc-helper/) (after merge + Pages enable)

---

## Why this exists (hire-facing)

Mum PC Helper is Tier A proof for **1st-line / IT helpdesk** work:

| Skill shown | How the pack proves it |
|---|---|
| Audit-first discipline | Scripts read and report only; clean comes after evidence |
| Safe change control | Never touch system folders; obvious junk only; if unsure, leave it |
| Structured visit workflow | Master Index → Quick Run Card → ask → audit → clean → session notes |
| Clear documentation | 29 markdown guides + one-page run card + decision tree |
| PowerShell for support | Five read-only audit scripts with a fixed run order |

This is a real support kit, not a demo app. Recruiters can skim this README, open the [live landing](https://comiccoder23.github.io/mums-pc-helper/), and inspect `scripts/` plus `release/PC-Helper-v1.zip`.

---

## Design principles

- Audit first, clean second
- Obvious junk only — if unsure, leave it
- Never touch system folders
- One visit at a time — do not try to fix everything in one session
- Built-in Windows tools first; scripts only when they help

---

## Quick start (every visit)

1. Open **Master Index**
2. Open **Quick Run Card**
3. Ask the opening questions (`What To Ask Mum`)
4. Run **Disk Space Audit**
5. Run **Downloads Folder Audit**
6. Clean obvious junk from Downloads
7. Tidy obvious Desktop clutter
8. Empty Recycle Bin
9. Recheck free space
10. Update **Session Notes**

Entry points:

- `Mum PC Helper Pack — Start Here.md`
- `Mum PC Helper - Master Index.md`
- `Mum PC Helper - Quick Run Card.md`

---

## PowerShell scripts (audit-only)

Live copies: [`scripts/`](scripts/) · Packaged copies: inside [`release/PC-Helper-v1.zip`](release/PC-Helper-v1.zip)

| Order | Script | Purpose |
|---|---|---|
| 1 | `DiskSpaceAudit.ps1` | Drive space + user folder sizes |
| 2 | `DownloadsAudit.ps1` | Large/old downloads and installer clutter |
| 3 | `LargeFilesFinder.ps1` | Biggest files in common user folders |
| 4 | `InstalledProgramsExport.ps1` | Installed programs list for review |
| 5 | `StartupItemsReview.ps1` | Startup items that may be clutter |

**Safety:** scripts do not delete, move, or modify user files. They read sizes/lists (and read registry values where needed) and write one plain-text report to the Desktop. See `scripts/Safety-Notes.txt`.

Run as the logged-in user. Do not approve unexpected admin prompts.

---

## Pack contents

### Start here
- `Mum PC Helper Pack — Start Here.md`
- `Mum PC Helper - Master Index.md`
- `Mum PC Helper - Quick Run Card.md`

### Workflow
- First Visit Checklist · Cleanup Order · What To Ask Mum · Session Notes
- Results Interpretation Guide · Action Decision Tree · Visit Workflow One Pager
- Browser Triage Guide · Connector Switching Rule

### Script docs
- PowerShell Disk Space / Downloads / Installed Programs / Startup / Large Files guides
- `Mum PC Helper - Run Order for Scripts.md`

### Safety and product
- Safe Tools List · Safe Scripts Plan · Safety Notes · User Guide
- V1 Product Pack Definition · Canonical Product Structure · Release Manifest

Full v1 zip: `release/PC-Helper-v1.zip` (Start Here, Quick Guides, User Guide, Scripts, Safety Notes).

---

## Product name

Canonical public name: **Mum PC Helper** (locked for v1). Broader audience lives in the subtitle, not a second product name.

---

## Licence / use

Personal and learning use welcome. Treat the PowerShell scripts as audit-only tools on machines you are invited to support. Do not run them in bulk or unattended against machines you do not own or support.
