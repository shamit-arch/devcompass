const ToolCard = ({ name, category, url }) => {
    return (
        <a target="_blank" href={url || '#'} rel="noopener noreferrer">
        <div className="px-4 py-2 border-2 border-black rounded-lg font-medium bg-white text-gray-600 hover:text-black 
            transition-all duration-200 cursor-pointer
            hover:-translate-x-1 hover:-translate-y-1 
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            active:translate-x-0 active:translate-y-0 active:shadow-none">
            {name}
        </div>
        </a>
    );
};

export default ToolCard;
