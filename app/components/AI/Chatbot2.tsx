"use client";
import React, { useEffect, useRef } from "react";
import { Container, Paper } from "@mui/material";

const Chatbot2: React.FC = () => {
  const botFrameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (botFrameRef.current) {
      // Initialize the Bot Framework Web Chat iframe with credentials
      const botSecret = "your_bot_secret"; // Replace with your actual bot secret
      const botWebChatUrl = `https://webchat.botframework.com/embed/your-bot-id?s=${botSecret}`;

      botFrameRef.current.src = botWebChatUrl;
    }
  }, []);

  return (
    <Container>
      <Paper elevation={3}>
        <iframe
          ref={botFrameRef}
          title="AI Chatbot"
          width="100%"
          height="500px"
          allow="microphone"
        />
      </Paper>
    </Container>
  );
};

export default Chatbot2;
