import express from "express"
import studentRoutes from "./student.routes.js"
import mentorRoutes from "./mentor.routes.js"
import commonRoutes from "./common.routes.js"

const routes = express.Router();

routes.use('/students', studentRoutes);
routes.use('/mentors', mentorRoutes);
routes.use('/assigning', commonRoutes)

export default routes