import { LuClock3 } from 'react-icons/lu';

import { useGetTeacherClassesQuery } from '../../../../redux/apiSlices/teacher/homeSlice';

const UpcomingClasses = () => {
    const { data, isLoading, isFetching } = useGetTeacherClassesQuery({
        page: 1,
        limit: 3,
    });

    const newData =
        data?.data.map((item) => ({
            id: item._id,
            className: item.title,
            date: new Date(item.classDate).toLocaleDateString(),
            time:
                new Date(item.classDate).toDateString() +
                ' ' +
                new Date(item.classDate).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                }),
            room: item.location,
            tags: item.userGroup,
        })) || [];

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 h-full">
            <h2 className="text-lg font-semibold text-gray-600 mb-4 font-heading">Upcoming Class</h2>

            <div className="space-y-4">
                {isLoading || isFetching
                    ? Array.from({ length: 3 }).map((_, index) => <ClassSkeleton key={index} />)
                    : newData.map((item, index) => (
                          <div
                              key={item.id}
                              className={`p-5 rounded-2xl border border-gray-100 transition-all hover:border-green-200 ${
                                  index % 2 === 1 ? 'bg-[#0048FF05]' : 'bg-[#00FF5505]'
                              }`}
                          >
                              <div className="flex justify-between items-start mb-3">
                                  <h3 className="font-medium text-gray-800 text-[16px]">{item.className}</h3>

                                  <div className="flex gap-2">
                                      {item.tags.map((tag, tagIndex) => (
                                          <span
                                              key={tagIndex}
                                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                  tag?.name === 'Skill Path'
                                                      ? 'bg-green-100 text-green-600'
                                                      : 'bg-gray-100 text-gray-500'
                                              }`}
                                          >
                                              {tag?.name}
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

const ClassSkeleton = () => {
    return (
        <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50 animate-pulse">
            <div className="flex justify-between items-start mb-3">
                <div className="h-5 bg-gray-200 rounded w-40"></div>
                <div className="flex gap-2">
                    <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                </div>
            </div>

            <div className="flex justify-between items-center text-sm mt-4">
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
        </div>
    );
};
