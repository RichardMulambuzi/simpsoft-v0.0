// Import necessary libraries
import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

const ImageRecognition: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const classifyImage = async () => {
      const model = await mobilenet.load();
      const image = imageRef.current;

      if (image && model) {
        const predictions = await model.classify(image);
        console.log(predictions);
      }
    };

    classifyImage();
  }, [imageUrl]);

  return <img ref={imageRef} src={imageUrl} alt="Project" />;
};

export default ImageRecognition;
