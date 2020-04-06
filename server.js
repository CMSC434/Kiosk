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
  res.sendFile('/public/html/index.html', { root: __dirname });
});

app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});