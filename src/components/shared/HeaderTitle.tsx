const HeaderTitle = ({ title , className }: { title: string, className?: string }) => {
    return (
        <h1 className={`text-2xl font-semibold text-[#242424] ${className}`}>{title}</h1>
    );
};

export default HeaderTitle;