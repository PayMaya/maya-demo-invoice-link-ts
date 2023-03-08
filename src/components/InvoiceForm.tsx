import React from "react"
import { Dispatch } from 'redux';
import { useDispatch } from "react-redux"
import BuyerForm from "./BuyerForm"
import ItemsForm from "./ItemsForm"
import TransactionForm from "./TransactionForm"
import { generateInvoiceThunk } from "../thunks/invoice";

interface InvoiceHtmlForm extends EventTarget {
    invoiceNum: { value: string }
    rrn: { value: string }
    itemName: { value: string }[] | { value: string }
    quantity: { value: number }[] | { value: number }
    unitPrice: { value: number }[] | { value: number }
    amount: { value: number }[] | { value: number }
    firstName: { value: string }
    lastName: { value: string }
    email: { value: string }
    phone: { value: string }
    countryCode: { value: string }
}

function InvoiceForm() {
    const dispatch: Dispatch<any> = useDispatch()

    const generateInvoice = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const form = e.target as InvoiceHtmlForm
        const isList = form.itemName instanceof RadioNodeList

        const newInvoiceDetails: NewInvoiceDetails  = {
            invoiceNum: form.invoiceNum.value,
            rrn: form.rrn.value,
            itemName: (isList) ? Array.from(form.itemName as { value: string }[]).map(({ value }) => value) : [(form.itemName as { value: string }).value],
            quantity: (isList) ? Array.from(form.quantity as { value: number }[]).map(({ value }) => value) : [+(form.quantity as { value: number }).value],
            unitPrice: (isList) ? Array.from(form.unitPrice as { value: number }[]).map(({ value }) => value) : [+(form.unitPrice as { value: number }).value],
            amount: (isList) ? Array.from(form.amount as { value: number }[]).map(({ value }) => value) : [+(form.amount as { value: number }).value],
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            phone: form.invoiceNum.value,
            countryCode: form.countryCode.value,
        }
        
        dispatch(generateInvoiceThunk(newInvoiceDetails))
    }

    return (
        <form className="invoice-form" onSubmit={(e: React.SyntheticEvent) => generateInvoice(e)}>
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