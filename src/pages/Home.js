import React  from 'react';
import {FaYoutube,FaTwitter,FaCartPlus} from 'react-icons/fa';
import ReactPlayer from 'react-player';

export default function Home(){
    return (
        
        <div className="home">
            <h1> My Progression </h1>
             
            <img src='images/website-technology.jpg' alt='technologie web'/>
            <p>Welcome to this site devoled to your programming Progression
            <ReactPlayer url='https://www.youtube.com/watch?v=cLRztK1zE6s'/>
            </p>
    
        <FaYoutube className="icons youtube"/> &nbsp;&nbsp;   
        <FaTwitter className="icons twitter"/> &nbsp;&nbsp;  
        <FaCartPlus className="icons cart"/>
       
        </div>
        
    );
}
