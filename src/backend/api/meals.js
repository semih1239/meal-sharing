const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const query = request.query
    let meals = await knex("meals")
      .select("meals.*")
      .join("reservations", "meals.id", "=", "reservations.meal_id")
      .sum("reservations.number_of_guests as registered_guests")
      .groupBy("meals.id")
    // I want to add registered guests information to meals
    console.log(meals)
    if (query.availableReservations) {
      meals = meals.filter(meal => meal.max_reservations > meal.registered_guests)
    }
    if (query.maxPrice) {
      meals = meals.filter(meal => meal.price < Number(query.maxPrice))
    }
    if (query.createdAfter) {
      meals = meals.filter(meal => Date.parse(meal.created_date) > Date.parse(query.createdAfter))
    }
    if (query.title) {
      meals = meals.filter(meal => meal.title.toLowerCase().includes(query.title.toLowerCase()))
    }
    if (query.limit) {
      meals = meals.splice(0, Number(query.limit))
    }
    // let meals = await knex("meals");
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    // console.log("body", request.body)
    await knex("meals").insert(
      {
        title: request.body.title,
        description: request.body.description,
        location: request.body.location,
        max_reservations: request.body.maxRes,
        price: request.body.price,
        img_link: request.body.imgLink
      }
    ).then(() => response.redirect('/added'))
  } catch (error) {
    throw error;
  }
})

router.get("/:id", async (request, response) => {
  try {
    const meals = await knex("meals").where({ id: Number(request.params.id) });
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const meals = await knex("meals").where({ id: Number(request.params.id) }).update(request.body);
    response.json(meals);
  } catch (error) {
    throw error;
  }
})

router.delete("/:id", async (request, response) => {
  try {
    const meals = await knex("meals").where({ id: Number(request.params.id) }).del();
    response.json(meals);
  } catch (error) {
    throw error;
  }
})

module.exports = router;
