import { studentsData } from '../../../../constants/mentor-coordinator-data';

const StudentDetails = () => {
    return (
        <div className="bg-white p-4 pb-5 rounded-lg shadow-sm mb-6  border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Student Details</h2>
            <div className="space-y-6">
                {studentsData.map((student) => (
                    <div key={student.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img
                                src={student.avatar}
                                alt={student.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">{student.name}</h3>
                                <p className="text-xs text-gray-500">{student.email}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-semibold text-gray-600">Group</p>
                            <p className="text-xs text-green-500">{student.group}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-semibold text-gray-600">Track</p>
                            <p className="text-xs text-blue-500">{student.track}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentDetails;
