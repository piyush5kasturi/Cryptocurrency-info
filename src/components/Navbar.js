import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='header'>
            <div className='container'>
                <h1>Inv<span className='primary'>Cryp</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/#featured'>Featured</Link>
                    </li>
                    <li>
                        <Link to='/#signup'> <a href='/#signup'>Contact</a></Link>
                    </li>
                </ul>
                {/* <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div> */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar