const express = require('express');
const path = require('path')

const app = express();
const port = 3000;

let root_path = path.resolve(__dirname, 'static')

app.use(express.static(root_path));

app.listen(port, () => {
    console.log(`Server is runing on http://localhost:${port}`);
})