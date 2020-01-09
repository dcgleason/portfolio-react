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
                <h6>HTML5</h6>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faCss3} size='10x'/>
               <h6>CSS3</h6>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faJs} size='10x'/>
            <h6>Javascript</h6>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faBootstrap} size='10x'/>
            <h6>Bootstrap</h6>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faReact} size='10x'/>
            <h6>ReactJS</h6>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faGit} size='10x'/>
            <h6>Git</h6>
              </div>
              <div className='item'>
            <FontAwesomeIcon icon={Icons.faGithub} size='10x'/>
            <h6>Github</h6>
            </div>
          </div>        
        </div>
      </section>
    );
  }
}

export default Skills;
