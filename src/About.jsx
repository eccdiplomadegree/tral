import React from 'react';
import Newbar from './Newbar';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import aboutimg from '../src/img/rakshit.png';
import Card from './Card';

const About = () => {
    return(
        <>
           <Common
                name='EXCELLENCE  COACHING  CLASSES' 
                firsttext='For'
                secondtext="Gtu, Msu, Pu, Utu, Marwadi, Eanpat etc Univercities & DIPLOMA engineering."
                imgsrc={aboutimg} 
                visit='/Contact' 
                btname="Contact Me"
                facultyname="Rakshit Bhalodia"
                qualification1="B.E. - Civil Engineering(BVM)"
                qualification2="DIPLOMA - Government polytechnic vyara"
                about_0r_home="about_page"
           />

           <br/><br/><br/><br/><br/><br/>
           <div className="aboutiddletext">
                <h3><b>Who Are we?</b></h3>
                <h1><b>Excellent Coaching classes</b></h1>
            </div>
            <div className="aboutcontaint">
                <p>EXCELLENCE COACHING CLASSES – One of the most reliable Engineering classes & Consultancy Establishment in chikhali, Gujarat, India. 
                At ECC, apart from educating about Basic Fundamentals & Analysis/Design approaches, we emphasis on Industrial know-hows & Best Practices in the Structural Field if it possible. 
                The topics under Industrial Workshops are usually neither covered in Academic sessions nor in Professional tutorials. 
                Otherwise, these can be learned only by actually working on Structural projects for years.</p>
            </div>
            <br/>
            
            <div className="aboutiddletext">
                <h1><b>Vission</b></h1>
                <p>To help students to achieve their academic objectives by providing innovative, 
                best in class coaching through interactive technology and mathodology and to make learning meaningful and joyful. 
                we always keep constant efforts to grow our popularity in Civil engineering training.
                The organization use latest tools & method to train student which play major role in enhancing their skills & provide greater opportunities. </p>
            </div>
            <br/>
            
            <div className="aboutiddletext">
                <h1><b>Mission</b></h1>
                <p>We at EXCELLENCE COACHING CLASSES believe in Smartwork. 
                With every new day the quest for acquiring new competencies continues. 
                Forever searching, learning, moving ahead with our sincere efforts and dedication, shaping the future, and challenging our competencies to create new and best chance to make best score in appropriate exams. </p>
            <br/>
            <br/>
                <h4><NavLink to="/Cources">Cources</NavLink></h4>
                <br/>
            </div>


            
        </>
    );
};
export default About;