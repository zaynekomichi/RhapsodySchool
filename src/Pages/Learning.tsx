import school from '../assets/school.png'
import { Accordion,Card } from 'react-bootstrap'

const Learning = ()=>{
    const year = new Date().getFullYear()
    console.log(year)
    return(
        <div className=" container text-center">
            <h1>Learning</h1>
            <p>We are currently offering classes from grade 1-7</p>
            <div className="">
                <div>
                    <h3>School Life</h3>
                    <p>Our children enjoy a balanced school programme consisting of academics, sports and culture. Sporting codes include soccer,netball, tennis, swimming,athletics and  dance  Added to this,  chess once a week. Culturally our children can join the school choir, and can enjoy cultural trips.A rigorous curriculum focuses on developing a strong academic background, as well as encouraging the children’s curiosity about our world. Learning extends beyond the classroom, with activities like the Science Fair, Entrepreneurs Day Environmental Club, and Africa Day.</p>
                </div>
                <div className="container row">
                   <div className="col-sm">
                        <Accordion  className="container">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Classes Offered
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>English</li>
                                    <li>Maths</li>
                                    <li>Shona</li>
                                    <li>Heritage Social Studies</li>
                                    <li>Agriculture</li>
                                    <li>FAREME</li>
                                    <li>Science</li>
                                    <li>Visual & Performing Arts</li>
                                    <li>ICT </li>
                                    <li>Physical Education</li>
                                </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                    </div>
                     <div className="col-sm">
                        <Accordion className="container">
                          <Accordion.Item eventKey="0" >
                            <Accordion.Header>
                                Sports
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Athletics</li>
                                    <li>Soccer</li>
                                    <li>Volleyball</li>
                                    <li>Netball</li>
                                    <li>Swimming</li>
                                    <li>Basketball</li>
                                    <li>Handball</li>
                                </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                    </div>
                    

                    <div className="col-sm">
                        <Accordion  className="container">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Extra curricular Activities
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Chess</li>
                                    <li>Public speaking</li>
                                    <li>Drama</li>
                                    <li>Quiz</li>
                                    <li>Debate</li>
                                    <li>Music and Dance</li>
                                </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                    </div>
                    
    </div>
                <div><small>NB: all activities mentioned, might still be under development</small></div>
                <div> 
                    <br/>
                    <b>Our syllabus is currently being updated</b></div>
               <div className='text-center'><img src={school} alt=""/></div>
                    
            </div>
        </div>
    );
}

export default Learning;