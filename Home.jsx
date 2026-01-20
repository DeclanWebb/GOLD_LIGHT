
import Chat from "./Chat";
export default function Home({ mode }) {
  return (
    <div>
      <h2>Welcome to Goldlight</h2>
      <p>Mode: {mode}</p>
      <Chat />
    </div>
  );
}
