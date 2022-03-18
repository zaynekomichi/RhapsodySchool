import logo from '../assets/logo.webp';
import teacher from '../assets/remarks.jpg';
import headmaster from '../assets/headmaster.jpg';


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
                        <img src={headmaster} className='img-thumbnail rounded' height="50" loading='lazy' alt="" />
                    </div>
                    <div className="col-sm-4">
                        <h1>Headmaster Remarks</h1>
                        <p>
                    
                        <br/>

Quality education remains a pillar for social and economic growth of any country. As economic and social hardships spread globally, education through its curricula needs to be innovative to produce resilient and self-sustaining citizens. Zimbabwean education has been a quality bench mark in the region for decades, however the legacy is being threatened by economic hardships and effects of COVID 19 pandemic. It against these challenges that timely entrance of innovative players is called for , to intercept the situation and pitch the bar of excellence higher, against an increased population of school going children. In context Rhapsody International Academy (RIA) is a private Christian co-education school that was established to contribute to national economic development by offering quality education of international standard, aimed at producing global citizens. It opened its doors on 7 February 2022.
At RIA, each learner is given an opportunity to dream, believe and achieve
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                    <br/>
<b>VISION</b>
<br/>
Quality education for global citizenship
<br/>

<b>MISSION</b>
<br/>
Rhapsody International Academy exists to provide quality STEM primary education through innovative 
teaching and learning methods in state of art infrastructure. 
Each learner is given an opportunity to dream, believe and achieve
<br></br>
<b>OUR MOTTO</b>
<br/>
Quest for excellence
<br></br>
<b>OUR VALUES</b>
<br></br>
<ul>
    <li>Respect for all</li>
    <li>Hard work</li>
    <li>Honesty</li>
    <li>Compassion</li>
    <li>Responsibility</li>
</ul>

<b>GUIDING PRINCIPLES</b>
<br/>
We:
<ul>
    <li>Respect ourselves, others and  their possessions</li>
    <li>Work hard at all times</li>
    <li>Tell the truth always</li>
    <li>Are compassionate to those less fortunate than yourself</li>
    <li>Accept responsibility for you actions</li>
</ul>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-sm-4 p-1">
                        <h1>Teacher Remarks</h1>
                        <p>
                        On 7 February 2022, Rhapsody International Academy (RIA) opened its doors to welcome its first learners. It was an exciting day for both learners and teachers… dubbed ‘the RIA Pioneers of 2022’. The day was filled with a hype of activities from locating the rest rooms and lockers to remembering class teachers’ name! However,  irrespective of the anxieties…it was fun!
<br/><b>What sets us apart?</b><br/>
RIA prides itself with Science Technology, Engineering and Mathematics (STEM) based curricula that fosters ingenuity and creativity for a 21st citizen. With a student teacher ratio of 1:15, each learner is allowed to dream, believe and achieve.
<br/><b>You are invited</b><br/>
Education is a shared commitment between dedicated teachers, motivated learners and enthusiastic parents, I invite you all to journey with us in our quest for excellence!

                        </p>
                    </div>
                    <div className="col-sm-8 " >
                        <img src={teacher} className="img-thumbnail pull=left" height="50" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;