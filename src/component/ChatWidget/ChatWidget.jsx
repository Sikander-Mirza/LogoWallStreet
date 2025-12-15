import React, { useState, useRef, useEffect } from "react";
import { FiMessageSquare, FiSend, FiX } from "react-icons/fi";

const CHAT_API_URL = "http://localhost:4000/chat"; // backend URL

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m the Logo Wall Street assistant. Ask me anything about our services or pricing.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // auto scroll to bottom when messages or open state change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content }),
      });
      const data = await res.json();

      const botMsg = {
        role: "assistant",
        content:
          data.reply ||
          "Sorry, I didn't get a response. Please try again in a moment.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I could not reach the server right now. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl flex items-center justify-center z-40 hover:scale-105 transition-transform"
          aria-label="Open chat"
        >
          <FiMessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="
            fixed bottom-4 right-4
            w-[320px] sm:w-[360px]
            max-h-[70vh]            /* constrain overall height */
            bg-white rounded-2xl
            shadow-2xl border border-slate-200
            flex flex-col overflow-hidden z-50
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-slate-900 text-white">
            <div>
              <p className="text-sm font-semibold">Logo Wall Street Assistant</p>
              <p className="text-[11px] text-slate-300">
                Ask about services, pricing, or anything else
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <FiX className="h-4 w-4" />
            </button>
          </div>

          {/* Messages area – flex-1 + overflow-y-auto */}
          <div className="flex-1 px-3 py-3 space-y-2 overflow-y-auto bg-slate-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex mb-1 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="mr-2 mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-xs shrink-0">
                    LW
                  </div>
                )}

                <div
                  className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-slate-900 border border-slate-200 rounded-bl-none"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left text-xs text-slate-500 mt-1">
                Typing…
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-2 border-t bg-white">
            <div className="flex items-center gap-2">
              <textarea
                className="flex-1 border rounded-lg px-2 py-1.5 text-xs sm:text-sm outline-none focus:ring-1 focus:ring-orange-400 resize-none max-h-24"
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Write your question..."
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                aria-label="Send message"
              >
                <FiSend className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;