import React from 'react';
import im1 from "../src/img/sketched.svg";
import im2 from "../src/img/youtube.svg";

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <p>Follow on 
                    <a href="https://www.instagram.com/ecc_diploma_engineering/" target="blank"><img src = {im1} height="20"></img></a>
                    <a href="https://www.youtube.com/channel/UCSKz1v0QQXnubCR0C2M8IKQ" target="blank"><img src = {im2} height="20"></img></a>
                </p>
                <p>Copyright &#169; 2020 ECC (Excellence coaching classes) , All Rights Reserved. | Terms and Conditions</p>
                <p className="developer_name">Designed & Developed by Akhil Ankola</p>
            </footer>
        </>
    )
}
export default Footer;