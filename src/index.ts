import { ppid } from "process";

const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req:any, res:any) => res.send('Express'));
app.listen(PORT, () => {
    console.log(`Server is running at localhost: ${PORT}`)
});