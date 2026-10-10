MUM PC HELPER — RENAME AND PACKAGING ACTION SHEET


Purpose
This is the exact manual action sheet for the final PC Helper v1 tidy-up and packaging pass from your own machine.


MAIN RULE
Do not create new versions during this pass.
Rename, sort, and package only.


STEP 1 — RENAME THE CUSTOMER-FACING DOCS
Rename these visible Google Drive titles to the final PC Helper names.


Rename map:
- Mum PC Helper Pack — Start Here
  -> Mum PC Helper - Start Here


- Mum Mum PC Helper - Quick Run Card
  -> Mum PC Helper - Quick Run Card


- Mum Mum PC Helper - Visit Workflow One Pager
  -> Mum PC Helper - Visit Workflow One Pager


- Mum Mum PC Helper - Action Decision Tree
  -> Mum PC Helper - Action Decision Tree


- Mum Mum PC Helper - User Guide Draft
  -> Mum PC Helper - User Guide


Keep as already correct:
- Mum PC Helper - Safety Notes
- PC Helper - V1 Release Checklist
- PC Helper - Final V1 Product Folder Spec
- PC Helper - Tool Stack Spec
- PC Helper - Release Manifest


STEP 2 — CREATE THE FINAL PRODUCT FOLDER
Create this exact folder structure on your machine or in Drive:


Mum PC Helper v1/
- 01 Start Here/
- 02 Quick Guides/
- 03 User Guide/
- 04 Scripts/
- 05 Script Notes/


STEP 3 — PLACE ONLY THE PRODUCT FILES INSIDE
Put only these customer-facing docs into the product folder:


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


Optional root file:
- Version.txt


STEP 4 — DO NOT PUT THESE IN THE PRODUCT FOLDER
These stay out of the release pack:
- Session Notes
- Safe Tools List
- Safe Scripts Plan
- Results Interpretation Guide
- Run Order for Scripts
- Browser Triage Guide
- First Visit Checklist
- Cleanup Order
- What To Ask the User / old Mum version
- Master Index
- Canonical Product Structure
- V1 Product Pack Definition
- V1 Release Checklist
- Final V1 Product Folder Spec
- Tool Stack Spec
- Release Manifest
- this Rename and Packaging Action Sheet


STEP 5 — BUILD FOLDER
Make a separate build folder:


Mum PC Helper Build/


Move the internal docs there.
These remain useful, but not customer-facing.


STEP 6 — ARCHIVE FOLDER
Make a separate archive folder:


Mum PC Helper Archive/


Move into Archive:
- old Mum-named leftovers once renamed copies exist
- duplicate process docs no longer needed live
- superseded planning variants


STEP 7 — GITHUB PASS
In GitHub, create the canonical script home.
Recommended structure:


Mum-PC-Helper/
- scripts/
  - DiskSpaceAudit.ps1
  - DownloadsAudit.ps1
  - InstalledProgramsExport.ps1
  - StartupItemsReview.ps1
  - LargeFilesFinder.ps1
- docs/
  - README.md
  - Safety-Notes.txt


GitHub role:
- canonical script truth
- versioning
- future release source


STEP 8 — DRIVE ROLE
Google Drive should hold:
- polished product docs
- downloadable product pack
- easy access copies


Drive should not be the canonical code source.


STEP 9 — FINAL CHECK BEFORE CALLING IT V1
Confirm:
- file names all say PC Helper
- product folder contains only customer-facing files
- scripts are real .ps1 files
- no internal notes are in the release pack
- the pack is small and understandable


STEP 10 — FREEZE V1
Once the pack is sorted:
- stop widening scope
- do not add more planning docs
- treat new ideas as v1.1 or later


FAST WIN CONDITION
A clean v1 is done when:
- the naming is consistent
- the pack is tidy
- the scripts are real
- GitHub holds the canonical script source
- Drive holds the customer-facing pack


FINAL RULE
Tidy first.
Ship second.
Do not reopen sprawl.