import React from 'react';
import './Portfolio.css';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop} from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faReact, faCss3Alt, faNodeJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';


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
    previewImg : "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216825/overview-tattoomoi_e3alxj.png",
    imgList : [
    {screen: 'Ecran de recherche', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216826/search-screen_uqc42m.png"},
    {screen: 'Ecran de résultats', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216826/search-result_jrjrky.png"},
    {screen: 'Page du tatoueur 1', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216826/page-tatoueur_mxzd3r.png"},
    {screen: 'Page du tatoueur 2', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216825/contact-tatoueur_stv4wo.png"},
    {screen: 'Demande de devis (en attente)', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216824/devis-1_mp84nx.png"},
    {screen: 'Page de favoris', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216824/favoris_jbxdg4.png"},
    {screen: 'Rendez-vous dans le calendrier', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216826/rdv-confirme_nxgkqe.png"},
    {screen: 'Devis à valider', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216826/rdv-attente_erktwh.png"},
    {screen: 'Envoi de la réponse', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216824/confirmation-devis_nxt6fw.png"},
    {screen: 'Demande de devis (validé)', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1643216825/devis-2_c6qmwu.png"}]},
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
    {type: 'application web',
    name : 'Guide ACNH',
    date : '4 jours',
    cadre : 'Partiel HTML / CSS - Mastère MS Web Marketing et Stratégie digitale',
    desc : "Site inspiré de nombreux guides concernant l'aventire Animal Crossing sur Nintendo Switch. Ce projet a été réalisé afin de valider la matière HTML/CSS lors de ma formation à ISEAM. Les compétences principales attendues pour ce projet étaient les menus déroulants, les animations et les transitions CSS. Vous pouvez consulter le rendu dans la video ci-dessous.",
    youtube: "https://youtu.be/5MdydY1ATMM",
    github: "https://github.com/ValentineLvl/animalcrossing.git",
    technology : [
        'HTML', 'CSS'
        ],
    previewImg : "https://res.cloudinary.com/dqulnrq1a/image/upload/v1644407640/accueil_l8ahxy.png",
    imgList : [
    {screen: "Ecran d'accueil", url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1644407441/accueil_x2xp17.png"},
    {screen: 'Menu déroulant', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1644407441/menu_deroulant_qwtlgc.png"},
    {screen: 'Animation de titre', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1644407441/titre_page_clmi3b.png"},
    {screen: 'Animation image', url: "https://res.cloudinary.com/dqulnrq1a/image/upload/v1644407441/transition_image_bcgqwr.png"}
    ]},
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
                    } else if (icon === 'HTML') {
                        return (<FontAwesomeIcon className='languages' icon={faHtml5} size='2x' />)
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
