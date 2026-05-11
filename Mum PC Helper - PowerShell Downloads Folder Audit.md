MUM PC HELPER — POWERSHELL DOWNLOADS FOLDER AUDIT


Purpose
This script audits the Downloads folder and reports likely cleanup targets.
It does not delete anything.


What it does
- scans the Downloads folder
- lists files by size and age
- highlights likely junk categories such as:
  - installers
  - zip files
  - old downloads
  - large files
- writes a simple report to the Desktop


Safety rules
- no deletion
- no moving files
- no automatic cleanup
- report only


How to run it
1. Open Notepad
2. Paste the script below
3. Save it as:
   DownloadsAudit.ps1
4. Right-click and run with PowerShell
   or run it manually from PowerShell
5. Look for the report on the Desktop:
   downloads-audit.txt


Script


$desktop = [Environment]::GetFolderPath('Desktop')
$downloads = [Environment]::GetFolderPath('UserProfile') + '\Downloads'
$reportPath = Join-Path $desktop 'downloads-audit.txt'


$now = Get-Date
$oldThreshold = $now.AddDays(-90)
$installerExtensions = @('.exe', '.msi', '.msix', '.zip', '.rar', '.7z')


$lines = @()
$lines += 'DOWNLOADS FOLDER AUDIT'
$lines += ''
$lines += ('Run date: ' + $now)
$lines += ('Downloads folder: ' + $downloads)
$lines += ''


if (-not (Test-Path $downloads)) {
    $lines += 'Downloads folder not found.'
    $lines | Out-File -FilePath $reportPath -Encoding UTF8
    Write-Host 'Audit complete. Report saved to:' $reportPath
    return
}


$files = Get-ChildItem -Path $downloads -File -ErrorAction SilentlyContinue


$lines += ('Total files found: ' + $files.Count)
$lines += ''


$lines += 'Largest files:'
$files |
    Sort-Object Length -Descending |
    Select-Object -First 20 |
    ForEach-Object {
        $lines += ('{0:N2} MB | {1} | {2}' -f ($_.Length / 1MB), $_.LastWriteTime, $_.Name)
    }


$lines += ''
$lines += 'Older than 90 days:'
$files |
    Where-Object { $_.LastWriteTime -lt $oldThreshold } |
    Sort-Object LastWriteTime |
    Select-Object -First 50 |
    ForEach-Object {
        $lines += ('{0} | {1:N2} MB | {2}' -f $_.LastWriteTime, ($_.Length / 1MB), $_.Name)
    }


$lines += ''
$lines += 'Likely installers / archives:'
$files |
    Where-Object { $installerExtensions -contains $_.Extension.ToLower() } |
    Sort-Object LastWriteTime |
    ForEach-Object {
        $lines += ('{0} | {1:N2} MB | {2}' -f $_.LastWriteTime, ($_.Length / 1MB), $_.Name)
    }


$lines += ''
$lines += 'Suggested manual review rules:'
$lines += '- Check old installers first'
$lines += '- Check zip files already extracted'
$lines += '- Check large files you do not recognize'
$lines += '- Leave uncertain files alone until reviewed'


$lines | Out-File -FilePath $reportPath -Encoding UTF8
Write-Host 'Audit complete. Report saved to:' $reportPath


What the report is for
Use the report to decide:
- which old downloads can probably go
- which installers are still needed
- whether Downloads is the main cleanup win


Important
If PowerShell blocks the script, open PowerShell and run:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Then run the script again for that session only.


Rule
Audit first.
Delete nothing automatically.