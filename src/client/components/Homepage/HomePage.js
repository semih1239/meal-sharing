import React from "react";
import { MealsRender } from "../MealsRender/MealsRender";
import { MealsSearch } from "../MealsRender/MealsSearch";


export const Homepage = () => {
    return <div className='page'>
        <header>
            <h1>
                How about an unforgettable meal?
            </h1>
        </header>
        <MealsSearch />
        <MealsRender />
    </div>
}