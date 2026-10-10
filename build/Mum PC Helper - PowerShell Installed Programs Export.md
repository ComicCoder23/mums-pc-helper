MUM PC HELPER — POWERSHELL INSTALLED PROGRAMS EXPORT


Purpose
This script creates a review list of installed programs so you can discuss what is still needed before uninstalling anything.
It does not remove software.


What it does
- reads common Windows uninstall registry locations
- collects installed program names, versions, publishers, and uninstall strings where available
- sorts the list by program name
- writes a simple report to the Desktop


Safety rules
- no uninstalling
- no registry edits
- no silent removals
- report only


How to run it
1. Open Notepad
2. Paste the script below
3. Save it as:
   InstalledProgramsExport.ps1
4. Right-click and run with PowerShell
   or run it manually from PowerShell
5. Look for the report on the Desktop:
   installed-programs-review.txt


Script


$desktop = [Environment]::GetFolderPath('Desktop')
$reportPath = Join-Path $desktop 'installed-programs-review.txt'


$registryPaths = @(
    'HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*',
    'HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*',
    'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*'
)


$programs = foreach ($path in $registryPaths) {
    Get-ItemProperty $path -ErrorAction SilentlyContinue |
        Where-Object { $_.DisplayName } |
        Select-Object \
            @{Name='Name';Expression={$_.DisplayName}},
            @{Name='Version';Expression={$_.DisplayVersion}},
            @{Name='Publisher';Expression={$_.Publisher}},
            @{Name='Uninstall';Expression={$_.UninstallString}}
}


$programs = $programs | Sort-Object Name -Unique


$lines = @()
$lines += 'INSTALLED PROGRAMS REVIEW'
$lines += ''
$lines += ('Run date: ' + (Get-Date))
$lines += ('Total programs found: ' + $programs.Count)
$lines += ''


foreach ($program in $programs) {
    $lines += ('Name: ' + $program.Name)
    $lines += ('Version: ' + ($program.Version -as [string]))
    $lines += ('Publisher: ' + ($program.Publisher -as [string]))
    $lines += ('Uninstall: ' + ($program.Uninstall -as [string]))
    $lines += ''
}


$lines += 'Suggested review questions:'
$lines += '- Do you still use this?'
$lines += '- Do you know what this is?'
$lines += '- Was this installed with something else?'
$lines += '- Is this printer, browser, security, or Windows related?'
$lines += '- If unsure, leave it alone for now.'


$lines | Out-File -FilePath $reportPath -Encoding UTF8
Write-Host 'Export complete. Report saved to:' $reportPath


What the report is for
Use the report to:
- spot obviously unused programs
- find duplicate or outdated software
- discuss unknown items before uninstalling anything
- keep a record of what was installed before making changes


Important
Do not uninstall based on the report alone.
Review with Mum first.
If the app looks system-related, security-related, printer-related, or unfamiliar, leave it unless you are sure.


If PowerShell blocks the script, open PowerShell and run:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Then run the script again for that session only.


Rule
Export first.
Discuss second.
Uninstall last.