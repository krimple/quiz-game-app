import gameClient from './game-client';
import {gql} from "apollo-boost";

export async function getBooks() {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await gameClient.query({
        query: gql`
          query {
            books {
              title
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
