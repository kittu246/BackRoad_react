import React from 'react';
import { menuLinks, socialLinks } from '../data';


const Footer = () => {
  return (
    <section className='footer'>


<ul style={{color:"white"}} >
            {menuLinks.map((menu,index) =>{

           return (
            <li key={index}>
                <a href={menu.href}>{menu.text}</a>
            </li>
           )


            })}
            
        </ul>

        <div className='footerIcons'>
        {socialLinks.map((icon,index) =>{

            return(
              <a key={index} href='#https://www.facebook.com/login/'><i className={`fa-brands ${icon.iconClass}`}></i>
              </a>  
            )
        })}

       

        </div>

<p style={{color:"white"}} >Copyright © Backroads Travel Tours Company <span>{new Date().getFullYear()}</span>  All Rights Reserved</p>




    </section>
  )


}

export default Footer