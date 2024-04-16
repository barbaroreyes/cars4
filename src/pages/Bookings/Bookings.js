import React, { useContext } from 'react';
import {RideContext} from '../../context/ridesContext'

const BookingList = () => {

    const bookings= useContext(RideContext)
    console.log("item",bookings)
  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.name} - {booking.pickupLocation} - {booking.dropoffLocation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;