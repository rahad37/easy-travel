import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='design'>
            <h1 style={{float: 'left', marginLeft: '100px', fontStyle: 'italic'}}>Easy Travel</h1>
            <ul>
             <li>
                 <Link style={{textDecoration: 'none', color: 'black'}} to='/home'>Home</Link>
             </li>
             <li>
                 <Link style={{textDecoration: 'none', color: 'black'}} to='/logIn'>Log In</Link>
             </li>
             <li>
                 <Link style={{textDecoration: 'none', color: 'black'}} to='/home'>Travel</Link>
             </li>
             </ul>
        </div>
       
    );
};

export default Header;