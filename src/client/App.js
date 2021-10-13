import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./components/Homepage/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { MealContextProvider } from "./components/Context/MealsContext";
import { MealsPage } from "./components/MealsPage/meals";
import { CreateMeal } from "./components/CreateMeal/CreateMeal";
import { Created } from "./components/CreateMeal/AddedMeal";
import { CreateReservation } from "./components/Reservation/CreateReservation";
import { MealPage } from "./components/meal-details/MealPage";

function App() {
  const [meals, setMeals] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')
  const [available, setAvailable] = React.useState('')
  const [maxPrice, setMaxPrice] = React.useState('')
  const [formData, setFormData] = React.useState({});
  const [reviews, setReviews] = React.useState([])

  const bucket = {
    meals, setMeals,
    inputValue, setInputValue,
    available, setAvailable,
    maxPrice, setMaxPrice,
    formData, setFormData,
    reviews
  }

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/meals?title=${inputValue}&availableReservations=${available}&maxPrice=${maxPrice}`)
      .then(res => res.json())
      .then(data => {
        setMeals(data)
      })
  }, [inputValue, available, maxPrice])

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/reviews`)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [])

  console.log(reviews)
  return (
    <Router>
      <MealContextProvider value={bucket}>
        <Navigation />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/meals">
          <MealsPage />
        </Route>
        <Route exact path="/createmeal">
          <CreateMeal />
        </Route>
        <Route exact path="/added">
          <Created />
        </Route>
        <Route exact path="/meals/:id">
          <MealPage />
        </Route>
        <Route exact path="/reservation">
          <CreateReservation />
        </Route>
        <Footer />
      </MealContextProvider>
    </Router>
  );
}

export default App;
