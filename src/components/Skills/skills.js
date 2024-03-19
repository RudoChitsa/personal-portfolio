import React from 'react'
import './skills.css';
import frontEnd from '../../assets/frontend.png';
import backEnd from '../../assets/backend.png';
import androidIos from '../../assets/mobiledev.png';
import devOps from '../../assets/devops.png';
import data from '../../assets/data.png';
import uxDesign from '../../assets/uxdesign.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillsTitle'>What I Do</span>
        <span className='skillsDesc'>i am a software developer </span>
        <div className='skillBars'>

            <div className='skillBar'>
                <img src={frontEnd} alt='frontend' className='skillBarImg' />
                <div className='skillBarText'>
                <h2>Front-End Development</h2>
                <p>I create user interfaces for applications and websites
                    by translating visual designs into functional code. 
                    I implement the layout, styling, and interactivity of a website using 
                    HTML, CSS, JavaScript, React, Bootstrap, Tailwind, JQuery and Redux.
                    </p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={backEnd} alt='backend' className='skillBarImg' />
                <div className='skillBarText'>
                <h2>Back-End Development</h2>
                <p> I develop server-side web application logic and integration 
                    and activities, writing APIs, creating libraries, 
                    and working with system components. I use NodeJS, Express, MongoDB, Mongoose, Python
                    Django Framework and Unix Shell </p>
                </div>
            </div>

        
        <div className='skillBar'>
            <img src={androidIos} alt='androidIos' className='skillBarImg' />
            <div className='skillBarText'>
            <h2>Cross-Platform Development</h2>
            <p>i develop reliable, scalable and user-friendly mobile apps for 
            multiple operating systems, such as iOS and Android. 
            I use React Native, React, JavaScript, REST APIs, SQL and version control</p>
           </div> 
        </div>

            <div className='skillBar'>
                <img src={devOps} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                <h2>DevOps Engineering</h2>
                <p>I am skilled at deploying, managing, monitoring cloud applications, 
                     designing and implementing strategies for collaboration, 
                    code, infrastructure, source control, security, compliance, continuous integration,
                     testing, delivery, monitoring, and feedback.</p>
                    </div>
            </div>

            <div className='skillBar'>
                <img src={uxDesign} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                <h2>UX/UI Design</h2>
                <p>I develop intuitive and engaging user interfaces for digital products by understanding user behaviors, 
                creating wireframes and prototypes, and implementing visually appealing design elements. I use Figma,
                InVision and AdobeXD</p>
                    </div>
            </div>


            <div className='skillBar'>
                <img src={data} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                <h2>Database Engineering</h2>
                <p>I use SQL syntax to interact with a database,
                creating databases from scratch, managing and optimizing databases.
                I write database driven applications in Python to connect clients to MySQL databases.
                </p>
                </div>
            </div>
    </div>
    </section>
  );
}

export default Skills;
