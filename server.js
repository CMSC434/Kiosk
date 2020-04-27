const PORT = 3000;

const express = require("express");
const app = express();

// Set public folder as root
app.use(express.static('public'));
app.use(express.json());

//Homepage
// All we're doing here is just "sending" or displaying the 
// HTML file for the homepage. Located in public/html
app.get("/", (req, res) => {
  res.sendFile('/public/html/home_page.html', { root: __dirname });
});

//Campus Map
app.get("/campus-map", (req, res) => {
  res.sendFile('/public/html/campus_map.html', { root: __dirname });
});

//Building Map
app.get("/building-map", (req, res) => {
  res.sendFile('/public/html/building_map.html', { root: __dirname });
});

//Search
app.get("/search", (req, res) => {
  res.sendFile('/public/html/search_page.html', { root: __dirname });
});

//Events Page
app.get("/events", (req, res) => {
  res.sendFile('/public/html/events.html', { root: __dirname });
});

app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});