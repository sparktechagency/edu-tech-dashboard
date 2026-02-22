const WOOPGoals = () => {
    return (
        <div className="rounded-xl border border-gray-100 shadow-sm h-full bg-white p-6">
            <h3 className="text-[22px] font-semibold text-gray-800 pb-4">WOOP Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Wish</h4>
                        <p className="text-gray-400 text-[13px] leading-relaxed italic">
                            WOOP (Wish, Outcome, Obstacle, Plan) is a science-based mental strategy that helps people
                            achieve their goals.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">Obstacle</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Limited portfolio projects and interview anxiety
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">Outcome</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Limited portfolio projects and interview anxiety
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">Plan</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Build 3 substantial projects showcasing different skills and practice mock interviews weekly
                            with peers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WOOPGoals;
