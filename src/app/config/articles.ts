import type { ServiceSlug } from "./service-data";

export type Article = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
  faqs: [string, string][];
  related: ServiceSlug[];
  video?: { id: string; title: string };
  crisisNote?: boolean;
};

const DATE = "2026-10-05";

export const articles: Article[] = [
  {
    slug: "psychiatrist-fees-in-mumbai",
    title: "How much does a psychiatrist cost in Mumbai?",
    description: "What decides psychiatrist fees in Mumbai, what a first visit and follow ups cost at Dr. Abhijeet Holambe's Malad West practice, and other costs to plan for.",
    published: DATE,
    updated: DATE,
    intro: "Cost is one of the first questions people ask before booking. Fees in Mumbai vary from one psychiatrist to another, so it helps to know what affects the price and what you are paying for.",
    sections: [
      {
        heading: "What affects the fee",
        paragraphs: ["Psychiatrist fees in Mumbai depend on several things. Knowing them makes it easier to compare options fairly."],
        points: [
          "Experience and training of the psychiatrist",
          "Whether the visit is in a hospital, a private clinic or online",
          "First consultation or follow up: the first visit is usually longer because it includes a full assessment",
          "Any tests, medicines or therapy sessions that are needed separately",
        ],
      },
      {
        heading: "Fees at Dr. Holambe's practice",
        paragraphs: [
          "At Sun Multispeciality Hospital in Malad West, the first consultation with Dr. Abhijeet Holambe is ₹1,800 and each follow up is ₹1,500. Online consultations are available by appointment.",
          "The first consultation is a detailed conversation about your concerns, health history, sleep, daily life and any medicines you take. Follow ups are used to review progress and adjust the plan.",
        ],
      },
      {
        heading: "Other costs to plan for",
        paragraphs: [
          "Medicines are bought separately and their cost depends on what is prescribed. Some people need blood tests or other investigations, and some benefit from therapy sessions with a psychologist. Your psychiatrist can explain which of these are actually needed for you, so you can plan.",
          "How often you need follow ups depends on the condition and how you respond. Early in treatment visits may be every few weeks; once things are stable they are usually less frequent.",
        ],
      },
      {
        heading: "Does insurance cover psychiatric treatment?",
        paragraphs: ["The Mental Healthcare Act, 2017 requires insurers in India to cover mental illness on the same basis as physical illness. What is covered still depends on your policy, especially for outpatient visits, so check with your insurer before your appointment."],
      },
    ],
    faqs: [
      ["How much is the first consultation with Dr. Holambe?", "The first consultation is ₹1,800 and follow ups are ₹1,500."],
      ["Is an online consultation cheaper?", "Ask the practice on WhatsApp for the current online consultation fee when you book."],
      ["Are medicines included in the fee?", "No. Medicines, tests and therapy sessions are separate from the consultation fee."],
    ],
    related: ["online-psychiatry", "depression", "anxiety-panic-disorder"],
  },
  {
    slug: "psychiatrist-vs-psychologist-vs-counsellor",
    title: "Psychiatrist, psychologist or counsellor: who should you see?",
    description: "The difference between a psychiatrist, a clinical psychologist and a counsellor in India, what each one does, and how to decide who to see first.",
    published: DATE,
    updated: DATE,
    intro: "These three professionals all help with mental health, but their training and what they can offer are different. Choosing the right starting point saves time.",
    sections: [
      {
        heading: "Psychiatrist",
        paragraphs: ["A psychiatrist is a medical doctor. In India this means an MBBS followed by a postgraduate degree in psychiatry such as MD or DNB. Psychiatrists diagnose mental health conditions, check for physical causes, can prescribe medicines and order tests, and often combine medicines with talking therapy or refer you for therapy."],
      },
      {
        heading: "Clinical psychologist",
        paragraphs: ["A clinical psychologist has advanced training in psychological assessment and therapy and is registered with the Rehabilitation Council of India. Psychologists offer structured therapies such as cognitive behavioural therapy and can do psychological testing. They do not prescribe medicines."],
      },
      {
        heading: "Counsellor",
        paragraphs: ["Counsellors provide supportive talking help for stress, relationships and life problems. Training varies widely, so it is worth asking about qualifications and experience."],
      },
      {
        heading: "Who should you see first?",
        paragraphs: ["Start with a psychiatrist when:"],
        points: [
          "Symptoms are severe, long lasting or getting worse",
          "Sleep, appetite, work or studies are badly affected",
          "You have thoughts of harming yourself",
          "You hear or see things others do not, or have very unusual beliefs",
          "Alcohol or drug use is hard to control",
          "You are already taking psychiatric medicines, or wonder if medicines might help",
        ],
      },
      {
        heading: "Working together",
        paragraphs: ["Many people do best with both: a psychiatrist to assess and manage medical treatment, and a psychologist for regular therapy. Seeing a psychiatrist does not mean you will automatically be given medicines; it means the full range of options can be considered."],
      },
    ],
    faqs: [
      ["Can a psychologist prescribe medicines in India?", "No. Only registered medical practitioners such as psychiatrists can prescribe medicines."],
      ["Do I need a referral to see a psychiatrist?", "No. You can book directly with a psychiatrist."],
      ["Does a psychiatrist also do therapy?", "Many psychiatrists offer counselling and supportive therapy, and can refer you to a psychologist for longer structured therapy."],
    ],
    related: ["anxiety-panic-disorder", "depression", "relationship-couples-counselling"],
  },
  {
    slug: "are-antidepressants-addictive",
    title: "Are antidepressants addictive?",
    description: "Whether antidepressants cause addiction, what discontinuation symptoms are, how long they take to work, and how to stop them safely with your doctor.",
    published: DATE,
    updated: DATE,
    intro: "Worry about becoming dependent on medicines stops many people from starting treatment. Here is what is actually known about common antidepressants.",
    sections: [
      {
        heading: "The short answer",
        paragraphs: ["Commonly used antidepressants, such as SSRIs, do not cause addiction in the way alcohol or sleeping pills can. People do not crave them, do not need higher and higher doses to get the same effect, and do not feel a high from them."],
      },
      {
        heading: "Then why can stopping feel difficult?",
        paragraphs: ["If an antidepressant is stopped suddenly, some people get discontinuation symptoms such as dizziness, irritability, poor sleep, flu like feelings or electric shock sensations. This is the body adjusting, not addiction. Reducing the dose gradually with your doctor usually prevents or reduces these symptoms."],
      },
      {
        heading: "How long they take to work",
        paragraphs: ["Antidepressants usually take two to six weeks to show clear benefit, and some side effects can appear before the benefits do. This is why follow up visits matter in the early weeks."],
      },
      {
        heading: "How long you need to take them",
        paragraphs: ["Once you feel better, doctors usually recommend continuing for several months to lower the chance of the illness returning. How long depends on your history, and it is a decision you make together with your psychiatrist."],
      },
      {
        heading: "Medicines that can cause dependence",
        paragraphs: ["Some sleeping pills and anti anxiety medicines, such as benzodiazepines, can cause dependence if taken for long periods. These are different from antidepressants and are generally used for short periods under supervision."],
      },
    ],
    faqs: [
      ["Can I stop my antidepressant once I feel better?", "Do not stop suddenly. Talk to your psychiatrist about when and how to reduce the dose."],
      ["Will antidepressants change my personality?", "No. When they work, people usually describe feeling more like themselves again."],
      ["Can I drink alcohol while taking antidepressants?", "Alcohol can worsen depression and interact with medicines. Ask your doctor about your specific medicine."],
    ],
    related: ["depression", "anxiety-panic-disorder", "ocd"],
  },
  {
    slug: "when-to-see-a-psychiatrist",
    title: "When should you see a psychiatrist?",
    description: "Practical signs that it is time to see a psychiatrist, from persistent low mood and anxiety to sleep problems, addiction and changes in behaviour.",
    published: DATE,
    updated: DATE,
    intro: "Everyone has hard days. It is time to see a psychiatrist when problems last, keep returning, or start to affect everyday life.",
    sections: [
      {
        heading: "Signs it is worth booking",
        paragraphs: ["Consider an appointment if any of these apply for two weeks or more:"],
        points: [
          "Low mood, emptiness or loss of interest most days",
          "Worry or panic that is hard to control",
          "Sleeping too little or too much",
          "Changes in appetite or weight without a clear reason",
          "Trouble concentrating at work or in studies",
          "Withdrawing from family and friends",
          "Drinking or using drugs more than you intend",
          "Sexual difficulties that are causing distress",
        ],
      },
      {
        heading: "Signs that need urgent help",
        paragraphs: ["Seek help the same day if someone is thinking of suicide or self harm, hearing voices, very confused, not eating or drinking, or a danger to themselves or others. Go to the nearest emergency department or call Tele MANAS on 14416."],
      },
      {
        heading: "You do not need to wait",
        paragraphs: ["Many people wait until things feel unbearable. Getting help early often means simpler treatment and quicker recovery. A first consultation is simply a conversation; you can ask questions and decide on next steps together."],
      },
    ],
    faqs: [
      ["Is it normal to feel nervous before the first visit?", "Yes. Most people do. You can share only what you feel ready to talk about."],
      ["Can family members come along?", "Yes. A family member can join for all or part of the visit if you want them to."],
    ],
    related: ["depression", "anxiety-panic-disorder", "de-addiction"],
    crisisNote: true,
  },
  {
    slug: "first-psychiatrist-appointment",
    title: "What happens at your first psychiatrist appointment?",
    description: "A step by step guide to a first psychiatric consultation: what you will be asked, what to bring, how long it takes and what happens next.",
    published: DATE,
    updated: DATE,
    intro: "Knowing what to expect makes the first visit much easier. Here is how a first consultation with Dr. Holambe usually goes.",
    sections: [
      {
        heading: "Before you come",
        paragraphs: ["Book by WhatsApp or phone. It helps to bring:"],
        points: [
          "A list of current medicines, including any you have stopped recently",
          "Previous prescriptions, reports or discharge summaries",
          "Recent blood test results, if you have them",
          "A few notes on what you want to discuss",
        ],
      },
      {
        heading: "During the consultation",
        paragraphs: [
          "You will be asked what has been troubling you, when it started and how it affects sleep, work, relationships and daily life. Dr. Holambe will also ask about physical health, family history, alcohol or substance use and any past treatment.",
          "You do not have to share everything at once. You can ask questions at any point.",
        ],
      },
      {
        heading: "At the end",
        paragraphs: ["You will discuss what the problem might be, the options available and what you prefer. This may include therapy, lifestyle changes, tests, medicines or a combination. If medicines are suggested, you can ask about benefits, side effects and how long they may be needed. A follow up date is agreed before you leave."],
      },
      {
        heading: "Language and family",
        paragraphs: ["Consultations are in Hindi, Marathi or English. You can bring a family member if you want support, and you can also ask to speak privately."],
      },
    ],
    faqs: [
      ["How long is the first appointment?", "The first consultation is longer than a follow up because it includes a full assessment."],
      ["Will I definitely get medicines?", "Not necessarily. Medicines are discussed only if they are likely to help, and the decision is made with you."],
    ],
    related: ["online-psychiatry", "anxiety-panic-disorder", "depression"],
  },
  {
    slug: "is-mental-health-treatment-confidential",
    title: "Is mental health treatment confidential in India?",
    description: "Your right to confidentiality under the Mental Healthcare Act, 2017, what your psychiatrist can and cannot share, and the rare exceptions.",
    published: DATE,
    updated: DATE,
    intro: "Fear that family, employers or others will find out keeps many people from seeking help. Indian law protects your privacy.",
    sections: [
      {
        heading: "What the law says",
        paragraphs: ["Under the Mental Healthcare Act, 2017, every person with mental illness has the right to confidentiality about their mental health, treatment and physical health care. Information is not shared without your consent."],
      },
      {
        heading: "Who will know",
        paragraphs: ["Your consultation is between you and your psychiatrist. Your employer, college or family are not told unless you choose to tell them. If you want a family member involved, that is your decision."],
      },
      {
        heading: "Rare exceptions",
        paragraphs: ["The law allows limited sharing in specific situations, for example to protect someone from serious harm, to the people directly involved in your care, or when required by a court. Your psychiatrist can explain these if you are worried."],
      },
      {
        heading: "Medical certificates and records",
        paragraphs: ["If you need a certificate for work or college, you can discuss what it should say. A certificate does not need to include details of your diagnosis unless that is required and you agree."],
      },
    ],
    faqs: [
      ["Will my employer find out if I see a psychiatrist?", "No, not unless you choose to tell them or ask for a certificate."],
      ["Can my parents see my records?", "Adults have the right to confidentiality. For minors, parents or guardians are usually involved in care."],
    ],
    related: ["adolescent-mental-health", "sexual-health", "online-psychiatry"],
  },
  {
    slug: "alcohol-withdrawal-symptoms",
    title: "Alcohol withdrawal: symptoms, risks and when to get help",
    description: "Why stopping heavy drinking suddenly can be dangerous, common alcohol withdrawal symptoms and timelines, and how medically supervised detox works.",
    published: DATE,
    updated: DATE,
    intro: "If you drink heavily every day, stopping suddenly is not just difficult; it can be medically dangerous. Planning the stop with a doctor makes it safer.",
    sections: [
      {
        heading: "Common withdrawal symptoms",
        paragraphs: ["Symptoms usually begin within 6 to 24 hours of the last drink:"],
        points: ["Shaking hands", "Sweating and a fast heartbeat", "Anxiety and restlessness", "Nausea and poor sleep"],
      },
      {
        heading: "Serious complications",
        paragraphs: ["Some people develop seizures, or a severe state called delirium tremens, usually two to three days after stopping. It causes confusion, seeing things that are not there and a very fast heartbeat, and it needs emergency treatment. People who have had withdrawal seizures before, or who drink very heavily, are at higher risk."],
      },
      {
        heading: "Why quick detox videos can mislead",
        paragraphs: ["Social media often shows detox as something that is over in a day. In reality, withdrawal needs to be assessed and monitored, and stopping is only the first step. Staying stopped is where most of the work happens."],
      },
      {
        heading: "How supervised detox works",
        paragraphs: ["A psychiatrist assesses how much you drink, your health and your risk, then plans either supervised outpatient detox or admission. Medicines are used for a short time to keep withdrawal safe, along with vitamins and checks on liver health. After detox, treatment focuses on preventing relapse, with counselling, support and sometimes medicines that reduce craving."],
      },
    ],
    faqs: [
      ["Can I stop drinking at home on my own?", "If you drink heavily every day, speak to a doctor first. Stopping suddenly can cause dangerous withdrawal."],
      ["How long does withdrawal last?", "The worst symptoms usually settle within a week, but sleep and mood can take longer to recover."],
      ["Is de-addiction treatment confidential?", "Yes. Your treatment is confidential."],
    ],
    related: ["de-addiction", "depression", "anxiety-panic-disorder"],
    video: { id: "k5QjJWNEizU", title: "Don't be fooled by 24hr Detox videos on social media" },
    crisisNote: true,
  },
  {
    slug: "erectile-dysfunction-causes",
    title: "Erectile dysfunction: is it psychological or physical?",
    description: "Common physical and psychological causes of erectile dysfunction, how a sexologist assesses it, and the treatment options available.",
    published: DATE,
    updated: DATE,
    intro: "Erectile dysfunction is common and treatable. Often both the mind and the body play a part, which is why a careful assessment matters.",
    sections: [
      {
        heading: "Physical causes",
        points: ["Diabetes", "High blood pressure and heart disease", "High cholesterol", "Smoking, alcohol and some drugs", "Hormone problems", "Side effects of some medicines"],
        paragraphs: ["Erectile difficulties can be an early sign of problems with blood vessels, so a physical check is important."],
      },
      {
        heading: "Psychological causes",
        points: ["Performance anxiety", "Stress at work or home", "Depression", "Relationship difficulties", "Worry after one bad experience"],
        paragraphs: ["A single difficult experience can create anxiety that makes the next one harder, which can start a cycle."],
      },
      {
        heading: "Clues to the cause",
        paragraphs: ["If erections are normal at some times, such as on waking or during self stimulation, psychological factors are often involved. If erections are weak in every situation, a physical cause is more likely. Most people have a mix of both, and the assessment looks at the whole picture."],
      },
      {
        heading: "Treatment",
        paragraphs: ["Depending on the cause, treatment may include addressing health conditions, changing medicines that contribute, counselling for anxiety or relationship issues, and medicines that improve blood flow when appropriate. Avoid unprescribed pills and online remedies, which can be unsafe."],
      },
    ],
    faqs: [
      ["Is erectile dysfunction common in young men?", "Yes. It is more common than many people think, and anxiety is a frequent factor in younger men."],
      ["Will the consultation be confidential?", "Yes. Sexual health consultations are private and confidential."],
      ["Do I need tests?", "Sometimes. Blood tests for sugar, cholesterol or hormones may be suggested after the assessment."],
    ],
    related: ["sexual-health", "anxiety-panic-disorder", "relationship-couples-counselling"],
  },
  {
    slug: "premature-ejaculation-treatment",
    title: "Premature ejaculation: causes and treatment",
    description: "What premature ejaculation is, why it happens, and the behavioural, counselling and medical treatment options a sexologist may discuss.",
    published: DATE,
    updated: DATE,
    intro: "Premature ejaculation is one of the most common sexual concerns in men. It is treatable, and talking about it is the first step.",
    sections: [
      {
        heading: "What it is",
        paragraphs: ["Premature ejaculation means ejaculating sooner than you or your partner would like, often within a short time of penetration, with a feeling of little control, and causing distress. Occasional early ejaculation is normal and not a disorder."],
      },
      {
        heading: "Common causes",
        points: ["Anxiety, including performance anxiety", "Stress and relationship difficulties", "Long gaps between sexual activity", "Erectile difficulties, which can lead to rushing", "Sometimes thyroid or prostate problems"],
        paragraphs: ["Some men have had it from their first sexual experience, while for others it starts later. The pattern helps guide treatment."],
      },
      {
        heading: "Treatment options",
        paragraphs: ["A sexologist may discuss behavioural techniques that build control, counselling to reduce anxiety and improve communication with a partner, and medicines when appropriate. Many men do best with a combination. Your doctor will explain the options and possible side effects so you can decide together."],
      },
    ],
    faqs: [
      ["Is premature ejaculation permanent?", "No. Most men improve with the right treatment."],
      ["Should my partner come to the consultation?", "It is your choice. Some couples find a joint session helpful."],
    ],
    related: ["sexual-health", "anxiety-panic-disorder", "relationship-couples-counselling"],
  },
  {
    slug: "insomnia-when-to-see-a-doctor",
    title: "Can't sleep? Practical help for insomnia and when to see a doctor",
    description: "Simple, practical steps for better sleep, why sleeping pills are not a long term answer, and when insomnia needs a psychiatrist's assessment.",
    published: DATE,
    updated: DATE,
    intro: "Most people have the occasional bad night. Insomnia becomes a problem when poor sleep continues for weeks and affects your day.",
    sections: [
      {
        heading: "Practical steps that help",
        paragraphs: ["These habits help many people:"],
        points: [
          "Wake up at the same time every day, including weekends",
          "Go to bed only when sleepy",
          "If you cannot sleep after about 20 minutes, get up and do something calm in dim light, then return",
          "Avoid tea, coffee and energy drinks after early afternoon",
          "Keep screens out of bed and stop work an hour before bed",
          "Avoid alcohol as a sleep aid; it disturbs sleep later in the night",
        ],
      },
      {
        heading: "Why sleeping pills are not a long term answer",
        paragraphs: ["Some sleeping pills help for a short period, but taken for weeks or months they can lose their effect and cause dependence. Never start or stop them without medical advice. The most effective long term treatment for insomnia is cognitive behavioural therapy for insomnia, which changes the habits and thoughts that keep poor sleep going."],
      },
      {
        heading: "When to see a psychiatrist",
        points: [
          "Poor sleep for more than three or four weeks",
          "Sleep problems along with low mood, anxiety or worry",
          "Relying on alcohol or pills to sleep",
          "Loud snoring, gasping or extreme daytime sleepiness, which may need a sleep study",
        ],
        paragraphs: ["Insomnia is often linked with depression or anxiety, and treating these usually improves sleep."],
      },
    ],
    faqs: [
      ["Is it okay to take sleeping pills occasionally?", "Only as advised by a doctor. Discuss the safest option for you."],
      ["Can stress alone cause insomnia?", "Yes. Stress is a common trigger, and insomnia can continue even after the stress has passed."],
    ],
    related: ["sleep-disorders", "anxiety-panic-disorder", "depression"],
    video: { id: "49KywirUKTA", title: "Certainty from an uncertain situation. Save this for tonight." },
  },
  {
    slug: "what-to-do-during-a-panic-attack",
    title: "What to do during a panic attack",
    description: "How to recognise a panic attack, simple steps to get through one, and when frequent panic attacks need treatment.",
    published: DATE,
    updated: DATE,
    intro: "A panic attack can feel like a heart attack or like losing control. It is frightening, but it passes, and panic disorder is very treatable.",
    sections: [
      {
        heading: "Common symptoms",
        points: ["Racing or pounding heart", "Breathlessness or a choking feeling", "Chest tightness", "Shaking, sweating and dizziness", "Tingling in hands or face", "A strong fear of dying or going mad"],
        paragraphs: ["Symptoms usually peak within about ten minutes and then settle."],
      },
      {
        heading: "What to do during an attack",
        points: [
          "Remind yourself that this is panic and it will pass",
          "Breathe slowly: in for four counts, out for six",
          "Ground yourself: name five things you can see and four you can hear",
          "Stay where you are if it is safe, rather than escaping",
        ],
        paragraphs: ["Avoiding places where panic has happened often makes the fear grow. Gradually facing them, with support, helps it shrink."],
      },
      {
        heading: "When to get checked",
        paragraphs: ["If you have chest pain for the first time, are over 40 or have heart risk factors, get a medical check to rule out heart problems. If attacks keep happening, or you are avoiding places because of them, see a psychiatrist. Treatment such as cognitive behavioural therapy, with or without medicines, works well for most people."],
      },
    ],
    faqs: [
      ["Can a panic attack harm my heart?", "Panic attacks are not dangerous in themselves, but new chest pain should always be checked by a doctor."],
      ["How long does a panic attack last?", "Usually 5 to 20 minutes, with symptoms peaking early."],
    ],
    related: ["anxiety-panic-disorder", "stress-burnout", "sleep-disorders"],
    video: { id: "tIr2Ft6yhvg", title: "Why do some people handle stress better than others? Circle of control" },
  },
  {
    slug: "online-psychiatry-consultation-india",
    title: "Online psychiatry consultation in India: how it works",
    description: "What an online psychiatry consultation involves, what can and cannot be done online under India's telemedicine guidelines, and how to prepare.",
    published: DATE,
    updated: DATE,
    intro: "Online consultations make it easier to get help from home, from another city, or when travelling is hard.",
    sections: [
      {
        heading: "How it works",
        paragraphs: ["You book a time, join a video call from a private space, and talk with the psychiatrist much as you would in the clinic. India's Telemedicine Practice Guidelines allow registered doctors to consult and, within certain rules, prescribe online."],
      },
      {
        heading: "Good for",
        points: ["Follow up visits", "Anxiety, depression, sleep and stress concerns", "People outside Mumbai or with busy schedules", "Those who prefer the privacy of home"],
        paragraphs: [],
      },
      {
        heading: "When an in person visit is better",
        paragraphs: ["An in person visit may be needed when a physical examination is required, symptoms are severe, there are safety concerns, or certain medicines need closer monitoring. Your psychiatrist will tell you if this applies."],
      },
      {
        heading: "How to prepare",
        points: ["Find a quiet, private room", "Check your internet and charge your phone", "Keep medicines and reports nearby", "Note your questions in advance"],
        paragraphs: [],
      },
    ],
    faqs: [
      ["Can I get a prescription online?", "Yes, for many medicines, within the rules of the telemedicine guidelines."],
      ["Is an online consultation confidential?", "Yes. Join from a private space so you can speak freely."],
    ],
    related: ["online-psychiatry", "anxiety-panic-disorder", "depression"],
  },
  {
    slug: "do-you-need-to-be-mad-to-see-a-psychiatrist",
    title: "Do you have to be 'mad' to see a psychiatrist?",
    description: "Why psychiatrists help with everyday problems like stress, sleep, anxiety and addiction, and how stigma stops people from getting care.",
    published: DATE,
    updated: DATE,
    intro: "In many homes, a psychiatrist is still called a 'doctor for mad people'. This belief keeps many people from getting help that could make life much easier.",
    sections: [
      {
        heading: "What psychiatrists actually treat",
        paragraphs: ["Most people who see a psychiatrist have common, everyday problems:"],
        points: ["Stress and burnout", "Anxiety and panic", "Low mood and depression", "Sleep problems", "Alcohol, tobacco or drug use", "Sexual health concerns", "Exam or work pressure"],
      },
      {
        heading: "Mental health is health",
        paragraphs: ["The brain is an organ, just like the heart or lungs. Seeing a psychiatrist for anxiety is no different from seeing a physician for blood pressure. Getting help early is a sign of good sense, not weakness."],
      },
      {
        heading: "Talking to family",
        paragraphs: ["If family members are worried about stigma, it can help to explain what you are struggling with and that treatment is confidential. You can bring them to the appointment so they can ask their own questions."],
      },
    ],
    faqs: [
      ["Will people know I saw a psychiatrist?", "Your consultation is confidential and is not shared without your consent."],
      ["Is seeing a psychiatrist only for serious illness?", "No. Most people come for common problems such as stress, anxiety, sleep or low mood."],
    ],
    related: ["stress-burnout", "anxiety-panic-disorder", "depression"],
    video: { id: "XAqwMfOuwH8", title: "सायकॅट्रिस्ट मतलब \"पागलों का डॉक्टर\"?" },
  },
];

export const articleSlugs = articles.map((article) => article.slug);
export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
