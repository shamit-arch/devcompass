import LanguageCard from '../components/LanguageCard';
// Use FontAwesome (Fa) and Tabler Icons (Tb) - much more stable for Vite
import { FaPython, FaJs, FaJava } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { SiC,SiCplusplus } from 'react-icons/si';
// import { DiCsharp } from 'react-icons/di';

const LanguagePyramid = () => {
    const languages = [
        { name: 'Python', icon: <FaPython size={48} />, color: 'bg-[#FDE047]' },
        { name: 'JavaScript', icon: <FaJs size={48} />, color: 'bg-[#FDBA74]' },
        { name: 'Java', icon: <FaJava size={48} />, color: 'bg-[#F9A8D4]' },
        { name: 'C Sharp', icon: <TbBrandCSharp size={48} />, color: 'bg-[#D8B4FE]' },
        { name: 'C', icon: <SiC size={48} />, color: 'bg-[#93C5FD]' },
        { name: 'C++', icon: <SiCplusplus size={48} />, color: 'bg-[#86EFAC]' },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-16 py-12 text-center">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter">
                    Languages
                </h1>
                <p className="text-lg text-gray-600 max-w-lg mx-auto font-sans">
                    Explore programming languages by abstraction level.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4">
                {languages.map((lang) => (
                    <LanguageCard
                        key={lang.name}
                        name={lang.name}
                        icon={lang.icon}
                        color={lang.color}
                        onClick={() => console.log(`Clicked ${lang.name}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default LanguagePyramid;