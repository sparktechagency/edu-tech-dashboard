const Spinner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen  gap-4 w-full bg-transparent rounded-xl">
            {/* Logo with scale animation */}
            <div className="scale-pulse">
                {/* Logo */}
                <div className="flex items-center w-full ">
                    <img src={'/Logo2.png'} alt="logo" className="h-10 w-fit object-contain" />
                </div>
            </div>

            {/* Custom animation style */}
            <style>{`
                @keyframes scalePulse {
                    0%,
                    100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                }

                .scale-pulse {
                    animation: scalePulse 1.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Spinner;
