MUM PC HELPER — FINAL V1 PRODUCT FOLDER SPEC


Purpose
This document defines the exact release shape for PC Helper v1.
It is the packaging spec for the final downloadable folder.


MAIN RULE
The v1 product folder should contain only customer-facing files.
No internal build notes.
No archive material.
No duplicate guidance.


FINAL V1 FOLDER
Mum PC Helper v1/


01 Start Here/
- Mum PC Helper - Start Here


02 Quick Guides/
- Mum PC Helper - Quick Run Card
- Mum PC Helper - Visit Workflow One Pager
- Mum PC Helper - Action Decision Tree
- Mum PC Helper - Safety Notes


03 User Guide/
- Mum PC Helper - User Guide


04 Scripts/
- DiskSpaceAudit.ps1
- DownloadsAudit.ps1
- InstalledProgramsExport.ps1
- StartupItemsReview.ps1
- LargeFilesFinder.ps1


05 Script Notes/
- README.md
- Safety-Notes.txt


OPTIONAL ROOT FILE
- Version.txt


WHAT STAYS OUT OF THIS FOLDER
Do not include:
- Session Notes
- Safe Tools List
- Safe Scripts Plan
- Results Interpretation Guide
- Run Order for Scripts
- Browser Triage Guide
- First Visit Checklist
- Cleanup Order
- What To Ask the User
- Master Index
- Canonical Product Structure
- V1 Product Pack Definition
- V1 Release Checklist


Those belong in Build or Archive.


WHY THIS STRUCTURE WORKS
01 Start Here
- gives the user one clear entry point


02 Quick Guides
- holds the fast operational files
- helps the user act quickly without reading everything


03 User Guide
- holds the fuller instructions in one place
- absorbs overlap that does not need to be duplicated elsewhere


04 Scripts
- keeps the real PowerShell assets together
- makes the product feel real and usable


05 Script Notes
- keeps supporting notes close to the scripts without polluting the user guidance


CANONICAL PRODUCT FILE LIST
Customer-facing docs:
- Mum PC Helper - Start Here
- Mum PC Helper - Quick Run Card
- Mum PC Helper - Visit Workflow One Pager
- Mum PC Helper - Action Decision Tree
- Mum PC Helper - User Guide
- Mum PC Helper - Safety Notes


Script assets:
- DiskSpaceAudit.ps1
- DownloadsAudit.ps1
- InstalledProgramsExport.ps1
- StartupItemsReview.ps1
- LargeFilesFinder.ps1
- README.md
- Safety-Notes.txt


MINIMUM V1 STANDARD
Before release, confirm:
- every included file has a clear purpose
- no user-facing doc contradicts another
- all file names are clear and consistent
- scripts are non-destructive by default
- the user can understand where to start immediately


DRIVE / GITHUB / NOTION MAPPING
Google Drive
- product distribution copy
- polished docs
- downloadable bundle


GitHub
- canonical script source
- release folder source
- versioning


Notion
- control logic
- release status
- build/archive classification


NEXT PACKAGING ACTIONS
1. Rename product-facing docs to final PC Helper names.
2. Keep only canonical product docs live in the v1 product folder.
3. Move internal docs to Build.
4. Move redundant docs to Archive.
5. Upload the real script bundle to the product folder and GitHub.
6. Freeze v1 scope.


RULE
If a file does not directly help the end user use PC Helper, it should not be in the v1 product folder.