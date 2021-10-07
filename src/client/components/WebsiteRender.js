import React from "react";
import { Meals } from "./Meals";



export const WebsiteRender = () => {
    const [meals, setMeals] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/api/meals')
        .then(res => res.json())
        .then(data => {
            setMeals(data)
        })
    }, [])

    return <div className='page'>
        <header>
            <nav>
                <div><a>Logo</a></div>
                <div>
                    <ul>
                        <li><a href='#'>HomePage</a></li>
                        <li><a href='#'>Meals</a></li>
                        <li><a href='#'>Create Meal</a></li>
                        <li><a href='#'>Make a Reservation</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a>Login</a></li>
                        <li><a>Sign Up</a></li>
                    </ul>
                </div>
            </nav>
            <h1>
                How about an unforgettable meal?
            </h1>
        </header>
        <main>
            <div>
                {meals.map((meal) => <Meals key={meal.id} title={meal.title} description={meal.description} location={meal.location} 
                maxReservations={meal.max_reservations} price={meal.price} registeredGuests={meal.registered_guests}/>)}
            </div>
        </main>
        <footer>
            <h2>
                Footer Part
            </h2>
        </footer>
    </div>
}