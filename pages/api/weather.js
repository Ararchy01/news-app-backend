const axios = require("axios");

export default function handler(req, res) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=49.2472&lon=-123.1162&units=metric&exclude=${"hourly,minutely"}&appid=${
        process.env.WEATHER_API_KEY
      }`
    )
    .then((resFromApi) => res.status(200).json(resFromApi.json()))
    .catch((err) => res.status(500).json({ message: err.message }));
}
