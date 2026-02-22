import { Card, Button } from 'antd';
import { MessageSquare, Eye } from 'lucide-react';

const StudentProfile = () => {
    return (
        <Card className="shadow-sm border-none rounded-2xl ">
            <div className="flex flex-col items-center">
                <div className="relative mb-2">
                    <img
                        src="/user.svg"
                        alt="Student"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-sm object-cover"
                    />
                </div>
                <h2 className="text-[16px] text-center font-semibold text-gray-800 mb-1">Muneeb Ahmad Tahir</h2>
                <p className="text-gray-500  font-medium mb-6">muneeb00@gmail.com</p>

                <div className="flex gap-4 w-full">
                    <Button
                        icon={<MessageSquare className="w-4 h-4 " />}
                        className="flex-1 h-11 rounded-xl flex items-center justify-center border-gray-200 text-gray-600 hover:text-primary transition-colors"
                    >
                        Chat
                    </Button>
                    <Button
                        icon={<Eye className="w-4 h-4" />}
                        className="flex-1 h-11 rounded-xl flex items-center justify-center border-gray-200 text-gray-600 hover:text-primary transition-colors"
                    >
                        View
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default StudentProfile;
