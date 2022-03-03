import { useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";


const Contact = ()=>{
const [alertBox,setAlert] = useState(true);
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [description,setDescription] = useState('');

const data = {
    name,email,description
}


const send=(user:any)=>{
    const emailCheck = /[.-@]/;
    if(!emailCheck.test(user.email) || user.name === '' || user.description===''){
        setAlert(false);
    }else{
        setAlert(true);
        console.log(user)
    }
}

    return(
        <div>
            <h1 className="text-center">Contact Us</h1>
            <div className="container">
            <iframe width="100%" height="100%" frameBorder="0" scrolling="no"  id="gmap_canvas" src="https://maps.google.com/maps?hl=en&amp;q=178%20smuts%20rd%20waterfalls%20%20Harare+(Rhapsody)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=55cd8bb9a219c0909569c8f42cedd485d7e1f8d7'></script>
            </div>
            <div className=" container alert alert-danger"  hidden={alertBox} role="alert">Fill in the required fields</div>
                <div className=" d-flex justify-content-center  m-5 form-group row">
                    <div className="col-sm">
                        <label htmlFor="Mr M">Name</label>
                        <input type="text" required placeholder="Your full Name" className="form-control"
                        onChange={e=>setName(e.target.value)}
                        /> 
                    </div>
                    <div className="col-sm">
                        <label htmlFor="your email">Email</label>
                        <input type="email" required placeholder="example@hello.com" className="form-control"
                        onChange={e=>setEmail(e.target.value)}
                        /> 
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col">
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control h-5"  required placeholder="Your message"
                         onChange={e=>setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="row m-5 pb-5">
                    <button className="btn btn-primary" onClick={()=>send(data)}>Send</button>
                </div>
        </div>
    );
}

export default Contact;