const port :number = 3004

import routes from './routes/route'
import path from 'path'
import express from 'express'
const app = express()

app.use(routes)

app.use('/uploads',express.static(path.resolve(__dirname, '..', 'uploads')))


app.listen(port)