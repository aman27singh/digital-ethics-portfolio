document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Data Reveal
  const revealItems = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
    revealObserver.observe(item);
  });

  // Project Cards Click Handler
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    const openProject = () => {
      window.open(`project.html?case=${card.dataset.project}`, '_blank');
    };
    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      openProject();
    });
    card.addEventListener('keydown', (event) => {
      if (event.target.closest('a')) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProject();
      }
    });
  });

  // Category Filter Functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        const author = card.dataset.author;
        if (filter === 'all') {
          card.style.display = 'flex';
        } else if (filter === 'joint' && author === 'joint') {
          card.style.display = 'flex';
        } else if (filter === 'aman' && (author === 'aman' || author === 'joint')) {
          card.style.display = 'flex';
        } else if (filter === 'anushka' && (author === 'anushka' || author === 'joint')) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Unit-5 Topic Comprehensive Detailed Explanations Dataset
  const unit5TopicsDetail = {
    1: {
      number: 'Topic 01 / Unit-5 Topic Coverage',
      title: 'Synthetic Reality and Epistemic Risk',
      overview: 'Synthetic reality represents the paradigm shift where generative diffusion models, large language models, and deep neural voice synthesizers can construct text, audio, high-resolution imagery, and video artifacts that are perceptually indistinguishable from authentic physical recordings of real human events. Epistemic risk refers to the systemic degradation of shared societal knowledge, empirical truth, and evidence-based justification when the boundaries between natural reality and synthetic fabrication become completely porous.',
      analysis: 'As multimodal generative models increase in fidelity, society enters an era characterized by the "liar’s dividend"—a critical vulnerability in democratic discourse where bad actors and corrupt officials can plausibly claim that genuine, unedited evidentiary recordings of atrocities, bribery, or misconduct are merely "AI-generated deepfakes." This weakens judicial evidence standards, destabilizes investigative journalism, and induces pervasive epistemic cynicism, where citizens cease to trust any media regardless of provenance. The societal impact extends to national security, where synthetic satellite imagery or voice cloning can provoke geopolitical escalations before verification is technically feasible.',
      caseMapping: 'Covered extensively in Case 01 (Generative AI Digital Ethics Portfolio) and Case 02 (Khan Academy Audit). In Case 02, Generative AI models were subjected to empirical prompt auditing to test whether LLM auditors could accurately distinguish between genuine platform privacy disclosures and hallucinated commercial claims, demonstrating the critical necessity for human-in-the-loop verification when analyzing synthetic text outputs.',
      safeguards: '1. Mandate Coalition for Content Provenance and Authenticity (C2PA) open cryptographic metadata standards embedded at the hardware/camera capture level.\n2. Require invisible frequency-domain digital watermarking for all commercial generative media models prior to public deployment.\n3. Establish legal evidentiary standards requiring verified cryptographic chains of custody for media submitted in judicial proceedings.\n4. Integrate digital forensics and epistemic resilience education into public secondary and higher education curricula.'
    },
    2: {
      number: 'Topic 02 / Unit-5 Topic Coverage',
      title: 'Ethics of Misinformation, Deepfakes, and Persuasion',
      overview: 'Evaluates the intentional weaponization of generative systems to fabricate high-consequence misinformation, synthetic deepfake impersonations, and automated persuasive propaganda. It focuses on the psychological mechanics of micro-targeted influence, where algorithmic systems tailor synthetic content to exploit individual cognitive biases, emotional vulnerabilities, and socio-political fault lines.',
      analysis: 'Generative AI reduces the marginal cost of producing hyper-realistic, personalized disinformation to near zero. Malicious actors, state-sponsored propaganda apparatuses, and non-consensual deepfake creators can generate hyper-realistic audio clones of political leaders, voice-scam impersonations of loved ones, or non-consensual explicit imagery targeting women and vulnerable individuals without specialized technical skills. The ethical severity encompasses profound psychological trauma, reputational devastation, financial fraud at scale, and the disruption of free and fair democratic elections through coordinated synthetic influence campaigns.',
      caseMapping: 'Covered in Case 01 (Generative AI Digital Ethics Portfolio) and Case 05 (Banking Chatbot Note). In Case 05, the joint analysis evaluated how conversational AI chatbots in banking must avoid deceptive persuasion and coercive framing during high-stakes financial decisions like loan applications and debt collection.',
      safeguards: '1. Enact strict federal and international criminal statutes penalizing the creation and distribution of non-consensual deepfakes and malicious synthetic audio/video impersonations.\n2. Require digital social platforms to deploy real-time multimodal deepfake detection models at upload boundaries with automated flagging protocols.\n3. Enforce transparency requirements mandating explicit visual and acoustic disclaimers on all AI-assisted political advertisements and promotional media.\n4. Establish rapid-response election integrity task forces combining platform trust & safety teams, independent fact-checkers, and digital forensics laboratories.'
    },
    3: {
      number: 'Topic 03 / Unit-5 Topic Coverage',
      title: 'Authorship, Creativity, and Intellectual Labor',
      overview: 'Investigates how foundation models trained on web-scale datasets containing billions of copyrighted artistic, literary, musical, and code repositories fundamentally transform the concepts of authorship, fair compensation, creative labor rights, and intellectual property. It interrogates the moral relationship between human artistic effort and algorithmic pattern extraction.',
      analysis: 'Commercial generative models ingest the lifetime works of human artists, illustrators, writers, and programmers without prior informed consent, explicit attribution, or financial compensation. Deployers then offer commercial tools that generate derivative works copying distinct artistic styles, directly competing with and displacing the original human creators. This creates an unfair economic extraction where tech platforms monetize the collective creative heritage of humanity while impoverishing the creative class, raising fundamental questions about creative labor exploitation and the future of human artistic vocations.',
      caseMapping: 'Covered in Case 01 (Generative AI Digital Ethics Portfolio) analyzing intellectual property law, dataset consent mechanisms, and fair remuneration models for human creators.',
      safeguards: '1. Establish mandatory opt-in consent and licensing frameworks for foundation model training data ingestion.\n2. Implement global collective management organizations (CMOs) to distribute dataset usage royalties directly to human artists and authors.\n3. Legally exclude unassisted AI-generated outputs from receiving full copyright or patent protections to preserve incentives for human creative labor.\n4. Require complete public disclosure of training data sources and provenance manifests for all commercial foundation models.'
    },
    4: {
      number: 'Topic 04 / Unit-5 Topic Coverage',
      title: 'Moral Status of Generated Content',
      overview: 'Investigates the ontological, philosophical, and moral status of synthetic artifacts produced by artificial neural networks versus expressions originating from human consciousness. It explores whether machine outputs possess intrinsic moral weight or aesthetic value, and analyzes the ethical boundaries of human emotional attachment to conversational AI agents.',
      analysis: 'As large language models simulate empathy, deep emotional resonance, and pseudo-sentience, users—particularly children, isolated individuals, and vulnerable populations—frequently project intentionality, moral agency, and genuine emotional reciprocation onto statistical text generators. This creates severe risks of emotional manipulation, parasocial exploitation, and psychological dependence. Philosophically, treating machine-generated outputs as equivalent to human moral expression risks commodifying human emotion and diluting the unique value of human lived experience.',
      caseMapping: 'Covered in Case 01 (Generative AI Portfolio) and Case 02 (Khan Academy Audit). Case 02 specifically examined the Khanmigo AI tutor, highlighting the ethical tension when children interact with an AI tutor that mimics human encouragement while adult visibility (parents/teachers) monitors chat logs behind the scenes.',
      safeguards: '1. Enforce strict design rules prohibiting AI systems from falsely claiming sentience, human emotion, or conscious moral agency.\n2. Mandate persistent, plain-language disclosure tags clarifying the artificial, non-sentient nature of conversational agents.\n3. Establish specialized psychological safety guidelines for AI applications deployed to minors, preventing deceptive emotional bonding.\n4. Preserve legal frameworks that maintain human beings as the sole recognized subjects of moral and legal rights.'
    },
    5: {
      number: 'Topic 05 / Unit-5 Topic Coverage',
      title: 'AI in Warfare and Propaganda',
      overview: 'Analyzes the integration of AI into military decision support, automated threat scoring, loitering autonomous weapons, and automated state-sponsored propaganda. It evaluates compliance with International Humanitarian Law (IHL), specifically the principles of distinction, proportionality, and military necessity.',
      analysis: 'The deployment of autonomous weapons operating in "fire, forget & find" modes without real-time human data connectivity (such as the reported Kargu-2 loitering munition incident in Libya) degrades meaningful human control over lethal force. Predictive targeting score generators (such as Palantir AIP) aggregate intelligence feeds to output lethal target probabilities under extreme operational speed pressure, creating a dangerous "responsibility vacuum" where human commanders rubber-stamp automated strike recommendations without understanding algorithmic confidence scores. This risks misclassifying surrendering, wounded, or non-combatant individuals, lowering the threshold for armed conflict, and accelerating automated military escalation cycles beyond human reaction times.',
      caseMapping: 'Covered in Case 06 (Palantir Military AI Ethical Analysis) and Case 09 (Kargu-2 Autonomous Drone Incident AI Ethics Canvas).',
      safeguards: '1. Enforce legally binding international treaties establishing a prohibition on lethal autonomous weapons operating without meaningful, real-time human control.\n2. Mandate documented human authorization at every lethal strike decision step, with explicit human accountability assigned to commanders.\n3. Require immutable, tamper-evident black-box flight telemetry and decision logs on all military autonomous systems for post-action IHL compliance auditing.\n4. Perform rigorous pre-deployment IHL compliance testing and mandate automated fail-safe return/deactivation protocols when human connectivity is lost.'
    },
    6: {
      number: 'Topic 06 / Unit-5 Topic Coverage',
      title: 'Ethics of Global AI Governance',
      overview: 'Examines multilateral regulatory mechanisms, international safety standards, and institutional oversight required to govern borderless AI compute infrastructure, foundation models, and algorithmic platforms across sovereign jurisdictions.',
      analysis: 'Unilateral domestic regulations (such as the EU AI Act or US Executive Orders) face severe enforcement limits against globalized digital infrastructure. Multi-national tech conglomerates can engage in "regulatory arbitrage"—relocating model training, data annotation, or deployment to jurisdictions with weak consumer protections or lax ethical oversight. Without global governance, reckless AI safety practices in one nation introduce systemic risks (financial instability, biosecurity threats, automated warfare) across national borders, undermining global security and human rights.',
      caseMapping: 'Covered in Case 01 (Generative AI Portfolio) and Case 03 (The Cartel That Never Spoke: Tacit Collusion Detection System). Case 03 designed an ethical AI model for real-time market supervision to prevent cross-border pricing algorithms from engaging in tacit price coordination in housing and retail.',
      safeguards: '1. Establish a multilateral UN AI Governance Organization modeled on international atomic energy oversight to monitor global frontier AI safety.\n2. Harmonize mandatory pre-deployment algorithmic impact assessments and safety red-teaming standards across major economic zones.\n3. Enforce strict international compute tracking protocols for large-scale GPU clusters capable of training frontier models.\n4. Guarantee open access to safety research, audit tooling, and risk evaluation benchmarks for sovereign regulatory agencies worldwide.'
    },
    7: {
      number: 'Topic 07 / Unit-5 Topic Coverage',
      title: 'Cultural Pluralism in AI Ethics',
      overview: 'Critiques the dominance of western-centric, Anglo-American moral frameworks in foundation model training datasets, safety alignment algorithms, and international rule-making bodies. It advocates for embedding diverse cultural, linguistic, and philosophical traditions into AI ethics.',
      analysis: 'The vast majority of foundation models are trained predominantly on English-heavy, Global North web corpora, encoding western individualist ethics, secular legal norms, and high-resource societal assumptions into systems deployed across diverse global populations. When these models are applied in different cultural contexts, they exhibit structural cultural erasure—misinterpreting localized moral reasoning, marginalizing indigenous knowledge systems, misrepresenting traditional social dynamics, and forcing homogenized western values onto global users.',
      caseMapping: 'Covered in Case 01 (Generative AI Portfolio) and Case 08 (Strava Responsible Data Audit). Case 08 evaluated how physical, cultural, and infrastructural differences in developing urban environments skew global platform data and municipal planning algorithms.',
      safeguards: '1. Mandate culturally and linguistically diverse training corpora, actively incorporating underrepresented languages and regional literature.\n2. Implement decentralized, localized model fine-tuning protocols that allow local communities to align AI behavior with regional cultural and ethical norms.\n3. Integrate indigenous ethics experts, Global South ethicists, and cultural sociologists into foundation model safety red-teaming boards.\n4. Develop multi-perspective evaluation benchmarks that assess model safety across diverse moral and philosophical paradigms rather than a single western metric.'
    },
    8: {
      number: 'Topic 08 / Unit-5 Topic Coverage',
      title: 'Global North–South Asymmetries',
      overview: 'Addresses the deep structural economic, technological, and political power imbalances between the Global North and Global South across the entire AI supply chain—including compute infrastructure ownership, data extraction, low-wage data annotation labor, and rule-making power.',
      analysis: 'AI development reproduces patterns of digital neo-colonialism. Tech corporations in the Global North extract massive behavioral and cultural data from users in the Global South while outsourcing high-trauma content moderation, data labeling, and RLHF annotator work to underpaid laborers in developing nations under precarious working conditions. Meanwhile, compute infrastructure, intellectual property rights, and economic profits remain concentrated in wealthy northern hubs, widening global economic inequality and denying developing nations digital sovereignty.',
      caseMapping: 'Covered in Case 01 (Generative AI Portfolio), Case 02 (Khan Academy Audit), and Case 08 (Strava Responsible Data Audit). Case 02 highlighted how free access does not equal equitable access, as broadband gaps, device costs, and personalization algorithms systematically disadvantage low-bandwidth learners in developing regions.',
      safeguards: '1. Enforce fair living wage standards, mandatory psychological healthcare, and labor rights protections for data annotation workers globally.\n2. Establish international compute-sharing funds providing low-cost access to high-performance compute infrastructure for researchers in developing nations.\n3. Require equitable representation of Global South representatives in international AI standard-setting bodies and governance councils.\n4. Implement data sovereignty regulations empowering developing nations to govern, tax, and restrict raw data extraction by foreign tech monopolies.'
    },
    9: {
      number: 'Topic 09 / Unit-5 Topic Coverage',
      title: 'Limits of Universal Ethical Frameworks',
      overview: 'Evaluates the fundamental limitations of applying single, rigid, top-down universal ethical rulebooks to complex, context-dependent AI deployments across differing legal systems, clinical domains, and localized community norms.',
      analysis: 'Universal ethical guidelines (such as generic high-level AI principles of "do no harm" or "be fair") often collapse when confronted with real-world domain-specific trade-offs. For example, a single universal fraud detection baseline in healthcare might flag high-dose pain management prescriptions for oncology patients as fraudulent, withholding life-saving care. Similarly, a global privacy rulebook might conflict with localized community safety practices. Rigid universal rules fail to capture contextual integrity, leading to automated injustices when deployed without localized human due-process adaptation.',
      caseMapping: 'Covered in Case 01 (Generative AI Portfolio), Case 05 (Banking AI Chatbot Card Note), and Case 07 (Rx Sentinel Fake Prescription Detection Design). Case 07 specifically solved this limit by implementing specialty-specific clinical baselines (oncology, palliative care) rather than a rigid universal general practice fraud threshold.',
      safeguards: '1. Implement Helen Nissenbaum’s Contextual Integrity framework for data processing and algorithmic evaluation across specialized domains.\n2. Require domain-tailored algorithmic baselines (e.g. medical specialty context, regional legal norms) rather than single global rulebooks.\n3. Establish localized, multidisciplinary ethics review panels with power to modify algorithm parameters for regional community needs.\n4. Mandate revisitable, multi-layered consent flows that allow users to customize data processing permissions based on specific operational contexts.'
    }
  };

  // Create Modal element if it doesn't already exist
  let topicModalOverlay = document.querySelector('.topic-modal-overlay');
  if (!topicModalOverlay) {
    topicModalOverlay = document.createElement('div');
    topicModalOverlay.className = 'topic-modal-overlay';
    topicModalOverlay.setAttribute('aria-hidden', 'true');
    topicModalOverlay.innerHTML = `
      <div class="topic-modal-card" role="dialog" aria-modal="true">
        <button class="modal-close-btn" aria-label="Close topic detail modal">&times;</button>
        <div class="modal-topic-number" id="modal-number">TOPIC 01</div>
        <h2 class="modal-topic-title" id="modal-title">Topic Title</h2>
        <div class="modal-section-heading">Overview & Theoretical Foundations</div>
        <p class="modal-body-text" id="modal-overview"></p>
        <div class="modal-section-heading">Ethical Deep-Dive & Societal Impact Analysis</div>
        <p class="modal-body-text" id="modal-analysis"></p>
        <div class="modal-section-heading">Portfolio Case Study Mapping</div>
        <div class="modal-mapping-pill" id="modal-mapping"></div>
        <div class="modal-section-heading">Comprehensive Policy Safeguards & Governance</div>
        <p class="modal-body-text" id="modal-safeguards" style="white-space: pre-line;"></p>
      </div>
    `;
    document.body.appendChild(topicModalOverlay);
  }

  const closeModal = () => {
    topicModalOverlay.classList.remove('active');
    topicModalOverlay.setAttribute('aria-hidden', 'true');
  };

  topicModalOverlay.querySelector('.modal-close-btn').addEventListener('click', closeModal);
  topicModalOverlay.addEventListener('click', (e) => {
    if (e.target === topicModalOverlay) closeModal();
  });

  // Inline Panel Close Button
  const inlinePanel = document.querySelector('#topic-inline-panel');
  const inlineCloseBtn = document.querySelector('#inline-close-btn');
  if (inlineCloseBtn) {
    inlineCloseBtn.addEventListener('click', () => {
      if (inlinePanel) inlinePanel.style.display = 'none';
    });
  }

  // Trigger Topic Detail Display Function
  const displayTopicDetail = (topicId) => {
    const topicData = unit5TopicsDetail[topicId];
    if (!topicData) return;

    // 1. Update & Show Modal Overlay
    document.querySelector('#modal-number').textContent = topicData.number;
    document.querySelector('#modal-title').textContent = topicData.title;
    document.querySelector('#modal-overview').textContent = topicData.overview;
    document.querySelector('#modal-analysis').textContent = topicData.analysis;
    document.querySelector('#modal-mapping').textContent = topicData.caseMapping;
    document.querySelector('#modal-safeguards').textContent = topicData.safeguards;

    topicModalOverlay.classList.add('active');
    topicModalOverlay.setAttribute('aria-hidden', 'false');

    // 2. Update & Show Inline Detail Panel
    if (inlinePanel) {
      document.querySelector('#inline-number').textContent = topicData.number;
      document.querySelector('#inline-title').textContent = topicData.title;
      document.querySelector('#inline-overview').textContent = topicData.overview;
      document.querySelector('#inline-analysis').textContent = topicData.analysis;
      document.querySelector('#inline-mapping').textContent = topicData.caseMapping;
      const inlineSafeguards = document.querySelector('#inline-safeguards');
      if (inlineSafeguards) {
        inlineSafeguards.textContent = topicData.safeguards;
        inlineSafeguards.style.whiteSpace = 'pre-line';
      }
      inlinePanel.style.display = 'block';
      inlinePanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  // Global Event Delegation for Clickable Topic Boxes
  document.addEventListener('click', (e) => {
    const topicBox = e.target.closest('.topic-box-clickable');
    if (!topicBox) return;
    const topicId = topicBox.dataset.topicId;
    displayTopicDetail(topicId);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const topicBox = e.target.closest('.topic-box-clickable');
      if (!topicBox) return;
      e.preventDefault();
      const topicId = topicBox.dataset.topicId;
      displayTopicDetail(topicId);
    } else if (e.key === 'Escape' && topicModalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
});
