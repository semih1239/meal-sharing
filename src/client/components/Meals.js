import React from "react";
import "./meals.css"

export const Meals = (props) => {
    // const [registered, setRegistered] = React.useState('black')
    // React.useEffect(() => {
    //     setInterval(() => {
    //         console.log(registered)
    //         registered === 'red' ? setRegistered('black') : setRegistered('red')
    //     }, 2000);
    // }, []) style={{ color: `${registered}` }}

    return <div className='meals'>
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
            <div className='reg-guest' >Registered Guests: {props.registeredGuests} / {props.maxReservations}</div>
        </div>
    </div>
}