import React from "react";
import { Meals } from "./Meals";
import { MealContext } from "../Context/MealsContext";

export const MealsRender = () => {
    const context = React.useContext(MealContext)
    return <>
        <div className="meals">
            {context.meals.map((meal) => <Meals key={meal.id} title={meal.title} description={meal.description} location={meal.location}
                maxReservations={meal.max_reservations} price={meal.price}  img={meal.img_link} mealId={meal.id}/>)}
        </div>
    </>
}