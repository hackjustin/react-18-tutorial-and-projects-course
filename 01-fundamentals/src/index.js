import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQHrDSARiAi40mnBrXnU9o1nm4hygOLUAN5TNqFqIVA&s" alt="fight-club-book-cover" />
const Title = () => <h2>Fight Club</h2>
const Author = () => <h4>Chuck P.</h4>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);