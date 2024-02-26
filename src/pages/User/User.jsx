//CSS
import './User.scss'

//React & redux
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//COMPONENTS 
import UserHeader from '../../components/UserHeader/UserHeader';
import AccountList from '../../components/AccountList/AccountList';


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
  // si pas de token dans redux, on redirige vers la home

   // Récupérer le token à partir du store Redux
   const token = useSelector(state => state.auth.token)
  //  console.log('Token from Redux state:', token);

   const fisrtName = useSelector(state => state.auth.firstName);
  //  console.log('fisrtname from Redux state:', fisrtName);

   const lastName = useSelector(state => state.auth.lastName);
  //  console.log('lastname from Redux state:', lastName);

   const id = useSelector(state => state.auth.id);
  //  console.log('id from Redux state:', id);
  

   const navigate = useNavigate();
 
   // Rediriger vers la page d'accueil si aucun token n'est présent
   useEffect(() => {
     if (!token) {
       navigate('/');
     }
   }, [token, navigate]);

  return (
    <div className="userContainer bg-dark">
      <UserHeader fisrtName={fisrtName} lastName={lastName}/>
      <AccountList  accounts={accounts}/>
    </div>
  )
}
export default User