import React, { useState } from 'react';
import './App.css';
import { getBooks } from "./graphql/game-api";

function App() {
  const [books, setBooks] = useState([]);
  getBooks().then(r => setBooks(r.data.books), e => console.error(e));
  return (
    <div className="App">

      {
        books &&
        <ul>
          { books.map((b,idx) => (<li key={idx}>{b.title}</li>)) }
        </ul>
      }
   </div>
  );
}



export default App;
