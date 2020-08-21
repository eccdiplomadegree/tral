import React, { useState } from 'react';
import './index.css';
import Card from './Card';
import whatsapplogo from '../src/img/whatsapp.svg';
import emaillogo from '../src/img/gmail.svg';

const Contact = () => {

    return(
        <>
            <div className="address">
                <div className="contactleft">
                    <h3><img src={whatsapplogo} width="35"/>
                        <span>+91 85111 26880</span></h3>
                </div>
                <div className="contactright">
                    <h3><img src={emaillogo} width="35"/>
                         <span>excellencecoaching711@gmail.com</span></h3>   
                </div>
            </div>


            <h2 class="form_heading">E-mail me</h2>
            <form action="mailto:excellencecoaching711@gmail.com" method="post" enctype="text/plain">
                <input type="text" name="name" class="feedback-input" placeholder="Name" /><br/>
                <input type="number" name="phone" class="feedback-input" placeholder="Mobile No." /><br/>
                <input type="text" name="email" class="feedback-input" placeholder="Email" /><br/>
                <textarea name="text" class="feedback-input" placeholder="Comment"></textarea><br/>
                <div class="seb_rese_button">
                    <input type="submit" value="SUBMIT"/>
                    <input type="reset" value="Reset"/>
                </div>
            </form>

        </>
    );
};
export default Contact;