Random number generator test

Please check backend and frontend folders for specific details about each component.

Some general considerations:

- Currently the service URL is hardcoded in the frontend, for a production environment this should have been left as a placeholder and substituted during the deployment.
- The URL of the service refers to the port 3000 as stated in the problem, note that this conflicts with the react development server, change the url in <project_folder>\masterASP\frontend\src\App.js if necessary.

Quick guide:

To run the backend:

- Execute the following command in the backend folder node index.js 3001 100 60 (note that this changes the port to 3001)
- Change the SERVICE_URL variable to http://localhost:3001 in <project_folder>\masterASP\frontend\src\App.js
- Run 'npm start' in the frontend folder