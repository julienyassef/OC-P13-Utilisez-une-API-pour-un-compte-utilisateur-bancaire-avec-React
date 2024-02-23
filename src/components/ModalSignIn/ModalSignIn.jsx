// CSS
import './ModalSignIn.scss';

// React & Redux
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

//Import
import { handleSignIn2 } from '../../handle/handleSignIn2';



function ModalSignIn() {

    const dispatch = useDispatch(); // Permet de dispatcher des actions vers le store Redux.
    const navigate = useNavigate(); // Permet de gérer la navigation entre les pages.

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Fonction appelée lors de la soumission du formulaire.
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const isAuthenticated = await handleSignIn2(email, password, dispatch);
  
        if (isAuthenticated) {
          console.log('Authentification réussie');
          navigate('/user');
        } else {
          console.log('Authentification échouée');
        }
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire :', error);
      }
    };

   
  return (
    <div>
      <section className="signIn-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="signIn-content__inputWrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signIn-content__inputWrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signIn-content__inputRemeber">
            <input
              type="checkbox"
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="signIn-content__buttonSignIn" onClick={handleSubmit}>Sign In</button>
        </form>
        
        {/* <p className="">userLoginError</p> */}
       
      </section>
    </div>
  );
}

export default ModalSignIn;
