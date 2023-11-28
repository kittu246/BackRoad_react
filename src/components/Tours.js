import React from 'react';
import Title from './Title';

import { toursCardInfo } from '../data';

const Tours = () => {
  return (
    <section id='tours'>
        <Title title={'FEATURED'} subTitle={'TOURS'}/>

        <div className='tourCardSections'>

            {toursCardInfo.map((card,index) =>{
                return (
<div key={index} className='tourCard'>
    <div className='imgDiv'>
                <img src={card.image} alt='cardImage'/>
                <div className='dateDiv'>
                    {card.date}
                </div>
                </div>
                <div className='tourInfor'>
                    <h5>{card.heading}</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.</p>
                    <div className='tourInfoSymbol'>
                        <div>
                        <i className="fa-solid fa-bolt"></i>
                            <p>{card.city}</p>
                        </div>
                        <p>{card.days}</p>
                        <p>{card.amount}</p>

                    </div>

                </div>
            </div>
                )
            })}
            
        </div>
        
    </section>
  )
}

export default Tours