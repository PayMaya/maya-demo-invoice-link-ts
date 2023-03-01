const config = {
    host_url: process.env.REACT_APP_HOST_URL || 'http://localhost:3000',
    path_prefix: process.env.REACT_APP_PATH_PREFIX || '/',
    maya_payments: {
      url: 'https://pg-sandbox.paymaya.com/payments/v1',
      pub_api_key: process.env.REACT_APP_VAULT_PUBLIC_API_KEY,
      sec_api_key: process.env.REACT_APP_VAULT_SECRET_API_KEY,
    },
}
  
export default config