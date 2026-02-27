import { Card } from 'antd';
import { FileText } from 'lucide-react';

interface AssignmentItem {
    title: string;
    type: string;
    size: string;
    category?: string;
    status: string;
}

interface ActiveAssignmentsProps {
    data: AssignmentItem[];
}

const ActiveAssignments = ({ data }: ActiveAssignmentsProps) => {
    return (
        <Card
            className="shadow-sm border-none rounded-2xl overflow-hidden"
            title={<span className="text-xl font-bold">Active Assignments</span>}
        >
            <div className="space-y-4">
                {data.map((assignment, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                <FileText className="text-green-500 w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">{assignment.title}</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                                    {assignment.type} • {assignment.size}{' '}
                                    {assignment.category && `• ${assignment.category}`}
                                </p>
                            </div>
                        </div>
                        <span
                            className={`text-sm font-bold ${assignment.status === 'Pending' ? 'text-amber-500' : 'text-green-500'}`}
                        >
                            {assignment.status==='Pending'}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ActiveAssignments;
