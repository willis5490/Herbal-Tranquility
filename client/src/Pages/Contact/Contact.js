import React, { Component } from 'react';
import axios from "axios";

import './Contact.css'



class Contact extends Component {
  state = {
    name: '',
    number: '',
    inquiry: ''
   }
 
   sendEmail = event => {
    //  event.preventDefault();
     if(this.state.name === ''){
       alert("ALL FIELDS ARE REQUIRED!")
     }else if(this.state.number === ''){
      alert("ALL FIELDS ARE REQUIRED!")
     }else if(this.state.inquiry === ''){
      alert("ALL FIELDS ARE REQUIRED!")
     }else if(this.state.number.length !== 12){
      alert("Please enter a valid number in this format 555-555-5555!")
     }
     else {
      axios.post("https://www.herbaltranquilitymarijuanamassage.com/sendEmail", {
        number: this.state.number,
         name: this.state.name,
         inquiry: this.state.inquiry
       })
         .then((res) => {
          console.log(res)
         })
         .catch((err) => {
           console.log(err)
         })

         alert("Your Email has been sent! Thank You!")
          this.emptyFields()
     }
    
   
   };
 
   handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   };
 
   emptyFields = () => {
     this.setState({
       name: '',
       number: '',
       inquiry: ''
     })
   }
 
   
  // render nav
  render() {
    return (
      <div  className="uk-container">
       <div  className="uk-section">
         <h1 className="uk-heading-line uk-text-center">{`Contact Us To Make An Appointment!`}</h1>


         <h4 id='formheader' className='uk-text-center'>Please fill out your information below.</h4>
 
         <div className="formDiv ">
           <form>
             <fieldset className="uk-fieldset ">
               <div className="uk-margin  uk-margin-top">
                 <div  className="uk-inline uk-width-1-1">
                   <a className="uk-form-icon" href="#" uk-icon="icon: user"></a>
                   <input
                   value={this.state.name}
                   onChange={this.handleInputChange}
                   name='name'
                    className="uk-input" 
                    type="text" 
                    placeholder="Name" />
                 </div>
                 
               </div>
               <div className="uk-margin">
                 <div  className="uk-inline uk-width-1-1 ">
                  <a className="uk-form-icon"><i class="fas fa-mobile-alt"></i></a>
                   <input
                   value={this.state.number}
                   onChange={this.handleInputChange}
                   name='number'
                    className="uk-input" 
                    type="text" 
                    placeholder="Number  ex. 555-555-5555" />
                 </div>
               </div>
               <div id="inquireInput" className="uk-margin uk-width-1-1">
                 <select 
                  value={this.state.inquiry}
                  onChange={this.handleInputChange}
                  name='inquiry'
                 className="uk-select">
                   <option>{`Which herbal service interests you?`}</option>
                   <option>The Body High</option>
                   <option>Hot Stoned Massage</option>
                   <option>Herbal Tranquility's Cannabis Cup</option>
                   <option>Cannabis Compress</option>
                   <span uk-icon="icon: chevron-down"></span>
                 </select>
               </div>

             </fieldset>
           </form>
           <button onClick={()=>{this.sendEmail()} }id="send-button" type="submit" name="action" className="uk-align-center uk-margin-auto uk-margin-top uk-button uk-button-primary uk-button-large uk-width-large">Send</button>
         </div>
       </div>
       </div>
    );
  }
}


export default Contact;