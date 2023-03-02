import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton";
import InvoiceForm from "../components/InvoiceForm";
import NavBar from "../components/NavBar";
import TitleSection from "../components/TitleSection";
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
                    <form name="form1" className="invoice-form">
                        <div className="form-container">
                            <h2> Items </h2>
                            <InvoiceForm />
                        </div>
                    </form>
            </ContentSection>
            <Footer />
        </div>
    )
}

export default InvoicePage;
