import { Bot, User } from 'lucide-react';

const ChatMessage = ({ role, content }) => {
    const isUser = role === 'user';

    return (
        <div className={`flex gap-4 w-full max-w-3xl ${isUser ? 'flex-row-reverse' : 'flex-row'} px-4`}>
            <div className={`
        w-10 h-10 rounded-full flex items-center justify-center border border-black border-2 rounded-lg shrink-0
        ${isUser ? 'bg-black text-white' : 'bg-white text-black'}
      `}>
                {isUser ? <User size={20} /> : <Bot size={20} />}
            </div>

            <div className={`
        p-4 rounded-2xl border-2 border-black  text-left
        ${isUser
                    ? 'bg-black text-white rounded-tr-none'
                    : 'bg-white text-black rounded-tl-none tile-shadow'}
      `}>
                <p className="whitespace-pre-wrap font-sans">{content}</p>
            </div>
        </div>
    );
};

export default ChatMessage;
