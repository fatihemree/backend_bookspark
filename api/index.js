import express from 'express'
import publicRoute from './public'
import cors from 'cors';
import { swaggerOptions } from './src/config/setting';

const app = express();
const expressSwagger = require('express-swagger-generator')(app);

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// home
app.get('/run', (req, res) => {
  res.send("run");
})

//route path
app.use('/public', publicRoute);



// app.use((req, res, next) => {
//   res.status(404).json('Not Found')
// });

expressSwagger(swaggerOptions);

// listen
const porta = process.env.PORT || 8080
app.listen(porta, () => console.log('Example app listening on port 8080!'))