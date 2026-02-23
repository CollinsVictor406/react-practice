import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const books = [ 
    {
    title: 'The Story of My Life',
    author: 'Collins Victor',
    image: 'https://m.media-amazon.com/images/I/81niTZGXxXL._AC_UL480_FMwebp_QL65_.jpg',
    id:1
},
 {
    title: 'Lost',
    author: 'Ehis Victor',
    image: 'https://m.media-amazon.com/images/I/81AnqpwwO1L._AC_UL480_FMwebp_QL65_.jpg',
    id:2,
},    {
    title: 'The Girl Behind the Gates: The gripping, heartbreaking historical bestseller based on a true',
    author: 'Daniel Victor',
    image: 'https://m.media-amazon.com/images/I/91jNTrkt6cL._AC_UL480_FMwebp_QL65_.jpg',
    id:3
}

]


const BookList = () =>{
  return <section className='booklist'>
       <EventExample />
       {books.map((book)=>{
        // const { title, author, image, id} = book
        return <Book {...book}  key={book.id}/>
       })}
  </section>
}
const EventExample = () =>{
    return <section>
       <form>
        <h2>Typical Form</h2>
        <input type='text' name='example' style={{margin:'1rem'}}></input>
       </form>
       <button>Click me</button>
    </section>
}
const Book = ({image, title, author,children}) =>{ 
//    const {image, title, author} = props
    return <article className='book'>
       <img src={image} alt='story'></img>
       <h2>{title}</h2>
       <h4>{author}</h4>
           {children}
    </article>}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);