import React from 'react'
import ChairList from './ChairList'
import Building from './Building'
import data from './data.json'

const AppMovieBooking = () => {
  return (
    <div className='container text-center'>
      <h1>Movie Booking</h1>
      <div className='row mt-5'>
        <div className='col-8'>
          <div className="p-2 fs-4 bg-dark text-white mb-3">Screen</div>
          <ChairList data={data}/>
        </div>
        <div className='col-4'>
          <Building />
        </div>
      </div>
    </div>
  )
}

export default AppMovieBooking