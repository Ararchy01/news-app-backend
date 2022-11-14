const express = require("express");

const app = express();

app.get("/news", async (req, res) => {
  console.log("Fetching News...");
  try {
    const news = await fetch(
      `https://newsapi.org/v2/top-headlines?country=ca&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`
    );
    const newsJson = await news.json();
    res.status(200).json(newsJson);
    console.log("Fetch News Success!");
  } catch (err) {
    console.error("Error Fetching News");
    console.error(err.message);
    res.status(500).json({ message: "Failed to fetch news." });
  }
});

app.get("/weather", async (req, res) => {
  console.log("Fetching Weather...");
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=49.2472&lon=-123.1162&units=metric&exclude=${"hourly,minutely"}&appid=${
        process.env.WEATHER_API_KEY
      }`
    );
    const weatherJson = await weather.json();
    res.status(200).json(weatherJson);
    console.log("Fetch Weather Success!");
  } catch (err) {
    console.error("Error Fetching Weather");
    console.error(err.message);
    res.status(500).json({ message: "Failed to fetch weather." });
  }
});

module.exports = app;
