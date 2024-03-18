import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hi,</span>
            <span className='introText'>I'm <span className='introName'>Rudo Chitsa</span> <br/> Software Developer </span>
            <p className='introPara'>I am a skilled full-stack developer with experience in designing, developing, <br/> and implementing frontend and backend software for web and mobile applications.</p>
            <Link><buton className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</buton></Link>
        </div>
        <img src={bg} alt='profile' className='bg' />
    </section>
  )
}

export default Intro;
