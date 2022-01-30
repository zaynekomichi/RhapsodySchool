
const Contact = ()=>{
    return(
        <div>
            <h1 className="text-center">Contact Us</h1>
                
                <div className=" d-flex justify-content-center  m-5 form-group row">
                    <div className="col-sm">
                        <label htmlFor="Mr M">Name</label>
                        <input type="text" placeholder="Your full Name" className="form-control" /> 
                    </div>
                    <div className="col-sm">
                        <label htmlFor="your email">Email</label>
                        <input type="email" placeholder="example@hello.com" className="form-control" /> 
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col">
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control h-5" placeholder="Your message"></textarea>
                    </div>
                </div>
                <div className="row m-5">
                    <button className="btn btn-primary">Send</button>
                </div>
        </div>
    );
}

export default Contact;