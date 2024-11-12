// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

// Twitter API Bearer Token
const BEARER_TOKEN = process.env.BEARER_TOKEN;

// OpenWeather API Key
const WEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

// Route to fetch Twitter profile data
app.get('/fetchProfile', async (req, res) => {
    const username = req.query.username;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}?user.fields=profile_image_url,description,public_metrics`, {
            headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });

        const userData = response.data.data;
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            name: userData.name,
            username: userData.username,
            bio: userData.description || 'No bio available',
            profileImage: userData.profile_image_url,
            followersCount: userData.public_metrics.followers_count,
            followingCount: userData.public_metrics.following_count,
        });

    } catch (error) {
        console.error('Error fetching Twitter profile:', error);
        res.status(500).json({ error: 'Failed to fetch Twitter profile' });
    }
});

// Route to fetch weather data
app.get('/fetchWeather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);

        const weatherData = response.data;
        res.json({
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
        });

    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
