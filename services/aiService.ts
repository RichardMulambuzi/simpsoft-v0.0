
import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey =
    process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
    "AIzaSyBvgr5Ts_8u5L-_FQWDZcJ_DK3y0vHwRF0";

if (!apiKey) throw new Error("Missing API key");

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateAIRecommendationsFromAPI = async (prompt: string) => {
    const result = await model.generateContent(prompt);
    return parseAIResponse(result.response.text());
};

export const parseAIResponse = (response: string) =>
    response.split("\n").map((line) => line.trim()).filter((line) => line);