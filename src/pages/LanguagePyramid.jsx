import { useState } from 'react';
import LanguageCard from '../components/LanguageCard';

import {
    FaPython, FaJs, FaJava, FaHtml5, FaCss3Alt, FaPhp, FaSwift, FaReact,
    FaRust, FaDatabase, FaTerminal, FaCode, FaGamepad, FaMicrochip, FaRProject, FaUnity
} from 'react-icons/fa';
import {
    TbBrandCSharp, TbBrandTypescript, TbBrandGolang, TbBrandKotlin,
    TbBrandFlutter, TbBrandGraphql, TbMathFunction
} from 'react-icons/tb';
import { SiC, SiCplusplus } from 'react-icons/si';
import {
    SiRuby, SiElixir, SiDart, SiScala, SiZig, SiNim,
    SiHaskell, SiClojure, SiErlang, SiFsharp, SiOcaml, SiFortran, SiJulia, SiArduino, SiLua, SiUnrealengine, SiGodotengine,
    SiGnubash, SiPerl, SiMysql, SiMongodb, SiPostgresql
} from 'react-icons/si';

const LanguagePyramid = () => {
    // 1. Add state to track the search input
    const [searchQuery, setSearchQuery] = useState('');

    const languages = [
        { name: 'JavaScript', icon: <FaJs size={48} />, color: 'bg-[#FDBA74]' },
        { name: 'TypeScript', icon: <TbBrandTypescript size={48} />, color: 'bg-[#93C5FD]' },
        { name: 'HTML5', icon: <FaHtml5 size={48} />, color: 'bg-[#FCA5A5]' },
        { name: 'CSS3', icon: <FaCss3Alt size={48} />, color: 'bg-[#93C5FD]' },
        { name: 'Python', icon: <FaPython size={48} />, color: 'bg-[#FDE047]' },
        { name: 'PHP', icon: <FaPhp size={48} />, color: 'bg-[#C4B5FD]' },
        { name: 'Ruby', icon: <SiRuby size={48} />, color: 'bg-[#FDA4AF]' },
        { name: 'Go', icon: <TbBrandGolang size={48} />, color: 'bg-[#6EE7B7]' },
        { name: 'Java', icon: <FaJava size={48} />, color: 'bg-[#F9A8D4]' },
        { name: 'C Sharp', icon: <TbBrandCSharp size={48} />, color: 'bg-[#D8B4FE]' },
        { name: 'Elixir', icon: <SiElixir size={48} />, color: 'bg-[#C4B5FD]' },
        { name: 'Dart', icon: <SiDart size={48} />, color: 'bg-[#93C5FD]' },

        // Mobile App Development
        { name: 'Swift', icon: <FaSwift size={48} />, color: 'bg-[#FCA5A5]' },
        { name: 'Kotlin', icon: <TbBrandKotlin size={48} />, color: 'bg-[#D8B4FE]' },
        { name: 'React Native', icon: <FaReact size={48} />, color: 'bg-[#67E8F9]' },
        { name: 'Flutter', icon: <TbBrandFlutter size={48} />, color: 'bg-[#93C5FD]' },

        // Data Science, Math & AI
        { name: 'R', icon: <FaRProject size={48} />, color: 'bg-[#93C5FD]' },
        { name: 'Julia', icon: <SiJulia size={48} />, color: 'bg-[#D8B4FE]' },
        { name: 'Scala', icon: <SiScala size={48} />, color: 'bg-[#FCA5A5]' },
        { name: 'MATLAB', icon: <TbMathFunction size={48} />, color: 'bg-[#FDBA74]' },

        // Systems & Low-Level
        { name: 'C', icon: <SiC size={48} />, color: 'bg-[#93C5FD]' },
        { name: 'C++', icon: <SiCplusplus size={48} />, color: 'bg-[#86EFAC]' },
        { name: 'Rust', icon: <FaRust size={48} />, color: 'bg-[#FDBA74]' },
        { name: 'Assembly', icon: <FaMicrochip size={48} />, color: 'bg-[#9CA3AF]' },
        { name: 'Zig', icon: <SiZig size={48} />, color: 'bg-[#FDE047]' },
        { name: 'Nim', icon: <SiNim size={48} />, color: 'bg-[#FDE047]' },
        { name: 'Arduino', icon: <SiArduino size={48} />, color: 'bg-[#93C5FD]' },

        // Game Development
        { name: 'Lua', icon: <SiLua size={48} />, color: 'bg-[#93C5FD]' },
        { name: 'Unity', icon: <FaUnity size={48} />, color: 'bg-[#D1D5DB]' },
        { name: 'Unreal', icon: <SiUnrealengine size={48} />, color: 'bg-[#9CA3AF]' },
        { name: 'Godot', icon: <SiGodotengine size={48} />, color: 'bg-[#93C5FD]' },

        // Scripting & DevOps
        { name: 'Bash', icon: <SiGnubash size={48} />, color: 'bg-[#A7F3D0]' },
        { name: 'PowerShell', icon: <FaTerminal size={48} />, color: 'bg-[#93C5FD]' },
        { name: 'Perl', icon: <SiPerl size={48} />, color: 'bg-[#93C5FD]' },

        // Functional & Academic
        { name: 'Haskell', icon: <SiHaskell size={48} />, color: 'bg-[#C4B5FD]' },
        { name: 'Clojure', icon: <SiClojure size={48} />, color: 'bg-[#86EFAC]' },
        { name: 'Erlang', icon: <SiErlang size={48} />, color: 'bg-[#FDA4AF]' },
        { name: 'F#', icon: <SiFsharp size={48} />, color: 'bg-[#93C5FD]' },
        { name: 'OCaml', icon: <SiOcaml size={48} />, color: 'bg-[#FDBA74]' },

        // Databases & Query Languages
        { name: 'SQL', icon: <FaDatabase size={48} />, color: 'bg-[#FDBA74]' },
        { name: 'GraphQL', icon: <TbBrandGraphql size={48} />, color: 'bg-[#F9A8D4]' },
        { name: 'MySQL', icon: <SiMysql size={48} />, color: 'bg-[#93C5FD]' },
        { name: 'MongoDB', icon: <SiMongodb size={48} />, color: 'bg-[#86EFAC]' },
        { name: 'PostgreSQL', icon: <SiPostgresql size={48} />, color: 'bg-[#93C5FD]' },

        // Legacy & Historical
        { name: 'COBOL', icon: <FaTerminal size={48} />, color: 'bg-[#9CA3AF]' },
        { name: 'Fortran', icon: <SiFortran size={48} />, color: 'bg-[#C4B5FD]' },
        { name: 'Pascal', icon: <FaCode size={48} />, color: 'bg-[#FCA5A5]' },
        { name: 'Ada', icon: <FaTerminal size={48} />, color: 'bg-[#86EFAC]' }
    ];

    // 2. Filter the languages based on the search query
    const filteredLanguages = languages.filter((lang) =>
        lang.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 py-12 text-center">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter">
                    Languages
                </h1>
                <p className="text-lg text-gray-600 max-w-lg mx-auto font-sans">
                    Explore programming languages by abstraction level.
                </p>
            </div>

            {/* 3. Add the Search Bar UI */}
            <div className="w-full max-w-md px-4">
                <input
                    type="text"
                    placeholder="Search for a language..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all shadow-sm"
                />
            </div>

            {/* 4. Map over filteredLanguages instead of languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4">
                {filteredLanguages.length > 0 ? (
                    filteredLanguages.map((lang) => (
                        <LanguageCard
                            key={lang.name}
                            name={lang.name}
                            icon={lang.icon}
                            color={lang.color}
                            onClick={() => console.log(`Clicked ${lang.name}`)}
                        />
                    ))
                ) : (
                    // Optional: Show a message if no languages match the search
                    <div className="col-span-full py-10 text-gray-500 text-lg">
                        No languages found matching "{searchQuery}"
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguagePyramid;