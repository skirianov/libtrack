import React from 'react';

import { booksAction } from './booksReducer';

const BookList = ({ books }) => (
  <div>
    {books ? (
      <ul>
        {books.map((book) => <li key={book.id}>{book.title}</li>)}
      </ul>
    ) : null }
  </div>
);

export default BookList;
