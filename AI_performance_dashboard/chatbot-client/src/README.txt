# React Chatbot UI

# Author: Amogh Thoutu
# Github: https://github.com/AmoghThoutu-56/AI_Projects.git
 
This is a simple React based chatbot user interface that allows users to type messages and display AI generated responses
from the Gemini API, via the middleware. The current version is designed to run locally on your browser using 'localhost'.

-------

# How to test front end:
- change current directory to ./chatbot-client/src 
- cmd: npm run dev -- --host
- Go to the given ipaddr on your browser

------

# File 'main.jsx'

'main.jsx' is the entry point for the react application, mounting the 'App' component inside the root element

# File 'App.jsx'

'App.jsx' is the main componenet of the chatbot UI. It manages the overall structure, message state, and message flow 
between the user and the bot.

Component Structure:

- Stores the chat messgaes using React's 'useState'.
- Renders the chatbot interface using two subcomponents:
	- 'chatWindow': Display chat history
	- 'InputBox': Input field for typing messages
- Manages message flow between user and bot

Features:

- Intialize with a welocome message
- Appends user and bot messages to chat history


# File 'ChatWindow.jsx'

'ChatWindow.jsx' is responsible for rendering all chat messages in a scrollable container.

 Message object structure:

- role: either "user" or "bot"
- content: text of the message

 
# File 'InputBox.jsx'

'InputBox.jsx' renders the input field where the user types messages to send to the chatbot
 
Features:

- Takes the user input and calls the callback prop "OnSend"
- clears input after submission
- Listens for the "Enter" key to send messages


# FIle 'styles.css'

'styles.css' provides the core styling for the chatbot interface

Features:

- flexibility to different screen sizes
- differentiates user and bot messages by right aligning user messages and left aligining bot messages
- button hover effects 
