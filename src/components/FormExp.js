import React from 'react';
import './FormExp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLaptop} from '@fortawesome/free-solid-svg-icons';

function FormExp() {

const dataFormations = [
    {name : 'Titre professionnel de Chef de projet web et mobile',
    date : '10/2021 - 12/2021',
    school : 'Bootcamp La Capsule, Paris, France',
    title : "Titre certifié par l'Etat Niveau 6 au RNCP"},
    {name : 'Mastère de Management Spécialisé en Webmarketing et Stratégie Digitale',
    date : '10/2019 - 10/2021',
    school : 'ISEAM Management School, Lognes (77), France',
    title : "Titre certifié par l'Etat Niveau 7 au RNCP"},
    {name : 'Bachelor en Management Hôtelier',
    date : '09/2016 - 07/2019',
    school : 'Vatel International Business School, Nîmes, France',
    title : "Titre certifié par l'Etat Niveau 6 au RNCP"},
    {name : 'Baccalauréat filiaire Economique et Sociale',
    date : '09/2013 - 06/2016',
    school : 'Lycée Georges Duby, Luynes (13), France',
    title : ""}
]

const dataExperiences = [
    {name : 'Application mobile Tattoo Moi (projet de fin de formation)',
    logo:'https://res.cloudinary.com/dqulnrq1a/image/upload/v1643217388/tattoo-moi_1_l2dioi.png',
    date : '12/2021',
    company : 'Bootcamp La Capsule, Paris, France',
    missions : [
        {title: "mission 1", desc: "Création du processus d'authentification (Connexion / Inscription / Déconnexion)"},
        {title: "mission 2", desc: "Gestion de la mise en favoris (via Redux)"},
        {title: "mission 3", desc: "Création de la navigation"}]},
    
    {name : 'Responsable communication digitale (alternance)',
    logo:'https://res.cloudinary.com/dqulnrq1a/image/upload/v1643217388/novotel-collegien_wmd0gj.png',
    date : '10/2020 - 09/2021',
    company : 'Novotel MLV Collégien, Collégien (77), France',
    missions : [
        {title: "mission 1", desc: "Animation des réseaux sociaux (Facebook, Instagram, LinkedIn)"}, 
        {title: "mission 2", desc: "Modification et ajout de contenus et pages sur le site du restaurant (via Wix)"}]},
    
    {name : 'Assistante Web Marketing (alternance)',
    logo:'https://res.cloudinary.com/dqulnrq1a/image/upload/v1643217388/Groupe-Hema-logo_fttegl.png',
    date : '10/2019 - 09/2020',
    company : 'Groupe HEMA, Lognes (77), France',
    missions : [
        {title: "mission 1", desc: "Modification et ajout de contenus sur les différents sites (via WordPress)"},
        {title: "mission 2", desc: "Intégration de contenus en HTML"},
        {title: "mission 3", desc: "Optimisation d'articles pour le SEO"},
        {title: "mission 4", desc: "Animation des réseaux sociaux"}]}
]

    return (
        <div>
           <h2 className='form-exp'><FontAwesomeIcon className='icon' icon={faGraduationCap} /> Formation</h2>
               {dataFormations.map((formation, i) => {
           return (<div className='div-formation' key={i}>
                <h3>{formation.name}</h3>
                <p className='school'>{formation.school}</p>
                <p className='date'>{formation.date}</p>
                <p className='title'>{formation.title}</p>
            </div>)
                })}
        
           <h2 className='form-exp'><FontAwesomeIcon className='icon' icon={faBriefcase} /> Expériences professionnelles</h2>
           {dataExperiences.map((experience, i) => {
           return (
           <div className='row' key={i}>
               <div className='item'>
                    <img className='logo' src={experience.logo} alt='Entreprise' />
                </div>
                <div className='item'>
                <h3>{experience.name}</h3>
                <p className='school'>{experience.company}</p>
                <p className='date'>{experience.date}</p>
                {experience.missions.map((missions, i) => {
                   return( <p key={i} className='expList'><FontAwesomeIcon className='icon' icon={faLaptop} size='xs'/>{missions.desc}</p>)
                })}

                </div>
           </div>)
                })}
        </div>
    )
}

export default FormExp
