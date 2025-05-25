import React, { useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, settext] = useState('');
    const [amount, setamount] = useState(0);
    const { addTransaction } = React.useContext(GlobalContext);
    
    const onsubmit = e => {
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() * 100000),
        text,
        amount: +amount
      };
      addTransaction(newTransaction);
    }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" id="text" 
        value={text}
        placeholder="Enter text..." onChange={(e)=>settext(e.target.value)}/>
        </div>
        <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" value={amount} placeholder="Enter amount..." onChange={(e)=>setamount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
