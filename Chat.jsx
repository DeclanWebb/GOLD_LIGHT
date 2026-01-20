
import { useState } from "react";
export default function Chat() {
  const [msg, setMsg] = useState("");
  const [log, setLog] = useState([]);

  async function send() {
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });
    const j = await r.json();
    setLog([...log, { u: msg, a: j.reply }]);
    setMsg("");
  }

  return (
    <div>
      {log.map((m,i)=>(<p key={i}><b>You:</b>{m.u}<br/><b>Goldlight:</b>{m.a}</p>))}
      <input value={msg} onChange={e=>setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
