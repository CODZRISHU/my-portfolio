// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
   // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a7171d3-1c14-40c3-932b-f58e0e336a7f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
        
      event.target.reset();
    } else {
      console.log("Error", data);
    //  setResult(data.message);
    }
  };






  return (
    <div id='contact'  className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>I am currently available to work under estemmed organisation , to upgrade my skills to new height.you can contact me anytime </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" /> <p>shivayjha7@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />  <p>+91-9304783530</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="loc" /> <p>Kochi,India</p>
            </div>
          </div>
        </div>

        <form  onSubmit={onSubmit}className="contact-right">
              <label htmlFor="">Your Name</label>
               <input type="text"placeholder='Enter Your Name' name='name' />
               <label htmlFor="">Your Email</label>
               <input type="email"placeholder='Enter Your Email' name='email'/>
               <label htmlFor="">Write your message here</label>
               <textarea name="message"  rows="8" placeholder='Enter Your Message'></textarea>
               <button type='submit' className="contact-submit">Submit now</button>
       </form>

      
      </div>
      
    </div>
  )
}

export default Contact
