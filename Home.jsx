export default function Home({ setView, setMode, mode }) {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Goldlight</h1>
        <p className="tagline">
          Gentle emotional support when things feel heavy.
        </p>
        <p className="disclaimer">
          Goldlight is not therapy and does not replace professional care.
        </p>
      </section>

      {/* Action Card */}
      <section className="card">
        <h2>Get Started</h2>

        <div className="actions">
          <button onClick={() => setMode("guest")}>
            Continue as Guest
          </button>
          <button onClick={() => setMode("signin")}>
            Sign In
          </button>
        </div>

        {mode && (
          <div className="enter">
            <p>Mode selected: <strong>{mode}</strong></p>
            <button onClick={() => setView("chat")}>
              Enter AI Support
            </button>
          </div>
        )}
      </section>

      {/* Safety Footer */}
      <footer className="footer">
        <p>
          If you are in immediate danger, please contact local emergency
          services or a trusted crisis resource.
        </p>
      </footer>
    </div>
  );
}
