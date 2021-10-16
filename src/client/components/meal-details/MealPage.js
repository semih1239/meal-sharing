import React from "react";
import Popup from 'reactjs-popup';
import { MealContext } from "../Context/MealsContext";
import { MealIdProps } from "./MealIdProps";
import { Reviews } from "./Review";



export const MealPage = () => {
    const context = React.useContext(MealContext)
    const getLocation = window.location.pathname
    const mealId = Number(getLocation.slice(7))


    const [formData, setFormData] = React.useState({ meal_id: mealId });
    const [reservation, setReservation] = React.useState({ meal_id: mealId })


    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleChangeReservation(event) {
        setReservation({ ...reservation, [event.target.name]: event.target.value })
    }

    const ratingNumber = (event) => {
        setFormData({ ...formData, stars: Number(event.target.value) })
    }

    const postData = () => {
        fetch('/api/reviews/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const postDataRes = () => {
        fetch('/api/reservations/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservation),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const allReservations = context.reservations.filter(reservation => reservation.meal_id === mealId)
    const total = allReservations.map(res => res.number_of_guests)
    const sum = total.reduce(function (a, b) {
        return a + b;
    }, 0);

    let availableSeat = context.meals.map(meal => {
        if (meal.id === mealId) {
            return meal.max_reservations - sum
        }
    })

    availableSeat = availableSeat.filter(seat => seat !== undefined)

    return <div className="page">
        <header>
            <h1>
                Details
            </h1>
        </header>
        <div className="meals">
            {context.meals.map(meal => meal.id === mealId ? <MealIdProps key={meal.id} title={meal.title} description={meal.description} location={meal.location}
                maxReservations={meal.max_reservations} price={meal.price} img={meal.img_link} mealId={meal.id} /> : '')}
        </div>
        <div className="available">Available Seat: {availableSeat}</div>
        <div className="popups">
            <div className="popup">
                <Popup
                    trigger={<button className="button"> Reservation </button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                            <div className="header"><h2> Reservation </h2></div>
                            <div className="content">
                                <form onSubmit={postDataRes}>
                                    <div>
                                        <input type="text" name="name" value={reservation.name} onChange={handleChangeReservation} placeholder="Name" />
                                    </div>
                                    <div>
                                        <input type="email" name="email" value={reservation.email} onChange={handleChangeReservation} placeholder="Email" />
                                    </div>
                                    <div >
                                        <input type="tel" name="phone_number" onChange={handleChangeReservation} placeholder="Phone Number" />
                                    </div>
                                    <div >
                                        <input type="Number" name="number_of_guest" min={1} max={availableSeat} onChange={handleChangeReservation} placeholder="Number Of Guest" />
                                    </div>
                                    <div>
                                        <button className='send-button' type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
            <div className="popup">
                <Popup
                    trigger={<button className="button"> Reviews </button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                            <div className="header"><h2> Reviews </h2></div>
                            <div className="content">
                                {context.reviews.map(review => {
                                    {
                                        return mealId === review.meal_id ? <Reviews key={review.id} title={review.title} description={review.description} stars={review.stars} /> : ''
                                    }
                                })
                                }
                                <form onSubmit={postData}>
                                    <div style={{color:"black" }}><b>Make Review</b></div>
                                    <div>
                                        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
                                    </div>
                                    <div>
                                        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
                                    </div>
                                    <div className="rating">
                                        <input type="Number" name="stars" min={0} max={5} onChange={ratingNumber} placeholder="Rating" required /> / 5
                                    </div>
                                    <div>
                                        <button className='send-button' type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        </div>

    </div>
}