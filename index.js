// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("membership/0x3472059945ee170660a9A97892a3cf77857Eba3A", (req, res) => {
    res.json({
        level: 0, // 0 = Silver, 1 = Gold, 3 = Platinum
    });
});

app.listen(5000, () => {
    console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
