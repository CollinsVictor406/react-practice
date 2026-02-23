import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () =>{
  return <section>
       <Book></Book>
       <Book></Book>
       <Book></Book>
       <Book></Book>
  </section>
}

const Book = () =>{ 
    return <article>
     <Image></Image>
     <Title></Title>
     <Author></Author>
    </article>}
const Image = () =>{
    return <img src='https://m.media-amazon.com/images/I/81niTZGXxXL._AC_UL480_FMwebp_QL65_.jpg' alt='story'></img>
}
const Title = () =>{
    return <h2>Failure is Part of the Journey</h2>
}
const Author = () =>{
    return <h2>Collins Victor</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);