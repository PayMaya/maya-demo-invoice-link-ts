import * as invoiceActionTypes from "./actions/invoice/actionTypes"

const invoiceUrl = (state: string = '', action: GenerateInvoiceAction): string => {
  switch (action.type) {
    case invoiceActionTypes.GENERATE_INVOICE_SUCCESSFUL:
      const { payload } = action
      return payload.invoiceUrl
    default:
      return state
  }
}

const defaultUser: User = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'janedoe@test.com',
  mayaCustomerId: undefined
}
const currentUser = (state: User = defaultUser, action: any): User => {
  return state
}

export { currentUser, invoiceUrl }