import { generateInvoiceSuccessful, generateInvoiceFailed } from "../actions/invoice/actionCreators";
import { generateInvoice } from "../services/invoiceService";

export function generateInvoiceThunk (newInvoiceDetails: NewInvoiceDetails) {
    return async (dispatch: any) => {
        try {
            const res: GeneratedInvoice = await generateInvoice(newInvoiceDetails)
            dispatch(generateInvoiceSuccessful(res))
        } catch (err) {
            dispatch(generateInvoiceFailed())
            console.log(err)
        }
    }
}
