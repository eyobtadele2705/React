import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { type } from '@testing-library/user-event/dist/type'

const books = [
  {
    id: 1,
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg',
  },
  {
    id: 2,
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
  {
    id: 3,
    author: 'Alisson Espach',
    title: 'The Wedding People',
    img: 'https://images-na.ssl-images-amazon.com/images/I/817-sS+8RaL._AC_UL210_SR195,210_.jpg',
  },
  {
    id: 4,
    author: 'Freida McFadden',
    title: 'Never Lie',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81PIs7jhL0L._AC_UL210_SR195,210_.jpg',
  },
]

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
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
  // console.log(props)

  const { author, title, img, getBook, id } = props

  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <button onClick={getSingleBook}>CLick Me</button>
      <h4>{author}</h4>
    </article>
  )
}
/*

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('onSubmit')
  }
  return (
    <section>
      <form onSubmit={onSubmit}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type='submit'>submit</button>
      </form>
      <div>
        <button onClick={handleButtonClick}>click me</button>
      </div>
    </section>
  )
}

*/
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
