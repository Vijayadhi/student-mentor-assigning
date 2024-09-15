import studentModel from "../model/studentModel.js";
import mentorModel from "../model/mentorModel.js";

const assignStudentsToMentor = async (req, res) => {
    try {
        const { id } = req.params; // mentor ID
        let mentor = await mentorModel.findOne({ id: id });

        if (!mentor) {
            return res.status(404).send({
                message: `Mentor with the given id: ${id} does not exist`,
            });
        }

        if (!Array.isArray(req.body.students) || req.body.students.length === 0) {
            return res.status(400).send({
                message: "No students provided or students is not an array",
            });
        }

        // Process each student
        for (let studentId of req.body.students) {
            let student = await studentModel.findOne({ id: studentId });

            if (!student) {
                return res.status(404).send({
                    message: `No student found with id: ${studentId}`,
                });
            }

            // Skip if the student already has a mentor
            if (student.mentor_id !== -1) {
                continue; // Skip to next student
            }

            // Assign the student to the mentor
            student.mentor_id = id;
            await student.save();

            // Add student to mentor's list if not already present
            if (!mentor.students.includes(student.id)) {
                mentor.students.push(student.id);
            }
        }

        await mentor.save();
        res.status(200).send({
            message: "Successfully assigned students to mentor",
            data: {
                mentor: mentor.id,
                students: mentor.students,
            },
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error",
        });
    }
};

// 4. API to Change Mentor for a Particular Student
const changeMentorForStudent = async (req, res) => {
    try {
        const { studentId, mentorId } = req.params; // studentId and new mentorId
        let student = await studentModel.findOne({ id: studentId });
        let newMentor = await mentorModel.findOne({ id: mentorId });

        if (!student) {
            return res.status(404).send({
                message: `No student found with id: ${studentId}`,
            });
        }

        if (!newMentor) {
            return res.status(404).send({
                message: `No mentor found with id: ${mentorId}`,
            });
        }

        // If student already has a mentor, add to previous mentors list
        if (student.mentor_id !== -1 && student.mentor_id !== mentorId) {
            student.previous_mentors.push(student.mentor_id);
        }

        // Update student's mentor
        student.mentor_id = mentorId;
        await student.save();

        // Update new mentor's students list
        if (!newMentor.students.includes(student.id)) {
            newMentor.students.push(student.id);
        }
        await newMentor.save();

        res.status(200).send({
            message: `Mentor changed successfully for student ${studentId}`,
            data: {
                student,
                newMentor: mentorId,
            },
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error",
        });
    }
};

// 5. API to Show All Students for a Particular Mentor
const getStudentsForMentor = async (req, res) => {
    try {
        const { id } = req.params; // mentor ID
        let mentor = await mentorModel.findOne({ id: id });

        if (!mentor) {
            return res.status(404).send({
                message: `Mentor with id: ${id} does not exist`,
            });
        }

        // Fetch students assigned to the mentor
        let students = await studentModel.find({ mentor_id: id }, { _id: 0 });

        res.status(200).send({
            message: "Data fetched successfully",
            data: students,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error",
        });
    }
};

// 6. API to Show Previously Assigned Mentors for a Particular Student
const getPreviousMentorsForStudent = async (req, res) => {
    try {
        const { id } = req.params; // student ID
        let student = await studentModel.findOne({ id: id }, { _id: 0 });

        if (!student) {
            return res.status(404).send({
                message: `Student with id: ${id} does not exist`,
            });
        }

        res.status(200).send({
            message: "Data fetched successfully",
            data: student.previous_mentors,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error",
        });
    }
};

export default {
    assignStudentsToMentor,
    changeMentorForStudent,
    getStudentsForMentor,
    getPreviousMentorsForStudent,
}