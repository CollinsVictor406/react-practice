import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {books} from './books'
import {Book} from './book.js'

const BookList = () =>{
    const getBook = (id) =>{
        const book = books.find((book) => book.id === id)
        console.log(book);
    }
  return <>
   <h1>Best Sellers</h1>
    <section className='booklist'>
       {books.map((book,index)=>{
        // const { title, author, image, id} = book
        return <Book {...book}  key={book.id} getBook={getBook} index={index}/>
       })}
  </section>
  </>
}

// const Replace = () =>{
//     return <h1 className='class'>hello world</h1>
// }

    

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);