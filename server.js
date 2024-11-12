<<<<<<< HEAD
// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
=======
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
>>>>>>> 2c5ed8ea8886d7526d9cde1fb0d7c952fd9340ab

const app = express();
const port = 3000;

<<<<<<< HEAD
app.use(cors());
app.use(express.static('public'));

// Twitter API Bearer Token
const BEARER_TOKEN = process.env.BEARER_TOKEN;

// OpenWeather API Key
const WEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

// Route to fetch Twitter profile data
app.get('/fetchProfile', async (req, res) => {
    const username = req.query.username;
=======
// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.static(path.join(__dirname, 'public'))); // Serve the HTML file

// Set up Twitter API Bearer Token
const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAANsxwAEAAAAA04kEqTjWyiitMw6T5gMoe5a7fjc%3DqttW9r9uI8rXU1he94dlGIuzGAExSyQ0yTOHtGqIIVVVn5ZhrP';  // Replace with your actual Twitter Bearer Token

// Root route for checking the server
app.get('/', (req, res) => {
    res.send('Server is running! Go to /fetchProfile with a username query.');
});

// Route to fetch Twitter profile data
app.get('/fetchProfile', async (req, res) => {
    const username = req.query.username; // Get username from query parameter
>>>>>>> 2c5ed8ea8886d7526d9cde1fb0d7c952fd9340ab

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
<<<<<<< HEAD
        const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}?user.fields=profile_image_url,description,public_metrics`, {
            headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });

        const userData = response.data.data;
=======
        // Make a request to the Twitter API using Axios
        const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        });

        const userData = response.data.data;

        // Check if userData is available
>>>>>>> 2c5ed8ea8886d7526d9cde1fb0d7c952fd9340ab
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }

<<<<<<< HEAD
=======
        // Make another request to get followers and following count
        const userDetailsResponse = await axios.get(`https://api.twitter.com/2/users/${userData.id}?user.fields=public_metrics`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        });

        const userDetails = userDetailsResponse.data.data;

        // Respond with the profile information and metrics
>>>>>>> 2c5ed8ea8886d7526d9cde1fb0d7c952fd9340ab
        res.json({
            name: userData.name,
            username: userData.username,
            bio: userData.description || 'No bio available',
            profileImage: userData.profile_image_url,
<<<<<<< HEAD
            followersCount: userData.public_metrics.followers_count,
            followingCount: userData.public_metrics.following_count,
=======
            followersCount: userDetails.public_metrics.followers_count,
            followingCount: userDetails.public_metrics.following_count,
>>>>>>> 2c5ed8ea8886d7526d9cde1fb0d7c952fd9340ab
        });

    } catch (error) {
        console.error('Error fetching Twitter profile:', error);
        res.status(500).json({ error: 'Failed to fetch Twitter profile' });
    }
});

<<<<<<< HEAD
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

=======
// Start the server
>>>>>>> 2c5ed8ea8886d7526d9cde1fb0d7c952fd9340ab
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
