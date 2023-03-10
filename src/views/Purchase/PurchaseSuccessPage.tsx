import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import TitleSection from '../../components/TitleSection';
import UserCard from '../../components/UserCard';
import HomeButton from '../../components/HomeButton';
import ContentSection from '../../components/ContentSection';

function PurchaseSuccessPage() {

  return (
    <div className='body'>
      <NavBar
        left={<HomeButton />}
        right={<UserCard />}
      />
      <TitleSection text='Purchase successful!' />
      <ContentSection>
        <div className='payment-text'>
          <p>This is just a post-payment redirection. Your application's backend service
          should handle the webhook notification from Maya to update payment information accordingly.</p>
          <p>Read more about webhooks: <a href='https://developers.maya.ph/reference/createv1webhook-1'> How to handle webhooks </a></p>
        </div>
      </ContentSection>
      <Footer/>
    </div>
  );
}

export default PurchaseSuccessPage;
