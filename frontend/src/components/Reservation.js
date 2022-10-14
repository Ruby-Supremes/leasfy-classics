import React,{ useState } from 'react'

function Reservation() {
    const [car, setCar] = useState('')
    const [client, setClient] = useState('')
    const [days, setDays] = useState('')
    const [amount, setAmount] = useState('')
    const [due, setDue] = useState('')
    const [borrowed, setBorrowed] = useState('')


  return (
    <div className='form-container'>
    <>
        <h2>Reservation</h2>
        <form className='form1'>
        <label for="car-id">Car Id</label>
          <input
            value={car}
            type="car-id"
            placeholder="car-id"
            id="car-id"
            name="car-id"
         />
        <label for="client-id">Client Id</label>
          <input
            value={client}
            type="client-id"
            placeholder="client-id"
            id="client-id"
            name="client-id"
        />
         <label for="days">Days</label>
          <input
            value={days}
            type="days"
            placeholder="days"
            id="days"
            name="days"
        />
        <label for="amount">Amount</label>
          <input
            value={amount}
            type="amount"
            placeholder="amount"
            id="amount"
            name="amount"
        />
        <label for="borrowed-id">Borrowed Date</label>
          <input
            value={borrowed}
            type="borrowed-id"
            placeholder="borrowed-id"
            id="borrowed-id"
            name="borrowed-id"
        />
        <label for="return-id">Return Date</label>
          <input
            value={due}
            type="return-id"
            placeholder="return-id"
            id="return-id"
            name="return-id"
        />
         <button className='button' type="submit">Log in</button>
        </form>
    </>
    </div>
  )
}

export default Reservation
