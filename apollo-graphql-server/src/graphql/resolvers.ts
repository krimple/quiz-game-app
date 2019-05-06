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


export const resolvers = {
  Query: {
    books: () => books
  }
};

export default resolvers;

