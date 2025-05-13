import { useState } from 'react';
import  './Book.css'
function Book ({title, author, description, pages, image}) {
 const [isRead , setIsRead ] = useState('');
  return (
    <div className="bookStyle">
      <img src={image } alt="book-image" />
      <h1>Book Nam: {title}</h1>
      <h2> Author : {author}</h2>
      <p> Description : {description } </p>
      <p>Pages: {pages}</p>
      <button
      onClick={ () =>{
        setIsRead(!isRead)
      }}
     >{ isRead ? "Read" : "Unread" }</button>
    </div>
  )
}
export default Book;