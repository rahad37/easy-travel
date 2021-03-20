import React from 'react';
import './Travel.css';
import map from '../../images/map.jpg';
import { Link } from 'react-router-dom';

const Travel = () => {
    return (
        <div className='beauty'>
            <div className='heading'>
                <h1>Easy Travel</h1>
                <ul>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'white', textAlign: 'right'}} to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'white', textAlign: 'right'}} to='/header'>Sign Out</Link>
                    </li>
                </ul>
            </div>
            
            <div>
                <div className='map'>
                 <img src={map} alt=''/>
                </div>
                <div className='destination'>
                    <h2>Location</h2>
                  <span>From:</span><input type='text' placeholder='Your Location'></input><br/>
                  <span>To:</span><input type='text' placeholder='Your Destination'></input><br/><br/>
                  <button>Search</button>
                </div>
                {/* <div className='box'></div> */}
            </div>
        </div>
    );
};

export default Travel;