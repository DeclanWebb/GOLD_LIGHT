
import { enforceSafety } from "./safetyLayer.js";

export function respond(message) {
  const safety = enforceSafety(message);
  if (safety.blocked) return safety.text;

  if (message.toLowerCase().includes("suicide")) {
    return "I’m really glad you reached out. I can’t help with harm, but you deserve care. Are you safe right now? Please consider contacting emergency services or a trusted crisis line.";
  }

  return "Thank you for sharing. You’re not alone, and we can take this one step at a time.";
}
