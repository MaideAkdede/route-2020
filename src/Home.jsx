import React from 'react'

import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Contact from "./Contact";

function Home () {
    return (
        <BrowserRouter>
            <React.Fragment>
                <h1>Home</h1>
                <nav>
                    <h2>Navigation</h2>
                    <ul>
                        <li>
                            <Link to="/contact">
                                Lien 1
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact>
                        <h1>Home</h1>
                    </Route>
                    <Route path="/contact" component={Contact} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default Home;