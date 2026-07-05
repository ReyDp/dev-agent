import { GoogleGenAI } from "@google/genai";
import { LLMProvider } from "../../types/LLMProvider";
import { env } from "../../config/env";

export class GeminiProvider implements LLMProvider {

  private ai = new GoogleGenAI({
    apiKey: env.GEMINI_API_KEY,
  });

  async generateResponse(prompt: string): Promise<string> {

    const response = await this.ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text ?? "No se obtuvo respuesta.";

  }

}