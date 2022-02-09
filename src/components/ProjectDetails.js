import React from 'react';
import { connect } from "react-redux";
import ReactPlayer from 'react-player'
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faImage, faCode, faArrowAltCircleLeft, faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faGithub, faJsSquare, faReact, faCss3Alt, faNodeJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function ProjectDetails(props) {
    return (
        <div>
            <Link to='/portfolio' exact ><FontAwesomeIcon className='icon' icon={faArrowAltCircleLeft} />Retour au Portfolio</Link>
           <h2 className='project-name'>{props.selectedProject.type === "application mobile" ? (<FontAwesomeIcon className='icon' icon={faMobileAlt} />) : (<FontAwesomeIcon className='icon' icon={faLaptop} />)}{props.selectedProject.name}</h2>
            <div>
                <div className='github'>
                <h3>Cadre : {props.selectedProject.cadre}</h3>
                <button><a href={props.selectedProject.github} target='blank'><FontAwesomeIcon className='icon' icon={faGithub} size='lg'/>Code source</a></button>
                </div>
                <p className='devTime'>Durée de développement : {props.selectedProject.date}</p>
                <p className='descProject'>Description du projet : {props.selectedProject.desc}</p>
                <h3 className='youtube'><FontAwesomeIcon className='icon' icon={faCode} />Languages / Librairies utilisés</h3>

                <div className='library'>
                {props.selectedProject.technology.map ((icon) => { 
               
                 if (icon === 'JavaScript') {
                    return (<p className='p-icon'><FontAwesomeIcon className='languages' icon={faJsSquare} size='3x' />{icon}</p>)
                } else if (icon === 'React' || icon === 'React Native') {
                    return (<p className='p-icon'><FontAwesomeIcon className='languages' icon={faReact} size='3x' />{icon}</p>)
                } else if (icon === 'Node.js') {
                    return (<p className='p-icon'><FontAwesomeIcon className='languages' icon={faNodeJs} size='3x' />{icon}</p>)
                } else if (icon === 'HTML') {
                    return (<p className='p-icon'><FontAwesomeIcon className='languages' icon={faHtml5} size='3x' />{icon}</p>)
                } else if (icon === 'CSS') {
                    return (<p className='p-icon'><FontAwesomeIcon className='languages' icon={faCss3Alt} size='3x' />{icon}</p>)
                } 
                return (<></>)  })}
                </div>
                <h3 className='youtube'><FontAwesomeIcon className='icon' icon={faYoutube} />Vidéo</h3>
            <div className='player'>
                <ReactPlayer style={{ position: 'absolute'}} width={'100%'} url={props.selectedProject.youtube} />
                </div>
                <h3 className='galery'><FontAwesomeIcon className='icon' icon={faImage} />Galerie Photos</h3>
            <div className='grid-galery'>
            {props.selectedProject.imgList.map((image, i) => {
           return (   
               <div className='galery-item'>            
           <img src={image.url} className='project-img' alt='Aperçu' />
           <p className='img-title'>{image.screen}</p>
           </div> 
           )})}
            </div>
            </div>
          <a href='#' className='go-up'><FontAwesomeIcon className='icon-arrow-up' icon={faArrowAltCircleUp} size='4x' /></a>     
        </div>
     
    )
}

function mapStateToProps(state) {
    return {
        selectedProject: state.selectedProject
    };
}

export default connect(
    mapStateToProps,
    null
) (ProjectDetails)
