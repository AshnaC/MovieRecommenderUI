import React from "react";
import { Switch, Route } from "react-router-dom";

import MovieContainer from "../MovieContainer";

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="*" component={MovieContainer} />
            </Switch>
        </div>
    );
}
