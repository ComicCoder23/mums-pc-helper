# PC Helper — Script Bundle

5 audit scripts for safe Windows PC maintenance. None of these delete, move, or modify anything. All output goes to a text file on the Desktop.

## Run order

1. **DiskSpaceAudit.ps1** — Run first. Shows drive space and user folder sizes.
2. **DownloadsAudit.ps1** — Flags large/old downloads and likely installer clutter.
3. **LargeFilesFinder.ps1** — Finds the biggest files across common user folders.
4. **InstalledProgramsExport.ps1** — Lists all installed programs for review.
5. **StartupItemsReview.ps1** — Lists startup items in case any are obvious clutter.

## How to run a script

1. Right-click the .ps1 file → Run with PowerShell
2. If blocked, open PowerShell and run: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
3. Then run the script again in that same PowerShell window
4. Find the report file on the Desktop

## Safety guarantee

All scripts are read-only. They write one text file to the Desktop and exit. They do not touch system folders, the registry (except to read it), or any user files.
