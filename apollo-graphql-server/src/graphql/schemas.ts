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
  
  type Choice {
    id: Int!
    key: String!
    text: String!
    correct: Boolean!
  }
  
  type Question {
    id: Int!
    text: String!
    choices: [Choice]
  }
  
  type QuizListing {
    id: Int!
    title: String!
    description: String!
  }

  type Query {
    books: [Book!] 
    getQuizzes: [Quiz!]
    getQuizList: [QuizListing!]
    getRandomQuestion: Question
  }
  
  type Subscription {
    questionSubscription: Question
  }
`;

export default schema;
