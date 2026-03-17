import { Send } from 'lucide-react';

const ChatInput = ({ onSend, disabled }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const input = form.elements.message;
        const message = input.value.trim();

        if (message) {
            onSend(message);
            form.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-full flex gap-2">
            <input
                type="text"
                name="message"
                placeholder="Describe your project idea..."
                disabled={disabled}
                className="flex-1 p-4 rounded-xl border-2 border-black bg-white text-black focus:outline-none focus:translate-y-1 focus:shadow-none transition-all placeholder:text-gray-400"
            />
            <button
                type="submit"
                disabled={disabled}
                className="p-4 rounded-xl bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
                <Send size={24} />
            </button>
        </form>
    );
};

export default ChatInput;
