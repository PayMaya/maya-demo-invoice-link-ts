function TransactionForm() {
    return (
        <>  
            <div className="transaction-form-layout">
                <div className="container">
                    <label className="item"> Invoice Number </label> <br />
                    <input 
                        type="text"
                        className="item"
                        placeholder="Invoice Number"
                        required 
                    />
                </div>  
                <div className="container">
                    <label className="item"> Request Reference Number </label> <br />
                    <input 
                        type="text"
                        className="item"
                        placeholder="Request Reference Number"
                        required 
                    />
                </div>
            </div>
        </>
    )
}

export default TransactionForm