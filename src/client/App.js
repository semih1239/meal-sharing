import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import { Homepage } from "./components/Homepage/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { MealContextProvider } from "./components/Context/MealsContext";
import { MealsPage } from "./components/MealsPage/meals";

function App() {
  const [meals, setMeals] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')
  const [available, setAvailable] = React.useState('')
  const [maxPrice, setMaxPrice] = React.useState('')

  const bucket = {
    meals, setMeals,
    inputValue, setInputValue,
    available, setAvailable,
    maxPrice, setMaxPrice
  }

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/meals?title=${inputValue}&availableReservations=${available}&maxPrice=${maxPrice}`)
      .then(res => res.json())
      .then(data => {
        setMeals(data)
      })
  }, [inputValue, available, maxPrice])



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
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
        <Footer />
      </MealContextProvider>
    </Router>
  );
}

export default App;
