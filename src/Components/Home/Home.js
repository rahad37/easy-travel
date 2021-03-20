
import React from 'react';
import './Home.css';
import image1 from '../../images/car.png';
import image2 from '../../images/bus.jpg';
import image3 from '../../images/train.png';
import image4 from '../../images/bike.jpg';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Home = () => {
    return (
        <div>
            <div className='main'>
            <h1 className='title'>Easy Travel</h1>
                <ul>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'white', textAlign: 'right'}} to='/header'>Back</Link>
                    </li>
                </ul>
            </div>
            <h3>Choose How You Want To Travel...</h3>
            <div className='style'>
            <Link to='/travel' style={{textDecoration: 'none'}}>
                <div style={{margin: '10px', marginTop: '100px'}}>
                    <img src={image1} alt=''/>
                    <h2><ArrowUpwardIcon fontSize= "large" style={{marginTop: "-7px"}}></ArrowUpwardIcon> Car</h2>
                </div>
            </Link>

            <Link to='/travel' style={{textDecoration: 'none'}}>
                <div style={{margin: '10px', marginTop: '100px'}}>
                    <img src={image2} alt=''/>
                    
                    <h2><ArrowUpwardIcon fontSize= "large" style={{marginTop: "-7px"}}></ArrowUpwardIcon> Bus</h2>
                </div>
            </Link>

            <Link to='/travel' style={{textDecoration: 'none'}}>
                <div style={{margin: '10px', marginTop: '100px'}}>
                    <img src={image3} alt=''/>
                    <h2><ArrowUpwardIcon fontSize= "large" style={{marginTop: "-7px"}}></ArrowUpwardIcon> Train</h2>
                </div>
            </Link>

            <Link to='/travel' style={{textDecoration: 'none'}}>
                <div style={{margin: '10px', marginTop: '100px'}}>
                    <img src={image4} alt=''/>
                    <h2><ArrowUpwardIcon fontSize= "large" style={{marginTop: "-7px"}}></ArrowUpwardIcon> Bike</h2>
                </div>
            </Link>
            
        </div>
        </div>
        
    );
};

export default Home;