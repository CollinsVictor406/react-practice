import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

    const title = 'The Story of My Life';
    const author = 'Collins Victor';
    const image = 'https://m.media-amazon.com/images/I/81niTZGXxXL._AC_UL480_FMwebp_QL65_.jpg';

const BookList = () =>{
  return <section className='booklist'>
          <Book title={title} author={author} image={image}/>
          <Book title={title} author={author} image={image}/>
  </section>
}
 
const Book = (props) =>{ 
   console.log(props);
    return <article className='book'>
     <img src={props.image} alt='story'></img>
     <h2>{props.title}</h2>
        <h4>{props.author}</h4>
    </article>}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);