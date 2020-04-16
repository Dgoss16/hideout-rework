const express = require ('express'),
      bodyParser = require ('body-parser'),
      cors = require ('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 3030;
app.listen(port, () => console.log('Listening on port: ', port))