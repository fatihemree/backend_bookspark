import express from 'express'
import publicRoute from './public'
import privateRoute from './private'
import cors from 'cors';
import { swaggerOptions } from './src/config/setting';
import session from 'express-session'

const app = express();
const expressSwagger = require('express-swagger-generator')(app);

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({
  secret: 'privateKey',
  resave: false,
  saveUninitialized: true
}));
// home
app.get('/run', (req, res) => {
  res.send("run");
})

//route path
app.use('/public', publicRoute);
app.use('/private', privateRoute);



// app.use((req, res, next) => {
//   res.status(404).json('Not Found')
// });

expressSwagger(swaggerOptions);

// listen
const porta = process.env.PORT || 8080
app.listen(porta, () => console.log('Example app listening on port 8080!'))