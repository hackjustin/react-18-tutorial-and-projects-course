import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    id: 1,
    name: 'Fight Club',
    author: 'Chuck Palahniuk',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQHrDSARiAi40mnBrXnU9o1nm4hygOLUAN5TNqFqIVA&s',
  },
  {
    id: 2,
    name: 'The Alchemist',
    author: 'Paulo Cuelo',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F552%2F0*oGUMQVMVxjXCcS1B.jpg&f=1&nofb=1&ipt=368c38fca20864b9ca0ea49f37b821dfb18e799924a152b6d6fe58cc03ceadce&ipo=images',
  }
]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // const { name, author, img, id } = book;
        // return <Book key={id} name={name} author={author} img={img} />
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, name, author } = props;
  console.log(props)
  
  return (
    <article className='book'>
      <Image img={img} />
      <Title name={name} />
      <Author author={author} />
    </article>
  )
}

const Image = ({ img }) => <img src={img} alt="fight-club-book-cover" />
const Title = ({ name }) => <h2>{name}</h2>
const Author = ({ author }) => <h4>{author}</h4>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);