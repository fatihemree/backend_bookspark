import express from 'express'
import userController from '../controllers/userController'

const app = express()
app.post('/register', userController.register)
app.put('/update/:uid', userController.update)
app.post('/email/:email', userController.emailFind)
app.get('/allUsers', userController.allUsers)


module.exports = app;