import React, { Component } from 'react';

import './Footer.css'

class Footer extends Component {

  // render nav
  render() {
    return (
      <div>
            <nav id="footerBody" className="uk-navbar-container uk-margin-auto uk-margin-auto-vertical uk-text-center uk-visible@m" uk-navbar='true' uk-navbar="mode: click">
        
                  <div id="leftfooter" className="uk-width-1-3 uk-text-center uk-margin-auto uk-margin-auto-vertical uk-visible@m">
                        <img id='footerLogo'  src= "../images/logo.jpg" alt='' uk-img='true'></img>
                  </div>
                  <div id='centerfooter' className="uk-width-1-3 uk-text-center uk-visible@m footletters uk-margin-auto uk-margin-auto-vertical">
                       
                  </div>
                  <div id='rightfooter' className="uk-width-1-3 uk-text-center uk-visible@m footletters uk-margin-auto uk-margin-auto-vertical">
                        <h3 className='footerContact '>Contact Info</h3>
                        <a className='footheaders' href='/contact'><p>Herbaltranquility@gmail.com</p></a>
                        <a className='footheaders' href="tel:720-602-0676"><p>(720) 602-0676</p></a>
                  </div>
       
            </nav>


            {/* mobile view */}

            <nav id="secondfooter" className="uk-navbar-container uk-text-center uk-align-center uk-hidden@m" uk-navbar='true' uk-navbar="mode: click">
                  <div id="leftfooter" className="uk-width-1-1 uk-text-center uk-margin-auto-vertical uk-hidden@m">
                        <img id='footerLogo' className=' uk-margin-bottom uk-margin-medium-top'  src= "../images/logo.jpg" alt='' uk-img='true'></img>
                  </div>
                  <div id='centerfooter' className="uk-width-1-1 uk-text-center uk-hidden@m footletters uk-margin-auto-vertical">
                        <h3 className='footerContact'>Contact Info</h3>
                        <a className='footheaders' href='/contact'><p>Herbaltranquility@gmail.com</p></a>
                        <a className='footheaders' href="tel:720-602-0676"><p>(720) 602-0676</p></a>
                  </div>
            
            </nav>


      </div>
    );
  }
}


export default Footer;
