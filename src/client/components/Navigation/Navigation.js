import React from "react";
import { Link } from "react-router-dom";
import { MealContext } from "../Context/MealsContext";

export const Navigation = () => {
    const context = React.useContext(MealContext)
    const ResetValues = () => {
        context.setInputValue('')
        context.setMaxPrice('')
        context.setAvailable('')
    }
    return <nav>
        <div className="logo"><Link onClick={ResetValues} to="/">Meal Share</Link></div>
        <div>
            <ul>
                <li><Link onClick={ResetValues} to='/'>HomePage</Link></li>
                <li><Link onClick={ResetValues} to='/meals'>Meals</Link></li>
                <li><Link onClick={ResetValues} to='/createmeal'>Create Meal</Link></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><Link onClick={ResetValues} to="/">Login</Link></li>
                <li><Link onClick={ResetValues} to="/">Sign Up</Link></li>
            </ul>
        </div>
    </nav>
}