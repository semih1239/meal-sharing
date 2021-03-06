import React from "react";
import "./create.css"


export const CreateMeal = () => {
    const [formData, setFormData] = React.useState({});
    function handleChange(event) {
        console.log(formData);
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const postData = () => {
        fetch('/api/meals/', {
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
            <h1>Create Meal</h1>
        </header>
        <div className="form">
            <form onSubmit={postData} action="/added">
                <div className="form-item">
                    <label htmlFor="title">Meal Title : </label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Meal Title" required/>
                </div>
                <div className="form-item">
                    <label htmlFor="description">Description : </label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required/>
                </div>
                <div className="form-item">
                    <label htmlFor="location">Location : </label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required/>
                </div>
                <div className="form-item">
                    <label htmlFor="maxRes">Maximum Reservation : </label>
                    <input type="number" name="maxRes" value={formData.max_reservations} onChange={handleChange} placeholder="Maximum Reservation" required/>
                </div>
                <div className="form-item">
                    <label htmlFor="price">Price : </label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required/>
                </div>
                <div className="form-item">
                    <label htmlFor="imgLink">Meal Photo Link : </label>
                    <input type="text" name="imgLink" value={formData.img_link} onChange={handleChange} placeholder="Write photo link" required/>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
    </div>
}