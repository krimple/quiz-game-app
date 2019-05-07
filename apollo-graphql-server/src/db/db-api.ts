import db from './db';

export const getQuizzes = async () => {
  try {
    return await db.any('SELECT * from quizzo.quiz');
  } catch (e) {
    console.log('Error occurred when fetching quizzes');
    console.dir(e);
    throw e;
  }
};

export const getQuizList = async () => {
  try {
    return await db.any('SELECT id, title, description from quizzo.quiz');
  } catch (e) {
    console.log('Error occurred when fetching quiz data');
    console.dir(e);
  }
};
