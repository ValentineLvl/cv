import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faMapPin, faFolderOpen, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


function User() {

    return (
        <div className='user'>
            <a className='pdf' href='../files/CV-Valentine-LAVALY.pdf' target='blank'><FontAwesomeIcon icon={faFilePdf} size='lg' /></a>
            <img className='avatar' src='../images/photo-cv.png' alt='Avatar' />
            <h1>Valentine Lavaly</h1>    
            <h2 className='profession'>Développeuse Front-End React</h2>
                <p className='desc'>Créative et organisée : deux qualités qui prouvent que je suis celle qu'il vous faut ! Recherche CDD ou CDI en tant que Développeuse Front-End.</p>
            <h3 className='titre'>Coordonnées</h3>
                <p className='info'><FontAwesomeIcon className='icon' icon={faPhone} /><a href='tel:+3364837625'>06 48 37 62 05</a></p>
                <p className='info'><FontAwesomeIcon className='icon' icon={faAt} /><a href='mailto:vlavaly.pro@outlook.fr'>vlavaly.pro@outlook.fr</a></p>
                <p className='info'><FontAwesomeIcon className='icon' icon={faMapPin} />10 Cours de l'Arche Guédon, 77200 Torcy</p>
                <p className='info'><FontAwesomeIcon className='icon' icon={faLinkedinIn} /><a href='https://www.linkedin.com/in/valentine-lavaly/' target='blank'>Valentine Lavaly</a></p>
                <p className='info'><FontAwesomeIcon className='icon' icon={faGithub} /><a href='https://github.com/ValentineLvl' target='blank'>ValentineLvl</a></p>
                <p className='info'><FontAwesomeIcon className='icon' icon={faFolderOpen} /><a href='/portfolio'>Portfolio</a></p>
        </div>
    )
}

export default User
