import axios from 'axios';
import { Buffer } from 'buffer';
import config from '../config';

const invoiceUrl: string = config.invoice.url
const secretAuth: string = Buffer.from(`${config.invoice.sec_api_key}:`, 'binary').toString('base64')

/* 
    For demo purposes, the following functions were done on the frontend. 
    However, when implementing for commercial use, please do the following transactions
    on your backend servers to protect the linkId of the customer.
*/

export const generateInvoice = async (newInvoiceDetails: NewInvoiceDetails) => {
    const { 
        invoiceNum: invoiceNumber, rrn: requestReferenceNumber,
        itemName: names, quantity: quantities, unitPrice: unitPrices, amount: amounts,
        firstName, lastName, email, phone, countryCode
    } = newInvoiceDetails
    
    // form items array
    const items: Item[] = []
    for (let i = 0; i < names.length; i++) {
        const item: Item = {
            amount: { value: unitPrices[i] },
            totalAmount: { value: amounts[i] },
            name: names[i],
            quantity: quantities[i]
        }
        items.push(item)
    }

    // form invoice request
    const req: GenerateInvoiceRequest = {
        invoiceNumber,
        type: 'SINGLE',
        totalAmount: {
            value: amounts.reduce((a, b) => a + b, 0),
            currency: 'PHP'
        },
        buyer: {
            firstName,
            lastName,
            contact: {
                email,
                phone
            },
            billingAddress: {
                countryCode
            }
        },
        items,
        redirectUrl: {
            success: `${config.host_url}/purchase/success`,
            failure: `${config.host_url}/purchase/failed`,
            cancel: `${config.host_url}/purchase/canceled`,
        },
        requestReferenceNumber
    }

    const headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Basic ${secretAuth}`,
    }
    
    const response = await axios.post(`${invoiceUrl}/invoices`, req, { headers })
    const invoice: GeneratedInvoice = response.data
    return invoice
}