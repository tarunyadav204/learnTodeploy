// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());


const PORT = process.env.PORT || 2000;

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

app.get('/api/data', (req, res) => {
    res.json(data);
});


const __dirname1 = path.resolve();
console.log("dirname", __dirname1);
app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
