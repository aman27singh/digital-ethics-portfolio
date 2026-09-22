const cases = {
  genai: {
    kicker: 'Case study 01 / CIA 3 Component 2 Group Portfolio',
    title: 'Generative AI Digital Ethics Portfolio',
    lede: 'A 2-member group digital ethics portfolio examining synthetic reality, deepfakes, authorship, AI in warfare, tacit collusion, Khanmigo auditing, and global AI governance.',
    tags: ['Aman & Anushka', 'CIA 3 Component 2', 'Unit 5', 'Generative AI', 'Group Portfolio'],
    original: 'originals/digital-ethics-portfolio-report.pdf',
    contextTitle: 'Truth, creativity, and the global ethical order',
    context: 'Developed for Unit 5 of Responsible AI (5BTCS B) by Aman (2460324) and Anushka Tater (2460336). The portfolio synthesizes creative artifacts (posters, infographics, responsible AI guidelines, awareness material) and critical ethical evaluations of Generative AI technologies across media, governance, autonomous weapons, and educational tools.',
    questionTitle: 'How can Generative AI be deployed responsibly without eroding epistemic truth, human agency, or global North–South equity?',
    question: 'Generative AI tools accelerate content creation, but also introduce synthetic reality, deepfakes, copyright ambiguity, and algorithmic bias. The challenge is establishing governance frameworks that enforce truth verification, fair attribution, and equal participation across global communities.',
    findings: [
      ['Synthetic Reality & Truth', 'Deepfakes and generated media destabilize public trust and require robust provenance labels, digital watermarking, and verification protocols.'],
      ['Authorship & Creative Labor', 'AI-generated content raises urgent questions regarding copyright, fair training data compensation, and protecting creative livelihoods.'],
      ['High-Stakes Automation', 'Defense loitering munitions (Kargu-2) and tacit collusion algorithms demonstrate critical risks when AI operates without meaningful human oversight.'],
      ['Global Ethics & Pluralism', 'AI governance must account for cultural pluralism and overcome Global North–South asymmetries in compute power, dataset representation, and rule-making.']
    ],
    recommendationTitle: 'Label, verify, audit, and share governance power.',
    recommendation: 'Implement provenance labels, consent-based training datasets, mandatory human authorization for high-stakes decisions, independent privacy/bias audits, and inclusive global governance frameworks.'
  },
  khanacademy: {
    kicker: 'Case study 02 / Responsible Data Audit & AI Evaluation',
    title: 'Khan Academy Data Audit & AI Evaluation',
    lede: 'An ethical audit of Khan Academy’s privacy practices, bundled consent, and a critical evaluation of Generative AI responses against live policies.',
    tags: ['Anushka Tater', 'CIA 1', 'EdTech AI', 'Privacy Audit', 'Khanmigo'],
    original: 'originals/responsible-data-audit-report.pdf',
    contextTitle: 'EdTech privacy & AI tutor transparency',
    context: 'Conducted by Anushka Tater (2460336). Audited Khan Academy, Khan Academy Kids, and the Khanmigo AI tutor. Tested 5 Generative AI prompts (ChatGPT, Gemini, Copilot) against Khan Academy’s live Privacy Policy and Children’s Privacy Notice to evaluate AI auditing accuracy and hallucinations.',
    questionTitle: 'How does bundled consent affect minor student privacy, and how reliable is Generative AI when auditing privacy policies?',
    question: 'While Khan Academy pledges not to sell data, single click-wrap signup bundles all data processing together. Furthermore, Khanmigo AI chat logs are accessible to teachers and parents—creating a tension between student psychological safety and adult oversight.',
    findings: [
      ['Bundled Consent Model', 'Signup requires an all-or-nothing agreement. While cookie preferences offer some granularity, core account data collection lacks itemized consent.'],
      ['AI Tutor Privacy Tension', 'Khanmigo chat log visibility to parents/teachers provides safety oversight but may discourage students from asking sensitive questions.'],
      ['Digital Inequality', 'Free access does not eliminate the digital divide; device access, broadband quality, and personalization algorithms favor frequent users.'],
      ['Generative AI Audit Hallucinations', 'AI tools correctly identified basic data types and child privacy rules, but hallucinated false claims about targeted ad sales and commercial dark patterns.']
    ],
    recommendationTitle: 'Layer consent, protect student trust, and verify AI outputs.',
    recommendation: 'Implement granular consent controls, plain-language privacy notices for minors, independent audit mechanisms for AI chat logs, and require human verification whenever Generative AI is used for policy auditing.'
  },
  collusion: {
    kicker: 'Case study 03 / Ethical AI Model Design',
    title: 'The Cartel That Never Spoke: Tacit Collusion Detection',
    lede: 'An ethical AI model design for detecting tacit algorithmic price coordination in housing and commercial markets.',
    tags: ['Anushka Tater', 'Ethical AI Design', 'Algorithmic Collusion', 'Market Governance'],
    original: 'originals/ethical-ai-model-design-challenge.pdf',
    contextTitle: 'Algorithmic collusion without human agreement',
    context: 'Designed by Anushka Tater (2460336). Examines how commercial AI pricing software in rental housing and retail can independently learn to coordinate high prices across competing firms without any direct human communication.',
    questionTitle: 'How can regulatory systems detect and mitigate price fixing when algorithms coordinate without human agreement?',
    question: 'Traditional antitrust laws rely on proving explicit communication between competitors. When AI pricing algorithms independently converge on elevated prices, an accountability vacuum emerges between software providers and business operators.',
    findings: [
      ['Accountability Vacuum', 'Landlords claim they only followed algorithmic suggestions, while software vendors claim they only supplied technology—leaving consumers with higher prices and no liable party.'],
      ['Tacit Collusion Index (TCI)', 'Proposed a real-time risk metric calculated from pricing timestamps, pre-AI historical baselines, competitor density, and algorithmic convergence metrics.'],
      ['Core Ethical Principles', 'Grounded in Fairness (consumer protection), Privacy (market-level data only), Transparency (disclosing AI pricing use), and Safety (preventing false alerts).'],
      ['Mitigation Framework', 'Mandates outcome-based algorithmic pricing audits before and after deployment, triggering compulsory model retraining if collusive patterns emerge.']
    ],
    recommendationTitle: 'Enforce pre-deployment testing and regulatory outcome monitoring.',
    recommendation: 'Require commercial pricing software to undergo pre-deployment collusion testing, mandate clear disclosure when AI influences prices, and empower regulators with Tacit Collusion Index monitoring dashboards.'
  },
  dutchbenefits: {
    kicker: 'Case study 04 / AI Ethics Canvas',
    title: 'Dutch Childcare Benefits Scandal (Toeslagenaffaire)',
    lede: 'An AI Ethics Canvas analysis of the Dutch Tax Authority’s automated fraud detection algorithm that falsely accused 26,000 families.',
    tags: ['Anushka Tater', 'AI Ethics Canvas', 'Algorithmic Bias', 'Public Sector AI'],
    original: 'originals/ai-ethics-canvas.png',
    contextTitle: 'Automated fraud risk scoring with discriminatory inputs',
    context: 'Analyzed by Anushka Tater (2460336). From 2013 to 2019, the Dutch Tax Authority (Belastingdienst) used a self-learning algorithm to flag childcare benefit applications as fraudulent, using dual nationality and ethnicity as risk-scoring variables.',
    questionTitle: 'What happens when protected demographic variables are embedded in automated risk scoring without due process?',
    question: 'Roughly 26,000 families were falsely accused, ordered to repay benefits in full without proportionality checks, and pushed into financial ruin. Minor paperwork errors were treated identically to intentional fraud, causing over 1,600 children to be removed from their homes.',
    findings: [
      ['Discriminatory Inputs', 'Nationality and ethnicity were used directly in risk scoring, violating Dutch and EU non-discrimination laws.'],
      ['Absence of Human Review', 'Automated flags triggered immediate, full clawbacks of benefits with no human review or meaningful appeals mechanism.'],
      ['Institutional Breakdown', 'Caseworkers were pressured to enforce system flags without discretion; the scandal ultimately led to the resignation of the entire Dutch Cabinet in January 2021.'],
      ['Regulatory Fine', 'The Dutch Data Protection Authority (Autoriteit Persoonsgegevens) investigated and fined the tax authority €3.7M for unlawful data processing.']
    ],
    recommendationTitle: 'Ban protected demographic inputs and guarantee human proportionality checks.',
    recommendation: 'Legally prohibit protected characteristics (nationality, ethnicity) in risk models, mandate human due-process review before financial penalties, require independent algorithmic audits, and establish fast, accessible appeal channels.'
  },
  bankingbot: {
    kicker: 'Case study 05 / Ethical Scenarios Card',
    title: 'AI Chatbot in Banking (Card-5 Note)',
    lede: 'A joint handwritten card-5 analysis mapping moral obligations and ethical principles for conversational AI in financial services.',
    tags: ['Aman & Anushka', 'Joint Work', 'Financial AI', 'Chatbot Ethics'],
    original: 'originals/card-5-handwritten-notes.png',
    contextTitle: 'Morality vs. Ethics in conversational financial AI',
    context: 'Joint work by Anushka Tater (2460336) and Aman (2460324). Evaluates three real-world banking scenarios (Loan Applications, Deposit/Credit Assistance, and Account Opening), contrasting internal moral duties (dignity, reassurance) with external ethical mandates (non-bias, data protection).',
    questionTitle: 'How should financial chatbots balance customer-centric empathy with strict data privacy and non-discriminatory algorithms?',
    question: 'When users interact with banking chatbots for high-stakes financial needs, the AI must avoid biased scoring between economic classes while maintaining data protection and regulatory compliance.',
    findings: [
      ['Scenario 1: Loan Application', 'Morality: Treat applicants with dignity and present options according to user interest. Ethics: Algorithm must be non-biased between rich and poor applicants and maintain complete transparency.'],
      ['Scenario 2: Deposit & Credit', 'Morality: Guide customers accurately and reassure them at every step. Ethics: Protect user financial data and verify account validity continuously.'],
      ['Scenario 3: Account Opening', 'Morality: Interact in a non-judgmental, respectful manner. Ethics: Enforce strict identity verification, compliance, and regulatory rules.']
    ],
    recommendationTitle: 'Combine empathetic UI design with auditable, non-biased algorithmic rules.',
    recommendation: 'Implement non-discriminatory evaluation metrics for financial AI, encrypt all customer data in transit and at rest, and maintain clear human advisor escalation paths for complex banking decisions.'
  },
  palantir: {
    kicker: 'Case study 06 / Ethical Case Analysis',
    title: "Palantir's AI in Military Decision-Making",
    lede: 'A responsible AI analysis of Gotham and AIP: systems that aggregate intelligence, surface threat scores, and guide military actions.',
    tags: ['Aman', 'CIA 1', 'Military AI', 'Human Oversight'],
    original: 'originals/Palantir_AI_Military_Ethics_Report (1).pdf',
    contextTitle: 'From data fusion to targeting decisions',
    context: 'Conducted by Aman (2460324). Examines Palantir Gotham and AIP platforms that combine satellite imagery, signals intelligence, biometrics, and records to construct real-time battlefield threat maps.',
    questionTitle: 'Can an opaque, probabilistic AI participate in lethal decision-making without eroding human accountability?',
    question: 'When an AI system recommends targets under extreme time pressure, human authorization risks becoming a rubber stamp if operators cannot understand or question the underlying algorithmic confidence score.',
    findings: [
      ['Utilitarian vs Deontological', 'Speed claims lack public empirical verification, while system opacity violates non-negotiable duties of distinction under International Humanitarian Law.'],
      ['Rights & Care Deficit', 'Rights to life, due process, and contextual human judgment are placed behind operational speed.'],
      ['Responsible AI Gaps', 'Transparency, explainability, safety, and meaningful human oversight are structurally incomplete in deployed military AI frameworks.']
    ],
    recommendationTitle: 'Responsibility must be architected in before deployment.',
    recommendation: 'Mandate documented human authorization at every lethal step, independent audits of targeting accuracy, embedded IHL constraints, and international legal frameworks for military AI.'
  },
  prescriptions: {
    kicker: 'Case study 07 / Ethical AI Model Design',
    title: 'Rx Sentinel: Fake Prescription Detection',
    lede: 'An ethical AI model design for detecting fake and fraudulent drug prescriptions without automated penalization.',
    tags: ['Aman', 'CIA 1', 'Healthcare AI', 'Human Review'],
    original: 'originals/Ethical_AI_Fake_Prescription_Detection (1).pdf',
    contextTitle: 'Fraud detection with clinical specialty context',
    context: 'Designed by Aman (2460324). Analyzes prescription records, doctor profiles, patient histories, and scanned prescription images to detect forgery, over-prescribing, and pharmacy mismatches.',
    questionTitle: 'How do we prevent a false positive fraud flag from denying critical medication to patients in need?',
    question: 'General fraud models might flag high-dosage pain management or oncology prescriptions as suspicious, creating severe medical harm if automated flags block valid prescriptions.',
    findings: [
      ['Output Architecture', 'System generates risk scores, anomaly maps, and plain-language explanations rather than automated prescription blocks.'],
      ['Specialty Baselines', 'Uses medical specialty context (oncology, palliative care) to distinguish legitimate high-dose care from general practice anomalies.'],
      ['Human-in-the-Loop Safeguard', 'The AI triages suspicious patterns for human pharmacist review; it never denies a prescription autonomously.']
    ],
    recommendationTitle: 'Use AI to focus human attention, not to make final decisions.',
    recommendation: 'Require qualified human review before denying prescriptions, provide doctor/patient appeal channels, anonymize data access, and publish audit error rates.'
  },
  strava: {
    kicker: 'Case study 08 / Responsible Data Audit',
    title: 'Strava Responsible Data Audit',
    lede: 'An audit of how fitness location, biometric, and social data create challenges of consent, surveillance, and digital inequality.',
    tags: ['Aman', 'Unit 2', 'Privacy Audit', 'Data Power'],
    original: 'originals/Strava_Responsible_Data_Audit (2).pdf',
    contextTitle: 'When fitness tracking becomes a surveillance risk',
    context: 'Conducted by Aman (2460324). Audits Strava’s GPS route collection, biometric data, default sharing settings, and Strava Metro urban planning data feeds.',
    questionTitle: 'Can consent be truly informed when route aggregation can reveal sensitive locations and military bases?',
    question: 'Even when individual profiles are private, aggregated activity heatmaps can reveal home locations, daily routines, and restricted military installations (as demonstrated in 2018).',
    findings: [
      ['Re-identification Risks', 'A small number of GPS points can identify individual routines, homes, workplaces, and sensitive sites.'],
      ['Bundled Consent & Dark Patterns', 'Core platform terms are bundled at signup, while critical location privacy controls require manual user discovery.'],
      ['Digital Inequality', 'Device quality, internet access, safe running zones, and paywalled features skew who is represented in Strava Metro municipal planning data.']
    ],
    recommendationTitle: 'Make privacy the default state for location data.',
    recommendation: 'Enforce private-by-default location zones, purpose-specific consent options, plain-language privacy notices, and independent audits for data sampling bias.'
  },
  kargu: {
    kicker: 'Case study 09 / AI Ethics Canvas',
    title: 'Kargu-2 Autonomous Drone Incident',
    lede: 'An analysis of the 2020 Libya incident involving Kargu-2 loitering munitions, exposing the limits of human control.',
    tags: ['Aman', 'CIA 3', 'Autonomous Weapons', 'IHL'],
    original: 'originals/AI_Ethics_Canvas_Aman_2460324 (1).pdf',
    contextTitle: 'Loitering munitions operating without data links',
    context: 'Analyzed by Aman (2460324). Examines the UN Panel of Experts report on Libya regarding Kargu-2 drones programmed to attack targets without requiring an active data link to human operators.',
    questionTitle: 'Who is accountable when a lethal autonomous system selects and engages targets independently?',
    question: 'When a drone operates in "fire, forget and find" mode, responsibility is fragmented across manufacturers, military commanders, operators, and state regulators.',
    findings: [
      ['IHL Compliance Risk', 'Misclassification risks targeting surrendering, wounded, or retreating personnel protected under International Humanitarian Law.'],
      ['Responsibility Fragmentation', 'No single actor stands behind an individual automated strike, creating an accountability gap.'],
      ['Meaningful Human Control', 'True human control requires explicit human authorization for each lethal engagement, not merely mission-level launching.']
    ],
    recommendationTitle: 'Keep human authorization at the point of force.',
    recommendation: 'Mandate live human authorization for every strike, independent IHL compliance testing, black-box flight logs, and international bans on unconstrained autonomous weapons.'
  }
};

