function TransactionForm() {
    return (
        <>  
            <div className="transaction-form-layout">
                <div className="input-row-container">
                    <div className="input-container">
                        <label className="item"> Invoice Number </label> <br />
                        <input 
                            type="text"
                            name="invoiceNum"
                            className="item"
                            placeholder="Invoice Number"
                            required 
                        />
                    </div>
                    <div className="input-container">
                        <label className="item"> Request Reference Number </label> <br />
                        <input 
                            type="text"
                            name="rrn"
                            className="item"
                            placeholder="Request Reference Number"
                            required 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransactionForm