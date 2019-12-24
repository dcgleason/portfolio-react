import React, { Component } from "react";
import headshot from "../headshot.png"

class Heading extends Component {
 
  
  render() {
    return (
        
        <section className="about" id="about">
          <div className="about-details">
           
            <div className="about-heading">
                <h1>About</h1>
                <h6>Myself</h6>
             </div>
             <div className="paragraph">
                <p> I'm a full-stack developer, passionate about technology and eager to make a positive impact. I enjoy process of problem-solving, and like to view challenges as opportunities for growth. Have a track-record of maintaining a sense of integrity in the workplace; I pride myself in my ability to learn new skills / technologies quickly. <a href={'https://docs.google.com/document/d/1fliqkVw-Dl5DH0lNOvzOcoEvW8gz_ChUBTg0QFZFVLg/edit'}> [Link to Resume]</a></p>
            </div>
            <br/>
            <div className='container-img'>
               <div className="portfolio-img"> 
                     <img src={headshot} alt="Headshot"/>;
              </div>  
              </div>
            
            <div>
              
            </div>
        </div>
      </section>
    );
  }
}

export default Heading;
