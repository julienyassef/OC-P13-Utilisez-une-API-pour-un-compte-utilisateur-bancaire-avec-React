//REACT
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';

//DATA
import store from './store.jsx'

//CSS
import './App.css'

//Components
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'

//Pages
import Home from '../pages/Home/Home'
import User from '../pages/User/User'
import SignIn from '../pages/SignIn/SignIn'
import Error from '../pages/Error/Error';

function App() {
  

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/user' element={<User />} />
            <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
    )

}

export default App
