const config = {
    host_url: process.env.REACT_APP_HOST_URL || 'http://localhost:3000',
    path_prefix: process.env.REACT_APP_PATH_PREFIX || '/',
    invoice: {
      url: process.env.REACT_APP_INVOICE_PG_URL || 'https://pg-sandbox.paymaya.com/invoice/v2',
      pub_api_key: process.env.REACT_APP_INVOICE_PUBLIC_API_KEY,
      sec_api_key: process.env.REACT_APP_INVOICE_SECRET_API_KEY,
    },
}
  
export default config