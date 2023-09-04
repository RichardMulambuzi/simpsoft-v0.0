'use client';
import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Chatbot as DialogflowChatbot } from "react-chatbot-dialogflow";
const DIALOGFLOW_PROJECT_ID = "your-project-id";
const DIALOGFLOW_AGENT_ID = "your-agent-id";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Typography variant="h6">Chatbot</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Chat" : "Open Chat"}
      </Button>
      <DialogflowChatbot
        projectId={DIALOGFLOW_PROJECT_ID}
        agentId={DIALOGFLOW_AGENT_ID}
        open={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
    </Container>
  );
};

export default Chatbot;
