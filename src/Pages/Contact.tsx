import { useState } from "react";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import face from "../assets/facebook_compressed.jpg"
import whatsapp from "../assets/whatsapp_compressed.jpg"
import insta from "../assets/instagram_compressed.jpg"
import linkedin from "../assets/linkedin_compressed.jpg"
import tel from "../assets/telephone.png"

const Contact = ()=>{
const [alertBox,setAlert] = useState(true);
const [successBox,setBox] = useState(true)
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [description,setDescription] = useState('');

const SERVICE_ID = "service_9cfwm5x";
const TEMPLATE_ID = "template_58315g9";
const USER_ID = "bAjRZEaENaoyfNi3o";

const handleOnSubmit = (e:any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
       setBox(false)
       setAlert(true)
      }, (error) => {
        console.log(error.text);
        setAlert(false)
        setBox(true)
      });
    e.target.reset()
  };

const data = {
    name,email,description
}


const send=(user:any)=>{
    
}

    return(
        <div>
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center">
              <a href="https://www.facebook.com/rhapsodyinteracademy/" target="_blank"><img src={face} width="20"/></a> &nbsp;
              <a href="https://www.instagram.com/rhapsodyinternationlacademy/?hl=en" target="_blank"><img src={insta} width="20"/></a>  &nbsp;
              <a href="https://zw.linkedin.com/in/rhapsody-international-aba850214" target="_blank"><img src={linkedin} width="20"/></a>  &nbsp;
              <a href="tel:+263717965147" target="_blank"><img src={tel} width="20"/></a>  &nbsp;
              <a href="https://wa.me/qr/RXZW46FSBMV7J1" target="_blank"><img src={whatsapp} width="20"/></a>  &nbsp;
            </p>
            <div className="container">
            <iframe width="100%" height="100%" frameBorder="0" scrolling="no"  id="gmap_canvas" src="https://maps.google.com/maps?hl=en&amp;q=178%20smuts%20rd%20waterfalls%20%20Harare+(Rhapsody)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=55cd8bb9a219c0909569c8f42cedd485d7e1f8d7'></script>
            </div>
            <form onSubmit={handleOnSubmit}>
            <div className=" container alert alert-danger text-center"  hidden={alertBox} role="alert">Fill in the required fields</div>
            <div className=" container alert alert-success text-center"  hidden={successBox} role="alert">Message sent succesfully</div>
                <div className=" d-flex justify-content-center  m-5 form-group row">
                    <div className="col-sm">
                        <label htmlFor="Mr M">Name</label>
                        <input type="text" required placeholder="Your full Name" className="form-control" name="user_name"
                        onChange={e=>setName(e.target.value)}
                        /> 
                    </div>
                    <div className="col-sm">
                        <label htmlFor="your email">Email</label>
                        <input type="email" required placeholder="example@hello.com" className="form-control" name="user_email"
                        onChange={e=>setEmail(e.target.value)}
                        /> 
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col">
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control h-5"  required placeholder="Your message"  name="user_message"
                         onChange={e=>setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="row m-5 pb-5">
                    <button className="btn btn-primary" type="submit">Send</button>
                </div>
                </form>
        </div>
    );
}

export default Contact;