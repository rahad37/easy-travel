import React, { useContext, useState } from 'react';
import './LogIn.css';
import firebase from "firebase/app";
import "firebase/auth";

import FacebookIcon from '@material-ui/icons/Facebook';
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {UserContext} from '../../App';
import google from '../../images/Logo_Google-512.webp';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        error: '',
        success: false,
        password: ''
    })
    const handleBlur= (event) => {
        let isFromValid = true;
        if(event.target.name === 'email'){
            isFromValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password'){
            isFromValid  = event.target.value.length > 6;
        }
        if(isFromValid){
            const newUserInfo = {...user};
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSignIn =(event)=>{
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserName(user.name);
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }
        event.preventDefault();
    }
    const updateUserName = name =>{
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name
        }).then(function() {
            console.log('user name updated successfully')
        }).catch(function(error) {
            console.log(error);
        });
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

const handleGoogleSignIn=()=>{
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const {displayName, email} = result.user;
    const googleSignIn = {name: displayName, email};
    setLoggedInUser(googleSignIn);
    history.replace(from);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    }
    return (
        <div className='fine'>
            <div className='head'>
                <h1>Easy Travel</h1>
                <ul>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'white', textAlign: 'right'}} to='/home'>Home</Link>
                    </li>
                </ul>    
             </div>       
                    <div  style={{textAlign: 'center', fontSize: '20px', fontWeight: '700', color: 'white', marginTop: '45px'}}>
                        <input onChange={()=> setNewUser(!newUser)} type='checkbox' name='newUser' id=''></input>
                        <label style={{marginLeft: '5px'}} htmlFor='newUser'>New User Sign Up</label>
                    </div>
            <div className='nice'>                        
                   <form onSubmit={handleSignIn}>
                         {newUser && <input onBlur={handleBlur} type='text' name='name' placeholder='Your Full Name' required/>}<br/><br/>
                       <input onBlur={handleBlur} type='email' name='email' placeholder='Your Email Address' required></input><br/><br/>
                        <input onBlur={handleBlur} type='password' name='password' placeholder='Your Email Password' required></input><br/><br/>                      
                        <input style={{background: 'goldenrod', fontSize: '18px', fontWeight: '700'}} type='submit' value={newUser ? 'Sign Up' : 'Sign In'}></input>

                        <button onClick={handleGoogleSignIn} style={{background: 'rgb(219 68 55)', color: 'white', display: 'flex', justifyContent: 'center'}}><img src={google} alt=''/> Sign In with Google</button>                      
                   </form>
                   <h2 style={{color: 'red'}}>{user.error}</h2>
                   {user.success && <h2 style={{color: 'blue', textAlign: 'center'}}>User {newUser ?'Created' : 'Logged In'} Successfully</h2>}
            </div>

                {/* <button style={{background: 'rgb(66 103 178)', color: 'white', display: 'flex', justifyContent: 'center', padding: '5px'}}>
                <FacebookIcon style={{marginRight: '10px'}}></FacebookIcon>Sign In with Facebook</button> */}
        </div>
    );
};

export default LogIn;