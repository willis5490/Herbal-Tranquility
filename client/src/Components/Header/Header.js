import React, { Component } from 'react';

import './Header.css'

class Header extends Component {

  // render nav
  render() {
    return (
        <div>      
          <div  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <nav id = 'headerBody' className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical" uk-navbar='true' uk-navbar="mode: click" >
                        <div className="uk-navbar-left ">
                        <div className="">
                            <a id="mobileMenu" uk-icon="icon: menu; ratio: 2" uk-toggle="target: #offcanvas-nav-primary"></a>

                                <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                                    <div class="uk-offcanvas-bar uk-flex uk-flex-column">

                                        <ul class="uk-nav ">
                                            <li className="uk-nav-header">
                                                <a className="uk-offcanvas-close" uk-close>X</a>
                                                <img id='logoMobile' className="uk-margin-small-right" src= "../images/logo.jpg" alt='' uk-img='true'></img>
                                            </li>
                                            <li className="uk-nav-divider"></li>
                                            <li><a className='navLinks' href="/">Home</a></li>
                                            <li><a className='navLinks'  href="/#services">Services</a></li>
                                            <li><a className='navLinks'  href="/About">About</a></li>
                                            <li><a className='navLinks'  href="/Contact">Contact</a></li>
                                        </ul>

                                    </div>
                                </div>
                        </div>
                            
                        </div>
                        <div className="uk-navbar-center uk-visible@m">
                            <ul className="uk-navbar-nav">
                                <li className=""><a href = "/"><img id='logo-nav' src = "../images/logo.jpg" alt=''></img></a></li>
                                
                            </ul>
                        </div>
                        <div className="uk-navbar-right uk-hidden@m">
                            <ul className="uk-navbar-nav">
                                <li className=""><a href = "/"><img id='logo-nav' src = "../images/logo.jpg" alt=''></img></a></li>
                                
                            </ul>
                        </div>
                </nav>
      </div>
        </div>
    );
  }
}


export default Header;