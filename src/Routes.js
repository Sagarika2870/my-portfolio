import React from 'react';
import { Route, IndexRoute} from "react-router";


import AboutMe from './components/AboutMe';
import App from './App'
import About from './components/About';


export default (
    <Route path="/" component={App}>
        <IndexRoute componenet={About} />
        <Route path="/aboutme" component={AboutMe} />
    </Route>
    // <Route path="/" component={App}>
    //     <IndexRoute component={About} />
    //     <Route path='/AboutMe' component={AboutMe}></Route>
    // </Route>
    )
