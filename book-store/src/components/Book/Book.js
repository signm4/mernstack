import { Button } from '@mui/material'
import React from 'react'
import "./Book.css"

const Book = (props) => {
  const { _id, title, author, publisher, isbn, avail, who, due } = props.book;
  return (
    <div className='card'>
      <article>By { author } </article>
      <h3>{title}</h3>
      <p>{publisher}</p>
      <h2>{isbn}</h2>
      <p>{avail}</p>
      <p>{who}</p>
      <p>{due}</p>
      <Button>Update</Button>
      <Button>Delete</Button>
    </div>
  )
}

export default Book