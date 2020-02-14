import React from "react";
import { Switch } from "react-router-dom";
import Home from "../pages/home/home.page";
import Ranking from "../pages/ranking/ranking.page";
import Route from "./route";

export default function Routes() {
    return (
        <Switch>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ranking" component={Ranking} />
            </Switch>
        </Switch>
    );
}
