import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {styles}  from '../styles';
import {navLinks} from '../constants';
import {menu, close} from '../assets' 

const Navbar = () => {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      {/* Tailwind css basically gives us a bunch of utility classes we can define in the className attr
      of an element. This way we don't have to write the CSS ourselves. You can find out what each of
      these classes do by looking them up on tailwindcss docs. For ex. we used z-20 so that our
      navbar would be infront of other elements (z-axis, think 3D) */}
      <div className='w-full flex justify-between items-center md:max-w-[1340px] max-w-7xl mx-auto h-[90px]'>
        <Link to='/' className='flex items-center gap-2 h-full shrink-0' onClick={() =>{
          setActive("");setOpen(false);
          window.scrollTo(0,0);}}>
          <img src = '/SH_logo.jpeg' alt = 'logo' className='w-[90px] h-full object-contain border-2 border-white'/>
          <p className='text-white text-[24px] text-center font-bold cursor-pointer px-2'>Sina's Portfolio</p>
          {/* to='/' means that when we click the link just goes to top of the page. Can set an onClick
          listener as well since this is a react-router-dom element */}

        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {/* since tailwindcss is mobile design first using hidden w/o any 
          size prefix means that this list will be hidden on mobile devices but shown on larger devices*/}
          {navLinks.map((link) => (
            <li key={link.id} className = {`${active===link.title ? "text-white" : "text-secondary"} 
            hover:text-white text-[18px] font-medium cursor-pointer`} >
              <a href = {`#${link.id}`} onClick = {() => setActive(link.title)}>{link.title}</a> 
              {/* # means that the href is creating internal link to somewhere inside the web page. We 
              use useState to keep track of whether a user is w/in a subpage (one of these hyperlinks in the navbar)
              or the main page (which is why when they click our logo to go back we set active back to empty)
              */}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* sm:hidden means that for devices bigger than small breakpt (not a phone) this div will be hidden
          When open is false this means that the menu hasn't been clicked so show menu icon, close it once its been pressed*/}
              <img 
              src = {open ? close : menu} 
              alt ='menu' 
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setOpen(!open)}/>

              <div className={`${!open ? 'hidden':'flex'} p-6 black-gradient
               absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

        
                <ul className='list-none flex flex-col justify-end items-start gap-4'>
                  {navLinks.map((link) => (
                  <li key={link.id} className = {`${active===link.title ? "text-white" : "text-secondary"} 
                    text-[16px] font-poppins font-medium cursor-pointer`} >
                    <a href = {`#${link.id}`} onClick = {() => {setActive(link.title);setOpen(!open);}}>{link.title}</a> 
                  </li>
                ))}
                </ul>

              </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar