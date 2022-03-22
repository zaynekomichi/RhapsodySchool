import school from '../assets/school.png'

const Learning = ()=>{
    const year = new Date().getFullYear()
    console.log(year)
    return(
        <div className="p-1 text-center">
            <h1>Learning</h1>
            <p>We are currently offering classes from grade 1-7</p>
            <div className="container">
               <b>Our syllabus is currently being updated</b>
               <div><img src={school} alt=""/></div>
                    
            </div>
        </div>
    );
}

export default Learning;