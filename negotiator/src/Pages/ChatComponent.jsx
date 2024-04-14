import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChatComponent() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // State to manage the visibility of the chat component
  const [iteration, setIteration] = useState(0); // State to manage the iteration
  

  const handleSendMessage = async () => {
    const newUserMessage = { message, fromUser: true };
    setConversation([...conversation, newUserMessage]); // Add user message to conversation
    setMessage(''); // Clear input after sending message

    try {
      const url = 'http://127.0.0.1:5000/chat';
      console.log(url)
      const requestBody = {
        message: message,
        iteration: iteration,
        id:"AC9876" // Increment iteration with each message
      };
      console.log(requestBody);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(responseData);
      setIteration(responseData.iteration);
      const botResponse = { message: responseData.response, fromUser: false };
      setConversation([...conversation, newUserMessage, botResponse]); // Add both user message and bot response to conversation
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen); // Toggle the visibility of the chat component
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <div style={{ display: isOpen ? 'block' : 'none', width: '350px', height: '400px', overflowY: 'scroll', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
        {conversation.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: item.fromUser ? 'left' : 'right' }}>
            <span style={{ backgroundColor: item.fromUser ? '#f1f0f0' : '#d1ebff', color: '#000', padding: '5px', borderRadius: '5px' }}>{item.message}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px', display: isOpen ? 'block' : 'none' }}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ 
            width: 'calc(100% - 60px)', 
            padding: '5px', 
            borderRadius: '5px 0 0 5px', 
            border: '1px solid #ccc',
            color: 'white' // Set input text color to white
          }}
        />
        <button onClick={handleSendMessage} style={{ padding: '5px 10px', borderRadius: '0 5px 5px 0', border: '1px solid #007bff', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Send</button>
        <button onClick={toggleChat} style={{ marginTop: '5px', backgroundColor: '#ccc', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Close</button>
        <div style={{ textAlign: 'right', marginTop: '10px' }}>
          <button className='rounded-xl p-2 px-4' style={{ backgroundColor: 'green', color: 'white', marginRight: '5px', cursor: 'pointer' }}>Accept</button>
          <button className='rounded-xl p-2 px-4' style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer' }}>Decline</button>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
