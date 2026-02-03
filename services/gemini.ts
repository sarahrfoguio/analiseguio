
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMarketInsight = async (competitorName: string, focus: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a strategic consultant for "Guio Cook", a culinary tech startup. Based on a competitive report, we are analyzing ${competitorName} who focuses on ${focus}. 
      
      Provide a highly professional, 2-sentence executive insight on how Guio Cook can exploit the "white space" (unmet needs) against them. 
      Mention specific Guio differentiators like "Staff Gamification", "Cook & Profit Dashboard (Kitchen + CRM)", or "No-Friction QR Logic".`,
      config: {
        temperature: 0.6,
        topP: 0.9,
      }
    });
    return response.text || "Insight indisponível no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erro ao conectar com a inteligência estratégica.";
  }
};
