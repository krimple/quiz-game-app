import * as faker from 'faker/locale/en_US';

const generateRandomQuestions = (pubsub) => {
  setInterval(() => {
    const question = getRandomQuestion();
    pubsub.publish('nextQuestion',  {questionSubscription: question});
    console.log('just emitted another question', question);
  }, 2000);
};

export function getRandomQuestion() {
  return {
    id: faker.random.number(),
    text: faker.random.words(),
    choices: [{
      id: faker.random.number(),
      key: 'A',
      text: faker.random.words(),
      correct: faker.random.boolean()
    },
      {
        id: faker.random.number(),
        key: 'B',
        text: faker.random.words(),
        correct: faker.random.boolean()
      },
      {
        id: faker.random.number(),
        key: 'C',
        text: faker.random.words(),
        correct: faker.random.boolean()
      }]
  };
}
export default generateRandomQuestions;
