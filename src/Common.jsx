import React from 'react';
import './index.css';
import Newbar from './Newbar';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return(
        <>
            <div className="abc">
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1" id="content">
                                <h1>
                                    <br/><strong className="brand-name">{props.name}</strong>
                                </h1>
                                <h2>
                                    {props.firsttext}
                                </h2>
                                <h3 className="my-3">
                                    {props.secondtext}
                                </h3>
                                <br/>
                                
                                <div className="mt-10">
                                    <NavLink to={props.visit} className="homebutton">
                                        <b>{props.btname}</b>
                                    </NavLink>

                                </div>
                                <br/>
                                <br/>
                            </div>
                    
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <div className={props.about_0r_home}/*for finding page is in home or about for border purpose*/>
                                <img src={props.imgsrc}
                                className="img-fluid animated" alt="img"/>
                                <h1 class="facultyname">{props.facultyname}</h1>
                                <h4 class="qualification"><b>{props.qualification1}</b></h4>
                                <h4 class="qualification"><b>{props.qualification2}</b></h4>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
        </>
    );
};
export default Common;