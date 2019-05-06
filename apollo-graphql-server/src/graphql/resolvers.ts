import { getQuizzes } from '../db/db-api';

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
    books: () => books,
    getQuizzes: () => {
      return getQuizzes().then(quizzes => stripScoresFromQuizzes(quizzes));
    }
  }
};

export default resolvers;

