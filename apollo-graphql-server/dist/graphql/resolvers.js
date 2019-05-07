"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_api_1 = require("../db/db-api");
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
        const quizDataWithoutScores = Object.assign({}, parsedQuizData, { questions: parsedQuizData.questions.map(question => {
                return Object.assign({}, question, { options: question.options.map(o => {
                        const { score } = o, rest = __rest(o, ["score"]);
                        return rest;
                    }) });
            }) });
        return Object.assign({}, quiz, { quizdata: JSON.stringify(quizDataWithoutScores) });
    });
};
exports.resolvers = {
    Query: {
        books: () => books,
        getQuizzes: () => {
            return db_api_1.getQuizzes().then(quizzes => stripScoresFromQuizzes(quizzes));
        },
        getQuizList: () => {
            return db_api_1.getQuizList();
        }
    }
};
exports.default = exports.resolvers;
