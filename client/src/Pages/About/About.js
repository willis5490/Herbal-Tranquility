import React, { Component } from 'react';
// import '@zendeskgarden/css-buttons';

import './About.css'



class About extends Component {

  // render nav
  render() {
    return (
      <div>
          <div>
            <div className='uk-container uk-margin-large-top uk-margin-large-bottom'>
              <div className='' uk-grid='true'>
              <div className='uk-width-1-1 uk-text-center'>
                <h1>About</h1>
              </div>
              <div className='uk-width-1-1 uk-text-center'>
                <p>
                  Herbal Tranquility Marijuana Massage was formed by Chris L. Smith Jr. , L.M.T to take the therapeutic benefits of massage to a deeper level using cannabis. 
                </p>
                <img src='../images/image4.jpeg' width='250px' height='250px'></img>
                <p>
                  In my journey on this planet, I have experienced many injuries while on bicycles, motorcycles, skis, skateboards and boats. With 21+ years of massage experience
                  and over 35 years exploring cannabis, I have had great success in overcoming my pain and have avoided every surgery that has been offered to "fix me up".
                </p>
                <p>
                  For many decades cannabis has held negative depictions. Law reforms in the past few years has allowed more research and a better understanding of the healing gifts this 
                  plant has to offer.
                </p>
                <p>
                  It is my hope with Herbal Tranquility Marijuana Massage that my knowledge of massage therapy and the healing contributions of cannabis will improve your quality
                  of life and allow you a greater experience on this planet.
                </p>
              </div>

              </div>
            </div>
          </div>
      </div>
    );
  }
}


export default About;