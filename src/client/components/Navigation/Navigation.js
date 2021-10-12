import React from "react";

export const Navigation = () => {
    return <nav>
        <div><a>Logo</a></div>
        <div>
            <ul>
                <li><a href='http://localhost:3000/'>HomePage</a></li>
                <li><a href='http://localhost:3000/meals'>Meals</a></li>
                <li><a href='http://localhost:3000/createmeal'>Create Meal</a></li>
                <li><a href='http://localhost:3000/reservation'>Make a Reservation</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a>Login</a></li>
                <li><a>Sign Up</a></li>
            </ul>
        </div>
    </nav>
}