import { useState } from 'react';
import ToolCard from '../components/ToolCard';
import { Monitor, Phone, Gamepad2, Brain, Server, Box, Smartphone } from 'lucide-react';

const DevelopmentTools = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        { name: 'Web Development', icon: <Monitor size={18} /> },
        { name: 'Mobile Development', icon: <Smartphone size={18} /> },
        { name: 'Game Development', icon: <Gamepad2 size={18} /> },
        { name: 'AI / Machine Learning', icon: <Brain size={18} /> },
        { name: 'DevOps', icon: <Server size={18} /> },
    ];

    // Organize tools by type (Languages, Frameworks, etc.) but also tag them with domains
    const allTools = {
        Languages: [
            { name: 'JavaScript', domains: ['Web Development', 'Mobile Development', 'Game Development'], url:'https://www.javascript.com/' },
            { name: 'TypeScript', domains: ['Web Development', 'Mobile Development'],url:'https://www.typescriptlang.org/' },
            { name: 'Python', domains: ['Web Development', 'AI / Machine Learning', 'DevOps'],url:'https://www.python.org/' },
            { name: 'Ruby', domains: ['Web Development'],url:'https://www.ruby-lang.org/' },
            { name: 'PHP', domains: ['Web Development'],url:'https://www.php.net/' },
            { name: 'C#', domains: ['Game Development', 'Mobile Development', 'Web Development'],url:'https://learn.microsoft.com/en-us/dotnet/csharp/' },
            { name: 'C++', domains: ['Game Development', 'AI / Machine Learning'],url:'https://isocpp.org/' },
        ],
        Frameworks: [
            { name: 'React', domains: ['Web Development', 'Mobile Development'],url:'https://reactjs.org/' },
            { name: 'Vue', domains: ['Web Development'],url:'https://vuejs.org/' },
            { name: 'Angular', domains: ['Web Development'] ,url:'https://angular.io/'},
            { name: 'Next.js', domains: ['Web Development'] ,url:'https://nextjs.org/'},
            { name: 'Django', domains: ['Web Development'],url:'https://www.djangoproject.com/' },
            { name: 'Rails', domains: ['Web Development'],url:'https://rubyonrails.org/' },
            { name: 'Unity', domains: ['Game Development'],url:'https://unity.com/' },
            { name: 'TensorFlow', domains: ['AI / Machine Learning'],url:'https://www.tensorflow.org/' },
        ],
        IDEs: [
            { name: 'VS Code', domains: ['Web Development', 'Mobile Development', 'Game Development', 'AI / Machine Learning', 'DevOps'],url:'https://code.visualstudio.com/' },
            { name: 'WebStorm', domains: ['Web Development'],url:'https://www.jetbrains.com/webstorm/' },
            { name: 'PyCharm', domains: ['AI / Machine Learning', 'Web Development'],url:'https://www.jetbrains.com/pycharm/' },
            { name: 'Visual Studio', domains: ['Game Development', 'Mobile Development'],url:'https://visualstudio.microsoft.com/' },
        ],
        Databases: [
            { name: 'PostgreSQL', domains: ['Web Development', 'DevOps'],url:'https://www.postgresql.org/' },
            { name: 'MongoDB', domains: ['Web Development'],url:'https://www.mongodb.com/' },
            { name: 'Redis', domains: ['Web Development', 'DevOps'],url:'https://redis.io/' },
        ],
    };

    const filteredSections = Object.entries(allTools).reduce((acc, [section, items]) => {
        const filteredItems = activeCategory === 'All'
            ? items
            : items.filter(item => item.domains.includes(activeCategory));

        if (filteredItems.length > 0) {
            acc[section] = filteredItems;
        }
        return acc;
    }, {});

    return (
        <div className="flex flex-col items-center min-h-[calc(100vh-theme(spacing.32))] gap-12 py-12 text-center">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter ">
                    Development Tools
                </h1>
                <p className="text-lg text-gray-600  max-w-lg mx-auto font-sans">
                    Explore tools and technologies by development field.
                </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl px-4">
                <button
                    onClick={() => setActiveCategory('All')}
                    className={`px-6 py-3 rounded-xl border-2 border-black font-bold text-sm md:text-base flex items-center gap-2 transition-all
             ${activeCategory === 'All' ? 'bg-green-200 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-y-0.5' : 'bg-white text-gray-500 shadow-none hover:text-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'}`}
                >
                    <Box size={18} />
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`px-6 py-3 rounded-xl border-2 border-black font-bold text-sm md:text-base flex items-center gap-2 transition-all
              ${activeCategory === cat.name ? 'bg-blue-200 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-y-0.5' : 'bg-white text-gray-500 shadow-none hover:text-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'}`}
                    >
                        {cat.icon}
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Tool Sections */}
            <div className="w-full max-w-5xl space-y-8 px-4 pb-12">
                {Object.keys(filteredSections).length > 0 ? (
                    Object.entries(filteredSections).map(([section, items]) => (
                        <div key={section} className="border-2 border-black  rounded-3xl p-8 bg-white  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]  text-left">
                            <h2 className="text-3xl font-bold mb-6 font-mono tracking-tight text-black">{section}</h2>
                            <div className="flex flex-wrap gap-3">
                                {items.map((item) => (
                                    <ToolCard key={item.name} name={item.name} url={item.url} />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-12 text-gray-400 font-mono">No tools found for this category.</div>
                )}
            </div>
        </div>
    );
};

export default DevelopmentTools;
