import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookRoomModal = () => {
  const [value, onChange] = useState(new Date());
   const notify = () => toast.success("Successfully booked! Email confirmation sent");

  return (
    <div className="flex flex-col justify-center gap-8 px-16 py-16 overflow-visible">
      <article>
        <h3>Check-in</h3>
        <DateTimePicker onChange={onChange} value={value} />
      </article>
      <article>
        <h3>Check-out</h3>
        <DateTimePicker onChange={onChange} value={value} />
      </article>
      <article>
        <button
          className="bg-primary-o text-white rounded-md px-8 py-2 text-lg w-full"
          onClick={notify}
        >
          Book
        </button>
        <ToastContainer position="top-left"/>
      </article>
    </div>
  );
};

export default BookRoomModal;
