import React from 'react'
import './Body.css'
import { Route, Switch, Redirect } from "react-router-dom";
import Articles from "../../components/Articles/Articles";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ArticleComments from "../ArticleComments/ArticleComments";

const Body = () => (
    <main>
        <div>
            <Switch>
                <Route exact path={"/"} component={Articles}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/contact"} component={Contact}/>
                <Route exact path={"/articles"} component={Articles}/>
                <Route path={"/articles/:slug/comments"} component={ ArticleComments }/>
                <Redirect to="/" />
            </Switch>

        </div>
    </main>
);

export default Body;