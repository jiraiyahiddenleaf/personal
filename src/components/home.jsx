import React from 'react'
import "./home.scss";
import {FaGithub} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {FaGoodreadsG} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';


const home = () => {
  return (
    <div className='home'>
        <div className='homeComponents'>
            <div className='photo'><img src='/img/atalapa.jpg'/></div>
            <div className='about'>
                <h1 className='name'>Akshat Talapa</h1>

                <div class="wrapper">
    <div class="static-txt">I'm a</div>
    <ul class="dynamic-txts">
      <li><span>Core Blockchain developer</span></li>
      <li><span>Web developer</span></li>
      <li><span>Data Scientist</span></li>
      <li><span>Software Engineer</span></li>
      <li><span> Ethical hacker</span></li>
      <li><span> Entrepreneur</span></li>
    </ul>
  </div>


                {/* <h2>Software Engineer / Entrepreneur</h2>
                <h3> I'm a software, Web developer, Core Blockchain developer, and Data scientist. </h3> */}
                <h3>I've  a strong love for the revolutionary potential of blockchain technology as well as the endless promise of AI and nanotechnology.</h3>
                <h3>An avid reader, I dive into the captivating worlds of mathematics, physics, computer science, psychology, philosophy, and history. Exploring the human experience, unraveling universal laws, pondering the mind's complexities, and embracing knowledge's vast horizons, I embark on an intellectual journey that enriches my understanding of our diverse world. </h3>
                <h3> I investigate the linkages between these fascinating fields, fusing my interest for cutting-edge technology with a love of reading that deepens my knowledge and piques my curiosity.</h3>
                <h3>Currently mastering DSA, AI and Blockchain. More info soon!</h3>
                <div className='social_links'>
                    <a href='https://github.com/jiraiyahiddenleaf?tab=repositories'><div className='icon'><FaGithub/></div></a>
                    <a href='https://www.linkedin.com/in/jiraiya-hiddenleaf-8b6939249/'><div className='icon'><FaLinkedinIn/></div></a>
                    <a href='https://twitter.com/akshattalapa'><div className='icon'><BsTwitter/></div></a>
                    <a href='https://www.instagram.com/akshattalapa/'><div className='icon'><BsInstagram/></div></a>
                    <a href='https://www.goodreads.com/akshattalapa'><div className='icon'><FaGoodreadsG/></div></a>
                    <a href='mailto:akshattalapa27@gmail.com'><div className='icon'><HiOutlineMail/></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default home
