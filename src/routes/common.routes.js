import express from "express"
import commonController from "../controller/common.controller.js";


const routes = express.Router();

routes.post('/assignStudent2Mentor/:id', commonController.assignStudentsToMentor);
routes.put('/students/:studentId/mentor/:mentorId', commonController.changeMentorForStudent);
routes.get('/mentors/:id/students', commonController.getStudentsForMentor);
routes.get('/students/:id/previous-mentors', commonController.getPreviousMentorsForStudent);
// routes.get('/students/:id/previous-mentors')


export default routes
