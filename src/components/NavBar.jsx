import React, { useState } from 'react';
import Link from './Link';
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
  const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "FAQ", path: "/faq" }
      ];
      
    return (
        <nav>
         <div className='md:hidden bg-green-700 text-white p-4' onClick={() => setOpen(!open)}>
          {
            open === true ?  <AiOutlineClose className='text-xl'></AiOutlineClose>
            : <AiOutlineMenu className='text-xl '></AiOutlineMenu>
          }
         </div> 

         <ul className={`md:flex absolute duration-1000 ml-3 md:static 
           ${open ? 'top-12' : '-top-60'} 
     fg
            bg-green-700 text-white p-4 px-6 shadow-lg`} >   
        
         {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
         </ul>
        </nav>
    );
};

export default NavBar;
