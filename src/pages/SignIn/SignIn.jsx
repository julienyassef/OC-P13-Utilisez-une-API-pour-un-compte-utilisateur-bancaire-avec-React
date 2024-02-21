//CSS
import './SignIn.scss'

//Components
import ModalSignIn from '../../components/ModalSignIn/ModalSignIn'

function SignIn() {
  return (
    <div className='SignInBg bg-dark'>
      <ModalSignIn className='SignInBg__modal'/>
    </div>
  )
}
export default SignIn