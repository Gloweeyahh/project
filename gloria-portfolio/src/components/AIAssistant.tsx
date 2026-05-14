import { useState } from "react";

const responses: Record<string, string> = {
  price: "Projects typically range from $1k to $5k+ depending on scope.",
  timeline: "Most projects take 2–4 weeks depending on complexity.",
  services: "I design high-converting websites, SaaS dashboards, and course platforms.",
  contact: "You can book directly via the booking page or message on WhatsApp."
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const send = () => {
    const lower = input.toLowerCase();
    let reply = "Tell me more 👀";

    Object.keys(responses).forEach((key) => {
      if (lower.includes(key)) reply = responses[key];
    });

    setMessages([...messages, `You: ${input}`, `Gloria AI: ${reply}`]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 bg-black border border-white/10 rounded-2xl p-4 mb-4">
          <div className="h-60 overflow-y-auto text-sm space-y-2 mb-3">
            {messages.map((m, i) => (
              <p key={i}>{m}</p>
            ))}
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 bg-white/5 border border-white/10 rounded"
            placeholder="Ask something..."
          />

          <button
            onClick={send}
            className="mt-2 w-full bg-[#D4AF37] text-black py-2 rounded"
          >
            Send
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="px-5 py-3 bg-[#D4AF37] text-black rounded-full font-bold"
      >
        AI
      </button>
    </div>
  );
}
