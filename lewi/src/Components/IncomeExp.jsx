import React from 'react'
import trending_down from '../assets/trending-down.svg'
import trending_up from '../assets/trending-up.svg'
import '../Components/IncomeExp.css'

const IncomeExp = ({ transactions }) => {

   const income = transactions.filter(t => t.type === 'Income').reduce((sum,t) => sum + parseFloat(t.amount),0)

   const expense = transactions.filter(t => t.type === 'Expense').reduce((sum,t) => sum + parseFloat(t.amount),0);

   const net = income - expense;

  return (
    <div className='cards-container'>
      <div className="card1">
        <h4>Total Income</h4>
        <img src={trending_up}/>
        <p className='kes1'>KES {income}</p>
        <p>From 0 transactions</p>
      </div>
       <div className="card2">
        <h4>Total Expenses</h4>
        <img src={trending_down}/>
        <p className='kes2'>KES {expense}</p>
        <p>From 0 transactions</p>
       </div>
       <div className="card3">
        <h4>Net Profit</h4>
        <span>KES</span>
        <p className='kes3'>KES {net}</p>
        <p>Profit this period</p>
       </div>
    </div>
  )
}

export default IncomeExp
