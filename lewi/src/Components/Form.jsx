import React from 'react'
import { useState } from 'react'
import '../Components/Form.css'

const Form = ({onClose, onSubmit}) => {

    const[type,setType] = useState("");
    const[amount,setAmount] = useState("");
    const[category,setCategory] = useState("");
    const[description,setDescription] = useState("");
    const[date,setDate] = useState(new Date().toISOString().split("T")[0]);
    
    // New state variables for enhanced functionality
    const[weight,setWeight] = useState("");
    const[quantity,setQuantity] = useState("");
    const[pricePerUnit,setPricePerUnit] = useState("");
    const[isWeightBased,setIsWeightBased] = useState(false);

    // Categories that require weight/quantity tracking
    const weightBasedCategories = ["Maize bran", "Wheat bran", "Maize germ", "Cob dust"];
    
    // Handle category change to show/hide weight fields
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setIsWeightBased(weightBasedCategories.includes(selectedCategory));
        
        // Auto-set price for cob dust
        if (selectedCategory === "Cob dust") {
            setPricePerUnit("5");
        }
        
        // Reset weight/quantity fields when switching categories
        if (!weightBasedCategories.includes(selectedCategory)) {
            setWeight("");
            setQuantity("");
            setPricePerUnit("");
        } else if (selectedCategory !== "Cob dust") {
            setPricePerUnit("");
        }
    };

    // Calculate total amount based on quantity and price per unit
    const calculateAmount = () => {
        if (quantity && pricePerUnit) {
            const calculatedAmount = parseFloat(quantity) * parseFloat(pricePerUnit);
            setAmount(calculatedAmount.toFixed(2));
        }
    };

    // Handle quantity or price change to auto-calculate amount
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
        if (e.target.value && pricePerUnit) {
            const calculatedAmount = parseFloat(e.target.value) * parseFloat(pricePerUnit);
            setAmount(calculatedAmount.toFixed(2));
        }
    };

    const handlePriceChange = (e) => {
        setPricePerUnit(e.target.value);
        if (e.target.value && quantity) {
            const calculatedAmount = parseFloat(quantity) * parseFloat(e.target.value);
            setAmount(calculatedAmount.toFixed(2));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Date.now(),
            type,
            amount: parseFloat(amount),
            category,
            description,
            date,
            // Include new fields if they apply
            ...(isWeightBased && {
                weightPerBag: weight ? parseFloat(weight) : null,
                quantity: quantity ? parseFloat(quantity) : null,
                pricePerUnit: pricePerUnit ? parseFloat(pricePerUnit) : null,
                totalWeight: (weight && quantity) ? parseFloat(weight) * parseFloat(quantity) : null
            })
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
                        <option value="Income">Income (Sales)</option>
                        <option value="Expense">Expense (Purchase)</option>
                    </select>
                </label>
                
                <label>
                    Category:
                    <select value={category} onChange={handleCategoryChange} required>
                        <option value="" disabled>Select category</option>
                        <option value="Fuel">Fuel</option>
                        <option value="Driver">Driver</option>
                        <option value="Maize bran">Maize bran</option>
                        <option value="Wheat bran">Wheat bran</option>
                        <option value="Maize germ">Maize germ</option>
                        <option value="Cob dust">Cob dust</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Toll station">Toll station</option>
                        <option value="Loaders">Loaders</option>
                        <option value="Rent">Rent</option>
                        <option value="Workers">Workers</option>
                        <option value="Milling">Milling</option>
                        <option value="Packaging">Packaging</option>
                        <option value="Delivery">Delivery</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Working">Working</option>
                        <option value="Expenses">Expenses</option>
                    </select>
                </label>

                {/* Show weight and quantity fields for weight-based categories */}
                {isWeightBased && (
                    <>
                        <label>
                            {category === "Cob dust" ? "Quantity (kg):" : "Quantity (bags):"}
                            <input 
                                type='number' 
                                value={quantity} 
                                onChange={handleQuantityChange} 
                                placeholder={category === "Cob dust" ? "Weight in kg" : "Number of bags"}
                                required
                            />
                        </label>
                        
                        {category !== "Cob dust" && (
                            <label>
                                Weight per bag (kg):
                                <input 
                                    type='number' 
                                    step="0.01"
                                    value={weight} 
                                    onChange={(e) => setWeight(e.target.value)} 
                                    placeholder='Weight per bag in kg'
                                />
                            </label>
                        )}
                        
                        <label>
                            {category === "Cob dust" ? "Price per kg (KES):" : "Price per bag (KES):"}
                            <input 
                                type='number' 
                                step="0.01"
                                value={pricePerUnit} 
                                onChange={handlePriceChange} 
                                placeholder='KES 0.00'
                                required
                                readOnly={category === "Cob dust"}
                            />
                        </label>
                    </>
                )}

                <label>
                    {isWeightBased ? 'Total Amount (auto-calculated):' : 'Amount:'}
                    <input 
                        type='number' 
                        step="0.01"
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder='KES 0.00' 
                        required
                        readOnly={isWeightBased && quantity && pricePerUnit}
                    />
                </label>

                <label>
                    Description:
                    <input 
                        type='text' 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder={isWeightBased ? 
                            `${type === 'Income' ? 'Sale' : 'Purchase'} of ${category}...` : 
                            'Enter transaction description...'
                        } 
                        required
                    />
                </label>

                <label>
                    Date:
                    <input 
                        type='date' 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>

                <div className="buttons">
                    <button type='submit'>
                        {type === 'Income' ? 'Record Sale' : 'Record Purchase'}
                    </button>
                    <button type='button' onClick={onClose}>Cancel</button>
                </div>

            </form>
        </div>
      
    </div>
  )
}

export default Form