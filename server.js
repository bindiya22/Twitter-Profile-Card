const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

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

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        // Make a request to the Twitter API using Axios
        const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        });

        const userData = response.data.data;

        // Check if userData is available
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Make another request to get followers and following count
        const userDetailsResponse = await axios.get(`https://api.twitter.com/2/users/${userData.id}?user.fields=public_metrics`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        });

        const userDetails = userDetailsResponse.data.data;

        // Respond with the profile information and metrics
        res.json({
            name: userData.name,
            username: userData.username,
            bio: userData.description || 'No bio available',
            profileImage: userData.profile_image_url,
            followersCount: userDetails.public_metrics.followers_count,
            followingCount: userDetails.public_metrics.following_count,
        });

    } catch (error) {
        console.error('Error fetching Twitter profile:', error);
        res.status(500).json({ error: 'Failed to fetch Twitter profile' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
