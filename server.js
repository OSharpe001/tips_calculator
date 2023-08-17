const express = require("express");

const app = express();
const port = 5002;

// LISTENER
app.listen(port, () => {
    console.log(`This Express Server is running on port ${port}...`);
});

// ROUTE(S)
app.get("/tip", (req, res) => {
    res.send(`<h1>Time for a tip!<br/>What percentage would you prefer?</h1>`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`<h1>The tip will be $${(req.params.total * (req.params.tipPercentage / 100)).toFixed(2)}</h1>`);
});





// nodemon