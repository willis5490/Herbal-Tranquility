import React, { Component } from 'react';
import SVG from './SVG.js'
import './Home.css'
import {TimelineLite} from "gsap";



class Home extends Component {
   
    constructor(props){
		super(props);
		// logo container
		this.logoContainer = null;
		// logo tween
        this.logoTween = null;

        this.logoContainer1 = null;
		// logo tween
        this.logoTween1 = null;

        this.logoContainer2 = null;
		// logo tween
        this.logoTween2 = null;

        this.logoContainer3 = null;
		// logo tween
        this.logoTween3 = null;

        this.logoContainer4 = null;
		// logo tween
        this.logoTween4 = null;

        this.logoContainer5 = null;
		// logo tween
        this.logoTween5 = null;

        this.logoContainer6 = null;
		// logo tween
        this.logoTween6 = null;

        this.logoContainer7 = null;
		// logo tween
        this.logoTween7 = null;

        this.logoContainer8 = null;
		// logo tween
        this.logoTween8 = null;

        this.logoContainer9 = null;
		// logo tween
        this.logoTween9 = null;

        this.logoContainer10 = null;
		// logo tween
        this.logoTween10 = null;

        this.logoContainer11 = null;
		// logo tween
        this.logoTween11 = null;

        this.logoContainer12 = null;
		// logo tween
        this.logoTween12 = null;

        this.logoContainer13 = null;
		// logo tween
        this.logoTween13 = null;

     

        this.randomNumber = (min, max) => {
            return Math.floor(Math.random() * (1 + max - min) + min);
        }
        this.random = (min, max) => {
            if (max == null) { max = min; min = 0; }
            return Math.random() * (max - min) + min;
          }
        
        this.twoPi = Math.PI * 2;
	}
    
    


