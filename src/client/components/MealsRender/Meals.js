import React from "react";
import "../meals.css"

export const Meals = (props) => {
    // const [registered, setRegistered] = React.useState('black')
    // React.useEffect(() => {
    //     setInterval(() => {
    //         console.log(registered)
    //         registered === 'red' ? setRegistered('black') : setRegistered('red')
    //     }, 2000);
    // }, []) style={{ color: `${registered}` }}

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
            <div><button>Reservation</button></div>
            <div className="review"><a href="#">Reviews: </a><span>4/5</span></div>
        </div>
    </div>
}