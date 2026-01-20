
export function enforceSafety(message) {
  const banned = ["sexual", "violence", "only option", "worthless society"];
  const lower = message.toLowerCase();
  if (banned.some(b => lower.includes(b))) {
    return { blocked: true, text: "I can’t engage with that topic, but I’m here to support you safely." };
  }
  return { blocked: false };
}
