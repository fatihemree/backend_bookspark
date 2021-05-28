import express from 'express'
import bookController from '../controllers/bookController'
const app = express()
// app.post('/update/:uid', userController.update)
// app.get('/email/:email', userController.emailFind)
// app.get('/allUsers', userController.allUsers)
// app.get('/signout', userController.signOut)
// app.post('/delete/:uid', userController.delete)
app.post('/addBook',bookController.saveBook)
app.get('/allBook',bookController.allBook)

module.exports = app;