const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const app = require('./app');
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const { PORT } = process.env;

mongoose.connect();

app.listen(PORT, () => {
   console.log('server is running on port', PORT);
});
