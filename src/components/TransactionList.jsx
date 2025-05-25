import React from 'react'
import { GlobalContext } from '../context/GlobalState';
const TransactionList = () => {
  const {deleteTransaction} = React.useContext(GlobalContext);

  const {transactions} = React.useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
       {transactions.map(transaction => (
         <li key={transaction.id} className={transaction.amount < 0 ? "minus" : "plus"}>
           {transaction.text} <span>{transaction.amount}</span>
           <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
         </li> 
       ))}
      </ul>
    </div>
  )
}

export default TransactionList
