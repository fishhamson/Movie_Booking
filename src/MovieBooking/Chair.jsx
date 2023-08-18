import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/slice'
import cn from 'classnames'
import './style.scss'

const Chair = ({ ghe, className }) => {
  const dispath = useDispatch()
  const { chairBooking, chairBooked } = useSelector((state) => state.movieBooking)
  return (
    <div className={cn('Chair mt-3', className, {
      booking: chairBooking.find((chair) => chair.soGhe === ghe.soGhe),
      booked: chairBooked.find((chair) => chair.soGhe === ghe.soGhe),
    })}
      onClick={() => {
        dispath(movieBookingActions.setChairBooking(ghe))
      }}>
      {ghe.soGhe}
    </div>
  )
}

export default Chair