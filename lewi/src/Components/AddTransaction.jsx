import React, {useState} from 'react'
import '../Components/AddTransaction.css'
import Form from '../Components/Form'

const AddTransaction = ({onAddTransaction}) => {

  const[showForm,setShowForm] = useState(false);


  const handleTransactionSubmit = (transaction) => {
    console.log("Submitted transactions:", transaction);
    onAddTransaction(transaction);
    setShowForm(false);
  }

  return (
    <div className='button'>
      <button id='add-form' onClick={() => setShowForm(true)}>+ Add Transaction</button>

    {
    showForm && (
      <Form 
        onSubmit = { handleTransactionSubmit }
        onClose = {()=> setShowForm(false)}

      />  
    )
  }

    </div>
  )
}

export default AddTransaction;
