MUM PC HELPER — RUN ORDER FOR SCRIPTS


Purpose
This is the safe run order for the Mum PC Helper scripts.
Follow this order so you gather information first, make sense of it second, and only then decide whether any manual cleanup is needed.


Golden rule
Audit first.
Review second.
Clean manually third.
Do not jump straight into deleting or disabling things.


Run order


1. PowerShell Disk Space Audit
Use first.
Why:
- tells you which drive is tight on space
- shows which user folders are largest
- helps you decide whether Downloads, Desktop, Pictures, or Videos needs attention first


After running it, ask:
- Is disk space actually low?
- Which user folder looks biggest?
- Is there an obvious target area for cleanup?


2. PowerShell Downloads Folder Audit
Use second if Downloads might be part of the problem.
Why:
- often gives the fastest easy cleanup win
- shows big files, old files, installers, and archives


After running it, ask:
- Are there obvious old installers?
- Are there zip files that are no longer needed?
- Are there large unknown files that need reviewed with Mum?


3. PowerShell Installed Programs Export
Use third if the PC is cluttered, confusing, or still slow after simple file cleanup.
Why:
- helps review unused apps safely before uninstalling anything
- gives you a record before making changes


After running it, ask:
- Which apps are clearly still used?
- Which apps are unknown?
- Which apps might be old or unnecessary?
- Is anything printer, browser, security, or Windows related and best left alone?


4. PowerShell Startup Items Review
Use fourth if startup is slow.
Why:
- identifies obvious startup clutter
- helps decide whether Task Manager startup review is worth doing


After running it, ask:
- Are there obvious non-essential startup items?
- Are there duplicate updaters or helper apps?
- Is anything unclear and better left enabled for now?


Decision points


Stop and clean manually after Script 1 and Script 2 if:
- the problem is clearly just file clutter
- Downloads is full of obvious junk
- Desktop is cluttered and easy to tidy
- free space is the main issue


Continue to Script 3 and Script 4 if:
- the PC still feels slow after simple cleanup
- startup is still sluggish
- there are too many unknown installed apps
- you need more visibility before touching programs


When to stop completely
Stop and leave things alone if:
- you are unsure what a file or program is
- the item looks system-related
- the item looks security-related
- the item looks printer-related and Mum needs the printer
- the report gives no obvious safe action


Manual cleanup after the scripts
Once the reports are done, use this order:
1. Clear obvious junk from Downloads
2. Tidy Desktop clutter
3. Empty Recycle Bin
4. Review Documents only if needed
5. Review Pictures/Videos only if needed
6. Review installed apps carefully
7. Review startup items carefully in Task Manager


What success looks like
- more free space
- less clutter
- clearer understanding of what is on the PC
- no accidental deletion of important items
- a clean session note for next time


Session logging
Always update:
Mum PC Helper - Session Notes
with:
- what scripts were run
- what the reports showed
- what was changed
- what was deliberately left alone


Fast default path
For most visits, this is the simplest safe path:
1. Disk Space Audit
2. Downloads Folder Audit
3. Manual cleanup of Downloads and Desktop
4. Recheck free space
5. Only then decide whether Programs Export or Startup Review is needed


Rule
The scripts are there to reduce guessing.
They are not there to automate risky cleanup.