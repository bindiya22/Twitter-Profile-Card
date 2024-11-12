<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twitter Profile & Weather App</title>
    <style>
        /* Basic Styles */
        body {
            font-family: Arial, sans-serif;
            background: url('twitter-logo.png') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 300px;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent for readability */
            border-radius: 8px;
            text-align: center;
        }

        /* Input and Button */
        input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            width: 100%;
            padding: 8px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        /* Profile and Weather Display */
        .profile-card, #weatherDisplay {
            margin-top: 15px;
            padding: 10px;
            border-radius: 4px;
            background-color: #f0f0f0;
        }

        .profile-card img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-bottom: 10px;
        }

        .profile-card h2, .profile-card h3, .profile-card p, #weatherDisplay h3, #weatherDisplay p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Twitter Profile Section -->
        <div id="search-bar">
            <input type="text" id="twitterUsername" placeholder="Enter Twitter username">
            <button onclick="fetchProfile()">Search Twitter Profile</button>
        </div>

        <!-- Profile Card -->
        <div id="profileCard" class="profile-card" style="display:none;">
            <img src="" id="profileImage" alt="Profile Image">
            <h2 id="username">@username</h2>
            <h3 id="name">User Name</h3>
            <p id="bio">This is a sample bio.</p>c
        </div>

        <!-- Weather Section -->
        <div id="weather-section">
            <input type="text" id="locationInput" placeholder="Enter City">
            <button onclick="fetchWeather()">Get Weather</button>
            <div id="weatherDisplay"></div>
        </div>
    </div>

    <script>
        // Function to fetch Twitter Profile
        async function fetchProfile() {
            const username = document.getElementById('twitterUsername').value;
            if (!username) {
                alert('Please enter a Twitter username.');
                return;
            }

            try {
                const response = await fetch(`http://localhost:3000/fetchProfile?username=${username}`);
                if (!response.ok) throw new Error('User not found or server error');
                
                const profileData = await response.json();

                // Populate profile information
                document.getElementById('profileImage').src = profileData.profileImage;
                document.getElementById('username').textContent = '@' + profileData.username;
                document.getElementById('name').textContent = profileData.name;
                document.getElementById('bio').textContent = profileData.bio;

                document.getElementById('profileCard').style.display = 'block';

            } catch (error) {
                console.error('Error fetching profile:', error);
                alert('Failed to fetch Twitter profile. Please try again.');
            }
        }

        // Function to fetch Weather
        async function fetchWeather() {
            const city = document.getElementById('locationInput').value;
            if (!city) {
                alert('Please enter a city name.');
                return;
            }

            try {
                const response = await fetch(`http://localhost:3000/fetchWeather?city=${city}`);
                if (!response.ok) throw new Error('City not found or server error');
                
                const weatherData = await response.json();

                // Display weather information
                document.getElementById('weatherDisplay').innerHTML = `
                    <h3>Weather in ${weatherData.city}</h3>
                    <p>Temperature: ${weatherData.temperature}°C</p>
                    <p>Description: ${weatherData.description}</p>
                    <img src="${weatherData.icon}" alt="Weather Icon">
                `;

            } catch (error) {
                console.error('Error fetching weather data:', error);
                alert('Failed to fetch weather data. Please try again.');
            }
        }
    </script>
</body>
</html>
