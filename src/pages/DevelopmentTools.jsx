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

    // Massively expanded tools list categorized by type and tagged with domains
    const allTools = {
        Languages: [
            { name: 'JavaScript', domains: ['Web Development', 'Mobile Development', 'Game Development'], url: 'https://www.javascript.com/' },
            { name: 'TypeScript', domains: ['Web Development', 'Mobile Development'], url: 'https://www.typescriptlang.org/' },
            { name: 'Python', domains: ['Web Development', 'AI / Machine Learning', 'DevOps'], url: 'https://www.python.org/' },
            { name: 'Go', domains: ['Web Development', 'DevOps'], url: 'https://go.dev/' },
            { name: 'Rust', domains: ['Web Development', 'DevOps', 'Game Development'], url: 'https://www.rust-lang.org/' },
            { name: 'Ruby', domains: ['Web Development'], url: 'https://www.ruby-lang.org/' },
            { name: 'PHP', domains: ['Web Development'], url: 'https://www.php.net/' },
            { name: 'C#', domains: ['Game Development', 'Mobile Development', 'Web Development'], url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
            { name: 'C++', domains: ['Game Development', 'AI / Machine Learning'], url: 'https://isocpp.org/' },
            { name: 'Swift', domains: ['Mobile Development'], url: 'https://developer.apple.com/swift/' },
            { name: 'Kotlin', domains: ['Mobile Development'], url: 'https://kotlinlang.org/' },
        ],
        Frameworks: [
            { name: 'React', domains: ['Web Development', 'Mobile Development'], url: 'https://reactjs.org/' },
            { name: 'Next.js', domains: ['Web Development'], url: 'https://nextjs.org/' },
            { name: 'Vue.js', domains: ['Web Development'], url: 'https://vuejs.org/' },
            { name: 'Svelte', domains: ['Web Development'], url: 'https://svelte.dev/' },
            { name: 'Angular', domains: ['Web Development'], url: 'https://angular.io/' },
            { name: 'Tailwind CSS', domains: ['Web Development'], url: 'https://tailwindcss.com/' },
            { name: 'Django', domains: ['Web Development'], url: 'https://www.djangoproject.com/' },
            { name: 'FastAPI', domains: ['Web Development', 'AI / Machine Learning'], url: 'https://fastapi.tiangolo.com/' },
            { name: 'React Native', domains: ['Mobile Development'], url: 'https://reactnative.dev/' },
            { name: 'Flutter', domains: ['Mobile Development'], url: 'https://flutter.dev/' },
            { name: 'Unity', domains: ['Game Development'], url: 'https://unity.com/' },
            { name: 'Unreal Engine', domains: ['Game Development'], url: 'https://www.unrealengine.com/' },
            { name: 'Godot', domains: ['Game Development'], url: 'https://godotengine.org/' },
            { name: 'TensorFlow', domains: ['AI / Machine Learning'], url: 'https://www.tensorflow.org/' },
            { name: 'PyTorch', domains: ['AI / Machine Learning'], url: 'https://pytorch.org/' },
            { name: 'LangChain', domains: ['AI / Machine Learning'], url: 'https://www.langchain.com/' },
        ],
        IDEs_and_Editors: [
            { name: 'VS Code', domains: ['Web Development', 'Mobile Development', 'Game Development', 'AI / Machine Learning', 'DevOps'], url: 'https://code.visualstudio.com/' },
            { name: 'IntelliJ IDEA', domains: ['Web Development', 'Mobile Development'], url: 'https://www.jetbrains.com/idea/' },
            { name: 'WebStorm', domains: ['Web Development'], url: 'https://www.jetbrains.com/webstorm/' },
            { name: 'PyCharm', domains: ['AI / Machine Learning', 'Web Development'], url: 'https://www.jetbrains.com/pycharm/' },
            { name: 'Visual Studio', domains: ['Game Development', 'Mobile Development', 'Web Development'], url: 'https://visualstudio.microsoft.com/' },
            { name: 'Android Studio', domains: ['Mobile Development'], url: 'https://developer.android.com/studio' },
            { name: 'Xcode', domains: ['Mobile Development'], url: 'https://developer.apple.com/xcode/' },
            { name: 'Jupyter Notebook', domains: ['AI / Machine Learning'], url: 'https://jupyter.org/' },
        ],
        Databases: [
            { name: 'PostgreSQL', domains: ['Web Development', 'DevOps', 'AI / Machine Learning'], url: 'https://www.postgresql.org/' },
            { name: 'MySQL', domains: ['Web Development'], url: 'https://www.mysql.com/' },
            { name: 'MongoDB', domains: ['Web Development'], url: 'https://www.mongodb.com/' },
            { name: 'Redis', domains: ['Web Development', 'DevOps'], url: 'https://redis.io/' },
            { name: 'Supabase', domains: ['Web Development', 'Mobile Development'], url: 'https://supabase.com/' },
            { name: 'Firebase', domains: ['Web Development', 'Mobile Development', 'Game Development'], url: 'https://firebase.google.com/' },
        ],
        Version_Control: [
            { name: 'Git', domains: ['Web Development', 'Mobile Development', 'Game Development', 'AI / Machine Learning', 'DevOps'], url: 'https://git-scm.com/' },
            { name: 'GitHub', domains: ['Web Development', 'Mobile Development', 'Game Development', 'AI / Machine Learning', 'DevOps'], url: 'https://github.com/' },
            { name: 'GitLab', domains: ['Web Development', 'DevOps'], url: 'https://about.gitlab.com/' },
        ],
        Cloud_and_DevOps: [
            { name: 'Docker', domains: ['Web Development', 'DevOps', 'AI / Machine Learning'], url: 'https://www.docker.com/' },
            { name: 'Kubernetes', domains: ['DevOps'], url: 'https://kubernetes.io/' },
            { name: 'AWS', domains: ['Web Development', 'DevOps', 'AI / Machine Learning'], url: 'https://aws.amazon.com/' },
            { name: 'Vercel', domains: ['Web Development'], url: 'https://vercel.com/' },
            { name: 'GitHub Actions', domains: ['DevOps', 'Web Development'], url: 'https://github.com/features/actions' },
        ],
        API_and_Testing: [
            { name: 'Postman', domains: ['Web Development', 'Mobile Development'], url: 'https://www.postman.com/' },
            { name: 'Insomnia', domains: ['Web Development'], url: 'https://insomnia.rest/' },
            { name: 'Jest', domains: ['Web Development'], url: 'https://jestjs.io/' },
            { name: 'Cypress', domains: ['Web Development'], url: 'https://www.cypress.io/' },
        ]
    };

    const filteredSections = Object.entries(allTools).reduce((acc, [section, items]) => {
        const filteredItems = activeCategory === 'All'
            ? items
            : items.filter(item => item.domains.includes(activeCategory));

        if (filteredItems.length > 0) {
            // Replace underscores with spaces for cleaner section titles
            acc[section.replace(/_/g, ' ')] = filteredItems;
        }
        return acc;
    }, {});

    return (
        <div className="flex flex-col items-center min-h-[calc(100vh-theme(spacing.32))] gap-12 py-12 text-center">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter">
                    Development Tools
                </h1>
                <p className="text-lg text-gray-600 max-w-lg mx-auto font-sans">
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
                        <div key={section} className="border-2 border-black rounded-3xl p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left">
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