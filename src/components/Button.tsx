import React from 'react'
import searchButton from '../Images/search-icon.svg'
const Button = () => {
  return (
    <form className='A1 position-absolute  top-50  border border-5 border-primary '>
    <input type="search" placeholder="Search..." />
    <button type="submit">Search</button>
  </form>
  )
}

export default Button
