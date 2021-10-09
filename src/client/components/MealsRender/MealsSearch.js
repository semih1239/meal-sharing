import React from "react";
import { MealContext } from "../Context/MealsContext";

export const MealsSearch = () => {
    const context = React.useContext(MealContext)
    return <>
        <div className="search"><input type="text" placeholder='Search Meal' onChange={(e) => { context.setInputValue(e.target.value) }} />
            <button onClick={() => { context.available === '' ? context.setAvailable(true) : context.setAvailable('') }}>Available Reservations</button>
            <input type='number' className="max-price" placeholder='Max Price' onChange={(e) => { context.setMaxPrice(e.target.value) }} /></div>
    </>
}