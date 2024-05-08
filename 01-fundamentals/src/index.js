import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    id: 1,
    title: 'Fight Club',
    author: 'Chuck Palahniuk',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQHrDSARiAi40mnBrXnU9o1nm4hygOLUAN5TNqFqIVA&s',
  },
  {
    id: 2,
    title: 'The Alchemist',
    author: 'Paulo Cuelo',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F552%2F0*oGUMQVMVxjXCcS1B.jpg&f=1&nofb=1&ipt=368c38fca20864b9ca0ea49f37b821dfb18e799924a152b6d6fe58cc03ceadce&ipo=images',
  }
]

const BookList = () => {

  const getBook = (id) => {
    console.log('book id', id);
    const book = books.find(book => book.id === id);
    console.log('book', book)
  }

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { id, img, title, author, getBook } = props;
  
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>click me</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

