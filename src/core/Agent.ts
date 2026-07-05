import { LLMProvider } from "../types/LLMProvider";

export class Agent {

  constructor(
    private provider: LLMProvider
  ) {}

  async chat(message: string): Promise<string> {

    return this.provider.generateResponse(message);

  }

}