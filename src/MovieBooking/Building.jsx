import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/slice'

const Building = () => {
  const dispatch = useDispatch()
  const { chairBooking } = useSelector((state) => state.movieBooking)
  return (
    <div>
      <h2 className="mt-5">Danh sách ghế bạn chọn</h2>
      <div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair booked"></div>
          <p>Ghế đã đặt</p>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair booking"></div>
          <p>Ghế đang chon</p>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair"></div>
          <p>Ghế chưa đặt</p>
        </div>
      </div>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {chairBooking?.map((chair) => (
            <tr key={chair.soGhe}>
              <td>{chair.soGhe}</td>
              <td>{chair.gia}</td>
              <td
                className="text-danger fw-bold fs-4"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  dispatch(movieBookingActions.setChairBooking(chair))
                }}
              >
                X
              </td>
            </tr>
          ))}

          <tr>
            <td>Tổng tiền thanh toán</td>
            <td>
              {chairBooking?.reduce((total, chair) => {
                return (total += chair.gia)
              }, 0)}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button
        className="btn btn-success mt-3"
        onClick={() => {
          dispatch(movieBookingActions.setChairBooked())
        }}
      >
        Thanh toán
      </button>
    </div>
  )
}

export default Building