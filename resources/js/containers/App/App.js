import React from 'react'
import ReactDOM from 'react-dom'
import "./App.css"
import Nav from '../Nav/Nav'
import Body from '../Body/Body'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const App = () => (
    <div>
        <Router>
            <Nav/>

            <Banner/>

            <Body/>
        </Router>
    </div>
);

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}