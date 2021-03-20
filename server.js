const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
require('./server/config/mongoose.config');

app.use(express.json())
app.use(express.urlencoded({extended: true}));


require('./server/routes/routes')(app);

app.listen(8000, () => console.log("Server is up and running on port 8000"));