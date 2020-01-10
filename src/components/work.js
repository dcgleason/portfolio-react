import React, { Component } from "react";


class Work extends Component {

  render() {
    return (
        <div>
        <section className="portfolio" id="portfolio">
        <div className="section-heading">
              <h1>----Portfolio----</h1>
              <h6>(Recent Work)</h6>
            </div>
          <div className="portfolio-container">
            <div className="portfolio-item">
              <div className="portfolio-img">
                <img src="https://i.ibb.co/dDqhmwN/Screen-Shot-2019-12-12-at-1-23-23-PM.png" alt="" />
              </div>
              <div className="portfolio-description has-margin-left">
                <h1>Astronomy Trivia</h1>
                <h6>Front End</h6> 
                <br />
                <p>Developed a trivia game from scratch. Constructed HTML, CSS, and Javasript. The application pulls from the NASA API to provide the background image.</p>
                <a href="https://github.com/dcgleason/triviaGame" className="class">View Repo</a>
                <br/>
                <a href="https://dcgleason.github.io/triviaGame/" className="class">View Application</a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-description has-margin-right">
                <h6>Front End</h6>
                <h1>Puppy Click Game</h1> 
                <br />
                <p>Developed click game where user isn't allowed to click a puppy twice. Built in React</p>
                <a href="https://github.com/dcgleason/click-game" className="cla">View Repo</a>
                <br/>
                <a href="https://polar-cove-77559.herokuapp.com/" className="cla">View Application</a>
              </div>
              <div className="portfolio-img">
                <img src="https://i.ibb.co/dJRDhhK/Screen-Shot-2019-12-24-at-11-13-28-AM.png" />
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-img">
                   <img src="https://i.ibb.co/DrX175R/Screen-Shot-2020-01-10-at-11-21-18-AM.png"/>
              </div>
              <div className="portfolio-description has-margin-left">
                <h1>Brewery Tour Manager</h1>
                <h6>Front End</h6>
                <br /> 
                <p>Built using React and the OpenBrewery API, user can create his/her own brewery tour by finding information about breweries by city name in the US."</p>
                <a href="https://github.com/dcgleason/brewery-locator" className="cla">View Repo</a>
                <br/>
                <a href="https://brewery-tour-manager.netlify.com/" className="cla">View Application</a>
              </div>
            </div>
          </div>
        </section>
       
      </div>
    );
  }
}

export default Work;

