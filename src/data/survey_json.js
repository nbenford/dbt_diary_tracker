const surveyJSON = {
  title: 'DBT Diary Daily Tracker',
  description: 'Track you progress daily',
  logoPosition: 'right',
  pages: [
    {
      name: 'Welcome!',
      elements: [
        {
          type: 'boolean',
          name: 'readyToStart',
          title: 'Are you ready to start your assessment?',
          correctAnswer: true,
          isRequired: true,
          validators: [
            {
              type: 'expression',
              text: 'Please come back when you are ready to start',
              expression: '{readyToStart} = true',
            },
          ],
        },
      ],
      title: 'Welcome!',
    },
    {
      name: 'Substance Use',
      elements: [
        {
          type: 'rating',
          name: 'subUseDesire',
          title: 'How much did you desire to abuse substances today?',
          isRequired: true,
          rateMin: 0,
          minRateDescription: 'no urge',
          maxRateDescription: 'extreme urge',
        },
      ],
      visible: false,
      title: 'Substance Use',
      description: 'Rate on a scale from 0 (no urge) to 5 (overwhelming urge)',
    },
    {
      name: 'Suicide',
      elements: [
        {
          type: 'rating',
          name: 'siDesire',
          title: 'Suicidal Ideation (SI)',
          isRequired: true,
          rateMin: 0,
          minRateDescription: 'no urge',
          maxRateDescription: 'overwhelming urge',
        },
      ],
      title: 'Suicide',
      description: 'Rate on a scale from 0 (no urge) to 5 (overwhelming urge)',
    },
    {
      name: 'Non-suicidal Self-injurious Behavior',
      elements: [
        {
          type: 'rating',
          name: 'nssiDesire',
          title: 'NSSI',
          isRequired: true,
          rateMin: 0,
          minRateDescription: 'no urge',
          maxRateDescription: 'extreme urge',
        },
      ],
      title: 'Non-suicidal Self-injurious Behavior',
      description: 'Rate on a scale from 0 (no urge) to 5 (overwhelming urge)',
    },
    {
      name: 'Pain',
      elements: [
        {
          type: 'rating',
          name: 'painDesire',
          title: 'Pain',
          isRequired: true,
          rateMin: 0,
          minRateDescription: 'no pain',
          maxRateDescription: 'extreme pain',
        },
      ],
      title: 'Pain',
      description:
        'Rate on a scale from 0 (did not feel pain) to 5 (overwhelming feelings of pain)',
    },
    {
      name: 'Sadness',
      elements: [
        {
          type: 'rating',
          name: 'sadnessDesire',
          title: 'Sadness',
          isRequired: true,
          rateMin: 0,
          minRateDescription: 'no sadness',
          maxRateDescription: 'very sad',
        },
      ],
      title: 'Sadness',
      description:
        'Rate on a scale from 0 (did not feel sadness) to 5 (overwhelming feelings of sadness)',
    },
    {
      name: 'Shame',
      elements: [
        {
          type: 'rating',
          name: 'shameDesire',
          title: 'Shame',
          isRequired: true,
          rateMin: 0,
          minRateDescription: 'no shame felt',
          maxRateDescription: 'shameful',
        },
      ],
      title: 'Shame',
      description:
        'Rate on a scale from 0 (did not feel shame) to 5 (overwhelming feelings of shame)',
    },
    {
      name: 'Anger',
      elements: [
        {
          type: 'rating',
          name: 'angerDesire',
          title: 'Anger',
          isRequired: true,
          rateMin: 0,
          minRateDescription: 'no anger',
          maxRateDescription: 'very angry',
        },
      ],
      title: 'Anger',
      description:
        'Rate on a scale from 0 (did not feel anger) to 5 (overwhelming feelings of anger)',
    },
    {
      name: 'Fear',
      elements: [
        {
          type: 'rating',
          name: 'fearDesire',
          title: 'Fear',
          isRequired: true,
          rateMin: 0,
          minRateDescription: 'no fear',
          maxRateDescription: 'very fearful',
        },
      ],
      title: 'Fear',
      description:
        'Rate on a scale from 0 (did not feel fear) to 5 (overwhelming feelings of fear',
    },
    {
      name: 'Illicit Substances',
      elements: [
        {
          type: 'matrix',
          name: 'illegalSubstances',
          title: 'Did you take illegal substances today?',
          defaultValue: {
            Cannabis: 'Did not use',
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
          isRequired: true,
          alternateRows: true,
          columns: [
            'Did not use',
            'Used 1 time',
            {
              value: 'Used more than once',
              text: 'Used more than 1 time',
            },
          ],
          rows: [
            'Cannabis',
            'Cocaine',
            'Heroin',
            'MDMA',
            'Methamphetamine',
            {
              value: 'GHB',
              text: 'GHB/Rohypnol',
            },
            'Inhalants',
            'Ketamine',
            {
              value: 'synthetics',
              text: 'Kratom or Synthetic Cannabis',
            },
            'LSD',
            {
              value: 'otherPsych',
              text: 'Other Psychedelics',
            },
            'Other',
          ],
        },
      ],
      title: 'Illicit Substances',
      description: 'Did you use any illicit substances today? ',
    },
    {
      name: 'Alcohol Use',
      elements: [
        {
          type: 'matrix',
          name: 'alcoholUse',
          title: 'Did you use alcohol today?',
          defaultValue: {
            Alcohol: 'Did not use',
          },
          isRequired: true,
          columns: [
            'Did not use',
            'Between 1-3 drinks',
            'Between 3-6 drinks',
            'More than 6 drinks',
          ],
          rows: ['Alcohol'],
        },
      ],
      title: 'Alcohol Use',
      description: 'Did you use alcohol today?',
    },
    {
      name: 'Prescription Medication Abuse',
      elements: [
        {
          type: 'matrix',
          name: 'prescriptionMeds',
          title: 'Did you abuse Prescription Medication',
          defaultValue: {
            'Benzodiazepines (Xanax, Ativan)': 'Did Not Use',
            'Barbiturates (Nembutal, Seconal)': 'Did Not Use',
            'Sleep Medications (Ambien, Lunesta)': 'Did Not Use',
            Codeine: 'Did Not Use',
            Morphine: 'Did Not Use',
            Methadone: 'Did Not Use',
            Fentanyl: 'Did Not Use',
            'Oxycodone (Oxycontin, Percocet, Vicodin)': 'Did Not Use',
            'Amphetamines/Methylphenidate (Adderal, Dexedrine, Ritalin)':
              'Did Not Use',
            Other: 'Did Not Use',
          },
          isRequired: true,
          alternateRows: true,
          columns: [
            'Did Not Use',
            'Used 1 Time',
            {
              value: 'Used More Than 1 Time',
              text: 'Used more than 1 time',
            },
          ],
          rows: [
            'Benzodiazepines (Xanax, Ativan)',
            'Barbiturates (Nembutal, Seconal)',
            'Sleep Medications (Ambien, Lunesta)',
            'Codeine',
            'Morphine',
            'Methadone',
            'Fentanyl',
            'Oxycodone (Oxycontin, Percocet, Vicodin)',
            'Amphetamines/Methylphenidate (Adderal, Dexedrine, Ritalin)',
            'Other',
          ],
        },
      ],
      title: 'Prescription Medication Abuse',
      description: 'Did you misuse prescription medications today?',
    },
    {
      name: 'Over the Counter (OTC) Medications',
      elements: [
        {
          type: 'matrix',
          name: 'otcMeds',
          title: 'Did you abuse OTC Medication?',
          defaultValue: {
            Antihistamines: 'Did not use',
            'Sleep Aids': 'Did not use',
            'Caffeine Pills': 'Did not use',
            'Ephedrine/Pseudoephedrine': 'Column 1',
            Dextromethorphan: 'Did not use',
            Laxatives: 'Did not use',
            'Anabolic Steroids': 'Did not use',
            Ephedrine: 'Did not use',
          },
          isRequired: true,
          columns: ['Did not use', 'Used 1 time', 'Used more than 1 time'],
          rows: [
            'Antihistamines',
            'Sleep Aids',
            'Caffeine Pills',
            'Ephedrine',
            'Dextromethorphan',
            'Laxatives',
            'Anabolic Steroids',
          ],
        },
      ],
      title: 'Over the Counter (OTC) Medications',
      description: 'Did you misuse OTC medications today?',
    },
    {
      name: 'Non-suicidal Self-injurious Behavior Act',
      elements: [
        {
          type: 'boolean',
          name: 'nssiEngage',
          title: 'Did you self-harm?',
          isRequired: true,
        },
      ],
      title: 'Non-suicidal Self-injurious Behavior',
      description: 'Did you engage in NSSI behavior (self-harm)?',
    },
    {
      name: 'Lying',
      elements: [
        {
          type: 'matrix',
          name: 'lieToday',
          title: 'Did you lie today?',
          defaultValue: {
            Lies: 'I did not lie',
          },
          isRequired: true,
          columns: [
            'I did not lie',
            'I lied 1 time',
            'I lied more than 1 time',
          ],
          rows: ['Lies'],
        },
      ],
      title: 'Lying',
      description: 'How many times did you lie today?',
    },
    {
      name: 'Joy',
      elements: [
        {
          type: 'rating',
          name: 'joyToday',
          title: 'Did you feel joy today?',
          isRequired: true,
          rateMin: 0,
          minRateDescription: 'no joy',
          maxRateDescription: 'very joyful',
        },
      ],
      title: 'Joy',
      description:
        'Did you feel joy today? The scale goes from no joy felt (0) to feelings of great joy (5)',
    },
    {
      name: 'DBT Skills',
      elements: [
        {
          type: 'radiogroup',
          name: 'dbtSkillsUsed',
          title: 'Did you use any DBT skills today?',
          defaultValue: 'none',
          isRequired: true,
          choices: [
            'Not thought about or used',
            "Thought about, not used, didn't want to",
            'Thought about, not used, wanted to',
            "Tried but couldn't use them",
            "Tried, could do them, but they didn't help",
            'Tried, could use them, helped',
            "Didn't try, used them, didn't help",
            "Didn't try, used them, helped",
          ],
          hasOther: true,
          hasNone: true,
        },
        {
          type: 'checkbox',
          name: 'question20',
          title: 'Which skills, if any, did you try?',
          choices: [
            'Objectiveness Effectiveness “DEAR MAN” Skills',
            'itRelationship Effectiveness “GIVE” Skills',
            'itemSelf-Respect Effectiveness “FAST” Skills',
            'Crisis Survival “ACCEPTS” Skills',
            'Self-Soothing Skills',
            'Improve the Moment “IMPROVE” Skills',
            'Pros and Cons / Accepting Reality Skills',
            'Reducing Vulnerability Skills',
            'Build Mastery Skills',
            '“What” skills',
            '“How” skills',
          ],
          hasOther: true,
        },
      ],
      title: 'DBT Skills',
      description: 'Did you use your skills?',
    },
    {
      name: 'Comments',
      elements: [
        {
          type: 'comment',
          name: 'comment',
          title:
            "Is there anything you'd like to say about today, good or bad?",
        },
        {
          type: 'signaturepad',
          name: 'signature',
          title: "Please sign your initials to confirm today's entries",
          hideNumber: true,
          isRequired: true,
        },
      ],
      title: 'Comments',
      description: 'Add comments',
    },
  ],
  sendResultOnPageNext: true,
  showProgressBar: 'bottom',
  firstPageIsStarted: true,
  questionsOnPageMode: 'questionPerPage',
  showPreviewBeforeComplete: 'showAllQuestions',
};

module.exports = surveyJSON;
