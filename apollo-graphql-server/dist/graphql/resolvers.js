"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.resolvers = {
    Query: {
        books: () => books
    }
};
exports.default = exports.resolvers;
