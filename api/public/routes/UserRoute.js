import express from 'express'
import userController from '../controller/userController'

const app = express()
app.post('/register', userController.register)
app.post('/update/:uid', userController.update)
app.get('/email/:email', userController.emailFind)
app.get('/allUsers', userController.allUsers)
app.post('/delete/:uid', userController.delete)


module.exports = app;