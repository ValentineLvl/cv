import React from 'react';

import Nav from '../components/Nav';
import User from '../components/User';
import ProjectDetails from '../components/ProjectDetails';

function Project() {
    return (
        <div className="App">
         <Nav/>
      <div className='container'>
        <div className='sidebar'>
          <User />
        </div>
        <div className='main'>
        <ProjectDetails />
        </div>
      </div>
    </div>
    )
}

export default Project
