import React from 'react'
import { useState } from 'react'
import '../Components/Form.css'

const Form = ({onClose, onSubmit}) => {

    const[type,setType] = useState("");
    const[amount,setAmount] = useState("");
    const[category,setCategory] = useState("");
    const[description,setDescription] = useState("");
    const[date,setDate] = useState(new Date().toISOString().split("T")[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Date.now(),
            type,
            amount: parseFloat(amount),
            category,
            description,
            date
        };
        onSubmit(newTransaction);
        onClose();
    };

  return (
    <div className='form-container'>
        <div className="form-content">
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Type:
                    <select value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="" disabled>Select type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                </label>
                <label>Amount:
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='KES 0.00' required></input>
                </label>
                <label>
                    Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="Fuel">Fuel</option>
                        <option value="Driver">Driver</option>
                        <option value="Maize bran">Maize bran</option>
                        <option value="Wheat bran">Wheat bran</option>
                        <option value="loader">Loaders</option>
                        <option value="toll">Toll</option>
                        <option value="Helpers">Helpers</option>
                    </select>
                </label>
                <label>
                    Description:
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter transaction description...' required></input>
                </label>
                <label>
                    Date:
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
                </label>

                <div className="buttons">
                    <button type='submit'>Add transaction</button>
                    <button type='button' onClick={onClose}>Cancel transaction</button>
                </div>

            </form>
        </div>
      
    </div>
  )
}

export default Form
