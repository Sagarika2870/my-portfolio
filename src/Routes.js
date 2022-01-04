import React from 'react';
import { Route} from "react-router";


import AboutMe from './components/AboutMe';
import App from './App'
import About from './components/About';


export default (
    <Route path="/" component={App}>
        <Route path="/aboutme" component={AboutMe} />
    </Route>
    // <Route path="/" component={App}>
    //     <IndexRoute component={About} />
    //     <Route path='/AboutMe' component={AboutMe}></Route>
    // </Route>
    )
