const defaultUser: User = {
  firstName: 'Anya',
  lastName: 'Forger',
  email: 'anyaforger@test.com',
  mayaCustomerId: undefined
}
const currentUser = (state: User = defaultUser, action: any): User => {
  return state
}

export { currentUser }