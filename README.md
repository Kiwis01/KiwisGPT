KiwisGPT - Personalized AI Chatbot
KiwisGPT is an AI chatbot designed to answer questions based on my personal experiences and knowledge. This repository contains the necessary code to run the chatbot and get personalized responses.

Installation
To get started, make sure you have Node.js installed on your machine. Then, navigate to the project directory and run the following command to install the required dependencies:

bash
Copy code
npm install
Setup API Key
To use KiwisGPT, you will need a private API key from the OpenAI website. Once you obtain the API key, create a .env file in the root directory of the project and store the API key in a variable named APIKEY like this:

makefile
Copy code
APIKEY=YOUR_API_KEY_HERE
Ensure that you keep your API key private and do not share it publicly.

Usage
Once you have installed the dependencies and set up your API key, you are ready to use KiwisGPT. There are two ways to run the chatbot:

Local Development:
You can run the chatbot on your local machine using a live server. To do this, execute the following command:

bash
Copy code
npm start
The chatbot will be accessible at localhost or the specified host and port.

Deployment:
If you wish to deploy the chatbot on another web server, build the project using:

bash
Copy code
npm run build
This will generate a production-ready build in the dist folder. You can then deploy the contents of this folder to your desired web server.

Support and Contribution
Feel free to explore, use, and modify this project as needed. If you encounter any issues or have suggestions for improvement, please create an issue on this repository. Contributions are also welcome through pull requests.

Thank you for using KiwisGPT! Happy chatting!
