import React from "react";
import "../meals.css"
import { MealContext } from "../Context/MealsContext";
import { Link } from "react-router-dom";

export const Meals = (props) => {
    const context = React.useContext(MealContext)

    const allReviews = context.reviews.filter(review => review.meal_id === props.mealId)
    const total = allReviews.map(res => res.stars)
    const sum = total.reduce(function (a, b) {
        return a + b;
    }, 0);

    const result = (sum !== 0 ? sum / allReviews.length : 5).toFixed(2)
    
    const mealLink = `/meals/${props.mealId}`


    return <div className='meal'>
        <div className="img"><img src={props.img} /></div>
        <div className='top'>
            <div className='title'>{props.title}</div>
            <div className='location'>{props.location}</div>
        </div>
        <div className='middle'>
            <div className='description'>{props.description}</div>
            <div className='price'>{props.price} DKK</div>
        </div>
        <div className='bottom'>
            <div className='max-res'>Max Reservations: {props.maxReservations}</div>
        </div>
        <div className="button_side">
            <div className="detail-buttons">
                <div><Link className="details" to={mealLink}>Details</Link></div>
                <div><Link className="details" to={mealLink}>Reservation</Link></div>
            </div>
            <div className="review">{allReviews.length !== 0 ? `Reviews : ${result}/5` : "Be The First Reviewer"}</div>
        </div>
    </div>
}