
export default function Auth({ setMode }) {
  return (
    <div>
      <h1>Goldlight</h1>
      <p>Gentle AI support. Not therapy.</p>
      <button onClick={() => setMode("guest")}>Continue as Guest</button>
      <button onClick={() => setMode("signin")}>Sign In</button>
    </div>
  );
}
