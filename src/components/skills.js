import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-brands-svg-icons'


class Skills extends Component {

  
  render() {
    return (
        <section className="section" id="skill">
          
        <div className="wrapper">
          <h1>----Skills----</h1>
          <div className="skills">
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faHtml5} size='10x'/>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faCss3} size='10x'/>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faJs} size='10x'/>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faBootstrap} size='10x'/>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faReact} size='10x'/>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faGit} size='10x'/>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faGithub} size='10x'/>
            </div>
          </div>        
        </div>
      </section>
    );
  }
}

export default Skills;
