import { Agent } from "../core/Agent";
import { GeminiProvider } from "../providers/gemini/GeminiProvider";

async function main() {
  const provider = new GeminiProvider();
  const agent = new Agent(provider);

  const response = await agent.chat("Hola DevAgent, preséntate.");

  console.log("🤖 DevAgent:");
  console.log(response);
}

main();