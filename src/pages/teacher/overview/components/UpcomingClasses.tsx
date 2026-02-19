import { LuClock3 } from 'react-icons/lu';
import { upcomingClassesData } from '../../../../constants/teacher-data';

const UpcomingClasses = () => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 h-full">
            <h2 className="text-xl font-semibold text-gray-600 mb-4 font-heading">Upcoming Class</h2>
            <div className="space-y-4">
                {upcomingClassesData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`p-5 rounded-2xl border border-gray-100 transition-all hover:border-green-200 ${
                            index % 2 === 1 ? 'bg-[#F9FCFB]' : 'bg-white'
                        }`}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-gray-800 text-lg">{item.className}</h3>
                            <div className="flex gap-2">
                                {item.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            tag === 'Skill Path'
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-gray-100 text-gray-500'
                                        }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center text-purple-500 font-medium">
                                <LuClock3 className="mr-2" />
                                <span>{item.time}</span>
                            </div>
                            <div className="text-gray-400">{item.room}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingClasses;
