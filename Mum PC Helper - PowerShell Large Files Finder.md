MUM PC HELPER — POWERSHELL LARGE FILES FINDER


Purpose
This script finds large files in safe user areas so you can identify the biggest space hogs quickly.
It does not delete anything.


What it does
- scans common user folders only
- skips Windows system folders
- lists the largest files it finds
- writes a simple report to the Desktop


Folders checked
- Desktop
- Documents
- Downloads
- Pictures
- Videos


Safety rules
- no deletion
- no moving files
- no system-folder scanning
- report only


How to run it
1. Open Notepad
2. Paste the script below
3. Save it as:
   LargeFilesFinder.ps1
4. Right-click and run with PowerShell
   or run it manually from PowerShell
5. Look for the report on the Desktop:
   large-files-report.txt


Script


$desktop = [Environment]::GetFolderPath('Desktop')
$reportPath = Join-Path $desktop 'large-files-report.txt'
$userProfile = [Environment]::GetFolderPath('UserProfile')


$foldersToCheck = @(
    (Join-Path $userProfile 'Desktop'),
    (Join-Path $userProfile 'Documents'),
    (Join-Path $userProfile 'Downloads'),
    (Join-Path $userProfile 'Pictures'),
    (Join-Path $userProfile 'Videos')
)


$lines = @()
$lines += 'LARGE FILES REPORT'
$lines += ''
$lines += ('Run date: ' + (Get-Date))
$lines += ''
$lines += 'Top large files found in user folders:'
$lines += ''


$allFiles = @()


foreach ($folder in $foldersToCheck) {
    if (Test-Path $folder) {
        $files = Get-ChildItem -Path $folder -Recurse -File -ErrorAction SilentlyContinue
        $allFiles += $files
    }
}


$allFiles |
    Sort-Object Length -Descending |
    Select-Object -First 50 |
    ForEach-Object {
        $lines += ('{0:N2} MB | {1} | {2}' -f ($_.Length / 1MB), $_.LastWriteTime, $_.FullName)
    }


$lines += ''
$lines += 'Suggested manual review rules:'
$lines += '- Ask before touching personal files in Pictures or Videos'
$lines += '- Large installers and archives may be easier wins'
$lines += '- Unknown large files should be noted, not deleted automatically'
$lines += '- Use this report alongside Disk Space Audit and Downloads Audit'


$lines | Out-File -FilePath $reportPath -Encoding UTF8
Write-Host 'Large file scan complete. Report saved to:' $reportPath


What the report is for
Use the report to:
- spot obvious large files taking space
- identify whether media folders are the real issue
- find large installers, downloads, and archives
- decide whether Pictures or Videos need a careful review with Mum


Important
If PowerShell blocks the script, open PowerShell and run:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Then run the script again for that session only.


Rule
Visibility first.
Review second.
Delete nothing automatically.