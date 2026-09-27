import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("");
  const [stand, setStand] = useState("");
  const [venue, setVenue] = useState("");

  async function handleBooking(e) {
    e.preventDefault();

    if (!name || !tickets || !stand || !venue) {
      alert("Please fill in all fields");
      return;
    }

    const { error } = await supabase.from("bookings").insert([
      {
        name: name,
        tickets: Number(tickets),
        stand: stand,
        venue: venue,
      },
    ]);

    if (error) {
      console.log(error);
      alert("Booking failed. Please try again.");
    } else {
      alert("Ticket booked successfully!");
      setName("");
      setTickets("");
      setStand("");
      setVenue("");
    }
  }

  return (
    <div className="booking-page">
      <h1>Book Your Ticket</h1>
      <form onSubmit={handleBooking} className="booking-form">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Number of Tickets:</label>
        <input
          type="number"
          min="1"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
        />

        <label>Select Stand:</label>
        <select value={stand} onChange={(e) => setStand(e.target.value)}>
          <option value="">-- Choose Stand --</option>
          <option value="General Stand">General Stand</option>
          <option value="VIP Stand">VIP Stand</option>
        </select>

        <label>Select Venue:</label>
        <select value={venue} onChange={(e) => setVenue(e.target.value)}>
          <option value="">-- Choose Venue --</option>
          <option value="Wankhede Stadium">Wankhede Stadium</option>
          <option value="M. Chinnaswamy Stadium">M. Chinnaswamy Stadium</option>
        </select>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;