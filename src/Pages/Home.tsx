import { Carousel,Container,Row } from "react-bootstrap";
import logo from '../assets/logo.webp';
import security from '../assets/securityc.jpg';
import classes from '../assets/classes.jpg';
import banner from '../assets/banner_one.webp';
import  one from '../assets/slide_one.webp';
import  two from '../assets/slide_two.webp';
import  three from '../assets/slide_three.webp';
import virus from '../assets/vaccine.jpg';
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
                <div><img src={logo} className="fade" width="110" height="150"/></div><br/>
                <div><h1 className="text-white">QUEST FOR EXCELLENCE</h1></div><br/>
                <div><a href="/about"><button className="btn btn-primary">EXPLORE</button></a></div>  
         
        </div>
        <div className="p-5 block-2">
             <div className="row p-3">
                 <div className="col-sm">
                     <div className="card h-150 m-1">
                         <img src={security}  className="card-img-top" height="173" alt="" />
                         <div className="card-body">
                            <h5 className="card-title">School Security</h5>
                            <p className="card-text">
                                At RIA we know your childs safety comes first before everything else.
                                The school is monitored 24/7 via security cameras. Found in all 
                                classes and around the school premises. We take your childs safety seriously, take up and drop off.
                            </p>
                         </div>
                     </div>
                 </div>
                 <div className="col-sm">
                     <div className="card h-150 m-1" >
                         <img src={classes}  className="card-img-top" alt="" />
                         <div className="card-body">
                            <h5 className="card-title">Classes</h5>
                            <p className="card-text">
                                RIA offers classes from grade 0-7. We are fully equiped to tackle each grade.
                                Fully stocked text books, qualified teachers, 1:15 teacher to pupil ratio and wide range 
                                of subjects offered will make sure your child is ready to tackle the world.
                            </p>
                            
                         </div>
                     </div>
                 </div>
                 <div className="col-sm">
                     <div className="card h-150 m-1" >
                         <img src={virus}  className="card-img-top" alt="" />
                         <div className="card-body">
                            <h5 className="card-title">Vaccinations</h5>
                            <p className="card-text">
                                All teachers at RIA are vaccinated and as such we require all pupils to be vaccinated for covid 19.
                                Lets create a safer environment for our children. For further protection all students are required to wear a face mask and to carry 
                                hand sanitizer.
                            </p>
                            
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
                    With a teacher to pupil ratio of 1:15 every child gets the attention they need, making sure no one is left behind.
                    We operate as a team, one of our many core concepts. Our teaches are all qualified and vaccinated. Your childs safety
                    is out priority. No need to miss a day of learning with our online classes.
                </p>
                <div className="container pb-5 text-center">
                    <h1>Class Life</h1>
                    <div className="row m-1">
                        <div className="col-sm ">
                            <img src={one} loading="lazy" className="img-fluid" alt="" />
                        </div>
                        <div className="col-sm img-fluid">
                            <img src={two} loading="lazy" className="img-fluid"  alt="" />
                        </div>
                        <div className="col-sm img-fluid">
                            <img src={three} loading="lazy" className="img-fluid"  alt="" />
                        </div>
                    </div>
                </div>     
            </div>
        </div>  
        
    </div>
           
          
    );
}

export default Home;