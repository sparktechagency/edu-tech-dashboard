import { useState } from 'react';
import { LuClock, LuMapPin } from 'react-icons/lu';
import { mockEvents, Event } from '../../../constants/student/events';
import { EventDetailsModal } from '../../../components/modals/student/EventDetailsModal';

export default function StudentEvents() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetails = (event: Event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    return (
        <section className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockEvents.map((event) => (
                    <div
                        key={event.id}
                        onClick={() => handleViewDetails(event)}
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-5 group"
                    >
                        {/* Date Box */}
                        <div
                            style={{ backgroundColor: event.color }}
                            className="w-[80px] h-[80px] shrink-0 rounded-xl flex flex-col items-center justify-center text-white"
                        >
                            <span className="text-[14px] font-bold uppercase opacity-90">{event.month}</span>
                            <span className="text-[28px] font-bold leading-none">{event.day}</span>
                        </div>

                        {/* Event Info */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-[#1E293B] mb-2 group-hover:text-[#3BB77E] transition-colors truncate">
                                {event.title}
                            </h3>
                            <div className="space-y-1.5 text-sm">
                                <div className="flex items-center gap-2 text-[#64748B]">
                                    <LuClock className="text-[#8B5CF6] shrink-0" />
                                    <span className="truncate">
                                        {event.startTime} - {event.endTime}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-[#64748B] font-medium">
                                    <LuMapPin className="text-[#F43F5E] shrink-0" />
                                    <span className="truncate">{event.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Event Details Modal */}
            <EventDetailsModal isOpen={isModalOpen} onCancel={() => setIsModalOpen(false)} event={selectedEvent} />
        </section>
    );
}
