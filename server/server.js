const port = process.env.PORT || 5000;
const express = require('express');
const expressApplication = express();
const { serverSetup } = require('./serverSetup')
const { fetchProducts } = require('./api'); 

serverSetup(expressApplication)

expressApplication.get('/api/hello', fetchProducts);

expressApplication.listen(port, () => console.log(`Listening on port ${port}`));
