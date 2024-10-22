# React + Vite
-----User Management App-----
-Description--
This app fetches a list of users from a public API and displays them in a user-friendly interface. It allows users to search for specific users by name or username, shows more details on demand, handles loading and error states gracefully, and includes a refresh button to re-fetch data.



Clone the repository:
git clone https://github.com/nishanktarar/tb_assignment.git
cd user-management-app



Install dependencies:
npm install



Start the development server using Vite:
npm run dev
The app should now be running on http://localhost:3000.



Functionality Implemented

Fetch User Data:
The app fetches user data from the public API https://jsonplaceholder.typicode.com/users and stores it in the state.

Display User Data:
Each user's name and username are displayed by default.
A "Show More" button is available to display additional details such as email and address.

Search Functionality:
A search bar allows users to filter the displayed users by name or username in real-time.

Loading and Error Handling:
A loading message is shown while the data is being fetched.
An error message is displayed if the API call fails.

Refresh Button:
A refresh button is provided to re-fetch the user data from the API.



Dependencies
React: A JavaScript library for building user interfaces.
Fetch API: Used to make HTTP requests to fetch user data.
Vite: A build tool for frontend projects.

