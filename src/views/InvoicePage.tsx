import BuyerForm from "../components/BuyerForm";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton";
import InvoiceForm from "../components/InvoiceForm";
import NavBar from "../components/NavBar";
import TitleSection from "../components/TitleSection";
import TransactionForm from "../components/TransactionForm";
import UserCard from "../components/UserCard";

function InvoicePage() {
    return (
        <div className='body'>
            <NavBar
                left={<HomeButton />}
                right={<UserCard />}
            />
            <TitleSection text='Invoice'/>
            <ContentSection>
                <form className="invoice-form">
                    <div className="form-container">
                        <h2> Transaction Details </h2>
                        <TransactionForm />
                    </div>
                    <div className="form-container">
                        <h2> Items </h2>
                        <InvoiceForm />
                    </div>
                    <div className="form-container">
                        <h2> Buyer Details </h2>
                        <BuyerForm />
                    </div>
                    <div className="submit-btn-container">
                        <button type="submit" className="btn green large"> Generate Invoice Link </button>
                    </div>
                </form>
            </ContentSection>
            <Footer />
        </div>
    )
}

export default InvoicePage;
