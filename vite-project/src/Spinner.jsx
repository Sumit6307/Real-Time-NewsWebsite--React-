import React, { Component } from 'react'
import Book from './Book.gif'


export  class Spinner extends Component {
  render() {
    return (
      <div  className='text-center' >
     
  <img src={Book} alt='loading' ></img>

      </div>
    )
  }
}
