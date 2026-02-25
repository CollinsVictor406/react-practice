export const Book = ( props ) =>{ 
    const {image, title, author, children, getBook, id} = props
    console.log(props);
    const getSingleBook = () =>{
        getBook(id)
    }
    return <article className='book'>
       <img src={image} alt='story'></img>
       <h2>{title}</h2>
       <button onClick={getSingleBook}>Click Me</button>
       <h4>{author}</h4>
           {children}
    </article>
    }