function BuyerForm() {
    return (
        <>  
            <div className="buyer-form-layout">
                <div className="container">
                    <label className="item"> First Name </label> <br />
                    <input 
                        type="text"
                        name="firstName"
                        className="item"
                        placeholder="First Name"
                        required 
                    />
                </div>
                <div className="container">
                    <label className="item"> Last Name </label> <br />
                    <input 
                        type="text"
                        name="lastName"
                        className="item"
                        placeholder="Last Name"
                        required 
                    />
                </div>
                <div className="container">
                    <label className="item"> Email </label> <br />
                    <input 
                        type="email"
                        name="email"
                        className="item"
                        placeholder="Email"
                        required 
                    />
                </div>
                <div className="container">
                    <label className="item"> Contact Number </label> <br />
                    <input 
                        type="text"
                        name="phone"
                        className="item"
                        placeholder="Contact Number"
                        required 
                    />
                </div>
                <div className="container">
                    <label className="item"> Country Code </label> <br />
                    <input 
                        type="text"
                        name="countryCode"
                        className="item"
                        placeholder="Country Code"
                        value="PH"
                        required 
                        disabled
                    />
                </div>
            </div>
        </>
    )
}

export default BuyerForm