import gameClient from './game-client';
import {gql} from "apollo-boost";

export async function getQuizList() {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await gameClient.query({
        query: gql`
          query {
            getQuizList {
              id
              title
              description
            }
          }
        `
      });
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
}

export async function randomQuestionQuery() {
  return new Promise(async (resolve, reject)=> {
    try {
      const result = await gameClient.query({
        query: gql`
          query {
            getRandomQuestion {
              text
              id
              choices {
                id
                key
                text
              }
            }
          }
        `
      });
      resolve (result);

    } catch (e) {
      reject(e);
    }
  });
}

export function questionStream() {
  return gameClient.subscribe({
    query: gql`
      subscription {
        questionSubscription{
          id
          text
          choices {
            id
            key
            text
            correct
          }
        }
      }
    `
  })
}
