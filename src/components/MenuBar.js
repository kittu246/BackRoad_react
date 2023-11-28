import React from 'react';
import { menuLinks} from '../data';

const MenuBar = () => {
  return (
    <section className='menuBar'>


    <ul>
            {menuLinks.map((menu,index) =>{

           return (
            <li key={index}>
                <a href={menu.href}>{menu.text}</a>
            </li>
           )


            })}
            
    </ul>

    <div>
    <i className="fa-solid fa-xmark"></i>
    </div>




    </section>
  )
}

export default MenuBar