import React, { Component } from "react";


class Contact extends Component {
 
  
  render() {
    return (
        <section className="contact" id="contact">
        <div className="container">
          <div className="section-heading">
            <h1>Contact</h1>
            <h6>Lets work together</h6>
          </div>
          <form action>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name..." />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email..." />
            <label htmlFor="name">Services:</label>
            <select name="services" id="services">
              <option value>Web Design</option>
              <option value>Web Development</option>
              <option value>Web Design/Development</option>
            </select>
            <label htmlFor="subect">Subject:</label>
            <textarea name="subject" id="subject" cols={30} rows={10} defaultValue={""} />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
