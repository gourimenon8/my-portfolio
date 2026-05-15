"use client";
// components/ui/AskBarista.tsx

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const STARTERS = [
  "What's Gouri's strongest skill?",
  "Tell me about her AI projects",
  "Does she need visa sponsorship?",
  "Is she open to relocation?",
];

export default function AskBarista() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Something went wrong in the kitchen. Give it another shot?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating ☕ button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setOpen(true)}
            aria-label="Ask the Barista"
            className={cn(
              "fixed bottom-6 right-6 z-50",
              "h-14 w-14 rounded-full",
              "bg-amber-500 hover:bg-amber-600",
              "shadow-[0_8px_28px_rgba(245,158,11,0.45)]",
              "flex items-center justify-center text-2xl",
              "transition-colors"
            )}
          >
            ☕
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
              "fixed bottom-6 right-6 z-50",
              "w-[360px] rounded-3xl overflow-hidden",
              "flex flex-col",
              "border border-black/8",
              "shadow-[0_24px_64px_-8px_rgba(0,0,0,0.22)]"
            )}
            style={{ height: "530px", background: "#fdf8f0" }}
          >
            {/* Header */}
            <div className="bg-amber-500 px-5 py-4 flex items-center justify-between shrink-0">
              <div>
                <div className="cafe-hand text-white text-xl leading-none">
                  Ask the Barista
                </div>
                <div className="text-amber-100 text-[11px] mt-0.5">
                  Gouri's on call — ask anything ☕
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors rounded-full p-1"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">

              {/* Empty state — starters */}
              {messages.length === 0 && (
                <div className="space-y-4">
                  <p className="text-[12px] text-neutral-400 text-center leading-relaxed px-2">
                    Hi! I'm Gouri's barista. Ask me about her work,
                    skills, projects, or what she's looking for.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {STARTERS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className={cn(
                          "text-left text-[11px] text-neutral-600 leading-snug",
                          "bg-white border border-neutral-200 rounded-2xl px-3 py-2.5",
                          "hover:border-amber-300 hover:bg-amber-50",
                          "transition-colors"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  {/* Decorative ruled line */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex-1 h-px bg-neutral-200" />
                    <span className="text-[10px] text-neutral-300 uppercase tracking-widest">
                      or type below
                    </span>
                    <div className="flex-1 h-px bg-neutral-200" />
                  </div>
                </div>
              )}

              {/* Message bubbles */}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {m.role === "user" ? (
                    <div
                      className={cn(
                        "max-w-[82%] rounded-2xl rounded-br-sm",
                        "bg-amber-500 text-white",
                        "px-4 py-2.5 text-sm leading-relaxed"
                      )}
                    >
                      {m.content}
                    </div>
                  ) : (
                    <div
                      className={cn(
                        "max-w-[88%] rounded-2xl rounded-bl-sm",
                        "bg-white border border-neutral-100",
                        "px-4 py-3 text-sm leading-relaxed text-neutral-700",
                        "shadow-sm"
                      )}
                    >
                      <div className="text-[9px] text-amber-500 font-semibold uppercase tracking-[0.12em] mb-1.5">
                        From the kitchen
                      </div>
                      {m.content}
                    </div>
                  )}
                </div>
              ))}

              {/* Brewing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div
                    className={cn(
                      "rounded-2xl rounded-bl-sm bg-white border border-neutral-100",
                      "px-4 py-3 shadow-sm"
                    )}
                  >
                    <div className="text-[9px] text-amber-500 font-semibold uppercase tracking-[0.12em] mb-1.5">
                      From the kitchen
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] text-neutral-400 italic mr-1">
                        Brewing
                      </span>
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.7,
                            repeat: Infinity,
                            delay: i * 0.18,
                            ease: "easeInOut",
                          }}
                          className="text-sm leading-none"
                        >
                          ☕
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div
              className={cn(
                "px-4 py-3 shrink-0",
                "border-t border-neutral-100 bg-white/90"
              )}
            >
              <div className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send(input)}
                  placeholder="What would you like to know? ☕"
                  className={cn(
                    "flex-1 text-sm rounded-full",
                    "bg-neutral-50 border border-neutral-200",
                    "px-4 py-2 outline-none",
                    "focus:border-amber-300 focus:bg-white",
                    "transition-colors placeholder:text-neutral-400"
                  )}
                />
                <motion.button
                  onClick={() => send(input)}
                  whileTap={{ scale: 0.9 }}
                  disabled={!input.trim() || loading}
                  className={cn(
                    "shrink-0 rounded-full",
                    "bg-amber-500 hover:bg-amber-600",
                    "disabled:opacity-35 disabled:cursor-not-allowed",
                    "text-white text-sm font-medium",
                    "px-4 py-2 transition-colors"
                  )}
                >
                  Order
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