const key = new URLSearchParams(window.location.search).get('case') || 'genai';
const selected = cases[key] || cases.genai;
document.title = `${selected.title} — Aman & Anushka | Digital Ethics Portfolio`;

document.querySelector('#case-kicker').textContent = selected.kicker;
document.querySelector('#case-title').textContent = selected.title;
document.querySelector('#case-lede').textContent = selected.lede;
document.querySelector('#case-meta').innerHTML = selected.tags.map((tag) => `<span>${tag}</span>`).join('');
if (selected.original) {
  const origLink = document.querySelector('#original-link');
  if (origLink) {
    origLink.href = `original-viewer.html?file=${encodeURIComponent(selected.original)}`;
    origLink.style.display = 'inline-flex';
  }
  const downloadLink = document.querySelector('#download-link');
  if (downloadLink) {
    downloadLink.href = selected.original;
    downloadLink.download = selected.original.split('/').pop();
    downloadLink.style.display = 'inline-flex';
  }
} else {
  const origLink = document.querySelector('#original-link');
  if (origLink) origLink.style.display = 'none';
  const downloadLink = document.querySelector('#download-link');
  if (downloadLink) downloadLink.style.display = 'none';
}
document.querySelector('#context-title').textContent = selected.contextTitle;
document.querySelector('#context').textContent = selected.context;
document.querySelector('#question-title').textContent = selected.questionTitle;
document.querySelector('#question').textContent = selected.question;
document.querySelector('#findings').innerHTML = selected.findings.map(([title, text]) => `<div class="finding"><h3>${title}</h3><p>${text}</p></div>`).join('');
document.querySelector('#recommendation-title').textContent = selected.recommendationTitle;
document.querySelector('#recommendation').textContent = selected.recommendation;
