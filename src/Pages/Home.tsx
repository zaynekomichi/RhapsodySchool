import { Carousel,Container,Row } from "react-bootstrap";
import logo from '../assets/logo.png';
import banner from '../assets/banner_one.png';
import Footer from "../components/footer";
import  one from '../assets/slide_one.jpg';
import  two from '../assets/slide_two.jpg';
import  three from '../assets/slide_three.jpg';
const Home = ()=>{
    console.log(1);
    return(
    <div>
         <div className="text-center d-flex align-items-center flex-column fluid" style={
             {
                backgroundImage:`url(${banner})`,
                height:"71vh",
                width:"100%",
                padding:"5px"
             }
             }>
                <div><img src={logo} width="110" height="150"/></div><br/>
                <div><h1>QUEST FOR EXCELLENCE</h1></div><br/>
                <div><button className="btn btn-primary">EXPLORE</button></div>  
         <Footer/>
        </div>
        <div className="block">
            <div>
            <h1>Why Us</h1>
            </div>
            <div>
                    Rhapsody International Academy provides the classes your child needs.
                    We are here to nature your child talents and to help them reach their goals.
                    With a teacher to pupil ratio of 1:10 every child gets the attention they need, making sure no one is left behind.
                    We operate as a team, one of our many core concepts. Our teaches are all qualified and vaccinated. Your childs safety
                    is what we put first inline. Nomatter if we are in lockdown classes will continue with our online classes
            </div>
        </div>  
    </div>
           
          
    );
}

export default Home;