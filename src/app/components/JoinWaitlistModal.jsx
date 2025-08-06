import { useState } from "react";

export default function JoinWaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're on the waitlist!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0000008f] z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold text-center mb-2">
          Be the first to Klinch it!
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Early users get exclusive access, lifetime perks, and surprise rewards. Don't miss out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3336e8]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#3336e8] text-white py-2 px-4 rounded-lg hover:bg-[#3336e8] transition disabled:opacity-50"
          >
            {status === "loading" ? "Submitting..." : "Notify Me First"}
          </button>
        </form>

        {message && (
          <p className={`text-sm text-center mt-2 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <p className="text-xs text-gray-400 text-center mt-4">
          We’ll only email you when Klinch is live. No spam. Ever.
        </p>
      </div>
    </div>
  );
}
