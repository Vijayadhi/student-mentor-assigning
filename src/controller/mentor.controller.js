import mentorModel from "../model/mentorModel.js";
import "dotenv/config"
import studentModel from "../model/studentModel.js";

const createMentor = async (req, res) => {
    try {
        let mentor = await mentorModel.findOne({ email: req.body.email })
        let student = await studentModel.findOne({ id: req.body.students })
        if (!mentor) {
            if (!student) {
                await mentorModel.create(req.body)
                res.status(201).send({
                    message: "Mentor Added Successfully"
                })
            }
            else {
                res.status(400).send("Student aldready has a mentor")
            }
        }
        else {
            res.status(400).send(`Mentor with given email: ${req.body.email} exists!!`)
        }
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}


const getAllMentors = async (req, res) => {
    try {
        let mentors = await mentorModel.find({}, { _id: 0 })
        res.status(200).send({
            message: "Data Fetch Successfull",
            data: mentors,
            count: mentors.length
        })
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}

const getMentorByID = async (req, res) => {
    try {
        const { id } = req.params
        let mentor = await mentorModel.findOne({ id: id }, { _id: 0 })
        if (!mentor) {
            res.status(404).status({
                message: `Mentor does not exist with given id: ${id}`
            })
        }
        else {
            res.status(200).send({
                messa: "Data Fetch Successfull",
                data: mentor
            })
        }
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}

const editMentorByID = async (req, res) => {
    try {
        const { id } = req.params
        let mentor = await mentorModel.findOne({ id: id })

        if (!mentor) {
            res.status(404).send({
                message: `Mentor Unavailabe with given id: ${id}`
            })
        }
        else {

            const updateMentor = await mentorModel.findByIdAndUpdate(mentor._id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(203).send({
                message: `Data Fetch Successfull`,
                data: updateMentor
            })
        }
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server error"
        })
    }

}



export default {
    createMentor,
    getAllMentors,
    getMentorByID,
    editMentorByID,
}