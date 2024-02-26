//CSS
import './User.scss'

//React & redux
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//COMPONENTS 
import UserHeader from '../../components/UserHeader/UserHeader';
import AccountList from '../../components/AccountList/AccountList';
import { selectUserFirstName, selectUserId, selectUserLastName, selectUserToken } from '../../store/selectors/userSelectors';




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


   // Récupérer les states à partir du store Redux
   const token = useSelector(selectUserToken)
   const id = useSelector(selectUserId);


   const navigate = useNavigate();
 
   // Rediriger vers la page d'accueil si aucun token n'est présent
   useEffect(() => {
     if (!token) {
       navigate('/');
     }
   }, [token, navigate]);

  return (
    <div className="userContainer bg-dark">
      <UserHeader/>
      <AccountList  accounts={accounts}/>
    </div>
  )
}
export default User