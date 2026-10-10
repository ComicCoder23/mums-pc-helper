MUM PC HELPER — POWERSHELL DISK SPACE AUDIT


Purpose
This is the first safe script for Mum’s PC Helper.
It audits disk space and the biggest user folders.
It does not delete anything.


What it does
- shows free space on local drives
- checks common user folders
- reports folder sizes for:
  - Desktop
  - Documents
  - Downloads
  - Pictures
  - Videos
- writes a simple report to the Desktop


Safety rules
- no deletion
- no moving files
- no registry changes
- no uninstalling
- no system-folder cleanup


How to run it
1. Open Notepad
2. Paste the script below
3. Save it as:
   DiskSpaceAudit.ps1
4. Right-click the file and run with PowerShell
   or open PowerShell and run it manually
5. Look for the report on the Desktop:
   disk-space-audit.txt


Script


$desktop = [Environment]::GetFolderPath('Desktop')
$reportPath = Join-Path $desktop 'disk-space-audit.txt'
$userProfile = [Environment]::GetFolderPath('UserProfile')


$foldersToCheck = @(
    (Join-Path $userProfile 'Desktop'),
    (Join-Path $userProfile 'Documents'),
    (Join-Path $userProfile 'Downloads'),
    (Join-Path $userProfile 'Pictures'),
    (Join-Path $userProfile 'Videos')
)


function Get-FolderSizeMB {
    param([string]$Path)


    if (-not (Test-Path $Path)) {
        return 'Missing'
    }


    try {
        $size = (Get-ChildItem -Path $Path -Recurse -File -ErrorAction SilentlyContinue |
            Measure-Object -Property Length -Sum).Sum


        if ($null -eq $size) {
            return '0 MB'
        }


        return ('{0:N2} MB' -f ($size / 1MB))
    }
    catch {
        return 'Access error'
    }
}


$lines = @()
$lines += 'DISK SPACE AUDIT'
$lines += ''
$lines += ('Run date: ' + (Get-Date))
$lines += ''
$lines += 'Drive summary:'


Get-PSDrive -PSProvider FileSystem | ForEach-Object {
    $used = $_.Used
    $free = $_.Free
    $total = $used + $free


    if ($total -gt 0) {
        $lines += ('Drive {0}: Free {1:N2} GB / Total {2:N2} GB' -f $_.Name, ($free / 1GB), ($total / 1GB))
    }
}


$lines += ''
$lines += 'User folder sizes:'


foreach ($folder in $foldersToCheck) {
    $size = Get-FolderSizeMB -Path $folder
    $lines += ('{0} = {1}' -f $folder, $size)
}


$lines | Out-File -FilePath $reportPath -Encoding UTF8
Write-Host 'Audit complete. Report saved to:' $reportPath


What the report is for
Use the report to decide:
- where the biggest user clutter is
- whether Downloads is the first cleanup target
- whether Pictures or Videos are taking major space
- whether another script is needed next


Best next use
Run this first.
Then compare the result against the Cleanup Order doc before touching files.


Important
If PowerShell blocks the script, open PowerShell and run:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Then run the script again for that session only.


Rule
Audit first.
Clean second.
Delete last.