import React from 'react';
import { menuLinks} from '../data';

const MenuBar = () => {
  return (
    <section className='menuBar'>


    <ul>
            {menuLinks.map((menu) =>{

           return (
            <li>
                <a href={menu.href}>{menu.text}</a>
            </li>
           )


            })}
            
    </ul>

    <div>
    <i class="fa-solid fa-xmark"></i>
    </div>




    </section>
  )
}

export default MenuBar