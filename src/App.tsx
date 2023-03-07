import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import config from "./config";
import InvoicePage from "./views/InvoicePage";
import PurchaseCanceledPage from "./views/Purchase/PurchaseCanceledPage";
import PurchaseFailedPage from "./views/Purchase/PurchaseFailedPage";
import PurchaseSuccessPage from "./views/Purchase/PurchaseSuccessPage";

function App() {
  return (
    <Router basename={config.path_prefix}>
      <Routes>
        <Route path="/" element={<InvoicePage />} />
        <Route path="/purchase/success" element={<PurchaseSuccessPage />} />
        <Route path="/purchase/failed" element={<PurchaseFailedPage />} />
        <Route path="/purchase/canceled" element={<PurchaseCanceledPage />} />
      </Routes>
    </Router>
  );
}

export default App;
