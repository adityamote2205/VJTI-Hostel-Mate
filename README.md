# VJTI Hostel-Mate



<div align="center">
  <img src="https://github.com/adityamote2205/VJTI-Hostel-Mate/assets/108695859/707c6600-4c5a-4aa8-a2aa-b5f46d3863b9" alt="Logo">
</div>




VJTI Hostel-Mate is a web application designed to streamline communication between VJTI hostel students and rectors for addressing mess and hostel-related issues. It facilitates the submission of complaints by students and their resolution by rectors, ensuring a transparent and efficient process.

## Features

- **User Authentication** : Students and rectors can sign up and log in securely using JWT authentication.
- **Differentiated Profiles** : Separate profiles for rectors and students to provide tailored experiences.
- **Transparency** : Complaints include timestamps indicating when they were created by students and resolved by rectors.
- **Image Sharing** : Students can attach images as proof when submitting complaints.
- **Complaint Management** : Students can delete complaints before rectors mark them as completed if necessary.
- **About Us** : Information about the project and the team behind it.
- **Contact Us** : Easily accessible contact information for reaching out to the administrators.

## Technology Stack

VJTI Hostel-Mate is built using the PERN stack:
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png" width="35">  **PostgreSQL** : For the database to store user information, complaints, and other relevant data.

- <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.png" width="40">  **Express.js** : A web application framework for building APIs to handle server-side logic.
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="40">  **React.js** : A JavaScript library for building user interfaces, providing a responsive and interactive frontend.
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="40">  **Node.js** : A runtime environment for executing JavaScript code on the server side.
- <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" width="35">  **Postman** : For testing API endpoints and ensuring smooth communication between frontend and backend.
- <img src="https://seeklogo.com/images/J/json-web-tokens-jwt-io-logo-C003DEC47A-seeklogo.com.png" width="35">  **JWT (JSON Web Tokens)** : For secure authentication by generating and verifying tokens between the frontend and backend.
- <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" width="35">  **Bootstrap** : For streamlined and visually appealing frontend design, enhancing user experience and interface aesthetics.

## Website Overview & Features

- **Student's Portal for Grievance resolution** :
    The student portal enables registered users to submit grievances concerning hostel and mess facilities, ensuring privacy by restricting hostel grievances to 
    respective block rectors and allowing all rectors to view mess grievances. Students can update their profiles, track grievance status including pending, 
    completed, and total, and add descriptions and images as proof for each grievance. The system facilitates efficient grievance management by authorities, offers 
    deletion options for students before completion, and ensures security, privacy, accessibility, and usability throughout the platform.
    
    https://github.com/adityamote2205/VJTI-Hostel-Mate/assets/108695859/420b4105-8087-4dac-bc7e-c0b07372ea0c

6a42fa8a8

- **Rector's Dasboard** :
   The rector's dashboard facilitates signup/login for rectors, granting access to view grievances submitted by students within their block for hostel issues and all mess grievances, including photos submitted by 
   students as proof. Rectors can discern details such as submission date, room number, and student identity for each grievance. Upon resolving a grievance, rectors can mark it as completed, reflecting the status 
   change on the student's account. Additionally, rectors can filter grievances by type for efficient management. The dashboard includes a profile section where rectors can monitor their workload, such as the 
   number of complaints received, pending, and completed, and update their profile information as necessary.

   https://github.com/adityamote2205/VJTI-Hostel-Mate/assets/108695859/3567de3b-a9f3-4472-83da-b565f88ffdee

- **Reflection of completion of grievance on student's account** :
   After review and resolution by the rector, when a grievance is marked as completed, the status is automatically updated on the student's account, indicating the date and time of completion. This seamless 
   process ensures that students are promptly informed about the resolution of their grievances.

  https://github.com/adityamote2205/VJTI-Hostel-Mate/assets/108695859/c2be0891-0ad5-48cf-97dc-89f693bd6b0a

## Schema Diagram 
 - The schema consists of four tables: Student, Rector, Hostel Complaint, and Mess Complaint. Both complaint tables have a foreign key `student_id` referencing the Student table. This setup allows efficient 
   tracking of grievances submitted by students, while the Rector table stores information about rectors overseeing the grievances.
   
   ![ER Diagram Final VJTI Hostel Mate](https://github.com/adityamote2205/VJTI-Hostel-Mate/assets/108695859/747e7215-f47d-4f61-a5bf-247944180b5a)

## Getting Started 

  To run the Hostel Grievance Redressal System locally:

  1. **Clone the repository**
     
     `git clone https://github.com/adityamote2205/VJTI-Hostel-Mate.git`

  2. **Navigate to the project directory** :

     `cd [project_directory]`

  3. **Install dependencies** :

     `npm install`
  4. **Configure the database** :

     - Set up PostgreSQL and update the database configuration.
     - Change .env file according to your setup.

 5. **Run the application** :
    
     Start the frontend and backend servers in separate terminal windows.

     - In the frontend directory
    
       `npm start`

     - In the backend directory
    
       `nodemon index.js`

  6. **Visit `http://localhost:3000` to view the application in your browser**.

## Future Improvements

- **Edit Complaint Before Completion** :

   Allowing students to edit their complaints before rectors mark them as completed adds flexibility and ensures accurate information. Implement a feature where students can make changes to their complaint 
   details, such as the description or attached images, until it's marked as resolved by the rector.

- **Notification System** :

  The system notifies rectors instantly upon new complaints within their hostel blocks, facilitating swift response. Additionally, students receive notifications upon completion of their complaints, ensuring 
  they stay updated on grievance status for effective communication and resolution.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## Contact

For any inquiries or feedback, please contact us at `vjti.hostel.mate@gmail.com`















  






 
    















