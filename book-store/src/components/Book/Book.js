import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import "./Book.css"

const Book = (props) => {
  const { _id, title, author, publisher, isbn, avail, who, due } = props.book;
  return (
    <div className='card'>
      <article>By { author } </article>
      <h3>{title}</h3>
      <p>{publisher}</p>
      <h2>{isbn}</h2>
      {/* <p>Available: {avail}</p> */}
      <p>Checked out by: {who}</p>
      <p>Due Date: {due}</p>
      <Button LinkComponent={Link} to={`/books/${_id}`}>Check Out/In</Button>
      <Button>Delete</Button>
    </div>
  )
}

export default Book