import { ArrowRight } from 'lucide-react';

const LanguageCard = ({ name, icon, color, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`
        relative overflow-hidden group p-6 rounded-2xl border-2 border-black dark:border-white
        ${color} 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
        hover:translate-y-1 hover:shadow-none hover:border-black/80 dark:hover:border-white/80
        transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-4 aspect-square
      `}
        >
            <div className="transform group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="font-bold text-2xl font-mono tracking-tight text-black">{name}</h3>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight size={25} />
            </div>
        </div>
    );
};

export default LanguageCard;
