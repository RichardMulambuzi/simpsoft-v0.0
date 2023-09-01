"use client";
import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";

const Chatbot1: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      setChatMessages([...chatMessages, currentMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <Container>
      <Typography variant="h6">Chatbot</Typography>
      <div>
        {chatMessages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <TextField
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          label="Type a message"
          fullWidth
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </Container>
  );
};

export default Chatbot1;
