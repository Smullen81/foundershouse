# FoundrMatch.AI Backlog (Condensed)
> Version 1.0 • Updated: 2025-10-30  
> Privacy-first AI Chief of Staff helping nontechnical founders find secure, compatible technical cofounders.

---

## 🧩 Epic 1: Founder Onboarding & Identity Setup  
**Sprint:** 1 **Theme:** Privacy First, Structure Always  

### User Story 1.1 — Secure Signup & Workspace
- As a **founder**, I want to sign up and generate an encrypted workspace key so my data stays private.  
- **Acceptance:** OAuth works; ZeroDB keypair generated; test doc encrypted/decrypted.

### User Story 1.2 — Startup Profile Creation  
- As a **founder**, I want to describe my startup safely so the AI can understand my mission.  
- **Acceptance:** Startup brief saved in ZeroDB; AI redacts sensitive info.

### User Story 1.3 — Define Role Needs  
- As a **founder**, I want to define technical roles so AI can start matching.  
- **Acceptance:** RoleNeed JSON created; Monday.com board auto-generated.

---

## ⚙️ Epic 2: AI Matching & Candidate Discovery  
**Sprint:** 2–3 **Theme:** Capture Intent, Structure Data  

### User Story 2.1 — AI Intake Conversation  
- As a **founder**, I want to describe my needs via chat so the AI structures them into a RoleNeed.  
- **Acceptance:** Intake chat saves conversation; JSON validated; confirmation step shown.

### User Story 2.2 — Candidate Sourcing  
- As a **founder**, I want AI to fetch and list technical cofounders from GitHub and Discord.  
- **Acceptance:** Candidate metadata imported; stored encrypted; visible in dashboard.

### User Story 2.3 — Match Scoring  
- As a **founder**, I want each candidate scored for fit so I can prioritize outreach.  
- **Acceptance:** Weighted MatchScore computed; reasoning shown; data encrypted.

---

## 🤝 Epic 3: Collaboration & Evaluation  
**Sprint:** 4–5 **Theme:** From Match to Commitment  

### User Story 3.1 — Meeting Scheduling & Transcripts  
- As a **founder**, I want to auto-schedule Zoom meetings and save transcripts.  
- **Acceptance:** Zoom/Outlook sync works; Otter.ai transcript summarized; task list auto-generated.

### User Story 3.2 — Candidate Evaluation  
- As a **founder**, I want a fair rubric to evaluate collaboration fit.  
- **Acceptance:** Rubric scoring enabled; feedback saved encrypted; visible in dashboard.

### User Story 3.3 — Offer & Agreement Flow  
- As a **founder**, I want to generate offers with Stripe payment and secure signing.  
- **Acceptance:** Offer templates editable; Stripe Connect works; signed PDF stored in ZeroDB.

---

## 📊 Epic 4: Analytics & Ethics  
**Sprint:** 6 **Theme:** Measure, Govern, and Grow  

### User Story 4.1 — Ethics Dashboard  
- As a **founder**, I want to view AI bias and transparency metrics.  
- **Acceptance:** EthicsAgent runs audits; bias score shown; audit logs saved.

### User Story 4.2 — Analytics Overview  
- As a **founder**, I want to track my candidate pipeline performance.  
- **Acceptance:** KPIs rendered; aggregated data only; export as CSV/JSON.

### User Story 4.3 — Beta Launch  
- As a **team**, I want to finalize docs and run a pilot before public launch.  
- **Acceptance:** 3 founders + 10 candidates tested; no security errors; system checklist passed.

---

### ✅ Summary
| Sprint | Focus | Core Deliverables |
|:------:|:-------|:------------------|
| 1 | Security & Auth | ZeroDB setup, OAuth, Workspace creation |
| 2–3 | AI Intake & Matching | RoleNeed chat, sourcing, scoring engine |
| 4–5 | Collaboration & Offers | Meetings, evaluation, Stripe offers |
| 6 | Ethics & Launch | Bias dashboard, analytics, pilot test |

---
