import React from "react";
import { MealContext } from "../Context/MealsContext";
import {useLocation} from "react-router-dom";



export const MealPage = () => {
const context = React.useContext(MealContext)

// console.log(new URLSearchParams(this.props.location.search).get("id"))

// console.log(id)
    return <div className="page">
        {/* {context.meals} */}
    </div>
}