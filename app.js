import express from 'express'
const app = express()


const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'

//database connection
import connectDB from './db/connectdb.js'
connectDB(DATABASE_URL)

//req.body
app.use(express.urlencoded({extended:false}))

// app.get('/', (req,res)=>{
//     res.send('hello from node code')
// })

//load routes
import web from './routes/web.js'
app.use('/student', web)

//set template view engine to use
app.set('view engine', 'ejs')



app.listen(port, ()=>{
    console.log(`server is listening on http://localhost:${port}`)
})