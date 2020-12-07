const express = require("express")

const cors = require("cors")

const dotenv = require("dotenv")
const connectDb = require('./config/db')

const errorHandler = require("./middleware/error")

const morgan = require('morgan')
const tableRoutes = require("./routes/tableRoutes")

const app = express()

dotenv.config({path: './config/config.env'})

connectDb()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.use(cors())

app.use("/api/v1/table", tableRoutes)


app.use(errorHandler)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
