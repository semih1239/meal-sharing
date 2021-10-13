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
    const [reservation, setReservation] = React.useState({meal_id:mealId})


    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleChangeReservation(event){
        setReservation({ ...reservation, [event.target.name]: event.target.value })
    }

    const ratingNumber = (event) => {
        setFormData({ ...formData, stars: Number(event.target.value) })
    }

    const postData = () => {
        fetch('http://localhost:3000/api/reviews/', {
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


    return <div className="page">
        <header>
            <h1>
                How about an unforgettable meal?
            </h1>
        </header>
        <div className="meals">
            {context.meals.map(meal => meal.id === mealId ? <MealIdProps key={meal.id} title={meal.title} description={meal.description} location={meal.location}
                maxReservations={meal.max_reservations} price={meal.price} img={meal.img_link} mealId={meal.id} /> : '')}
        </div>
        <div className="popups">
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
                                    <div>
                                        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
                                    </div>
                                    <div>
                                        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                                    </div>
                                    <div className="rating">
                                        <input type="Number" name="stars" onChange={ratingNumber} placeholder="Rating" /> / 5
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

                                <form onSubmit={postData}>
                                    <div>
                                        <input type="text" name="title" value={formData.title} onChange={handleChangeReservation} placeholder="Title" />
                                    </div>
                                    <div>
                                        <input type="text" name="description" value={formData.description} onChange={handleChangeReservation} placeholder="Description" />
                                    </div>
                                    <div className="rating">
                                        <input type="Number" name="stars" onChange={handleChangeReservation} placeholder="Rating" /> / 5
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