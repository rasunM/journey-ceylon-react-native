// src/services/geminiService.ts

import {GEMINI_API_KEY} from '../../../env';

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

// Define a type for the conversation history part
interface HistoryPart {
  role: 'user' | 'model';
  parts: {text: string}[];
}

export const fetchGeminiResponse = async (
  prompt: string,
  history: HistoryPart[],
): Promise<string> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Include previous conversation history for context
        contents: [
          ...history,
          {
            role: 'user',
            parts: [{text: prompt}],
          },
        ],
        // Optional: Safety settings to filter harmful content
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('API Error:', errorBody);
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Safely access the response text
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      console.error('No text found in API response:', data);
      throw new Error('Could not retrieve a valid response from the AI.');
    }

    return text;
  } catch (error) {
    console.error('Failed to fetch Gemini response:', error);
    // Return a user-friendly error message
    return "I'm having trouble connecting right now. Please try again later.";
  }
};
