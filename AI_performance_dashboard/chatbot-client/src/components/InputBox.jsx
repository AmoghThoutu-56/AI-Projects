
import { useState } from "react";

// recieves a prop called "onSend"
// onSend is a callback function to send user messages
function InputBox({ onSend }) {

    // State to hold the input value
    // input => the current value of the input box
    // setInput => a function to update the input state
    const [input, setInput] = useState("");

    // handleSubmit: triggered when the form is submitted
    const handleSubmit = (e) =>  {

        // e => the event object from the form submission
        // e.preventDefault() => prevents the default form submission behavior (refreshing the page)
        e.preventDefault();

        // prevent sending empty messages
        if (!input.trim()) return;

        // Calls the onSend function passed as a prop with the current input value
        onSend(input);

        // Resets the input state to an empty string after sending the message
        setInput("");
    };

    // renders the input box
    // Displays a form with an input field and a submit button
    // text input box bound to the input state
    return (
        <form onSubmit = {handleSubmit} className = "input-box">
            <textarea 
                type = "text"
                value = {input}
                // onChange updates the state as the user types
                onChange = {(e) => setInput (e.target.value)}
                placeholder = "Ask me anything..."
            />
            {/* Submit button to send the message */}
            <button type = "submit"> <span id='send'>Send</span></button>
        </form>
    );
}

export default InputBox;

