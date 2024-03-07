//CSS
import './Home.scss'

//COMPONENTS 
import Banner from '../../components/Banner/Banner';
import FeaturesList from '../../components/FeaturesList/FeaturesList';

//ASSETS
import chatIcon from '../../assets/icon-chat.png';
import moneyIcon from '../../assets/icon-money.png';
import securityIcon from '../../assets/icon-security.png';
import { useEffect } from 'react';
import { getLocalStorage } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../utils/apiService';

//DATA
const features = [
    {
        icon: chatIcon,
        title: 'You are our #1 priority',
        text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
        icon: moneyIcon,
        title: 'More savings means higher rates',
        text: 'The more you save with us, the higher your interest rate will be!',
    },
    {
        icon: securityIcon,
        title: 'Security you can trust',
        text: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
];

function Home() {

  const navigate = useNavigate()
  const {id, rememberMe, token} = getLocalStorage()

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (rememberMe && token) {
        try {
          const userProfile = await getUserProfile(token);
          console.log('User Profile:', userProfile);
        } catch (error) {
          console.error('Error fetching user profile:', error);
         
        }
      }
    };

    if (rememberMe) {
      fetchUserProfile();
      navigate(`/user/${id}`);
    }
  }, [navigate, id, rememberMe, token]);


  return (
    <div>
      <Banner/>
      <FeaturesList  features={features} /> 
    </div>
  )
}
export default Home