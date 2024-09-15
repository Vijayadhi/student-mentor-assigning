import express from "express"
import studentController from "../controller/student.controller.js"

const routes = express.Router()

routes.post('/addStudent', studentController.createStudent);
routes.get('/getAllStudents', studentController.getAllStudent);
routes.get('/getStudentByID/:id', studentController.getStudentByID);
routes.put('/updateStudent/:id', studentController.updateStudent);
routes.delete('/deleteStudent/:id', studentController.deleteStudent)

export default routes;