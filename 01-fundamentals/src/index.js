import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    name: 'Fight Club',
    author: 'Chuck Palahniuk',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQHrDSARiAi40mnBrXnU9o1nm4hygOLUAN5TNqFqIVA&s',
  },
  {
    name: 'The Alchemist',
    author: 'Paulo Cuelo',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8s7ZQ7z1tjJ8BzE8H3YRv2y8s6H6JQ8Zk3y1h2c2q2w&s',
  }
]
const BookList = () => {
  return (
    <section className='booklist'>
 
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