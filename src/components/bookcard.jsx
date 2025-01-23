// write the book component code here
import React from 'react';

function BookCard({ image, name, genre, author }) {
  return (
    <div
      className="book-card" style={{display: 'grid', padding:10, margin: 10 }}   >
      <img src={image} alt={name} style={{height:400 ,width:300}} />
      <h2>{name}</h2>
      <p><strong>Genre:</strong> {genre}</p>
      <p> <strong>Author:</strong> {author} </p>
    </div>
  );
}

export default BookCard;
