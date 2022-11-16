const express = require("express");
const axios = require("axios");

const app = express();

app.listen(80);

app.get("/news", async (req, res) => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=ca&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`
    )
    .then((result) => res.status(200).json(result.data))
    .then(() => console.log("News Fetched"))
    .catch((error) => res.status(500).json({ message: error.message }));
});

app.get("/weather", async (req, res) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=49.2472&lon=-123.1162&units=metric&exclude=${"hourly,minutely"}&appid=${
        process.env.WEATHER_API_KEY
      }`
    )
    .then((result) => res.status(200).json(result.data))
    .then(() => console.log("Weather Fetched"))
    .catch((error) => res.status(500).json({ message: error.message }));
});
