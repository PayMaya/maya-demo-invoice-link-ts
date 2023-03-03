interface GenerateInvoiceRequest {
    invoiceNumber: string,
    type: string,
    totalAmount: {
        value: number,
        currency: string
    },
    items: Item[],
    redirectUrl: {
        success: string,
        failure: string,
        cancel: string
    },
    buyer: {
        firstName: string,
        lastName: string,
        contact: {
            phone: string
            email: string
        }
        billingAddress: {
            countryCode: string
        }
    }
    requestReferenceNumber: string,
}

interface GeneratedInvoice {
    invoiceId: string
    invoiceUrl: string
}

interface GenerateInvoiceAction {
    type: string
    payload: GeneratedInvoice
}

interface NewInvoiceDetails {
    invoiceNum: string
    rrn: string
    itemName: string[]
    quantity: number[]
    unitPrice: number[]
    amount: number[]
    firstName: string
    lastName: string
    email: string
    phone: string
    countryCode: string
}