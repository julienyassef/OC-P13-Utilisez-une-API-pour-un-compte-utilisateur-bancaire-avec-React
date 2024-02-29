//CSS
import './UserHeader.scss'

//React
import React, { useState } from 'react';

//Import 
import ModalEditProfile from '../../components/ModalEditProfil/ModalEditProfil'


function UserHeader( { firstName, lastName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {setIsModalOpen(true)};
  const closeModal = () => {setIsModalOpen(false)};
  

  return (
    <div className="userHeader">
      <h1 className="userHeader__title">Welcome back<br />{firstName} {lastName}</h1>
      <button className="userHeader__editButton" onClick={openModal}>Edit Name</button>
      <ModalEditProfile isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
export default UserHeader