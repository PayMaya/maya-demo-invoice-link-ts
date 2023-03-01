import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import config from "./config";
import InvoicePage from "./views/InvoicePage";
function App() {
  return (
    <Router basename={config.path_prefix}>
      <Routes>
        <Route path="/invoice" element={<InvoicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
