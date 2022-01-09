import React from 'react';
import './Portfolio.css';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop} from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faReact, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons';


function Projects(props) {

const projectList = [
    {type: 'application mobile',
    name : 'Tattoo | Moi',
    date : '2 semaines',
    cadre : 'Projet final - Bootcamp La Capsule',
    desc : "Application mobile permettant de mettre en contact un client et un tatoueur afin de prendre rendez-vous ou demander un devis. Ce projet a été réalisé en trinome afin de valider mon diplome à La Capsule. J'ai principalement réalisé les processus de Connexion / Inscription / Déconnexion (côté client et côté tatoueur), la mise en favoris des tatoueurs et la partie calendrier sur l'interface tatoueur. Vous pouvez consulter le rendu dans la video ci-dessous.",
    youtube: "https://youtu.be/aqZ07zi6CWk",
    github: "https://github.com/ValentineLvl/tattooMoiFront",
    technology : [
        'React Native', 'JavaScript','Node.js', 'CSS'
        ],
    previewImg : "../images/tattoomoi/overview-tattoomoi.png",
    imgList : [
    {screen: 'Ecran de recherche', url: "../images/tattoomoi/search-screen.png"},
    {screen: 'Ecran de résultats', url: "../images/tattoomoi/search-result.png"},
    {screen: 'Page du tatoueur 1', url: "../images/tattoomoi/page-tatoueur.png"},
    {screen: 'Page du tatoueur 2', url: "../images/tattoomoi/contact-tatoueur.png"},
    {screen: 'Demande de devis (en attente)', url: "../images/tattoomoi/devis-1.png"},
    {screen: 'Page de favoris', url: "../images/tattoomoi/favoris.png"},
    {screen: 'Rendez-vous dans le calendrier', url: "../images/tattoomoi/rdv-confirme.png"},
    {screen: 'Devis à valider', url: "../images/tattoomoi/rdv-attente.png"},
    {screen: 'Envoi de la réponse', url: "../images/tattoomoi/confirmation-devis.png"},
    {screen: 'Demande de devis (validé)', url: "../images/tattoomoi/devis-2.png"}]},
    // {type: 'application web',
    // name : 'Ticketac',
    // date : '5 jours',
    // cadre : 'Projet hackaton - Bootcamp La Capsule',
    // desc : "Site de réservation de billets de trains. Ce projet était initialement réalisé en binome sur une période de 2 jours en utilisant Express, Node.js et BootStrap. Pour mon portfolio, j'ai décidé de le refaire entièrement en utilisant React pour le Front-End, Express et Node.js pour le Back-end et du CSS pour le style. Vous pouvez consulter le rendu dans la video ci-dessous.",
    // youtube: "",
    // github: "",
    // technology : [
    //    'React', 'JavaScript','Node.js', 'CSS',
    //     ],
    // previewImg : "../images/ticketac/overview-ticketac.png",
    // imgList : [
    // ""]}
]

    return (
        <div className='wrapper'>
        {projectList.map((project, i) => {
           return (
        <div className='card' key={i}>
            <div className='card-body'>
                <h3 className='card-title'>{project.type === "application mobile" ? (<FontAwesomeIcon className='icon' icon={faMobileAlt} />) : (<FontAwesomeIcon className='icon' icon={faLaptop} />) }{project.name}</h3>
                <div className='language-icon'>
                {project.technology.map ((icon) => { 
                    if (icon === 'JavaScript') {
                        return (<FontAwesomeIcon className='languages' icon={faJsSquare} size='2x' />)
                    } else if (icon === 'React' || icon === 'React Native') {
                        return (<FontAwesomeIcon className='languages' icon={faReact} size='2x' />)
                    } else if (icon === 'Node.js') {
                        return (<FontAwesomeIcon className='languages' icon={faNodeJs} size='2x' />)
                    } else if (icon === 'CSS') {
                        return (<FontAwesomeIcon className='languages' icon={faCss3Alt} size='2x' />)
                    } 
                    return(<></>)
                }
                    )}
                     </div>
                <img src={project.previewImg} className='card-img' alt='Aperçu' />
                <p className='card-text'>{project.desc.slice(0,80)+'...'}</p>
            </div>
            <Link to='/projet' className='link'><button className='card-btn' onClick={() => props.selectedProject(project)}>Voir le projet</button></Link>
        </div>)})}

        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        selectedProject: function (projectInfos) {
            dispatch({ type: "selectedProject", projectInfos:projectInfos });
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
) (Projects)
