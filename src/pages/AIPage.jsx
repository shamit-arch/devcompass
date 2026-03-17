import { useState, useRef, useEffect } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import { Bot, Sparkles, Trash2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const AIPage = () => {
    // 1. Initialize state from sessionStorage so the chat survives page navigation
    const [messages, setMessages] = useState(() => {
        const savedChat = sessionStorage.getItem('devcompass_ai_chat');
        return savedChat ? JSON.parse(savedChat) : [];
    });

    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // 2. Save to sessionStorage every time messages change
    useEffect(() => {
        sessionStorage.setItem('devcompass_ai_chat', JSON.stringify(messages));
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const suggestedPrompts = [
        "I want to build a personal portfolio website.",
        "What's the best language for calculating derivatives and integrals?",
        "I want to make a 2D platformer game."
    ];

    const handleClearChat = () => {
        setMessages([]);
        sessionStorage.removeItem('devcompass_ai_chat');
    };

    const handleSend = async (text) => {
        const userMessage = { role: 'user', content: text };
        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        try {
            const formattedHistory = messages.map((msg) => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            }));

            formattedHistory.push({ role: 'user', parts: [{ text }] });

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: formattedHistory,
                config: {
                    systemInstruction: "You are the AI Project Advisor for 'DevCompass', a guidebook for new aspiring developers. When a user describes a project they want to build, recommend the best programming languages, frameworks, and tools. Format your response cleanly using bullet points. Be encouraging, concise, and sound like a senior developer mentoring a junior.",
                }
            });

            const aiResponse = {
                role: 'assistant',
                content: response.text
            };
            setMessages((prev) => [...prev, aiResponse]);

        } catch (error) {
            console.error("Error communicating with Gemini:", error);
            setMessages((prev) => [...prev, {
                role: 'assistant',
                content: "Oops! My servers are currently taking a nap. Please check your API key or internet connection and try again."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-theme(spacing.32))] max-w-4xl mx-auto w-full px-4">
            {/* Header */}
            <div className="text-center py-6 relative">
                <h1 className="text-4xl font-bold font-mono tracking-tighter flex items-center justify-center gap-3">
                    <Sparkles className="text-yellow-500" />
                    AI Advisor
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2 font-sans">
                    Describe your project and get personalized recommendations.
                </p>

                {/* Clear Chat Button (Only shows if there are messages) */}
                {messages.length > 0 && (
                    <button
                        onClick={handleClearChat}
                        className="absolute right-0 top-8 flex items-center gap-2 px-3 py-2 bg-red-100 border-2 border-black rounded-lg text-black text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        <Trash2 size={16} />
                        Clear
                    </button>
                )}
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto py-6 space-y-6 outline-black outline-3 rounded-lg p-2">
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-6">
                        <Bot size={64} className="opacity-20 text-black" />
                        <p className="font-mono text-black text-lg">Start by describing your project idea...</p>

                        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mt-4">
                            {suggestedPrompts.map((prompt, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSend(prompt)}
                                    className="px-4 py-2 bg-white border-2 border-black rounded-xl text-black text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <ChatMessage role={msg.role} content={msg.content} />
                        </div>
                    ))
                )}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white text-black p-4 rounded-2xl rounded-tl-none border-2 border-black animate-pulse font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            Thinking...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="py-6 border-t border-black w-full flex justify-center">
                <div className='w-full'>
                    <ChatInput onSend={handleSend} disabled={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default AIPage;