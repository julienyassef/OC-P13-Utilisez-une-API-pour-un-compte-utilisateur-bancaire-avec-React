//CSS
import './ModalEditProfil.scss'

//REACT et Redux
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';

//Import
import { updateUserProfile } from '../../store/action/authActions';



const ModalEditProfile = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(updateUserProfile(firstName, lastName));
    onClose(); 
  };

 
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="ModalEditProfil__overlay" onClick={handleClose}></div>
      <div className='ModalEditProfil'>
        <div className="ModalEditProfil__header">
          <h2 className='ModalEditProfil__header__title'>Edit Profile</h2>
          <button className='ModalEditProfil__header__close-button' onClick={handleClose}>X</button>
        </div>
        <form className="ModalEditProfil__form" onSubmit={handleSubmit}>
          <input className="ModalEditProfil__form__input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Entrez votre prénom" />
          <input className="ModalEditProfil__form__input" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Entrez votre nom" />
          <button className="ModalEditProfil__form__button-submit" type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default ModalEditProfile
