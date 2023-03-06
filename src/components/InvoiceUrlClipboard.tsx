import React from "react"
import { useSelector } from "react-redux"

function InvoiceUrlClipboard () {
    const invoiceUrl: string = useSelector((state: AppState) => state.invoiceUrl)

    const copy =  async () => {
        await navigator.clipboard.writeText(invoiceUrl)
        window.alert("Invoice URL copied!")
    }

    return (
        <div className="form-container">
            <h2 className="invoice-url-text">Invoice URL</h2>
            <div className="invoice-url-container">
                <span className="invoice-url-span">
                    <input type="text" value={invoiceUrl} readOnly />
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACZSURBVFiF7ZZBCoAgEEU/ER4q7HzZqdp0Fb1GLVICQRhn1FrMgyGIGl/2qQGUn2IA7AACgItYR0sBV7FwFwEfmy4tm9aQnqo7E/E6TiZSeTyv1NSI5TvAyUReTiIgyYTFuxNsAWkmivdTM9ANFVABFZgL508M+hdQ0Q+RCqjA5wIhHi1jjTXrwaLFSLZJBEyUSKNZ96FUGcYNONZzkcAxlx4AAAAASUVORK5CYII=" 
                        alt='Clipboard icon'
                        className='user-img'
                        onClick={() => copy()}
                    />
                </span>
            </div>
        </div>
    )
}

export default InvoiceUrlClipboard