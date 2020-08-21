import React from 'react';
import Card from './Card';
import './index.css';

import web1 from '../src/img/yt_1.png';
import web2 from '../src/img/yt_2.png';
import web3 from '../src/img/yt_3.png';
import web4 from '../src/img/yt_4.png';
import web5 from '../src/img/yt_5.png';
import web6 from '../src/img/yt_6.png';
import web7 from '../src/img/yt_7.png';
import web8 from '../src/img/yt_8.png';


const Demo = (props) => {
    return(
        <>
            <h2 class="form_heading">Demo</h2>
            <div className="maincards"></div>

            <Card cimg={web1} cheading=" " ctext=" " backgroung="democard" onlydemo="https://www.youtube.com/watch?v=za0PJt79bbQ&t=648s"/>
            <Card cimg={web2} cheading=" " ctext=" " backgroung="democard" onlydemo="https://www.youtube.com/watch?v=fOV3kEQTzsY&t=1432s"/>
            <Card cimg={web3} cheading=" " ctext=" " backgroung="democard" onlydemo="https://www.youtube.com/watch?v=NPq0egEcrA4&t=1095s"/>
            <Card cimg={web4} cheading=" " ctext=" " backgroung="democard" onlydemo="https://www.youtube.com/watch?v=BDtzAqVtPCo&t=460s"/>
            <Card cimg={web5} cheading=" " ctext=" " backgroung="democard" onlydemo="https://www.youtube.com/watch?v=E_7HzAit3po&t=828s"/>
            <Card cimg={web6} cheading=" " ctext=" " backgroung="democard" onlydemo="https://www.youtube.com/watch?v=N-E_IkBzhsE&t=1837s"/>
            <Card cimg={web7} cheading=" " ctext=" " backgroung="democard" onlydemo="https://www.youtube.com/watch?v=DxOMLALxWms&t=350s"/>
            <Card cimg={web8} cheading=" " ctext=" " backgroung="democard" onlydemo="https://www.youtube.com/watch?v=3VILCbELvfE&t=29s"/>
            
            
        </>
    );
};
export default Demo;