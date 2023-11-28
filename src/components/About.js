import React from 'react';
import Title from './Title';
import aboutImage from '../images/about.jpeg'

const About = () => {
  return (
    <section id='about' className='about'>
        <Title title={'ABOUT'} subTitle={'US'}></Title>
        <div className='aboutMain'>
           <div className='ImageSection'>
            <div className='backBox'>

            </div>
            <div className='aboutImage'>
            <img src={aboutImage} alt='aboutImage'/>
            </div>
            
           </div>
           <div className='ParaSection'>
            <h2>Explore The Difference</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
            <button>Read More</button>
           </div>

        </div>


    </section>
  )
}

export default About