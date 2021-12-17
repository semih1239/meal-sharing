import React from 'react';
import "../meal-details/mealId.css"

export const Reviews = (props) => {
    return <div className="review" style={{borderBottom: '1px solid'}}>
        <div>{props.title}</div>
        <div>{props.description}</div>
        <div>Rating : {props.stars} / 5</div>
    </div>
}