const { gql } = require('apollo-server');

const schema = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Quiz {
    id: Int!
    title: String!
    description: String!
    quizdata: String!
  }

  type Query {
    books: [Book!] 
    getQuizzes: [Quiz!]
  }
  
  
`;

export default schema;
