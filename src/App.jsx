import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Newbar from './Newbar';
import Home from './Home';
import About from './About';
import Cources from './Cources';
import Contact from './Contact';
import Footer from './Footer';
import Demo from './Demo';
import { Switch, Route, Redirect } from 'react-router-dom';


const App = () => {
    return(
        <>
            <Newbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/cources" component={Cources}/>
                <Route exact path="/demo" component={Demo}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect to="/" />
                
            </Switch>
            <Footer/>
        </>
    );
};
export default App;