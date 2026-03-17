import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ role, content }) => {
    const isUser = role === 'user';

    return (
        <div className={`flex gap-4 w-full max-w-3xl ${isUser ? 'flex-row-reverse' : 'flex-row'} px-4`}>
            {/* Avatar */}
            <div className={`
                w-10 h-10 flex items-center justify-center border-2 border-black rounded-lg shrink-0
                ${isUser ? 'bg-black text-white' : 'bg-white text-black'}
            `}>
                {isUser ? <User size={20} /> : <Bot size={20} />}
            </div>

            {/* Message Bubble */}
            <div className={`
                p-4 rounded-2xl border-2 border-black text-left overflow-hidden
                ${isUser
                    ? 'bg-black text-white rounded-tr-none'
                    : 'bg-white text-black rounded-tl-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}
            `}>
                {isUser ? (
                    <p className="whitespace-pre-wrap font-sans">{content}</p>
                ) : (
                    <div className="font-sans leading-relaxed text-black">
                        <ReactMarkdown
                            components={{
                                p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                                strong: ({ children }) => <strong className="font-bold text-black">{children}</strong>,
                                ul: ({ children }) => <ul className="list-disc pl-6 mb-3 space-y-1">{children}</ul>,
                                li: ({ children }) => <li>{children}</li>,
                                h3: ({ children }) => <h3 className="text-lg font-bold mb-2 mt-4">{children}</h3>
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatMessage;