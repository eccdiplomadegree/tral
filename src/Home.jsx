import React from "react";
import './index.css';
import Newbar from './Newbar';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Card from './Card';
import homeimg from '../src/img/main.gif';
import web1 from '../src/img/study.png';
import web2 from '../src/img/test.png';
import web3 from '../src/img/Revision.png';
import web4 from '../src/img/Career.png';

const Home = () => {
    return(
        <>
            <Common 
                name='EXCELLENCE  COACHING  CLASSES' 
                firsttext='Create Enhance Success '
                secondtext="We provied best Engineering Coaching & Consultancy "
                imgsrc={homeimg} 
                visit='/About' 
                btname="Get Started"
            />

            <br/><br/><br/>
            <div className="homemiddletext">
                <h3><b>WHY CHOOSE US</b></h3>
                <h1><b>WHAT WE PROVIDE</b></h1>
            </div>

            <div className="homecard">
            <Card cimg={web1} cheading="Concept Oriented Study" ctext="We provied Concept oriented studies to clear your all concept and cover your all topics with practical Examples."  btnname=" " backgroung="red"/>
            <Card cimg={web2} cheading="Regular Test & Attention" ctext="Exclusive Test where mock tests based on Exam pattern will be conducted to prepare for Internal & External Exams."  btnname=" " backgroung="orange"/>
            <Card cimg={web3} cheading="Revision & Doubt solving" ctext="We provides revision lacturs to make your consept strong and also solve your doubts at any time you calls."  btnname=" " backgroung="green"/>
            <Card cimg={web4} cheading="Free Career Councelling" ctext="Confusing for Career choice is common things we give Free Career counselling to choose which is more better."  btnname=" " backgroung="blue"/>
            </div>
            <br/>
        </>
    );
};
export default Home;