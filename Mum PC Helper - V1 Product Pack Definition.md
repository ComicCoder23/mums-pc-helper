MUM MUM PC HELPER — V1 PRODUCT PACK DEFINITION


Purpose
This document defines the first real downloadable version of Mum PC Helper.
It separates the product from the internal build material.


MAIN RULE
The customer should receive a small, clear pack.
Not a pile of internal process docs.


V1 PRODUCT GOAL
A simple support product that can be downloaded and used safely on a Windows PC to:
- understand the main problem
- run a few safe audits
- take the clearest low-risk cleanup steps
- avoid breaking anything important


V1 PRODUCT AUDIENCE
Primary audience:
- a non-technical home user or helper
- a cautious home user
- someone trying to safely improve a slow or cluttered Windows PC


V1 PRODUCT POSITIONING
Mum PC Helper is a safe first-pass PC support kit.
It is not a deep repair suite.
It is not an aggressive cleanup tool.
It is a guided helper product.


FINAL V1 PRODUCT CONTENTS


1. START HERE
Role:
- first file opened by the user
- short explanation of what the product is
- what it can and cannot do
- the safest way to begin


2. QUICK RUN CARD
Role:
- the shortest operational cheat sheet
- what to open first
- what to run first
- what not to touch


3. VISIT WORKFLOW ONE PAGER
Role:
- compressed field workflow
- opening questions
- default script path
- stop rules
- win condition


4. ACTION DECISION TREE
Role:
- if-this-then-that guide
- helps a tired or rushed user choose the right path fast


5. USER GUIDE
Role:
- simple fuller instructions for the product
- combines the most important user-facing guidance from the pack
- should absorb overlap from smaller docs where possible


6. SCRIPT BUNDLE
Role:
- actual .ps1 files
- clean names
- ready to run


Recommended script files:
- DiskSpaceAudit.ps1
- DownloadsAudit.ps1
- InstalledProgramsExport.ps1
- StartupItemsReview.ps1
- LargeFilesFinder.ps1


7. SAFETY NOTES
Role:
- short warnings only
- no system folders
- no blind uninstalling
- no deleting unknown files
- if unsure, leave it alone


WHAT STAYS OUT OF THE V1 PRODUCT
These remain BUILD docs, not customer-facing product files:
- Session Notes
- Safe Tools List
- Safe Scripts Plan
- Results Interpretation Guide
- Run Order for Scripts
- Browser Triage Guide
- First Visit Checklist
- Cleanup Order
- What To Ask Mum
- Master Index
- Canonical Product Structure


WHY
These are valuable internally, but too much for a clean customer-facing pack.


MERGE PLAN
To reduce sprawl, some content should be absorbed into fewer product files:


Merge into USER GUIDE:
- parts of First Visit Checklist
- parts of Cleanup Order
- parts of What To Ask Mum
- parts of Results Interpretation Guide
- parts of Browser Triage Guide


Keep separate as lightweight product files:
- Start Here
- Quick Run Card
- Visit Workflow One Pager
- Action Decision Tree
- Safety Notes


V1 PRODUCT FOLDER STRUCTURE
Mum Mum PC Helper v1/
- 00 Start Here
- 01 Quick Run Card
- 02 Visit Workflow One Pager
- 03 Action Decision Tree
- 04 User Guide
- 05 Script Bundle
- 06 Safety Notes


BUILD FOLDER STRUCTURE
Mum Mum PC Helper Build/
- planning docs
- support docs
- internal notes
- script source drafts
- archive staging


ARCHIVE FOLDER STRUCTURE
Mum Mum PC Helper Archive/
- superseded docs
- merged docs
- duplicates
- retired experiments


GITHUB ROLE IN V1
GitHub should become the canonical home for:
- real .ps1 script files
- README / product notes
- version history
- packaging structure


Google Drive should hold:
- downloadable product pack
- polished docs
- easy access copies


Notion should hold:
- control logic
- classification
- release decisions
- roadmap


V1 RELEASE STANDARD
Before calling it v1, it should meet this minimum:
- clear Start Here
- no obvious duplicate docs in product pack
- real script files, not just script docs
- user-facing pack small enough to understand quickly
- internal docs separated out


NEXT ACTIONS
1. Freeze new random doc creation.
2. Decide final V1 product files.
3. Merge overlapping docs into a User Guide draft.
4. Convert script docs into real .ps1 files in GitHub.
5. Create one clean downloadable V1 folder.
6. Move non-product docs to Build or Archive.


OUTCOME
Mum PC Helper becomes a real product package rather than a growing stack of internal working notes.