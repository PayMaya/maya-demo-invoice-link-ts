import * as actionTypes from './actionTypes'

export function generateInvoiceSuccessful(payload: GeneratedInvoice) {
    return {
        type: actionTypes.GENERATE_INVOICE_SUCCESSFUL,
        payload
    }
}

export function generateInvoiceFailed() {
    return {
        type: actionTypes.GENERATE_INVOICE_FAILED
    }
}