import { LuCheckSquare } from 'react-icons/lu';
import { pendingReviewsData } from '../../../../constants/teacher-data';

const PendingReviews = () => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 h-full">
            <h2 className="text-xl font-semibold text-gray-600 mb-4 font-heading">Pending Reviews</h2>
            <div className="space-y-4">
                {pendingReviewsData.map((review) => (
                    <div
                        key={review.id}
                        className="p-4 rounded-2xl border border-gray-100 flex flex-col space-y-2 transition-all hover:border-green-200"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-gray-800 text-lg">{review.courseName}</h3>
                            <div className="flex -space-x-3">
                                {review.avatars.map((avatar, idx) => (
                                    <img
                                        key={idx}
                                        src={avatar}
                                        alt="student"
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                                {review.tag}
                            </span>
                            <div className="flex items-center text-green-600 font-bold text-sm">
                                <LuCheckSquare className="mr-2 text-lg" />
                                <span>{review.pendingCount} Pending</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PendingReviews;
