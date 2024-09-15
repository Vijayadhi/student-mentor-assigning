import studentModel from "../model/studentModel.js";
import "dotenv/config"

const createStudent = async (req, res) => {
    try {
        let student = await studentModel.findOne({ email: req.body.email })

        if (!student) {
            await studentModel.create(req.body)
            res.status(201).send({
                message: "Student Added Successfully"
            })
        } else {
            res.status(400).send({
                message: `Student with the given email ${req.body.email} aldready exists!`
            })
        }
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error!"
        })
    }
}

const getAllStudent = async (req, res) => {
    try {
        let student = await studentModel.find({}, { _id: 0 })
        res.status(200).send({
            message: "Data Fetch successfull",
            data: student,
            count: student.length
        })
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}

const getStudentByID = async (req, res) => {
    try {
        let { id } = req.params
        let student = await studentModel.findOne({ id: id }, { _id: 0 })
        if (!student) {
            res.status(404).send({
                message: `Student with id:${id} is not exist`
            })
        }
        else {
            res.status(200).send({
                mesage: "Data fetch successfull",
                data: student
            })
        }


    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}

const updateStudent = async (req, res) => {
    try {
        let { id } = req.params
        let student = await studentModel.findOne({ id: id })

        if (!student) {
            res.status(404).send({
                message: `Student with the given id: ${id} is not exist`
            })
        }   
        else {
            const update = await studentModel.findByIdAndUpdate(student._id, req.body, {
                new: true,
                runValidators: true
            });
            if (!update) {
                return res.status(404).send({
                    message: "Student not found"
                });
            }
            else {
                res.status(203).send({
                    mesage: `Student data updated successfully`,
                    data: update
                })
            }


            //Following method has a backlack that it does not validate data
            // const {name, email, mobile, status} = req.body

            // student.name = name
            // student.email = email
            // student.mobile = mobile
            // student.status = status

            // await student.save()


        }

    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}

const deleteStudent = async (req, res)=>{
    try{
        let {id} = req.params
        let student = await studentModel.findOne({id:id})
        if(!student){
            res.status(404).send({
                mesage:`Student with the give id: ${id} does not exsits!!`
            })
        }
        else{
           let delStudent =  await studentModel.deleteOne({id:id})
           if(delStudent.deletedCount){
            res.status(200).send({
                message: `Student Data deleted`
            })
           } 
        }
    }
    catch (error){
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}

export default {
    createStudent,
    getAllStudent,
    getStudentByID,
    updateStudent,
    deleteStudent
}

