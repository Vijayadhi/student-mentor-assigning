import express from "express"
import mentorController from "../controller/mentor.controller.js";

const routes = express.Router();

routes.post("/createMentor", mentorController.createMentor);
routes.get("/getAllMentors", mentorController.getAllMentors);
routes.get("/getMentorByID/:id", mentorController.getMentorByID);
routes.put("/editMentors/:id", mentorController.editMentorByID);
routes.delete("deleteMentor/:id", mentorController.deleteMentor)
// routes.put("/changeStudents/:id", mentorController.changeStudents)

export default routes