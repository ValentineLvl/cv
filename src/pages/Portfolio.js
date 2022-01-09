import React from 'react';
import Nav from '../components/Nav';
import User from '../components/User';
import Projects from '../components/Projects';
import '../App.css';

function Portfolio() {
    return (
        <div className="App">
         <Nav/>
      <div className='container'>
        <div className='sidebar'>
          <User />
        </div>
        <div className='main'>
        <Projects />
        </div>
      </div>
    </div>
  );
    
}

export default Portfolio
