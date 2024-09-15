import mongoose from "./index.js"
import { generateUUID } from "../utils/helper.js"

const mentorSchema = new mongoose.Schema({
    id: {
        type:  String,
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
        default: "mentor"
    },
    students: [{
        type: String,
        ref: "students"
    }],
    createdAt: {
        type: Date,
        date: Date.now()
    }
},{
    collection: "mentors",
    versionKey: false
})

export default mongoose.model('mentors', mentorSchema)