export const Book = ( props ) =>{ 
    const {image, title, author, children, getBook, id,index} = props
    console.log(index);
    const getSingleBook = () =>{
        getBook(id)
    }
    return <article className='book'>
       <img src={image} alt='story'></img>
       <h2>{title}</h2>
       <button onClick={getSingleBook}>Click Me</button>
       <h4>{author}</h4>
       <span className="span">{`#${index + 1}`}</span>
           {children}
    </article>
    }