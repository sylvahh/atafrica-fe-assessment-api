# ATAfrica Frontend Assessment - Server 

**Introduction:**
Welcome to the ATAfrica Frontend Assessment Server Codebase. This NodeJS project serves as the backend for the landing page designed for a Nigerian RoboAdvisor. As a frontend developer, I aimed to create a robust and efficient server-side application aligned with the expectations for the Mid-level Front End Developer role at ATAfrica.

**Overview:**
This server is designed to support the frontend client in handling data storage and retrieval for the landing page. It includes APIs for uploading data, fetching resources, and maintaining a seamless user experience.

**Technology Stack:**
- NodeJS: A runtime environment for executing JavaScript code server-side.
- Database: Postgres, chosen for its relational database capabilities.
- ORM Tool: Sequelize for efficient Object-Relational Mapping.
- Other Tools: Render for deployment, GitHub for version control, Docker for databse container.

**Project Structure:**
The codebase is structured for clarity and ease of maintenance:
- `src/controllers`: Logic for handling API requests.
- `src/models`: Sequelize models for database interactions.
- `src/routes`: API routes for different resources.
- `src/db`: Database configurations.

**Project Tasks:**
1. **Upload Data to MongoDB:**
   - Adapted to Postgres instead of MongoDB for efficient data storage.
   - Implemented queries for uploading data seamlessly.

2. **Create an API:**
   - Utilized Sequelize as the Object-Relational Mapping (ORM) tool.
   - Established APIs to fetch resources stored in the database.

3. **Design and Build a Landing Page:**
   - Collaborated with the frontend to ensure smooth integration.

4. **Create a Concise Presentation:**
   - Documented the server-side codebase for comprehensive understanding.

**How to Run Locally:**

## Prerequisite
- NVM
- Docker
  
1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd atafrica-fe-assessment-server`
3. Install dependencies: `npm install`
4. Run the server: `npm start`
5. The server will be running at `http://localhost:3001`.

**Live Demo:**
The server is deployed on Render, supporting the live version of the frontend. Refer to the frontend readme for the live demo link.

**Acknowledgments:**
- ATAfrica for the opportunity to showcase my skills.
- Collaborators in ensuring the seamless integration of frontend and backend components.

Feel free to reach out for any clarifications or additional information.

Best regards,
Sylvester Asoh
