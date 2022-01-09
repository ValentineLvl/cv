import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <nav className='navigation'>
            <ul className='listNav'>
                <li className='itemNav'> 
            <NavLink to="/" exact activeClassName='navActive'>
            <FontAwesomeIcon className='icon' icon={faHome} size='lg'/>
            Accueil
          </NavLink>
          </li>
          <li className='itemNav'>
          <NavLink to="/portfolio" activeClassName='navActive'>
            <FontAwesomeIcon className='icon' icon={faFolderOpen} size='lg'/>
            Portfolio
          </NavLink>
          </li>
            </ul>
        </nav>
    )
}

export default Nav
