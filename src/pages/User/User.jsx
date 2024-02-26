//CSS
import './User.scss'

//React & redux
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//COMPONENTS 
import UserHeader from '../../components/UserHeader/UserHeader';
import AccountList from '../../components/AccountList/AccountList';
import { selectUserIsConnected, selectUserToken } from '../../store/selectors/userSelectors';



//DATA 
const accounts = [
  {
      title: 'Argent Bank Checking (x8349)',
      amount: 2082.79,
      description: 'Available Balance',
  },
  {
      title: 'Argent Bank Savings (x6712)',
      amount: 10928.42,
      description: 'Available Balance',
  },
  {
      title: 'Argent Bank Credit Card (x8349)',
      amount: 184.3,
      description: 'Current Balance',
  },
];

function User() {

   const isConnected = useSelector(selectUserIsConnected); 
   const navigate = useNavigate();
 
   // Rediriger vers la page d'accueil si aucun token n'est présent
   useEffect(() => {
     if (!isConnected) { 
       navigate('/');
     }
   }, [isConnected, navigate]);

  return (
    <div className="userContainer bg-dark">
      <UserHeader/>
      <AccountList  accounts={accounts}/>
    </div>
  )
}
export default User