    componentDidMount(){
        // create logo tween
        
        this.logoTween = new TimelineLite({ paused:false })
            .set(this.logoContainer, {
                x: -400,
                y: -400
              })
              .to(this.logoContainer, 3, {y:(0, 0), x:(0, 0)})
              .to(this.logoContainer, 3, {rotation:360}) 
            .to(this.logoContainer, 3, {y:(0, 0), x:(0, 0)})
            .to(this.logoContainer, 2, {y:(0, 0), x:(0, 0)})     
            this.logoTween1 = new TimelineLite({ paused:false })
            .set(this.logoContainer1, {
                x: -400,
                y: 400
              })
              .to(this.logoContainer1, 3, {y:(0, 0), x:(0, 0)})
              .to(this.logoContainer1, 3, {rotation:360})
            .to(this.logoContainer1, 3, {y:(0, 0), x:(0, 0),skewX:25})
            .to(this.logoContainer1, 2, {y:(0, 0), x:(0, 0)})
            .to(this.logoContainer1, 3, {skewX:25})

            this.logoTween2 = new TimelineLite({ paused:false })
            .set(this.logoContainer2, {
                x: 400,
                y: -400
              })
              .to(this.logoContainer2, 3, {y:(0, 0), x:(0, 0)})
              .to(this.logoContainer2, 3, {rotation:360})
            .to(this.logoContainer2, 3, {y:(0, 0), x:(0, 0), skewX:25})
            .to(this.logoContainer2, 2, {y:(0, 0), x:(0, 0), scale:1.0})
            .to(this.logoContainer2, 3, {skewX:25})
            
            this.logoTween3 = new TimelineLite({ paused:false })
            .set(this.logoContainer3, {
                x: -400,
                y: -400
              })
              .to(this.logoContainer3, 3, {y:(0, 0), x:(0, 0)})
              .to(this.logoContainer3, 3, {rotation:360})
            .to(this.logoContainer3, 3, {y:(0, 0), x:(0, 0), skewX:-25})
            .to(this.logoContainer3, 2, {y:(0, 0), x:(0, 0)})
            .to(this.logoContainer3, 3, {skewX:-25})

            this.logoTween4 = new TimelineLite({ paused:false })
            .set(this.logoContainer4, {
                x: -400,
                y: -400
              })
              .to(this.logoContainer4, 3, {y:(0, 0), x:(0, 0)}) 
              .to(this.logoContainer4, 3, {rotation:360})
            .to(this.logoContainer4, 3, {y:(0, 0), x:(0,0 )})
            .to(this.logoContainer4, 2, {y:(0, 0), x:(0, 0)}) 

            this.logoTween5 = new TimelineLite({ paused:false })
            .set(this.logoContainer5, {
                x: 400,
                y: -400
              })
              .to(this.logoContainer5, 3, {y:(0, 0), x:(0, 0)}) 
              .to(this.logoContainer5, 3, {rotation:360})
            .to(this.logoContainer5, 3, {y:(0, 0), x:(0,0 )})
            .to(this.logoContainer5, 2, {y:(0, 0), x:(0, 0)}) 

            this.logoTween6 = new TimelineLite({ paused:false })
            .set(this.logoContainer6, {
                x: -400,
                y: 400
              })
              .to(this.logoContainer6, 3, {y:(0, 0), x:(0, 0)})
              .to(this.logoContainer6, 3, {rotation:360})
            .to(this.logoContainer6, 3, {y:(0, 0), x:(0, 0)})
            .to(this.logoContainer6, 2, {y:(0, 0), x:(0, 0), scale:1.0}) 
            this.logoTween7 = new TimelineLite({ paused:false })
            .set(this.logoContainer7, {
                x: -400,
                y: -400
              })
              .to(this.logoContainer7, 3, {y:(0, 0), x:(0, 0)})
              .to(this.logoContainer7, 3, {rotation:360})
            .to(this.logoContainer7, 3, {y:(0, 0), x:(0, 0)})
            .to(this.logoContainer7, 2, {y:(0, 0), x:(0, 0)}) 
            this.logoTween8 = new TimelineLite({ paused:false })
            .set(this.logoContainer8, {
                x: 400,
                y: -400
              })
              .to(this.logoContainer8, 3, {y:(0, 0), x:(0, 0)}) 
              .to(this.logoContainer8, 3, {rotation:360})
            .to(this.logoContainer8, 3, {y:(0, 0), x:(0, 0), skewX:-25, skewY:-25})
            .to(this.logoContainer8, 2, {y:(0, 0), x:(0, 0)}) 
            .to(this.logoContainer8, 3, { skewX:-25, skewY:-25})

            this.logoTween9 = new TimelineLite({ paused:false })
            .set(this.logoContainer9, {
                x: -400,
                y: -400
              })
              .to(this.logoContainer9, 3, {y:(0, 0), x:(0, 0)}) 
              .to(this.logoContainer9, 3, {rotation:360})
            .to(this.logoContainer9, 3, {y:(0, 0), x:(0, 0), skewX:25, skewY:25})
            .to(this.logoContainer9, 2, {y:(0, 0), x:(0, 0), scale:1.0})
            .to(this.logoContainer9, 3, {skewX:25, skewY:25})

            this.logoTween10 = new TimelineLite({ paused:false })
            .set(this.logoContainer10, {
                x: -400,
                y: 400
              })
              .to(this.logoContainer10, 3, {y:(0, 0), x:(0, 0)}) 
              .to(this.logoContainer10, 3, {rotation:360})
            .to(this.logoContainer10, 3, {y:(0, 0), x:(0, 0)})
            .to(this.logoContainer10, 2, {y:(0, 0), x:(0, 0)}) 

            this.logoTween11 = new TimelineLite({ paused:false })
            .set(this.logoContainer11, {
                x: 400,
                y: -400
              })
              .to(this.logoContainer11, 3, {y:(0, 0), x:(0, 0)}) 
              .to(this.logoContainer11, 3, {rotation:360})
            .to(this.logoContainer11, 3, {y:(0, 0), x:(0, 0),skewX:-25})
            .to(this.logoContainer11, 2, {y:(0, 0), x:(0, 0), scale:1.0})
            .to(this.logoContainer11, 3, {skewX:-25})

            this.logoTween12 = new TimelineLite({ paused:false })
            .set(this.logoContainer12, {
                x: -400,
                y: -400
              })
              .to(this.logoContainer12, 3, {y:(0, 0), x:(0, 0)})
              .to(this.logoContainer12, 3, {rotation:360})
            .to(this.logoContainer12, 3, {y:(0, 0), x:(0, 0)})
            .to(this.logoContainer12, 2, {y:(0, 0), x:(0, 0)}) 

            this.logoTween13 = new TimelineLite({ paused:false })
            .set(this.logoContainer13, {
                x: 400,
                y: -400
              })
              .to(this.logoContainer13, 3, {y:(0, 0), x:(0, 0)})
              .to(this.logoContainer13, 3, {rotation:360})
            .to(this.logoContainer13, 3, {y:(0, 0), x:(0, 0)})
            .to(this.logoContainer13, 2, {y:(0, 0), x:(0, 0), scale:1.0}) 

          

	}
 
 
    

