import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/Link.png";
import './Navbar.css';
import PrimaryButton from '../../UI-Component/PrimaryButton';
import {CircleUser, Menu, X} from "lucide-react";


const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>

        <button onClick={()=>setIsOpen(!isOpen)} className='hamburger'>
            {isOpen ? <X/> :<Menu/> }
        </button>
        <div className='nav-links'>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/tours" className='nav-link'>Tours</Link>
            <Link to="/destination" className='nav-link'>Destination</Link>
            <Link to="/pages" className='nav-link'>Pages</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
        </div>

        <div className='right-nav-links'>
            <button className='profile'><CircleUser /></button>
            <PrimaryButton buttonName="Book A Trip" />
        </div>
        </nav>

            {
                isOpen && (
                    <div className='mobile-nav-links'>
                    <Link to="/" className='mobile-nav-link'>Home</Link>
                    <Link to="/about" className='mobile-nav-link'>About</Link>
                    <Link to="/tours" className='mobile-nav-link'>Tours</Link>
                    <Link to="/destination" className='mobile-nav-link'>Destination</Link>
                    <Link to="/pages" className='mobile-nav-link'>Pages</Link>
                    <Link to="/contact" className='mobile-nav-link'>Contact</Link>
                </div>
                )
            }
        
      </header>
    </>
  )
}

export default Navbar
