import React from "react";


export const Footer = () => {
    return <footer>
        <div>
            <h1>
                Follow Us From Social Media
            </h1>
        </div>
        <div className="social">
            <ul>
                <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.youtube.com" target="_blank"><i className="fab fa-youtube"></i></a></li>
            </ul>
        </div>
        <small>
            <p>COPYRIGHT BY <a href="https://github.com/semih1239" target="_blank">SEMIH AYYILDIZ</a></p>
        </small>
    </footer>
}