  // render nav
  render() {
    return (
      <div>
        
            <div id='homeMainPic' class="uk-height-large uk-background-cover uk-overflow-hidden  uk-flex uk-flex-top homeHeadPiece" >
              <div class="uk-width-1-1@xs uk-text-center uk-margin-auto-vertical">
                 <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer = img }
					/>
                    <br></br>
                     <img    id='homeLeafLeft'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer1 = img }
					/>

                     <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer10 = img }
					/>
                     <img    id='homeLeafRight'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer11 = img }
					/>
                    
                    <br></br>
                     <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer2 = img }
					/>
                     <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer12 = img }
					/>
                    <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer3 = img }
					/>
                    <br></br>
                     <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer4 = img }
					/>
                    <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer5 = img }
					/>
                     <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer13 = img }
					/>
                    <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer6 = img }
					/>
                     <img    id='homeLeaf'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer7 = img }
					/>
                    <br></br>
                     <img    id='homeLeafBottomLeft'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer8 = img }
					/>
                    
                    <img    id='homeLeafBottomRight'
						src="../images/marijuana.svg"
						alt="Icons made by https://www.flaticon.com/authors/roundicons title=Roundicons Roundicons from https://www.flaticon.com/  title= licensed by http://creativecommons.org/licenses/by/3.0/ title = Creative Commons BY 3.0 CC 3.0 BY"
						className="img-fluid logo"
						ref={ img => this.logoContainer9 = img }
					/>
                   
                    
              </div>
            </div>
            
            
        <div className='uk-container'>
        
        <div id='services' ></div>
          <br></br>

            <h1 className='uk-align-center uk-text-center uk-margin-large-top'><b><u>SERVICES</u></b></h1>
          <div className='uk-height-expand homeCards uk-visible@m service1'>
                <div class=" uk-grid-small uk-grid-match" uk-grid='true'>
                    <div className='uk-width-1-3'>
                        <div className='uk-text-center uk-margin-auto-vertical'>
                            <h2 >The Body High</h2>
                            <img className='homePics' src= "../images/image3.jpeg"></img>
                        </div>
                    </div>
                    <div className='uk-width-2-3'>
                        <div className='uk-text-center uk-margin-xlarge-left uk-margin-auto-vertical'>
                            <h2 >Price - $80</h2>
                            <p className=''>A 50 minute hands on, customized, therapeutic massage to focal areas for rehabilitation, stress relief
                                and relaxation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        <div className='uk-height-expand homeCards uk-visible@m service2'>
            <div class=" uk-grid-small uk-grid-match" uk-grid='true'>
               
                <div class="uk-width-2-3">
                    <div className='uk-text-center uk-margin-xlarge-right uk-margin-auto-vertical'>
                        <h2 >Price - $125</h2>
                        <p>Traditional hot stone treatment. Smooth river rocks are warmed and applied to the body with pressure to provide an extra level of heat 
                            and compression: This is an 80 minute hand/stone session with limited availability.
                        </p>
                    </div>
                </div>
                <div class="uk-width-1-3">
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h3 >Hot Stoned Massage</h3>
                        <img className='homePics' src= "../images/image7.jpeg"></img>
                    </div>
                </div>
            </div>
        </div>



        <div className='uk-height-expand homeCards uk-visible@m service3'>
            <div class="uk-grid-small uk-grid-match" uk-grid='true'>
                <div class="uk-width-1-3">
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h3 >Herbal Tranquility's Cannabis Cup</h3>
                        <img className='homePics' src= "../images/image4.jpeg"></img>
                    </div>
                </div>
                <div class="uk-width-2-3">
                    <div className='uk-text-center uk-margin-xlarge-left uk-margin-auto-vertical'>
                        <h2 >Price - $90 50 minutes/$125 80 minutes</h2>
                        <p>"Fire" induced cupping treatment for back and shoulders, to move stagnent blood/Qi and to release facial restrictions.
                            The 50 minute session is an upper body treatment, add 30 minutes for a full body flush.
                        </p>
                    </div>
                </div>
               
            </div>
        </div>

        <div className='uk-height-expand homeCards uk-visible@m service4'>
            <div class=" uk-grid-small uk-grid-match" uk-grid='true'>
                <div class="uk-width-2-3">
                    <div className='uk-text-center uk-margin-xlarge-right uk-margin-auto-vertical'>
                        <h2 >Price - $140</h2>
                        <p>A multi-sensory relaxation experience with a custom blend of herbs that are steamed to provide moist heat and compression along with olfactory and
                            transdermal benefits. This 80 minute spell is topped off with a cannabis oil/lotion focus to troubled areas. Requires a 72 advanced booking with a 
                            brief intake.
                        </p>
                    </div>
                </div>
                <div class="uk-width-1-3">
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h3 >Cannabis Compress</h3>
                        <img className='homePics' src= "../images/image6.jpeg"></img>
                    </div>
                </div>
            </div>
        </div>


            
           
  

              {/* mobile view */}
                
        <div className='uk-height-expand mobileHomeCards uk-hidden@m '>
            <div class="uk-child-width-1-1@m uk-grid-small uk-grid-match" uk-grid='true'>
                <div>
                    <div className='uk-text-center uk-margin-auto-vertical'>
                            <h2 >The Body High</h2>
                            <img className='homePics' src= "../images/image3.jpeg"></img>
                    </div>
                </div>
                <div>
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h2 >Price - $80</h2>
                        <p className=''>A 50 minute hands on, customized, therapeutic massage to focal areas for rehabilitation, stress relief
                            and relaxation.
                        </p>
                    </div>
                </div>
               
            </div>
        </div>


          <div className='uk-height-expand mobileHomeCards uk-hidden@m '>
            <div class="uk-child-width-1-1@m uk-grid-small uk-grid-match" uk-grid='true'>
                <div>
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h3 >Hot Stoned Massage</h3>
                        <img className='homePics' src= "../images/image7.jpeg"></img>
                    </div>
                </div>
                <div>
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h2 >Price - $125</h2>
                        <p>Traditional hot stone treatment. Smooth river rocks are warmed and applied to the body with pressure to provide an extra level of heat 
                            and compression: This is an 80 minute hand/stone session with limited availability.
                        </p>
                    </div>
                </div>
               
            </div>
        </div>

          <div className='uk-height-expand mobileHomeCards uk-hidden@m '>
            <div class="uk-child-width-1-1@m uk-grid-small uk-grid-match" uk-grid='true'>
                <div>
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h3 >Herbal Tranquility's Cannabis Cup</h3>
                        <img className='homePics' src= "../images/image4.jpeg"></img>
                    </div>
                </div>
                <div>
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h2 >Price - $90 50 minutes/$125 80 minutes</h2>
                        <p>"Fire" induced cupping treatment for back and shoulders, to move stagnent blood/Qi and to release facial restrictions.
                            The 50 minute session is an upper body treatment, add 30 minutes for a full body flush.
                        </p>
                    </div>
                </div>
               
            </div>
        </div>

          <div className='uk-height-expand mobileHomeCards uk-hidden@m '>
            <div class="uk-child-width-1-1@m uk-grid-small uk-grid-match" uk-grid='true'>
                <div>
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h3 >Cannabis Compress</h3>
                        <img className='homePics' src= "../images/image6.jpeg"></img>
                    </div>
                </div>
                <div>
                    <div className='uk-text-center uk-margin-auto-vertical'>
                        <h2 >Price - $140</h2>
                        <p>A multi-sensory relaxation experience with a custom blend of herbs that are steamed to provide moist heat and compression along with olfactory and
                            transdermal benefits. This 80 minute spell is topped off with a cannabis oil/lotion focus to troubled areas. Requires a 72 advanced booking with a 
                            brief intake.
                        </p>
                    </div>
                </div>
               
            </div>
        </div>
       



            <div >
                <div className='uk-container'>
                    <div uk-grid='true'>
                        <div className='uk-width-1-1 uk-text-center uk-margin-xlarge-bottom'>
                            <h3 className='homeTextBottom'>*ALL SERVICES INCLUDE A THC/CBD, OIL/LOTION OPTION</h3>
                            <h3 className='homeTextBottom'>*15% DISCOUNT TO: TEACHERS, LAW ENFORCEMENT, ACTIVE MILITARY AND FIRST RESPONDERS</h3>
                        </div>
                    </div>
                </div>
            </div>

            <a href='/Contact'><button class="uk-button homeButtons uk-text-center uk-margin-xlarge-bottom uk-align-center uk-visible@m uk-button-large">Contact us!</button></a>
            <a href="tel:720-602-0676"><button class="uk-button homeButtons uk-text-center uk-margin-xlarge-bottom uk-align-center uk-hidden@m uk-button-large">Call Us!</button></a>
          
          </div>
      </div>
    );
  }
}


export default Home;