PC HELPER — V1 RELEASE CHECKLIST


Purpose
This is the release gate for PC Helper v1.
Use it to finish packaging, reduce sprawl, and move from build state to a clean downloadable product.


RELEASE GOAL
Create one small, clear PC Helper v1 product pack for any Windows PC user.


V1 PRODUCT CONTENTS CHECK
Confirm these are the final customer-facing files:
- Start Here
- Quick Run Card
- Visit Workflow One Pager
- Action Decision Tree
- User Guide
- Safety Notes
- Script Bundle


If any extra doc is not essential to the user,
it stays in Build, not Product.


SCRIPT BUNDLE CHECK
Confirm these real script files exist:
- DiskSpaceAudit.ps1
- DownloadsAudit.ps1
- InstalledProgramsExport.ps1
- StartupItemsReview.ps1
- LargeFilesFinder.ps1


Confirm these support files exist:
- README.md
- Safety-Notes.txt


NAMING CHECK
Before release:
- remove Mum-specific product wording from customer-facing docs
- keep one canonical product name
- keep file names clean and understandable


Suggested product name:
PC Helper


PACKAGING CHECK
Before release:
- product-facing docs grouped together
- scripts grouped together
- no internal build docs in the user pack
- no duplicate guides in the user pack
- no conflicting instructions


BUILD / PRODUCT / ARCHIVE CHECK
BUILD should contain:
- internal notes
- planning docs
- interpretation guides
- support docs
- draft assets


PRODUCT should contain:
- only the customer-facing pack


ARCHIVE should contain:
- merged docs
- retired drafts
- superseded variants


QUALITY CHECK
Confirm:
- product is understandable by a cautious home user or helper
- scripts are audit-first and non-destructive
- instructions are consistent
- safety warnings are clear
- no step assumes technical expertise unnecessarily


DRIVE TIDY CHECK
Before calling it v1:
- product docs identified
- build docs identified
- archive candidates identified
- no more random loose product docs created


GITHUB CHECK
Before release:
- scripts added to GitHub as canonical source
- versioned folder structure prepared
- product README ready


OPTIONAL V1.1 IDEAS
Do not block v1 for these:
- browser helper script
- malware triage enhancements
- printable PDF version
- one-click launcher
- branding polish


RELEASE DECISION
PC Helper v1 is ready when:
- the user-facing pack is small and clear
- the scripts are real files
- the internal docs are separated out
- the naming is consistent
- the pack can be downloaded and used without confusion


NEXT ACTIONS
1. Finalize the canonical product name.
2. Finalize the user-facing file list.
3. Move non-product docs to Build.
4. Add scripts to GitHub as canonical source.
5. Create the final v1 product folder.
6. Archive redundant docs.


RULE
Release the smallest useful safe version first.
Do not keep widening v1.