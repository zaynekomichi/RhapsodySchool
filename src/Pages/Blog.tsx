import { useState } from "react";
import axios from "axios";
import { Accordion } from "react-bootstrap";

const Blog = ()=>{
    const medium_url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@riazw";
    axios.get(medium_url).then(res=>{
        console.log(res.data.items)
    }).catch(e=>{
        console.log(e)
    })
    return(
        <div className="container text-center"> 
            <h1>School Blog</h1>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
      <Accordion.Header>Dangers of Social Media for Kids at an early age</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>Social media for kids can be very dangerous besides problems like cyberbullying and online predators, kids also can face the possibility of a physical encounter with the wrong person. Many newer apps automatically reveal the poster's location when they're used. This can tell anyone exactly where to find the person using the app.</p>
        <p>And photos, videos, and comments made online usually can't be taken back once they're posted. Even when a teen thinks something has been deleted, it can be impossible to completely erase it from the Internet.</p>
        <p>Posting an inappropriate photo can damage a reputation and cause problems years later — such as when a potential employer or college admissions officer does a background check. And sending a mean-spirited text, even as a joke, can be very hurtful to someone else and even taken as a threat.</p>
        <p>Spending too much time on social media can be a downer too. Seeing how many "friends" others have and the pictures of them having fun can make kids feel bad about themselves or like they don't measure up to their peers....</p>
        <p>read more <a href="https://kidshealth.org/en/parents/social-media-smarts.html#:~:text=Concerns%20and%20Consequences,the%20person%20using%20the%20app.">here</a></p>
        <small>19/04/2022</small>
      </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> Why is ICT important in schools </Accordion.Header>
    <Accordion.Body className="text-start">
        
        <p>
        Information, Communication and Technology (ICT) is the type of technology employed in the shape of tools, equipment and application support, that helps in the collection, storage, retrieval, use, transmission, manipulation and dissemination of information as accurately and efficiently as possible. It is for the purpose of enriching the knowledge and developing communication, decision making as well as problem solving ability of the user.
        </p>
        <p>
        ICT will not only include hardware devices connected to computers, and software applications, but also interactive digital content, internet and other satellite communication devices, radio and television services, web based content repositories, interactive forums, learning management systems, and management information systems.
        </p>
        <p>
        These will also include processes for digitisation, deployment and management of content, development and deployment of platforms and processes for capacity development, and creation of forums for interaction and exchange.
        </p>
        <p>Read more <a href="https://monichatterjee.medium.com/importance-of-ict-in-education-and-teaching-learning-process-f794225c1c2e">here</a></p>
        <small>20/03/2022</small>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Benefits and disadvantages of online learning</Accordion.Header>
    <Accordion.Body className="text-start">
      <p>
          Online classes have become normal after the use was accelerated due to the pandemic. Students were able
          to continue learning and write their exams, which was great but was it as efficient as being physically in a class 
          compared to switching off your camera and just listening to the teacher. Without no one to monitor what the students were
          actually doing behind the screens was a nightmare for teachers.
      </p>
      <p>
          Online learning has more advantages than disadvantages that being said some might say the few disadvantages
          overweight the  advantages which might be true to a certain extent. So here are the advantages 
      </p>
      <p>
          Advantages
          <ul>
              <li>
              <b>Efficiency</b> - Online learning offers teachers an efficient way to deliver lessons to students. Online learning has a number of tools such as videos, PDFs, podcasts, and teachers can use all these tools as part of their lesson plans. By extending the lesson plan beyond traditional textbooks to include online resources, teachers are able to become more efficient educators.
              </li>
              <li><b>Accessibility Of Time And Place</b> -
                Another advantage of online education is that it allows students to attend classes from any location of their choice. It also allows schools to reach out to a more extensive network of students, instead of being restricted by geographical boundaries. Additionally, online lectures can be recorded, archived, and shared for future reference. This allows students to access the learning material at a time of their comfort.
                Thus, online learning offers students the accessibility of time and place in education.</li>
         
          <li>
          <b>Affordability</b> 
             Another advantage of online learning is reduced financial costs. Online education is far more affordable as compared to physical learning. This is because online learning eliminates the cost points of student transportation, student meals, and most importantly, real estate. Additionally, all the course or study materials are available online, thus creating a paperless learning environment which is more affordable, while also being beneficial to the environment.
          </li>
          <li>
          <b>Improved Student Attendance </b> 
            Since online classes can be taken from home or location of choice, there are fewer chances of students missing out on lessons.
          </li>
          </ul>
      </p>
      <p>read more <a href="https://elearningindustry.com/advantages-and-disadvantages-online-learning" target="_blank">here</a></p>
        <small>01/04/2022</small>
    </Accordion.Body>
  </Accordion.Item >
<Accordion.Item eventKey="4">
      <Accordion.Header> Africa day</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>
        <b></b> Most African countries spent two generations under European colonial power. In one
way or another, almost all African countries were victims of the colonial period. The
effects of colonialism are still visible in the continent. </p>
        <p>Many scholars say that the current political instability, social disorder and economic
crisis in Africa have their roots in the colonial period. Other scholars have reservations
on this matter. Personally I share both ideas, in a sense that there are still impacts of
colonial period, but not all problems can be taken as the legacy of the colonial period.
Just to give an example, the current problem between Ethiopia and Eritrea is the impact
of European colonial power. </p>
        <p>In the 1950s some African countries gained independence from their colonial powers.
These independent countries tried to establish a specific day to be celebrated by
Africans, to create a sense of unity and solidarity. A conference of independent African
States was held in April 1958 in Ghana. Including Ethiopia, the conference was
attended by eight states, and April 15 was declared as African Freedom Day. In order to
celebrate the advance of liberation movements in the continent of Africa, this day was
celebrated in a few countries for five years until the Organization of African Unity (OAU)
was established</p>


<small>Read more<a href="https://media.africaportal.org/documents/Africa_Day_in_the_Spirit_of_Pan.pdf" target="_blank">here</a></small>
      <small>25/05/2022</small>
      </Accordion.Body>
      </Accordion.Item>
</Accordion>
<div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <br/>

    
</div>
        </div>
    );
}

export default Blog;