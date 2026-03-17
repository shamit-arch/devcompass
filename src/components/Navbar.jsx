import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';


const Navbar = () => {
    const location = useLocation();
    const isPyramid = location.pathname === '/';
    const isTools = location.pathname === '/tools';
    const isAI = location.pathname === '/ai';



    return (
        <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold font-mono tracking-tight text-gray-900">
                    DevCompass
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        to="/"
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${isPyramid ? 'bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                            }`}
                    >
                        Pyramid
                    </Link>
                    <Link
                        to="/tools"
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${isTools ? 'bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                            }`}
                    >
                        Tools
                    </Link>
                    <Link
                        to="/ai"
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${isAI ? 'bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                            }`}
                    >
                        <span className="sr-only">AI</span>
                        <Bot size={20} />
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
