const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const apiRouter = require(path.join(__dirname, '/src/api/baseRouter')).default;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('./dist-client'));

app.use('/api', apiRouter);

app.use('*', express.static(path.join(__dirname, '/dist-client/index.html')));

app.listen(process.env.PORT || 3000, () => console.log(`listening on port ${process.env.PORT || 3000}`));
