import mongoose from "./index.js";
import { generateUUID } from "../utils/helper.js";

const studentSchema = new mongoose.Schema({
    id: {
        type: String,
        default: function (){
            return generateUUID()
        }
    },
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is required"]
    },
    status: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,        
        default: "student"
    },
    mentor_id: {
        type: String,
        default: -1
    },
    previous_mentors: [{
            type: String,
            ref: "mentors",
    }],
    createdAt: {
        type: Date,
        date: Date.now()
    }
},{
    collection: "students",
    versionKey: false
})

export default mongoose.model('students', studentSchema)