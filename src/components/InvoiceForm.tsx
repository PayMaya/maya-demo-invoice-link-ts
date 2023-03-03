import BuyerForm from "./BuyerForm"
import ItemsForm from "./ItemsForm"
import TransactionForm from "./TransactionForm"

function InvoiceForm() {
    return (
        <form className="invoice-form">
            <div className="form-container">
                <h2> Transaction Details </h2>
                <TransactionForm />
            </div>
            <div className="form-container">
                <h2> Items </h2>
                <ItemsForm />
            </div>
            <div className="form-container">
                <h2> Buyer Details </h2>
                <BuyerForm />
            </div>
            <div className="submit-btn-container">
                <button type="submit" className="btn green large"> Generate Invoice Link </button>
            </div>
        </form>
    )
}

export default InvoiceForm