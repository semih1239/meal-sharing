import React from "react";
import "./mealId.css"

export const MealIdProps = (props) => {


    return <div className="id-meal">
        <div ><img src={props.img} /></div>
        <div ><b>Title: </b>{props.title}</div>
        <div ><b>Location: </b>{props.location}</div>
        <div ><b>Description: </b>{props.description}</div>
        <div ><b>Price: </b>{props.price} DKK</div>
        <div ><b>Max Reservations: </b>{props.maxReservations}</div>
    </div>
}