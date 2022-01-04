import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AboutMe from './components/AboutMe';
import App from './App'
import About from './components/About';


export default function Routes() {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">AboutMe</Link>
                    </li>
                </ul>
                <hr />

                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route exact path="/aboutme">
                        <AboutMe />
                    </Route>

                </Switch>

            </div>
        </Router>


    // <Route path="/" component={App}>
    //     <IndexRoute component={About} />
    //     <Route path='/AboutMe' component={AboutMe}></Route>
    // </Route>
    )
}