var chance = require('chance').Chance();

//Get our database and models used in seed
const { conn, User, Survey, SurveyResult } = require('./');
const surveyJSON = require('../../src/data/survey_json');
const {
  surveyResultJSON_1,
  surveyResultJSON_2,
  surveyResultJSON_3,
  surveyResultJSON,
} = require('../../src/data/surveyResult_json');

// GET USERS
const getUsers = require('./getUsers');

//SYNC AND SEED THE DATABASE
//seed users->
const seed = async () => {
  try {
    //WITH FORCE TRUE ENABLED, THE DATABASE WILL DROP THE TABLE BEFORE CREATING A NEW ONE
    console.log('Seeding started...');
    await conn.sync({ force: true });

    //LOADING USERS
    const usersData = await getUsers();
    await Promise.all(usersData.map((user) => User.create(user)));
    await User.create({
      fName: 'Grace',
      lName: 'Shopper',
      username: 'admin',
      password: 'password',
      email: 'graceShopper@email.com',
      isAdmin: true,
    });

    await Survey.create({
      name: surveyJSON.title,
      surveyJSON: surveyJSON,
    });

    // await SurveyResult.create({
    //   surveyResultJSON: surveyResultJSON_1,
    //   userId: 1,
    //   surveyId: 1,
    // });

    // await SurveyResult.create({
    //   surveyResultJSON: surveyResultJSON_2,
    //   userId: 1,
    //   surveyId: 1,
    // });

    // await SurveyResult.create({
    //   surveyResultJSON: surveyResultJSON_3,
    //   userId: 1,
    //   surveyId: 1,
    // });

    // await SurveyResult.create({
    //   surveyResultJSON: surveyResultJSON_1,
    //   userId: 2,
    //   surveyId: 1,
    // });

    // await SurveyResult.create({
    //   surveyResultJSON: surveyResultJSON_2,
    //   userId: 2,
    //   surveyId: 1,
    // });

    // await SurveyResult.create({
    //   surveyResultJSON: surveyResultJSON_3,
    //   userId: 2,
    //   surveyId: 1,
    // });
    let base = 0;
    let ceiling = 5;
    for (let i = 0; i < 90; i++) {
      if (i >= 30 && i < 60) {
        base = 1;
        ceiling = 4;
      } else if (i >= 60 && i < 80) {
        base = 2;
        ceiling = 3;
      } else if (i > 80) {
        base = 4;
        ceiling = 2;
      }
      await SurveyResult.create({
        surveyResultJSON: {
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
            'Amphetamines/Methylphenidate (Adderal, Dexedrine, Ritalin)':
              'Did Not Use',
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
          siDesire: chance.integer({ min: 0, max: ceiling }),
          nssiDesire: chance.integer({ min: 0, max: ceiling }),
          painDesire: chance.integer({ min: 0, max: ceiling }),
          sadnessDesire: chance.integer({ min: 0, max: ceiling }),
          shameDesire: chance.integer({ min: 0, max: ceiling }),
          angerDesire: chance.integer({ min: 0, max: ceiling }),
          fearDesire: chance.integer({ min: 0, max: ceiling }),
          nssiEngage: false,
          joyToday: chance.integer({ min: base, max: 5 }),
          question20: [
            'Improve the Moment “IMPROVE” Skills',
            'Pros and Cons / Accepting Reality Skills',
            'Build Mastery Skills',
            'itemSelf-Respect Effectiveness “FAST” Skills',
          ],
          comment: 'today was great!',
          signature:
            'data:image/png;base64,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',
        },
        userId: 2,
        surveyId: 1,
      });
    }

    console.log('Seeding successful!');
  } catch (err) {
    console.log(err);
  }
};

const runSeed = async () => {
  console.log('Start seeding...');
  try {
    await seed();

    //MAGIC METHODS
    //Psssst! Hey, buddy! You wanna see the magic methods under the hood? Check THIS out! Uncomment below.
    // const user = await User.findByPk(1);
    // const survey = await Survey.findByPk(1);
    // const surveyResult = await SurveyResult.findByPk(1);

    // console.log('U: ', Object.keys(user.__proto__));
    // console.log('S: ', Object.keys(survey.__proto__));
    // console.log('SR: ', Object.keys(surveyResult.__proto__));
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    console.log('Closing db connection.');
    await conn.close();
    console.log('Db connection closed');
  }
};

if (module === require.main) {
  runSeed();
}

module.exports = seed;
