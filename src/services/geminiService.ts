import { GoogleGenAI } from "@google/genai";

export const getAirQualityConsultation = async (userInput: string): Promise<string> => {
  const apiKey = process.env.API_KEY || '';

  if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
    return "Demo Mode: API Key missing. Please configure your environment to use the AI Consultant. Based on your input, we recommend a full Air Duct Cleaning and Carpet sanitation.";
  }

  const ai = new GoogleGenAI({ apiKey });


  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are an expert Indoor Air Quality Specialist for "Pro Carpet & Duct Cleaning". 
        Your goal is to analyze user inputs (symptoms like allergies, home age, pets, dust levels) and recommend specific cleaning services.
        
        Services we offer:
        1. Air Duct Cleaning (The "Lungs" of the home)
        2. Carpet Cleaning (Deep hot water extraction)
        3. Upholstery Cleaning
        4. Dryer Vent Cleaning
        
        Tone: Professional, empathetic, expert, and helpful. Focus on health benefits (reducing allergies) and energy savings.
        
        Keep the response concise (under 100 words). Do not give specific price quotes, but mention that cleaner units save $30-$50/month on utilities.`,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I couldn't process that request right now. Please call us for a direct consultation.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We are having trouble connecting to our AI specialist. Please call us directly for a free consultation.";
  }
};