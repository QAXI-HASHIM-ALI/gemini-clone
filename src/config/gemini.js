import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const API_KEY = "AIzaSyCXzcd6UwJ_IussNYj6-wJuv6I0K004Q98"; // Ensure this API key is valid
const MODEL_NAME = "gemini-1.5-flash";

async function runChat(prompt) {
  try {
    // Initialize the GoogleGenerativeAI client with the API key
    const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });

    // Get the generative model specified by the MODEL_NAME
    const model = await genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,       // Adjust creativity level
      topK: 1,                // Use a small set of candidate outputs
      topP: 1,                // Use cumulative probability distribution
      maxOutputTokens: 2048,  // Maximum number of tokens in the output
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    // Start a chat session with the model using the specified generationConfig and safetySettings
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [], // Ensure this is correctly formatted as per the API documentation
    });

    // Send a message and await the response
    const result = await chat.sendMessage(prompt);
    const response = result.response;

    // Check if response.text() exists and log it
    if (response && typeof response.text === 'function') {
      console.log(await response.text()); // Ensure you await the text conversion
    } else {
      console.log(response); // Log response directly if text() is not available
    }
  } catch (error) {
    console.error("Error during chat:", error);
  }
}

export default runChat;
