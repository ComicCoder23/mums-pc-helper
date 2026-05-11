MUM PC HELPER — SAFE SCRIPTS PLAN


Purpose
These scripts should help visibility and reporting first.
They should not start by deleting things.


Rule
Audit first.
Move second.
Delete last.


Best script order
1. Disk space audit
2. Large files finder
3. Downloads folder audit
4. Installed programs export
5. Startup apps review helper


Script 1 — Disk space audit
Goal:
- report free space
- show large user folders
- help decide where to look first


Script 2 — Large files finder
Goal:
- list large files in user folders
- avoid Windows system folders
- help find obvious space hogs


Script 3 — Downloads folder audit
Goal:
- list likely junk in Downloads
- installers
- zip files
- duplicate-looking files
- very old downloads


Script 4 — Installed programs export
Goal:
- create a simple review list of installed apps
- support safe discussion before uninstalling anything


Script 5 — Startup apps review helper
Goal:
- produce a list of startup items for review
- do not disable automatically


What the scripts must not do
- no automatic deletion
- no automatic uninstalling
- no registry editing
- no system-folder cleanup
- no silent changes without review


Best language for this job
Use PowerShell, not Ruby.
Reason:
- built into Windows
- better for file system auditing
- easier for installed apps and startup checks
- no extra setup needed on Mum’s PC


Output rule
Every script should produce:
- a readable report
- clear file names
- no destructive action by default


Recommended output names
- disk-space-audit.txt
- large-files-report.txt
- downloads-audit.txt
- installed-programs-review.txt
- startup-items-review.txt


Decision rule
Only build a script when the manual process shows a repeated need.
Do not script for the sake of scripting.


Current conclusion
Start with:
- disk space audit
- downloads audit
These are the highest-value and safest first scripts.