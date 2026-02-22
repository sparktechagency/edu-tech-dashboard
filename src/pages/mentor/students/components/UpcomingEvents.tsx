import { Card } from 'antd';
import { Clock } from 'lucide-react';

interface EventItem {
    date: string;
    title: string;
    time: string;
    location: string;
    type: string;
}

interface UpcomingEventsProps {
    data: EventItem[];
}

const UpcomingEvents = ({ data }: UpcomingEventsProps) => {
    return (
        <Card
            className="shadow-sm border-none rounded-2xl overflow-hidden"
            title={<span className="text-xl font-bold">Upcoming Events</span>}
        >
            <div className="space-y-4">
                {data.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div
                            className={`flex-shrink-0 w-14 h-14 rounded-lg flex flex-col items-center justify-center ${idx === 0 ? 'bg-purple-600' : idx === 1 ? 'bg-emerald-500' : 'bg-blue-600'} text-white`}
                        >
                            <span className="text-[10px] font-bold uppercase leading-none">
                                {event.date.split(' ')[0]}
                            </span>
                            <span className="text-xl font-black leading-none">{event.date.split(' ')[1]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-gray-800 text-sm truncate pr-2">{event.title}</h4>
                                <span className="text-purple-600 text-[10px] font-bold uppercase flex-shrink-0">
                                    {event.type}
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center text-gray-400 text-[11px] font-medium">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {event.time}
                                </div>
                                <div className="text-gray-400 text-[11px] font-medium">{event.location}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default UpcomingEvents;
