import React from 'react'
import "../styles/BookRide.css"
import CreateBooking from '../components/CreateBooking/CreateBooking'
import LiveDriverMap from '../components/LiveDriverMap/LiveDriverMap'

const BookRide = () => {
  return (
    <div className='bookride-container'>
      <CreateBooking/>
      <LiveDriverMap/>
    </div>
  )
}

export default BookRide
