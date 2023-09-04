// Import necessary libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

const TextGeneration: React.FC = () => {
  const [generatedText, setGeneratedText] = useState("");

  useEffect(() => {
    const generateText = async () => {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: "Write a creative blog post about web development.",
          max_tokens: 100,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_OPENAI_API_KEY",
          },
        }
      );

      setGeneratedText(response.data.choices[0].text);
    };

    generateText();
  }, []);

  return <div>{generatedText}</div>;
};

export default TextGeneration;
