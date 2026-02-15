"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
    id: "welcome",
    role: "assistant",
    content: "Hi! 👋 I'm the Zrotax AI assistant. I can help you with questions about our tax filing services, RSU/ESPP taxation, ITR filing, and more. How can I help you today?",
    timestamp: new Date(),
};

const QUICK_QUESTIONS = [
    "What services do you offer?",
    "Help with RSU/ESPP taxes",
    "How to file ITR?",
    "Contact details",
];

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPulse, setShowPulse] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Hide pulse after first open
    useEffect(() => {
        if (isOpen) setShowPulse(false);
    }, [isOpen]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: text.trim(),
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const apiMessages = [...messages, userMessage]
                .filter((m) => m.id !== "welcome")
                .map((m) => ({ role: m.role, content: m.content }));

            // Include the welcome context if it's the first real message
            if (apiMessages.length === 1) {
                apiMessages.unshift({ role: "assistant", content: INITIAL_MESSAGE.content });
            }

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to get response");
            }

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: data.reply,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "I'm sorry, I'm having trouble connecting right now. Please try again or reach us directly at +91 8380894711.",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const handleQuickQuestion = (question: string) => {
        sendMessage(question);
    };

    // Simple markdown-like formatting for bold text
    const formatMessage = (text: string) => {
        // Split by ** for bold
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, i) =>
            i % 2 === 1 ? (
                <strong key={i} className="font-semibold">{part}</strong>
            ) : (
                <span key={i}>{part}</span>
            )
        );
    };

    return (
        <>
            {/* Chat toggle button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: '#C6A85E' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <MessageCircle className="h-6 w-6" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulse ring */}
                {showPulse && !isOpen && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#C6A85E' }} />
                )}
            </motion.button>

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-2xl shadow-2xl border border-border bg-card overflow-hidden flex flex-col"
                        style={{ height: "min(550px, calc(100vh - 140px))" }}
                    >
                        {/* Header */}
                        <div className="px-5 py-4 flex items-center gap-3 border-b border-border shrink-0" style={{ background: 'linear-gradient(135deg, #0B1F3A, #163357)' }}>
                            <div className="h-9 w-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#C6A85E' }}>
                                <Bot className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-bold text-white">Zrotax Assistant</h3>
                                <p className="text-xs text-white/60">Powered by AI • Typically replies instantly</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex gap-2.5 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                                >
                                    {/* Avatar */}
                                    <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${message.role === "assistant"
                                            ? "bg-gradient-to-br from-[#C6A85E] to-[#E8D5A3] text-white"
                                            : "bg-primary text-primary-foreground"
                                        }`}>
                                        {message.role === "assistant" ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                                    </div>

                                    {/* Bubble */}
                                    <div className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${message.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-br-md"
                                            : "bg-muted text-foreground rounded-bl-md"
                                        }`}>
                                        {formatMessage(message.content)}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Loading indicator */}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-2.5"
                                >
                                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#C6A85E] to-[#E8D5A3] flex items-center justify-center shrink-0">
                                        <Bot className="h-3.5 w-3.5 text-white" />
                                    </div>
                                    <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                                        <div className="flex gap-1.5">
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Quick questions (shown only once, at the start) */}
                            {messages.length === 1 && !isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="space-y-2"
                                >
                                    <p className="text-xs text-muted-foreground font-medium px-1">Quick questions:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {QUICK_QUESTIONS.map((q) => (
                                            <button
                                                key={q}
                                                onClick={() => handleQuickQuestion(q)}
                                                className="text-xs px-3 py-1.5 rounded-full border border-border bg-background hover:bg-accent hover:border-ring/30 text-foreground transition-all duration-200"
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="border-t border-border p-3 shrink-0 bg-background/50">
                            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your question..."
                                    disabled={isLoading}
                                    className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-60 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="h-10 w-10 rounded-xl flex items-center justify-center text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95 shrink-0"
                                    style={{ backgroundColor: '#C6A85E' }}
                                >
                                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                                </button>
                            </form>
                            <p className="text-[10px] text-muted-foreground text-center mt-2 opacity-60">
                                Powered by Zrotax AI • Responses may not always be accurate
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
