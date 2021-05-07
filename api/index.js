import express from 'express'
import userRoute from './routes/userRoute'

const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())
// home
app.get('/', (req, res) => {
  res.send("hello");
})

//route path
app.use('/user', userRoute);



app.use((req, res, next) => {
  res.status(404).json('Not Found')
});

// listen
const porta = process.env.PORT || 8080
app.listen(porta, () => console.log('Example app listening on port 8080!'))