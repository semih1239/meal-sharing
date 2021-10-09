import React from "react";

export const Navigation = () => {
    return <nav>
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
}