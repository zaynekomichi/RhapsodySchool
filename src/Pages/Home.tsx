import { Carousel,Container,Row } from "react-bootstrap";
import logo from '../assets/logo.png';
import banner from '../assets/banner_one.png';
import Footer from "../components/footer";
import  one from '../assets/slide_one.jpg';
import  two from '../assets/slide_two.jpg';
import  three from '../assets/slide_three.jpg';
import virus from '../assets/virus.png';
const Home = ()=>{
    console.log(1);
    return(
    <div>
         <div className="text-center d-flex align-items-center flex-column img-fluid" style={
             {
                backgroundImage:`url(${banner})`,
                backgroundPosition:'center',
                backgroundRepeat:'no-reapeat',
                backgroundSize:'cover',
                height:"71vh",
                width:"100%",
                padding:"5px"
             }
             }>
                <div><img src={logo} width="110" height="150"/></div><br/>
                <div><h1>QUEST FOR EXCELLENCE</h1></div><br/>
                <div><button className="btn btn-primary">EXPLORE</button></div>  
         
        </div>
        <div className="p-5 block-2">
             <div className="row">
                 <div className="col-sm">
                     <div className="card">
                         <img src=""  className="card-img-top" alt="" />
                         <div className="card-body">
                            <h5 className="card-title">School Security</h5>
                            <p className="card-text">
                                At RIA we know your childs safety comes first before everything else.
                                The school is monitored 24/7 via security cameras. These can be found in all 
                                classes and around the school premises. The school also has guards who constantly 
                                monitor the grounds.
                            </p>
                            <a href="#" className="btn btn-primary">More</a>
                         </div>
                     </div>
                 </div>
                 <div className="col-sm">
                     <div className="card">
                         <img src=""  className="card-img-top" alt="" />
                         <div className="card-body">
                            <h5 className="card-title">Classes</h5>
                            <p className="card-text">
                                RIA offers classes from grade 0-7. We are fully equiped to tackle each grade.
                                Fully stocked text books, qualified teachers, 1:10 teacher to pupil ratio and wide range 
                                of subjects offered will make sure your child is ready to tackle the world.
                            </p>
                            <a href="#" className="btn btn-primary">More</a>
                         </div>
                     </div>
                 </div>
                 <div className="col-sm">
                     <div className="card">
                         <img src={virus}  className="card-img-top" alt="" />
                         <div className="card-body">
                            <h5 className="card-title">Vacinations</h5>
                            <p className="card-text">
                                All teachers at RIA are vaccinated and as such we require all pupils to be vaccinated for covid 19.
                                Lets create a safer environment for our children. For further protection all students are required to wear a face mask and to carry 
                                hand sanitizer.
                            </p>
                            <a href="#" className="btn btn-primary">More</a>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
        <div className="block">
            <div>
            <h1>Why Us</h1>
            </div>
            <div>
                <p>
                Rhapsody International Academy provides the classes your child needs.
                    We are here to nature your child talents and to help them reach their goals.
                    With a teacher to pupil ratio of 1:10 every child gets the attention they need, making sure no one is left behind.
                    We operate as a team, one of our many core concepts. Our teaches are all qualified and vaccinated. Your childs safety
                    is what we put first inline. Nomatter if we are in lockdown classes will continue with our online classes
                </p>
                <div className="container">
                    <h1>Class Room</h1>
                    <div className="row">
                        <div className="col-sm ">
                            <img src={one}  className="img-fluid" alt="" />
                        </div>
                        <div className="col-sm img-fluid">
                            <img src={two}  className="img-fluid"  alt="" />
                        </div>
                        <div className="col-sm img-fluid">
                            <img src={three}  className="img-fluid"  alt="" />
                        </div>
                    </div>
                </div>     
            </div>
        </div>  
        <Footer/>
    </div>
           
          
    );
}

export default Home;