import React from 'react';
import { menuLinks, socialLinks } from '../data';


const Footer = () => {
  return (
    <section className='footer'>


<ul style={{color:"white"}} >
            {menuLinks.map((menu) =>{

           return (
            <li>
                <a href={menu.href}>{menu.text}</a>
            </li>
           )


            })}
            
        </ul>

        <div className='footerIcons'>
        {socialLinks.map((icon) =>{

            return(
              <a href='#'><i class={`fa-brands ${icon.iconClass}`}></i>
              </a>  
            )
        })}

       

        </div>

<p style={{color:"white"}} >Copyright © Backroads Travel Tours Company <span>{new Date().getFullYear()}</span>  All Rights Reserved</p>




    </section>
  )


}

export default Footer