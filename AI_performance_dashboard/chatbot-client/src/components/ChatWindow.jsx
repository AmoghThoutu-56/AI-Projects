// Accepts a prop called "messages" which is an array of chat messages
function ChatWindow({ messages}) {
    return (
        <div className = "chat_window"> {/* Container forall chat messages */}
            {/*   iterates over the messages using .map() 
            -  for each msg, it creates a div with a class based on the role (user or bot) 
            -  "i" is the index of current message in the array, used as key */}
            {messages.map((msg, i) => (
                // each message gets a key
                // The className is dynamically set based on the role of the message
                <div key= {i} className = {`message ${msg.role}`}>
                    {/* displays "You" for user messages and "Gemini" for bot messages
                    -   wrapped in a strong tag for bold formatting
                    - Ternary operator sytax: condition ? valueIfTrue : valueIfFalse */}
                    <strong>{msg.role === "user" ? "You" : "Mimo"}:</strong>{" "} 
                    {/*displays the content of the message*/}
                    {msg.content}
                </div>
            ))}
        </div>
    );
}

export default ChatWindow;

