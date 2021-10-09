import React from "react";
import { MealsRender } from "../MealsRender/MealsRender";

export const MealsPage = () => {
    return <div className="page">
        <header>
        <h1>
            Check All Homemade Meals
        </h1>
        </header>
        <MealsRender />
    </div>
}