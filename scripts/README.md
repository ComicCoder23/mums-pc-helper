# Mum PC Helper — Script Bundle

5 audit scripts for safe Windows PC maintenance. None of these delete, move, or modify anything. All output goes to a text file on the Desktop.

Use this run order every time. It matches `build/Mum PC Helper - Run Order for Scripts.md` and `product/Mum PC Helper - Quick Run Card.md`.

## Run order

1. **DiskSpaceAudit.ps1** — Always first. Shows drive space and user folder sizes.
2. **DownloadsAudit.ps1** — Usual second step. Flags large/old downloads and likely installer clutter.
3. **LargeFilesFinder.ps1** — Only if space is still tight or unexplained after Downloads cleanup.
4. **InstalledProgramsExport.ps1** — Only if the PC is still slow or full of unknown apps.
5. **StartupItemsReview.ps1** — Only if startup is still sluggish.

## Fast default path

For most visits:

1. DiskSpaceAudit.ps1
2. DownloadsAudit.ps1
3. Manual cleanup of obvious Downloads/Desktop junk
4. Empty Recycle Bin and recheck free space
5. Write Session Notes
6. Only then decide on scripts 3–5

## How to run a script

1. Right-click the .ps1 file → Run with PowerShell
2. If blocked, open PowerShell and run: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
3. Then run the script again in that same PowerShell window
4. Find the report file on the Desktop

## Safety guarantee

All scripts are read-only. They write one text file to the Desktop and exit. They do not touch system folders, the registry (except to read it), or any user files.

Read `Safety-Notes.txt` in this folder and `product/Mum PC Helper - Safety Notes.md` before making any manual changes.
