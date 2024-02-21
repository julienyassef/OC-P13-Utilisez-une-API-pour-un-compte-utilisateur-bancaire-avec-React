//CSS
import './Error.scss'

import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <main className='error'>
            <div className="error__container">
                <h1 className='error__container__404' >Error 404</h1>
                <button className="error__container__404__ComeBackHomeButton">
                    <Link className="error__container__404__ComeBackHomeButtonLink" to="/">Retourner à la page d'accueil</Link>
                </button>
            </div>
        </main>
    );
}