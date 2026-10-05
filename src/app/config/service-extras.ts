import type { ServiceSlug } from "./service-data";

type ServiceExtra = {
  details?: { heading: string; paragraphs: string[] }[];
  faqs?: [string, string][];
  videos?: { id: string; title: string }[];
};

// Extra content that makes the most visited service pages more specific than the shared template.
export const serviceExtras: Partial<Record<ServiceSlug, ServiceExtra>> = {
  "anxiety-panic-disorder": {
    details: [
      {
        heading: "What people often describe in clinic",
        paragraphs: [
          "Many people first visit a cardiologist or an emergency department because the chest tightness and racing heart feel physical. When tests come back normal but the episodes keep happening, anxiety is often the missing piece. Others describe constant worry about health, family or work that makes it hard to switch off at night.",
          "A common pattern is avoidance: skipping the local train, crowded malls or meetings because panic happened there once. Avoidance brings short relief but usually makes the fear stronger over time.",
        ],
      },
      {
        heading: "How long treatment usually takes",
        paragraphs: ["Many people notice improvement within a few weeks of starting treatment. Therapy skills keep working after treatment ends, and if medicines are used they are usually continued for some months after you feel better before being reduced gradually with your doctor."],
      },
    ],
    faqs: [
      ["Is anxiety the same as stress?", "No. Stress is a response to pressure and usually eases when the pressure passes. Anxiety can continue without a clear trigger and affect daily life."],
      ["Can anxiety come back after treatment?", "It can during stressful periods, but the skills learned in treatment help you manage it earlier, and help is available again if needed."],
    ],
    videos: [{ id: "49KywirUKTA", title: "Certainty from an uncertain situation. Save this for tonight." }],
  },
  depression: {
    details: [
      {
        heading: "Depression does not always look like sadness",
        paragraphs: [
          "Many people come in describing tiredness, body aches, headaches, poor sleep or irritability rather than sadness. Students may notice falling marks and difficulty concentrating; working adults may find simple tasks taking much longer. Family members often notice withdrawal before the person does.",
          "Depression can also follow childbirth, a major illness, job loss or bereavement. These are understandable reasons to feel low, and they can still lead to depression that needs treatment.",
        ],
      },
      {
        heading: "What recovery usually looks like",
        paragraphs: ["Improvement is usually gradual. Sleep and energy often improve first, and mood and interest follow. Regular follow ups make it possible to adjust treatment if progress is slow, and to plan how to stay well once you recover."],
      },
    ],
    faqs: [
      ["How long does depression treatment take?", "It depends on severity, but many people feel better within weeks to a few months, and treatment is usually continued for a while after recovery to prevent relapse."],
      ["Can depression get better without medicines?", "Milder depression often improves with therapy and lifestyle changes. Moderate or severe depression often benefits from medicines as well."],
    ],
  },
  "sexual-health": {
    details: [
      {
        heading: "Concerns people bring",
        paragraphs: [
          "Common concerns include erectile difficulties, premature ejaculation, low desire, pain during intercourse, performance anxiety, worry about masturbation and questions before or after marriage. Many people have waited years before seeking help, often because they did not know who to ask.",
          "Sexual difficulties frequently involve both body and mind. Diabetes, blood pressure, smoking, alcohol, some medicines, stress and relationship strain can all play a part, so the assessment looks at the full picture.",
        ],
      },
      {
        heading: "A respectful, private conversation",
        paragraphs: ["There is no need to feel embarrassed. You can come alone or with your partner, use whichever words feel comfortable, and consult in Hindi, Marathi or English. Avoid unprescribed medicines and online remedies, which can be harmful and may hide an underlying condition."],
      },
    ],
    faqs: [
      ["Is premature ejaculation treatable?", "Yes. Behavioural techniques, counselling and medicines when appropriate help most men."],
      ["Can stress cause erectile problems?", "Yes. Stress and performance anxiety are common causes, often alongside physical factors."],
    ],
  },
  "de-addiction": {
    details: [
      {
        heading: "Substances people seek help for",
        paragraphs: [
          "The most common are alcohol, tobacco and nicotine, cannabis and sleeping pills or painkillers. Some people come for gambling or gaming that has gone out of control. Many have tried to stop several times on their own, and family members often make the first call.",
          "Addiction is a health condition, not a lack of willpower. It changes how the brain responds to cravings and stress, which is why support and sometimes medicines make stopping more achievable.",
        ],
      },
      {
        heading: "Safe detox and staying stopped",
        paragraphs: ["Stopping heavy daily drinking or some pills suddenly can cause dangerous withdrawal, so detox should be planned with a doctor. After detox, treatment focuses on preventing relapse: understanding triggers, managing cravings, treating anxiety, depression or sleep problems that often go along with addiction, and involving family where helpful."],
      },
    ],
    faqs: [
      ["Can de-addiction treatment be done without admission?", "Often, yes. Outpatient treatment is suitable for many people, but heavy dependence or past withdrawal seizures may need admission."],
      ["Can family members come for advice?", "Yes. Family members can consult about how to support someone and how to encourage them to seek help."],
    ],
    videos: [{ id: "k5QjJWNEizU", title: "Don't be fooled by 24hr Detox videos on social media" }],
  },
  "sleep-disorders": {
    details: [
      {
        heading: "Common sleep patterns we see",
        paragraphs: [
          "The most common is difficulty falling asleep because the mind will not slow down, often linked with stress or anxiety. Others wake at 3 or 4 am and cannot get back to sleep, which can be a sign of depression. Shift work, late screen use and irregular routines also disturb sleep for many people in Mumbai.",
          "Some people have relied on sleeping pills for months or years and want to stop safely. This is possible with a gradual, supervised plan.",
        ],
      },
      {
        heading: "Treating the cause, not just the symptom",
        paragraphs: ["Good treatment looks for what is keeping poor sleep going. Cognitive behavioural therapy for insomnia, a consistent routine and treating anxiety or depression usually work better in the long run than sleeping pills alone. Loud snoring with daytime sleepiness may need a sleep study."],
      },
    ],
    faqs: [
      ["How can I stop taking sleeping pills?", "Do not stop suddenly. A psychiatrist can plan a gradual reduction and other ways to support sleep."],
      ["Is it normal to wake up at night?", "Brief waking is normal. Regularly lying awake for long periods and feeling tired during the day is worth discussing."],
    ],
  },
  "stress-burnout": {
    videos: [
      { id: "k66OErjSo4s", title: "Working 14 hours doesn't make you disciplined" },
      { id: "tIr2Ft6yhvg", title: "Why do some people handle stress better than others? Circle of control" },
    ],
  },
  "productivity-focus": {
    videos: [
      { id: "JQqg1WG3-Vk", title: "Your brain just needed a smaller first step" },
      { id: "nUEbRrXnCyw", title: "Sunk cost isn't loyalty, it's a cognitive trap" },
    ],
  },
};
