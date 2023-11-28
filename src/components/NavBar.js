import React from 'react';
import logo from '../images/logo.svg';
import { menuLinks, socialLinks } from '../data';

const NavBar = () => {

function showMenuOptions(){


}
  return (
    <nav className='main'>
        <img src={logo} alt='roadmapLogo'/>
        <ul>
            {menuLinks.map((menu) =>{

           return (
            <li>
                <a href={menu.href}>{menu.text}</a>
            </li>
           )


            })}
            
        </ul>

        <div className='socialIcons'>
        {socialLinks.map((icon,index) =>{

            return(
              <a key={index} href='#https://www.facebook.com/login/'><i class={`fa-brands ${icon.iconClass}`}></i>
              </a>  
            )
        })}

       

        </div>

        <div className='menubar' onClick={showMenuOptions}>
        <i class="fa-solid fa-bars"></i>
        </div>


        
    </nav>
  )
}

export default NavBar