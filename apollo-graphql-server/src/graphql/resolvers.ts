import { getQuizzes, getQuizList } from '../db/db-api';
import { getRandomQuestion} from '../server/random-question-generator';

const { find, filter } = require('lodash');
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  }
];


const stripScoresFromQuizzes = (quizzes) => {
  return quizzes.map(quiz => {
    const parsedQuizData = JSON.parse(quiz.quizdata);
    const quizDataWithoutScores = {
      ...parsedQuizData,
      questions: parsedQuizData.questions.map(question => {
          return {
            ...question,
            options: question.options.map(o => {
              const {score, ...rest} = o;
              return rest;
            })
          };
        })
      };

    return { ...quiz, quizdata: JSON.stringify(quizDataWithoutScores) };
  });
};

export const resolvers = {
  Query: {
    getQuizzes: () => {
      return getQuizzes().then(quizzes => stripScoresFromQuizzes(quizzes));
    },
    getQuizList: () => {
      return getQuizList()
    },
    getRandomQuestion: () => {
      return getRandomQuestion();
    }
  },
  Subscription: {
    questionSubscription: {
      subscribe: (parent, args, ctx) => {
        return ctx.PubSub.asyncIterator(['nextQuestion']);
      }
    }
  }
};

export default resolvers;

