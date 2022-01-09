import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faFilm, faGamepad, faBookReader } from '@fortawesome/free-solid-svg-icons';

function Interest() {
    return (
        <div className='skills'>
            <h3 className="titre">Centres d'intérêt</h3>
            <div className='interests'>
            <p className='interest'> <FontAwesomeIcon className='interest-icon' icon={faPlane} size='2x'/> Voyages</p>
            <p className='interest'> <FontAwesomeIcon className='interest-icon' icon={faFilm} size='2x' /> Jeux Vidéo</p>                  
            <p className='interest'> <FontAwesomeIcon className='interest-icon' icon={faGamepad} size='2x' /> Cinéma</p>  
            <p className='interest'> <FontAwesomeIcon className='interest-icon' icon={faBookReader} size='2x' /> Lecture</p>     
        </div>
        </div>
    )
}

export default Interest
