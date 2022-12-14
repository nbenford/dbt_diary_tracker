// Load and instantiate Chance
var chance = require('chance').Chance();

const surveyResultJSON_1 = {
  illegalSubstances: {
    Cannabis: 'Used more than once',
    Cocaine: 'Did not use',
    Heroin: 'Did not use',
    MDMA: 'Did not use',
    Methamphetamine: 'Used more than once',
    GHB: 'Used 1 time',
    Inhalants: 'Did not use',
    Ketamine: 'Did not use',
    synthetics: 'Did not use',
    LSD: 'Did not use',
    otherPsych: 'Did not use',
    Other: 'Did not use',
  },
  alcoholUse: {
    Alcohol: 'More than 6 drinks',
  },
  prescriptionMeds: {
    'Benzodiazepines (Xanax, Ativan)': 'Used More Than 1 Time',
    'Barbiturates (Nembutal, Seconal)': 'Did Not Use',
    'Sleep Medications (Ambien, Lunesta)': 'Did Not Use',
    Codeine: 'Used 1 Time',
    Morphine: 'Did Not Use',
    Methadone: 'Did Not Use',
    Fentanyl: 'Used More Than 1 Time',
    'Oxycodone (Oxycontin, Percocet, Vicodin)': 'Did Not Use',
    'Amphetamines/Methylphenidate (Adderal, Dexedrine, Ritalin)': 'Did Not Use',
    Other: 'Did Not Use',
  },
  otcMeds: {
    Antihistamines: 'Did not use',
    'Sleep Aids': 'Did not use',
    'Caffeine Pills': 'Used 1 time',
    'Ephedrine/Pseudoephedrine': 'Column 1',
    Dextromethorphan: 'Did not use',
    Laxatives: 'Used more than 1 time',
    'Anabolic Steroids': 'Did not use',
    Ephedrine: 'Did not use',
  },
  lieToday: {
    Lies: 'I lied more than 1 time',
  },
  dbtSkillsUsed: "Tried but couldn't use them",
  readyToStart: true,
  siDesire: 3,
  nssiDesire: 4,
  painDesire: 3,
  sadnessDesire: 3,
  shameDesire: 4,
  angerDesire: 4,
  fearDesire: 3,
  nssiEngage: true,
  joyToday: 0,
  comment: 'today sucked',
  signature:
    'data:image/png;base64,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',
};

const surveyResultJSON_2 = {
  illegalSubstances: {
    Cannabis: 'Used more than once',
    Cocaine: 'Did not use',
    Heroin: 'Did not use',
    MDMA: 'Did not use',
    Methamphetamine: 'Did not use',
    GHB: 'Did not use',
    Inhalants: 'Did not use',
    Ketamine: 'Did not use',
    synthetics: 'Did not use',
    LSD: 'Did not use',
    otherPsych: 'Did not use',
    Other: 'Did not use',
  },
  alcoholUse: {
    Alcohol: 'Between 1-3 drinks',
  },
  prescriptionMeds: {
    'Benzodiazepines (Xanax, Ativan)': 'Used 1 Time',
    'Barbiturates (Nembutal, Seconal)': 'Did Not Use',
    'Sleep Medications (Ambien, Lunesta)': 'Did Not Use',
    Codeine: 'Did Not Use',
    Morphine: 'Did Not Use',
    Methadone: 'Did Not Use',
    Fentanyl: 'Did Not Use',
    'Oxycodone (Oxycontin, Percocet, Vicodin)': 'Did Not Use',
    'Amphetamines/Methylphenidate (Adderal, Dexedrine, Ritalin)': 'Did Not Use',
    Other: 'Did Not Use',
  },
  otcMeds: {
    Antihistamines: 'Did not use',
    'Sleep Aids': 'Did not use',
    'Caffeine Pills': 'Did not use',
    'Ephedrine/Pseudoephedrine': 'Column 1',
    Dextromethorphan: 'Did not use',
    Laxatives: 'Did not use',
    'Anabolic Steroids': 'Did not use',
    Ephedrine: 'Used 1 time',
  },
  lieToday: {
    Lies: 'I lied 1 time',
  },
  dbtSkillsUsed: 'Tried, could use them, helped',
  readyToStart: true,
  siDesire: 1,
  nssiDesire: 1,
  painDesire: 2,
  sadnessDesire: 1,
  shameDesire: 1,
  angerDesire: 2,
  fearDesire: 3,
  nssiEngage: false,
  joyToday: 3,
  question20: [
    'Crisis Survival ???ACCEPTS??? Skills',
    'Objectiveness Effectiveness ???DEAR MAN??? Skills',
  ],
  comment: 'today was better',
  signature:
    'data:image/png;base64,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',
};

