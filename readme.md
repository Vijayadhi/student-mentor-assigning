Here’s an updated version of the `README.md` file to reflect the changes you've made in the routes and functions for student and mentor management:

---

## Mentor-Student Management API

This API manages mentors and students, allowing you to create, update, and delete records for mentors and students, assign students to mentors, and more.

### You can even test our api online ###
- install Postman
- install the collection from the repository
- open postman and import the collection.
- now you can able to be test our api without installing the repository


### Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Run Locally](#run-locally)
- [API Endpoints](#api-endpoints)
    - [1. Student Endpoints](#1-student-endpoints)
    - [2. Mentor Endpoints](#2-mentor-endpoints)
    - [3. Assignment Endpoints](#3-assignment-endpoints)
- [Models](#models)
- [License](#license)

---

### Prerequisites
- Node.js (v12 or later)
- MongoDB (as a database)
- npm or yarn (for package management)
- Postmant (for testig api)

---

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/mentor-student-api.git
    ```
2. Change into the project directory:
    ```bash
    cd mentor-student-api
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up your environment variables. Create a `.env` file in the root of the project with:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/mentor_student_db
    ```
5. open the postman and import the collection in this folder and test the api

---

### Run Locally

1. Ensure your MongoDB service is running.

2. Start the Node.js server:
    ```bash
    npm start
    ```

3. The server should now be running at:
    ```
    http://localhost:3000
    ```

---

### API Endpoints 

#### 1. Student Endpoints

- **Create Student**
    - **Method**: `POST`
    - **Endpoint**: `/students/addStudent`
    - **Body**:
        ```json
        {
            "name": "Jane Doe",
            "email": "jane.doe@example.com"
        }
        ```
    - **Description**: Adds a new student to the database.
    - **Response**:
        ```json
        {
            "message": "Student added successfully"
        }
        ```

- **Get All Students**
    - **Method**: `GET`
    - **Endpoint**: `/students/getAllStudents`
    - **Description**: Fetches a list of all students.
    - **Response**:
        ```json
        {
            "message": "Data fetch successful",
            "students": [/* array of students */]
        }
        ```

- **Get Student by ID**
    - **Method**: `GET`
    - **Endpoint**: `/students/getStudentByID/:id`
    - **Description**: Fetches details of a student by their ID.
    - **Response**:
        ```json
        {
            "message": "Student found",
            "student": { /* student details */ }
        }
        ```

- **Update Student**
    - **Method**: `PUT`
    - **Endpoint**: `/students/updateStudent/:id`
    - **Body**:
        ```json
        {
            "name": "Updated Name",
            "email": "updated.email@example.com"
        }
        ```
    - **Description**: Updates the details of a student with the given ID.
    - **Response**:
        ```json
        {
            "message": "Student updated successfully"
        }
        ```

- **Delete Student**
    - **Method**: `DELETE`
    - **Endpoint**: `/students/deleteStudent/:id`
    - **Description**: Deletes a student from the database by their ID.
    - **Response**:
        ```json
        {
            "message": "Student deleted successfully"
        }
        ```

#### 2. Mentor Endpoints

- **Create Mentor**
    - **Method**: `POST`
    - **Endpoint**: `/mentors/createMentor`
    - **Body**:
        ```json
        {
            "name": "John Doe",
            "email": "john.doe@example.com"
        }
        ```
    - **Description**: Creates a new mentor in the system.
    - **Response**:
        ```json
        {
            "message": "Mentor created successfully"
        }
        ```

- **Get All Mentors**
    - **Method**: `GET`
    - **Endpoint**: `/mentors/getAllMentors`
    - **Description**: Retrieves all the mentors from the database.
    - **Response**:
        ```json
        {
            "message": "Data fetch successful",
            "mentors": [/* array of mentors */]
        }
        ```

- **Get Mentor by ID**
    - **Method**: `GET`
    - **Endpoint**: `/mentors/getMentorByID/:id`
    - **Description**: Fetches details of a mentor by their ID.
    - **Response**:
        ```json
        {
            "message": "Mentor found",
            "mentor": { /* mentor details */ }
        }
        ```

- **Update Mentor**
    - **Method**: `PUT`
    - **Endpoint**: `/mentors/editMentors/:id`
    - **Body**:
        ```json
        {
            "name": "Updated Name",
            "email": "updated.email@example.com"
        }
        ```
    - **Description**: Updates the details of a mentor by their ID.
    - **Response**:
        ```json
        {
            "message": "Mentor updated successfully"
        }
        ```

#### 3. Assignment Endpoints

- **Assign Students to Mentor**
    - **Method**: `POST`
    - **Endpoint**: `/assigning/assignStudentsToMentor`
    - **Body**:
        ```json
        {
            "mentorId": "mentorId",
            "studentIds": ["studentId1", "studentId2"]
        }
        ```
    - **Description**: Assigns multiple students to the specified mentor.
    - **Response**:
        ```json
        {
            "message": "Students assigned to mentor successfully"
        }
        ```

- **Change Mentor for a Student**
    - **Method**: `PUT`
    - **Endpoint**: `/assigning/changeMentor/:studentId`
    - **Body**:
        ```json
        {
            "newMentorId": "newMentorId"
        }
        ```
    - **Description**: Changes the mentor assigned to the student identified by `studentId`.
    - **Response**:
        ```json
        {
            "message": "Mentor updated successfully"
        }
        ```

---

### Models

#### Mentor Model
- **Schema**:
    ```json
    {
        "name": String,
        "email": String,
        "students": [Array of Student IDs]
    }
    ```

#### Student Model
- **Schema**:
    ```json
    {
        "name": String,
        "email": String,
        "mentor_id": String, // Current Mentor ID
        "previous_mentors": [Array of Mentor IDs] // History of previous mentors
    }
    ```

---

### License

This project is licensed under the MIT License.

---

