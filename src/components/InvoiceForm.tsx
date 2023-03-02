import React, { useState } from "react";

interface InvoiceItem {
    name: string
    quantity: number
    unitPrice: number
    amount: number
}

function InvoiceForm() {
    const initItem: InvoiceItem = {
        name: '',
        quantity: 0,
        unitPrice: 0,
        amount: 0
    }
    const sampleItem: InvoiceItem = {
        name: 'Product 1',
        quantity: 2,
        unitPrice: 100,
        amount: 200
    }
    const [items, setItems] = useState([sampleItem])

    const addNewItem = () => {
        setItems([ ...items, initItem ])
    }

    const setItemValue = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
        const value = e.target.value
        const updatedItem = { ...items[index], [field]: value }
        updatedItem.amount = updatedItem.quantity * updatedItem.unitPrice
        const updatedItems = items.slice()
        updatedItems[index] = updatedItem
        setItems(updatedItems)
    }

    const deleteItem = (e: React.SyntheticEvent, index: number) => {
        e.preventDefault()
        const updatedItems = items.slice()
        console.log(updatedItems[index])
        updatedItems.splice(index, 1)
        setItems(updatedItems)
    }

    return (
        <>  
            <div className="invoice-form-layout header">
                <p className="long-label"> Name </p>
                <p> Qty. </p>
                <p> Price </p>
                <p> Amount </p>
            </div>
                {items.map((item, index) => {
                    return (
                        <div key={index} className="invoice-form-layout body">
                            <button className="btn red" onClick={(e: React.SyntheticEvent) => deleteItem(e, index)}> X </button>
                            <input 
                                type="text"
                                placeholder="Item Name" 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItemValue(e, index, 'name')}
                                value={item.name}
                                required 
                            />
                            <input 
                                type="number" 
                                className="short-input"
                                placeholder="Quantity" 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItemValue(e, index, 'quantity')}
                                value={+item.quantity} 
                                min={0}
                                required
                            />
                            <input 
                                type="number"
                                className="short-input"
                                placeholder="Unit Price"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItemValue(e, index, 'unitPrice')} 
                                value={+item.unitPrice}
                                min={0}
                                required
                            />
                            <input 
                                type="number" 
                                className="short-input" 
                                placeholder="Amount" 
                                value={+item.amount} 
                                disabled 
                            />
                        </div>
                    )
                })}
                <div className="total-amount-container">
                    <label> Total Amount: {items.map(item => item.amount).reduce((a, b) => a + b, 0)} </label>
                </div>
            
            <div className="add-new-item-container">
                <button className="btn green" onClick={() => addNewItem()}>Add New Item</button>
            </div>
        </>
    )
}

export default InvoiceForm