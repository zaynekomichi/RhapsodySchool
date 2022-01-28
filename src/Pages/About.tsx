import logo from '../assets/logo.webp';
import Footer from '../components/footer';

const About = ()=>{
    return(
        <div>
            <div className="container">
                <div className="row  p-5">
                    <div className="col-sm-4">
                        <h1>About Us</h1>
                        <p>
                            Rhapsody International Academy -  RIA <br/>
                            We are an english speaking, christian based school centered in waterfalls on the outskirts of the cbd
                            far from the bustling noise of the city. Founded in 2019 with a vision to educate the african child and
                            empower them with the tools they need for tomorrow, "Dont't give a man a fish but teach him how to fish".
                            A saying which embodes well with what we do. We are on a `Quest For Excellence` meaning everything we do is 
                            not a sub-standard but an A grade. Our Facilities are top notch, approved by the ministry of education with a teacher to pupil
                            ratio of 1:10 your child gets the attention they need.  
                        </p>
                    </div>
                    <div className="col-sm-8 " >
                        <div className='container'>
                        <img src={logo} className="img-thumbnail" height="400" width="400" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <img src="" className='img-fluid rounded' loading='lazy' alt="" />
                    </div>
                    <div className="col-sm-4">
                        <h1>Headmaster Remarks</h1>
                        <p>
                        Rhapsody International Academy -  RIA <br/>
                            We are an english speaking, christian based school centered in waterfalls on the outskirts of the cbd
                            far from the bustling noise of the city. Founded in 2019 with a vision to educate the african child and
                            empower them with the tools they need for tomorrow, "Dont't give a man a fish but teach him how to fish".
                            A saying which embodes well with what we do. We are on a `Quest For Excellence` meaning everything we do is 
                            not a sub-standard but an A grade. Our Facilities are top notch, approved by the ministry of education with a teacher to pupil
                            ratio of 1:10 your child gets the attention they need.  
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-sm-4">
                        <h1>Teacher Remarks</h1>
                        <p>
                            Rhapsody International Academy -  RIA <br/>
                            We are an english speaking, christian based school centered in waterfalls on the outskirts of the cbd
                            far from the bustling noise of the city. Founded in 2019 with a vision to educate the african child and
                            empower them with the tools they need for tomorrow, "Dont't give a man a fish but teach him how to fish".
                            A saying which embodes well with what we do. We are on a `Quest For Excellence` meaning everything we do is 
                            not a sub-standard but an A grade. Our Facilities are top notch, approved by the ministry of education with a teacher to pupil
                            ratio of 1:10 your child gets the attention they need.  
                        </p>
                    </div>
                    <div className="col-sm-8 " >
                        <img src={logo} className="img-fluid" height="50" alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;