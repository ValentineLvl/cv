import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
    return (
        <div className='notFound'>
            <FontAwesomeIcon className='icon-hand' icon={faHandPaper} size='6x'/>
            <p className='text-notFound'>Oups... Cette page n'existe pas !</p>
            <button><Link to='/' exact>Retour à la page d'accueil</Link></button>
        </div>
    )
}

export default NotFound
