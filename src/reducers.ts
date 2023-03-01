const defaultUser: User = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'janedoe@test.com',
  mayaCustomerId: undefined
}
const currentUser = (state: User = defaultUser, action: any): User => {
  return state
}

export { currentUser }