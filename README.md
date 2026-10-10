# Mum PC Helper

**A safety-first Windows support field kit for non-technical home PCs.**

Guided checklists, audit-only PowerShell scripts, and a packaged v1 release pack — so a helper can arrive, ask the right questions, audit before cleaning, and leave clear notes for the next visit.

**Author:** [ComicCoder23](https://github.com/ComicCoder23) · **Status:** v1.0 field kit · **Live Pages:** [comiccoder23.github.io/mums-pc-helper](https://comiccoder23.github.io/mums-pc-helper/)

---

## Why this exists (hire-facing)

Mum PC Helper is Tier A proof for **1st-line / IT helpdesk** work:

| Skill shown | How the pack proves it |
|---|---|
| Audit-first discipline | Scripts read and report only; clean comes after evidence |
| Safe change control | Never touch system folders; obvious junk only; if unsure, leave it |
| Structured visit workflow | Master Index → Quick Run Card → ask → audit → clean → session notes |
| Clear documentation | Classified product / build / archive guides + one-page run card + decision tree |
| PowerShell for support | Five read-only audit scripts with a fixed run order |

This is a real support kit, not a demo app. Recruiters can skim this README, open the [live landing](https://comiccoder23.github.io/mums-pc-helper/), and inspect `scripts/` plus [`release/Mum-PC-Helper-v1.zip`](release/Mum-PC-Helper-v1.zip).

---

## Design principles

- Audit first, clean second
- Obvious junk only — if unsure, leave it
- Never touch system folders
- One visit at a time — do not try to fix everything in one session
- Built-in Windows tools first; scripts only when they help

---

## Quick start (every visit)

1. Open **Master Index** or **Start Here**
2. Open **Quick Run Card** and **Safety Notes**
3. Ask the opening questions (`What To Ask Mum`)
4. Run **DiskSpaceAudit.ps1**
5. Run **DownloadsAudit.ps1**
6. Clean obvious junk from Downloads
7. Tidy obvious Desktop clutter
8. Empty Recycle Bin
9. Recheck free space
10. Update **Session Notes**
11. Only if still needed: **LargeFilesFinder** → **InstalledProgramsExport** → **StartupItemsReview**

Entry points:

- `product/Mum PC Helper Pack — Start Here.md`
- `build/Mum PC Helper - Master Index.md`
- `product/Mum PC Helper - Quick Run Card.md`
- Live landing: [comiccoder23.github.io/mums-pc-helper](https://comiccoder23.github.io/mums-pc-helper/)

---

## PowerShell scripts (audit-only)

Live copies: [`scripts/`](scripts/) · Packaged copies: inside [`release/Mum-PC-Helper-v1.zip`](release/Mum-PC-Helper-v1.zip)

| Order | Script | When |
|---|---|---|
| 1 | `DiskSpaceAudit.ps1` | Always first — drive space + user folder sizes |
| 2 | `DownloadsAudit.ps1` | Usual second — large/old downloads and installer clutter |
| 3 | `LargeFilesFinder.ps1` | Only if space is still tight or unexplained |
| 4 | `InstalledProgramsExport.ps1` | Only if apps review is needed |
| 5 | `StartupItemsReview.ps1` | Only if startup is still slow |

**Safety:** scripts do not delete, move, or modify user files. They read sizes/lists (and read registry values where needed) and write one plain-text report to the Desktop. See `scripts/Safety-Notes.txt`.

Run as the logged-in user. Do not approve unexpected admin prompts.

---

## Repo layout

| Folder | Role |
|---|---|
| `product/` | Customer-facing guide sources that feed the downloadable pack |
| `build/` | Helper/support docs (Master Index, visit checklists, script run-order guides) |
| `archive/` | Superseded or empty docs kept for history |
| `scripts/` | Canonical audit-only PowerShell sources |
| `release/Mum PC Helper v1/` | Packaged product folder |
| `release/Mum-PC-Helper-v1.zip` | Downloadable v1 zip |
| `docs/` | GitHub Pages hire landing |

### Product sources (`product/`)
- Pack Start Here · Start Here · Quick Run Card · Visit Workflow One Pager
- Action Decision Tree · Safety Notes · User Guide

### Build / support (`build/`)
- Master Index · First Visit Checklist · Cleanup Order · What To Ask Mum · Session Notes
- Results Interpretation Guide · Run Order for Scripts · Browser Triage Guide
- Safe Tools List · Safe Scripts Plan · PowerShell guide docs
- Canonical Product Structure · Product Naming Rule · V1 Product Pack Definition

Full v1 zip: [`release/Mum-PC-Helper-v1.zip`](release/Mum-PC-Helper-v1.zip) (Start Here, Quick Guides, User Guide, Scripts, Safety Notes).

---

## Product name

Canonical public name: **Mum PC Helper** (locked for v1). Broader audience lives in the subtitle, not a second product name.

---

## Licence / use

Personal and learning use welcome. Treat the PowerShell scripts as audit-only tools on machines you are invited to support. Do not run them in bulk or unattended against machines you do not own or support.
