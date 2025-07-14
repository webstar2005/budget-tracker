import React from 'react'
import trending_up from '../assets/trending-up.svg'
import '../Components/Footer.css'
import Form from './Form'

const Footer = ({ transactions, onDelete}) => {
  return (
    <div className='container'>
      {transactions.length === 0 ? (
        <>
        <img src={trending_up}></img>  
        <p>No transactions yet</p>
        <p>Start thinking your business finances by adding your first transactions</p> 
        </> 
        ) : (

        <ul className='transaction-list'>
          {transactions.map(tx => (
            <li key={tx.id} className={`transaction-item ${tx.type.toLowerCase() === 'income' ? 'income' : 'expense'}`}>
              <div className="transaction-info">
                <span className="transaction-date"> {tx.date}</span>
                <span className="transaction-category">{tx.category}</span>
                <span className="transaction-description">{tx.description}</span>
                <span className="transaction-amount"> KES {tx.amount}</span>
              </div>
              <button className='delete-btn'onClick={() => onDelete(tx.id)}>Delete</button>
            </li>
          ))}
        </ul>

      )}
    </div>
  )
}

export default Footer
