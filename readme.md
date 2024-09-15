need to modify the student schema to add the previously assigned mentors
assign the api endpoint to display the previously assigned mentors


students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]

    above code describes the array of objects which uses the mongodb's default object _id


create a mentor schema, controller, and routes
where the creation of mentor should have only the student objects where there is mentor id is -1

need to write a API endpoint to display all the students for the give mentor id
