interface WelcomeBannerProps {
    name: string;
    group: string;
}

const WelcomeBanner = ({ name, group }: WelcomeBannerProps) => {
    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h1 className="text-2xl font-bold text-[#1E1E1E] font-heading">
                Hi {name}! You have joined the Skill Path Group {group}.
            </h1>
            <div className="mt-4 space-y-3 text-[#555555] text-[15px] leading-relaxed">
                <p>You're diving deeper into coding, great choice!</p>
                <p>You've selected the {group} Track, a focused 9-month journey designed to level up your skills.</p>
                <p>
                    In the final months, you'll work on your own project to strengthen your portfolio and showcase what
                    you've learned.
                </p>
                <p>
                    Successfully complete this assignmenr, and you'll be eligible for an internship or traineeship to
                    kickstart your career in tech.
                </p>
                <p className="font-medium text-[#333333]">Good luck, you've got this!</p>
            </div>
        </div>
    );
};

export default WelcomeBanner;
