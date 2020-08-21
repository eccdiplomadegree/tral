import React from 'react';
import Newbar from './Newbar';
import { NavLink } from 'react-router-dom';
//import web from "../src";
import './index.css';
const Card = (props) => {
    return(
        <>
            <div className="cards">
            <div className={props.backgroung}>
                <div className="card">
                    <div className="cardimg">
                        <a href={props.onlydemo} target="blank"><img src={props.cimg}/></a>
                    </div>
                    <div className="cardtext">
                        <div className="cardheading"><h4>{props.cheading}</h4></div>
                        <p>{props.ctext}</p>
                        <h6><a href="">{props.btnname}</a></h6>
                    </div>
                </div>
            </div>
            </div>  
        </>
    );
};
export default Card;