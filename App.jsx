
import { useState } from "react";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

export default function App() {
  const [mode, setMode] = useState(null);
  if (!mode) return <Auth setMode={setMode} />;
  return <Home mode={mode} />;
}
