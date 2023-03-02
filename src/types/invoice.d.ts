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