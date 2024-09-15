import express from "express";
import config from "./src/utils/config.js"
import appRoutes from "./src/routes/index.js"
import 'dotenv/config'

const app = express();



const PORT = config.PORT 

app.use(express.json());


app.get('/', (req, res)=>{
    res.send(`<h1 style="text-align:center">Student Mentor Assignment API</h1>`)
})
app.use(appRoutes)

app.listen(PORT, () => console.log(`App is listeing on ${PORT}`))