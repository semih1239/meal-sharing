import React from "react";

export const Navigation = () => {
    return <nav>
        <div><a href="/">Logo</a></div>
        <div>
            <ul>
                <li><a href='/'>HomePage</a></li>
                <li><a href='/meals'>Meals</a></li>
                <li><a href='/createmeal'>Create Meal</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href="/">Login</a></li>
                <li><a href="/">Sign Up</a></li>
            </ul>
        </div>
    </nav>
}