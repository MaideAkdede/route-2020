import React from 'react'

import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import Contact from "./Contact";
import Info from "./Info";
import Users from "./Users";
import User from "./User";

function Home () {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/Contact">
                            Contact
                        </Link>
                    </li>

                    <li>
                        <Link to="/Info">
                            Info
                        </Link>
                    </li>

                    <li>
                        <Link to="/Users">
                            Utilisateur
                        </Link>
                    </li>

                </ul>
                <nav>
                    <Switch>

                        <Route path="/" exact>
                            <h1>
                                Accueil
                            </h1>
                            <p>Vous êtes sur la page d'accueil</p>
                        </Route>

                        <Route path="/contact" exact>
                           <Contact />
                        </Route>

                        <Route path="/info" exact>
                           <Info />
                        </Route>

                        <Route path="/users" exact>
                            <h1>Utilisateurs</h1>
                            <Users/>
                        </Route>

                        <Route path="/users/:userId" component={User}/>

                    </Switch>
                </nav>


            </BrowserRouter>
        </React.Fragment>

    )
}

export default Home;