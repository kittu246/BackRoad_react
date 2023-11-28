import React from 'react';
import Title from './Title';
import { servicesCardInfo } from '../data';

const Services = () => {
  return (
    <section id='services' className='sevicesSection'>
        <Title title={'OUR'} subTitle={'SERVICES'}/>

        <div className='serviceCardSection'>
        {servicesCardInfo.map(
            (serviceCard,index) =>{
            return (
            <div key={index} className='servicesCard'>
            <div className='serviceIcon'>
            <i class={`fa-solid ${serviceCard.iconClass}`}></i>
            </div>
            <div className='serviceInfor'>
            <h5>{serviceCard.heading}</h5>
            <p>{serviceCard.para}</p>
            </div>
           </div>

            )
        })}

        </div>
        

        
    </section>
  )
}

export default Services