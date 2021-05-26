import express from 'express'
import bookController from '../controller/bookController'

const app = express()
app.get('/search', bookController.search)
app.get('/trend', bookController.trend)


module.exports = app;