MUM PC HELPER — RELEASE MANIFEST


Purpose
This is the single release manifest for PC Helper v1.
It states exactly what belongs in the product, what belongs in build, what belongs in archive, and where each asset should live.


MAIN RULE
One file = one role = one canonical home.
No duplicate live truth.


PRODUCT NAME
Canonical product name:
Mum PC Helper


RELEASE TARGET
Release a small, safe, clear Windows support product for any home PC user or helper.


FINAL PRODUCT FILES
These are the only customer-facing files that should be in the v1 product pack.


1. Mum PC Helper - Start Here
Role:
- first file opened
Canonical home:
- Product folder in Drive


2. Mum PC Helper - Quick Run Card
Role:
- fast cheat sheet
Canonical home:
- Product folder in Drive


3. Mum PC Helper - Visit Workflow One Pager
Role:
- compressed field workflow
Canonical home:
- Product folder in Drive


4. Mum PC Helper - Action Decision Tree
Role:
- if-this-then-that decisions
Canonical home:
- Product folder in Drive


5. Mum PC Helper - User Guide
Role:
- fuller instructions
Canonical home:
- Product folder in Drive


6. Mum PC Helper - Safety Notes
Role:
- warnings and limits
Canonical home:
- Product folder in Drive


SCRIPT BUNDLE
Canonical code home:
- GitHub
Distribution home:
- Product folder in Drive


Files:
- DiskSpaceAudit.ps1
- DownloadsAudit.ps1
- InstalledProgramsExport.ps1
- StartupItemsReview.ps1
- LargeFilesFinder.ps1
- README.md
- Safety-Notes.txt


PRODUCT FOLDER SHAPE
Mum PC Helper v1/
- 01 Start Here/
  - Mum PC Helper - Start Here
- 02 Quick Guides/
  - Mum PC Helper - Quick Run Card
  - Mum PC Helper - Visit Workflow One Pager
  - Mum PC Helper - Action Decision Tree
  - Mum PC Helper - Safety Notes
- 03 User Guide/
  - Mum PC Helper - User Guide
- 04 Scripts/
  - DiskSpaceAudit.ps1
  - DownloadsAudit.ps1
  - InstalledProgramsExport.ps1
  - StartupItemsReview.ps1
  - LargeFilesFinder.ps1
- 05 Script Notes/
  - README.md
  - Safety-Notes.txt
- optional Version.txt


BUILD FILES
These are internal and should not be in the customer pack.


Keep in Build:
- Session Notes
- Safe Tools List
- Safe Scripts Plan
- Results Interpretation Guide
- Run Order for Scripts
- Browser Triage Guide
- First Visit Checklist
- Cleanup Order
- What To Ask the User / previous Mum version
- Master Index
- Canonical Product Structure
- V1 Product Pack Definition
- V1 Release Checklist
- Final V1 Product Folder Spec
- Tool Stack Spec
- Release Manifest


ARCHIVE CANDIDATES
Move here after final packaging if superseded or absorbed:
- old Mum PC Helper naming variants
- overlapping process docs once User Guide is final
- script explanation docs once real .ps1 files are canonical
- duplicate launch planning docs no longer needed live


CANONICAL HOME RULES
GitHub
Use for:
- real script source files
- version history
- release source structure
- future changelog and issues


Google Drive
Use for:
- polished customer-facing docs
- downloadable product pack
- easy access distribution copy


Notion
Use for:
- control tower
- release state
- build / product / archive classification
- future roadmap and product decisions


DO NOT USE
- Google Drive as canonical code truth
- Ruby for this product
- extra tools before v1 is stable
- build docs inside the product pack


CURRENT GAPS TO CLOSE
1. Visible file titles in Drive still need a final rename pass to PC Helper naming.
2. Product pack still needs one clean packaging pass from your own machine.
3. Script bundle should be added to GitHub as canonical source.
4. Drive should hold only the final customer-facing docs in the product folder.


FINAL V1 CHECK
Mum PC Helper v1 is ready when:
- the product-facing file list is fixed
- the script bundle is real and accessible
- the naming is consistent
- internal docs are separated out
- the pack is small enough to understand quickly


NEXT ACTIONS
1. Rename final customer-facing docs to PC Helper names.
2. Place only those files in the product folder.
3. Add the real script files to GitHub.
4. Move internal docs to Build.
5. Move redundant docs to Archive.
6. Freeze v1 and stop widening scope.


RULE
If a file does not directly help the end user use PC Helper, it does not belong in the release pack.