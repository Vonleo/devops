const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Fetch a Chuck Norris joke
app.get('/api/joke', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        res.json({ joke: response.data.value });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch joke' });
    }
});

// Fetch the latest Jenkins build info and render HTML
app.get('/', async (req, res) => {
    try {
        const jenkinsUrl = `${process.env.JENKINS_URL}/job/${process.env.JENKINS_JOB}/lastBuild/api/json`;
        const jenkinsResponse = await axios.get(jenkinsUrl, {
            auth: { username: process.env.JENKINS_USER, password: process.env.JENKINS_TOKEN }
        });

        res.render('index', { build: jenkinsResponse.data, joke: null });
    } catch (error) {
        res.render('index', { build: null, joke: null, error: 'Failed to fetch build data' });
    }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
