const express = require('express');

const app = express();

app.get('/',(req, res)=> res.send('API Running'));

const PORT = process.env.PORT || 5008;

app.listen(PORT , ()=> console.log(`Server started onm port ${PORT}`));