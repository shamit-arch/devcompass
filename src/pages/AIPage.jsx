import { useState, useRef, useEffect } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import { Bot, Sparkles } from 'lucide-react';

const AIPage = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = (text) => {
        const userMessage = { role: 'user', content: text };
        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = {
                role: 'assistant',
                content: `I'm just a demo "AI Advisor" for now, but I see you're interested in: "${text}".\n\nBased on that, I'd recommend checking out the 'Tools' page for relevant frameworks!`
            };
            setMessages((prev) => [...prev, aiResponse]);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-theme(spacing.32))] max-w-4xl mx-auto w-full px-4">
            {/* Header */}
            {/* Header */}
            <div className="text-center py-6">
                <h1 className="text-4xl font-bold font-mono tracking-tighter flex items-center justify-center gap-3">
                    <Sparkles className="text-yellow-500" />
                    AI Advisor
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2 font-sans">
                    Describe your project and get personalized recommendations.
                </p>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto py-6 space-y-6 outline-black outline-3 rounded-lg">
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
                        <Bot size={64} className="opacity-20" />
                        <p>Start by describing your project idea...</p>
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
                        <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none animate-pulse">
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