const surveyResultJSON_3 = {
  illegalSubstances: {
    Cannabis: 'Used 1 time',
    Cocaine: 'Did not use',
    Heroin: 'Did not use',
    MDMA: 'Did not use',
    Methamphetamine: 'Did not use',
    GHB: 'Did not use',
    Inhalants: 'Did not use',
    Ketamine: 'Did not use',
    synthetics: 'Did not use',
    LSD: 'Did not use',
    otherPsych: 'Did not use',
    Other: 'Did not use',
  },
  alcoholUse: {
    Alcohol: 'Did not use',
  },
  prescriptionMeds: {
    'Benzodiazepines (Xanax, Ativan)': 'Did Not Use',
    'Barbiturates (Nembutal, Seconal)': 'Did Not Use',
    'Sleep Medications (Ambien, Lunesta)': 'Did Not Use',
    Codeine: 'Did Not Use',
    Morphine: 'Did Not Use',
    Methadone: 'Did Not Use',
    Fentanyl: 'Did Not Use',
    'Oxycodone (Oxycontin, Percocet, Vicodin)': 'Did Not Use',
    'Amphetamines/Methylphenidate (Adderal, Dexedrine, Ritalin)': 'Did Not Use',
    Other: 'Did Not Use',
  },
  otcMeds: {
    Antihistamines: 'Did not use',
    'Sleep Aids': 'Did not use',
    'Caffeine Pills': 'Did not use',
    'Ephedrine/Pseudoephedrine': 'Column 1',
    Dextromethorphan: 'Did not use',
    Laxatives: 'Did not use',
    'Anabolic Steroids': 'Did not use',
    Ephedrine: 'Did not use',
  },
  lieToday: {
    Lies: 'I did not lie',
  },
  dbtSkillsUsed: 'Tried, could use them, helped',
  readyToStart: true,
  siDesire: 0,
  nssiDesire: 0,
  painDesire: 1,
  sadnessDesire: 1,
  shameDesire: 0,
  angerDesire: 0,
  fearDesire: 0,
  nssiEngage: false,
  joyToday: 4,
  question20: [
    'Improve the Moment ???IMPROVE??? Skills',
    'Pros and Cons / Accepting Reality Skills',
    'Build Mastery Skills',
    'itemSelf-Respect Effectiveness ???FAST??? Skills',
  ],
  comment: 'today was great!',
  signature:
    'data:image/png;base64,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',
};
const surveyResultJSON = {
  illegalSubstances: {
    Cannabis: 'Used 1 time',
    Cocaine: 'Did not use',
    Heroin: 'Did not use',
    MDMA: 'Did not use',
    Methamphetamine: 'Did not use',
    GHB: 'Did not use',
    Inhalants: 'Did not use',
    Ketamine: 'Did not use',
    synthetics: 'Did not use',
    LSD: 'Did not use',
    otherPsych: 'Did not use',
    Other: 'Did not use',
  },
  alcoholUse: {
    Alcohol: 'Did not use',
  },
  prescriptionMeds: {
    'Benzodiazepines (Xanax, Ativan)': 'Did Not Use',
    'Barbiturates (Nembutal, Seconal)': 'Did Not Use',
    'Sleep Medications (Ambien, Lunesta)': 'Did Not Use',
    Codeine: 'Did Not Use',
    Morphine: 'Did Not Use',
    Methadone: 'Did Not Use',
    Fentanyl: 'Did Not Use',
    'Oxycodone (Oxycontin, Percocet, Vicodin)': 'Did Not Use',
    'Amphetamines/Methylphenidate (Adderal, Dexedrine, Ritalin)': 'Did Not Use',
    Other: 'Did Not Use',
  },
  otcMeds: {
    Antihistamines: 'Did not use',
    'Sleep Aids': 'Did not use',
    'Caffeine Pills': 'Did not use',
    'Ephedrine/Pseudoephedrine': 'Column 1',
    Dextromethorphan: 'Did not use',
    Laxatives: 'Did not use',
    'Anabolic Steroids': 'Did not use',
    Ephedrine: 'Did not use',
  },
  lieToday: {
    Lies: 'I did not lie',
  },
  dbtSkillsUsed: 'Tried, could use them, helped',
  readyToStart: true,
  siDesire: chance.integer({ min: 0, max: 5 }),
  nssiDesire: chance.integer({ min: 0, max: 5 }),
  painDesire: chance.integer({ min: 0, max: 5 }),
  sadnessDesire: chance.integer({ min: 0, max: 5 }),
  shameDesire: chance.integer({ min: 0, max: 5 }),
  angerDesire: chance.integer({ min: 0, max: 5 }),
  fearDesire: chance.integer({ min: 0, max: 5 }),
  nssiEngage: false,
  joyToday: chance.integer({ min: 0, max: 5 }),
  question20: [
    'Improve the Moment ???IMPROVE??? Skills',
    'Pros and Cons / Accepting Reality Skills',
    'Build Mastery Skills',
    'itemSelf-Respect Effectiveness ???FAST??? Skills',
  ],
  comment: 'today was great!',
  signature:
    'data:image/png;base64,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',
};

module.exports = {
  surveyResultJSON_1,
  surveyResultJSON_2,
  surveyResultJSON_3,
  surveyResultJSON,
};
