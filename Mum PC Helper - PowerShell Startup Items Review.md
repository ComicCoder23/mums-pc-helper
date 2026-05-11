MUM PC HELPER — POWERSHELL STARTUP ITEMS REVIEW


Purpose
This script creates a review list of startup items so you can spot obvious clutter that may be slowing startup.
It does not disable anything.


What it does
- checks common startup registry locations
- checks the Startup folders
- records startup item names, commands, and locations where available
- writes a simple report to the Desktop


Safety rules
- no disabling
- no deleting
- no registry edits
- report only


How to run it
1. Open Notepad
2. Paste the script below
3. Save it as:
   StartupItemsReview.ps1
4. Right-click and run with PowerShell
   or run it manually from PowerShell
5. Look for the report on the Desktop:
   startup-items-review.txt


Script


$desktop = [Environment]::GetFolderPath('Desktop')
$reportPath = Join-Path $desktop 'startup-items-review.txt'


$registryStartupPaths = @(
    'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run',
    'HKLM:\Software\Microsoft\Windows\CurrentVersion\Run',
    'HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Run'
)


$startupFolders = @(
    [Environment]::GetFolderPath('Startup'),
    "$env:ProgramData\Microsoft\Windows\Start Menu\Programs\Startup"
)


$lines = @()
$lines += 'STARTUP ITEMS REVIEW'
$lines += ''
$lines += ('Run date: ' + (Get-Date))
$lines += ''
$lines += 'Registry startup entries:'
$lines += ''


foreach ($path in $registryStartupPaths) {
    $lines += ('Source: ' + $path)
    if (Test-Path $path) {
        $item = Get-ItemProperty -Path $path -ErrorAction SilentlyContinue
        if ($item) {
            $props = $item.PSObject.Properties | Where-Object {
                $_.Name -notlike 'PS*'
            }
            if ($props.Count -gt 0) {
                foreach ($prop in $props) {
                    $lines += ('Name: ' + $prop.Name)
                    $lines += ('Command: ' + [string]$prop.Value)
                    $lines += ''
                }
            }
            else {
                $lines += 'No startup items found.'
                $lines += ''
            }
        }
    }
    else {
        $lines += 'Path not found.'
        $lines += ''
    }
}


$lines += 'Startup folder entries:'
$lines += ''


foreach ($folder in $startupFolders) {
    $lines += ('Folder: ' + $folder)
    if (Test-Path $folder) {
        $files = Get-ChildItem -Path $folder -Force -ErrorAction SilentlyContinue
        if ($files.Count -gt 0) {
            foreach ($file in $files) {
                $lines += ('Item: ' + $file.Name)
                $lines += ('Path: ' + $file.FullName)
                $lines += ''
            }
        }
        else {
            $lines += 'No startup items found.'
            $lines += ''
        }
    }
    else {
        $lines += 'Folder not found.'
        $lines += ''
    }
}


$lines += 'Suggested review questions:'
$lines += '- Do you recognize this startup item?'
$lines += '- Is it essential every time the PC starts?'
$lines += '- Is it printer, security, sound, or system related?'
$lines += '- If unsure, leave it enabled for now.'


$lines | Out-File -FilePath $reportPath -Encoding UTF8
Write-Host 'Review complete. Report saved to:' $reportPath


What the report is for
Use the report to:
- spot obvious non-essential startup clutter
- discuss whether an item is still needed
- decide whether startup items need a manual review in Task Manager


Important
Do not disable items from the report alone.
If an item looks security-related, printer-related, sound-related, system-related, or unfamiliar, leave it alone unless you are sure.


If PowerShell blocks the script, open PowerShell and run:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Then run the script again for that session only.


Rule
Review first.
Disable later only if clearly safe.