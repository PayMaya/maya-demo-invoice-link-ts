# Maya Invoice Link Demo App

This mini application demonstrates the use of [Maya Invoice API](https://developers.maya.ph/docs/invoice-api-integration)
in order to generate an electronic invoice which the user can pay for using their Maya wallet or card.

If you want to see the relevant integration code directly, see the file [invoiceService.ts](src/services/invoiceService.ts)

This project was created with React (React Redux and Thunk) and TypeScript.

Do not build your application on top of this demo.

For demo purposes, the functions in [invoiceService.ts](src/services/invoiceService.ts) were done on the frontend. 
However, when implementing for commercial use, please do the following transactions
on your backend servers.

---

## Requirements
1. Maya Invoice API keys (public and secret)- needed as authorization in API calls

## How to Run the Application
1. Run `npm install` to install all needed packages.
2. Run `npm start` to start the application. (see next part for note on environment variables) 

Example: 
> npm start

## Environment variables
You can set these variables in your environment, or in a `.env` file in the root directory.

| env variable                      | description                                 | default               |
|-----------------------------------|---------------------------------------------|-----------------------|
| REACT_APP_INVOICE_PUBLIC_API_KEY | (required) public api key                   |                       |
| REACT_APP_INVOICE_SECRET_API_KEY | (required) secret api key    |                       |
| REACT_APP_INVOICE_PG_URL | Maya payment gateway url    | https://pg-sandbox.paymaya.com/invoice/v2 |
| REACT_APP_HOST_URL                | host url of the app, used for redirect urls | http://localhost:3000 |
| REACT_APP_PATH_PREFIX             | path prefix, used for redirect urls         | /                     |
| PORT                              | port that the app listens to                | 3000                  |

Example
```ini
REACT_APP_INVOICE_PUBLIC_API_KEY=pk-gjldkfjgkldfjgljdfglawas
REACT_APP_INVOICE_SECRET_API_KEY=sk-sjsdfhdsjfhsjkldfsdfhsdf
```

### Secure your API keys
Take note to not make your secret api key visible in your web/fronend environment.  It is available in this demo for demonstration purposes only, and you are expected to perform API calls using the secret api key from your application's backend.


## APIs Used
1. [Maya Invoice API](https://developers.maya.ph/docs/invoice-api-integration) 
    - https://pg-sandbox.paymaya.com/invoice/v2/invoices

## Features
1. Enter required details for electronic invoice
2. Generate invoice URL

## Codebase (`src` folder)
### **Frontend**
##### `App.tsx`
Routing / handling of React views / pages
##### `App.css`
CSS for the application
##### `src/actions`
Redux actions
##### `src/components`
Customized React components used within the application
##### `src/reducers`
Redux reducers
##### `src/thunks`
Redux thunks for handling asynchronous logic
##### `src/views`
Customized React views / pages


### **Backend**
##### `src/services`
Service files - API calls

### **Miscellaneous**
##### `src/types`
Type assertions


## Additional Resources
1. [Sandbox credentials and Maya account that can be used during paying with Maya](https://developers.maya.ph/reference/sandbox-credentials-and-cards)
2. [Maya Invoice API Integration](https://developers.maya.ph/docs/invoice-api-integration)
3. [Using webhooks](https://developers.maya.ph/docs/receive-real-time-payment-information-using-webhooks)

