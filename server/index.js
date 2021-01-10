const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const PORT = parseInt(process.env.PORT) || 3000

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.listen(PORT, () => {
    console.log(`Application started on port ${PORT} at ${new Date()}`)
})