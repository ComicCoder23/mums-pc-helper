MUM PC HELPER — TOOL STACK SPEC


Purpose
This document defines the best tool stack for building, packaging, organising, and eventually launching Mum PC Helper as a real product.


Main rule
Use the smallest stack that keeps the product tidy, buildable, and launchable.
Do not add tools just because they exist.


CORE SYSTEM ROLES


GitHub
Role:
- canonical build lane
- real script source files
- version control
- release packaging source


Google Drive
Role:
- customer-facing docs
- product distribution copy
- downloadable bundle storage


Notion
Role:
- control tower
- decisions
- classification
- release status
- build / product / archive logic


NOW / NEXT / LATER STACK


NOW — USE IMMEDIATELY


1. ChatGPT
Use for:
- product structure
- workflow logic
- packaging decisions
- documentation drafting
- script shaping


Why now:
- already in use
- fastest decision and writing engine
- strong for product architecture


2. GitHub
Use for:
- canonical .ps1 files
- versioned Mum PC Helper source
- release folder source
- future issues and changelog


Why now:
- already part of your system law
- proper canonical build home
- needed to stop Drive becoming the build lane


3. Google Drive
Use for:
- polished customer docs
- downloadable product assets
- easy cross-device access


Why now:
- already connected
- good for distribution and quick access
- useful as customer-facing storage, not canonical build truth


4. Notion
Use for:
- decision brain
- release tracking
- tidy classification
- build / product / archive control


Why now:
- already part of your logic
- prevents duplicate systems
- good for keeping the release clean


5. PowerShell
Use for:
- Windows-first script assets
- audit-first automation
- safe local diagnostics


Why now:
- native to Windows
- best fit for this product
- no extra environment required for end users


NEXT — HIGH VALUE SOON


6. GitHub Copilot or Cursor
Use for:
- faster script refinement
- packaging file edits
- README improvement
- future UI or launcher work


Why next:
- strong speed boost once the product shape is fixed
- especially useful when editing the canonical script files in GitHub


Recommendation:
- GitHub Copilot for simple, integrated value
- Cursor if you want a more AI-native IDE workflow


7. Claude
Use for:
- second-pass script review
- clearer long-form instruction polishing
- product language refinement
- deeper quality pass on docs


Why next:
- useful as a quality layer beside ChatGPT
- especially good for longer docs and code review


8. Perplexity
Use for:
- fast fact-checking
- safe Windows workflow verification
- up-to-date research on support product competitors or positioning


Why next:
- useful for confidence and source-backed checking
- not required for every build step


LATER — ONLY IF PRODUCT GROWS


9. n8n or Zapier
Use for:
- onboarding flows
- support request routing
- delivery automation
- email or download workflows


Why later:
- useful after product packaging is stable
- not needed for v1 file-based release


Recommendation:
- Zapier if you want the easiest no-code route
- n8n if you want more control and technical flexibility


10. Composio / Rube
Use for:
- agent-driven tool routing
- deeper automation chains
- future AI support workflows


Why later:
- powerful but unnecessary for v1
- only worthwhile if Mum PC Helper becomes a larger ecosystem product


11. Gemini / NotebookLM / Notion AI
Use for:
- workspace-heavy summarisation
- research and internal knowledge work
- broader product and support documentation systems


Why later:
- useful extensions, not core blockers
- nice-to-have once the product has momentum


RECOMMENDED STACK FOR PC HELPER V1


Build lane
- GitHub
- PowerShell
- ChatGPT
- optionally GitHub Copilot or Cursor


Product lane
- Google Drive
- customer-facing docs
- downloadable ZIP bundle


Control lane
- Notion
- release checklist
- product classification
- version decisions


Quality lane
- ChatGPT
- Claude later for review
- Perplexity later for fact checking


ANTI-SPRAWL RULES
- GitHub is the canonical source for scripts
- Google Drive is distribution, not build truth
- Notion is control, not product delivery
- do not let the same function live in two places without a reason
- do not add automation tools before the product pack is stable


WHAT TO AVOID
- Ruby for this project
- building from the wrong machine
- using Google Drive as the canonical code home
- adding lots of automation before v1 is clean
- letting build docs leak into the customer pack


BEST TOOL DECISION RIGHT NOW
If you want the strongest practical stack immediately, use:
- ChatGPT
- GitHub
- Google Drive
- Notion
- PowerShell


If you want the strongest next upgrade, add:
- GitHub Copilot or Cursor
- Claude


FINAL RULE
The best tool stack is the one that makes Mum PC Helper easier to ship, easier to maintain, and harder to mess up.