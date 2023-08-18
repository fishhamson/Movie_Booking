import { combineReducers } from 'redux'
import { movieBookingReducer } from './slice'


export const rootReducer = combineReducers({
    movieBooking: movieBookingReducer,
})
