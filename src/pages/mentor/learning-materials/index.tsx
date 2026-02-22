import { useState } from 'react';
import { Table, Button } from 'antd';
import { Eye, Trash2, Plus } from 'lucide-react';
import AddResourceModal from '../../../components/modals/mentor/learning-materials/AddResourceModal';
import ResourceDetailsModal from '../../../components/modals/mentor/learning-materials/ResourceDetailsModal';
import RemoveResourceModal from '../../../components/modals/mentor/learning-materials/RemoveResourceModal';

const LearningMaterials = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState<any>(null);

    const dataSource = [
        {
            key: '1',
            title: 'Basic Computer',
            type: 'PDF',
            category: 'Learning Materials',
            dateAdded: '10-01-2026',
            link: 'https://example.com/basic-computer',
        },
        {
            key: '2',
            title: 'Science Lab Procedures',
            type: 'DOCX',
            category: 'Training',
            dateAdded: '14-01-2026',
            link: 'https://example.com/science-lab',
        },
        {
            key: '3',
            title: 'Algebra Study Guide',
            type: 'DOCX',
            category: 'Learning Materials',
            dateAdded: '26-01-2026',
            link: 'https://example.com/algebra',
        },
        {
            key: '4',
            title: 'Essay Writing Template',
            type: 'PDF',
            category: 'Training',
            dateAdded: '10-01-2026',
            link: 'https://example.com/essay',
        },
        {
            key: '5',
            title: '20-01-2026',
            type: 'DOCX',
            category: 'Learning Materials',
            dateAdded: '10-01-2026',
            link: 'https://example.com/res5',
        },
        {
            key: '6',
            title: '20-01-2026',
            type: 'PDF',
            category: 'Training',
            dateAdded: '10-01-2026',
            link: 'https://example.com/res6',
        },
        {
            key: '7',
            title: '20-01-2026',
            type: 'PDF',
            category: 'Learning Materials',
            dateAdded: '10-01-2026',
            link: 'https://example.com/res7',
        },
    ];

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text: string) => <span className="font-medium text-gray-500">{text}</span>,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (text: string) => <span className="text-gray-500">{text}</span>,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (text: string) => <span className="text-gray-500">{text}</span>,
        },
        {
            title: 'Date added',
            dataIndex: 'dateAdded',
            key: 'dateAdded',
            render: (text: string) => <span className="text-gray-500">{text}</span>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <div className="flex gap-2">
                    <Button
                        icon={<Eye size={16} />}
                        onClick={() => {
                            setSelectedResource(record);
                            setIsDetailsModalOpen(true);
                        }}
                        className="flex items-center gap-2 text-gray-400 hover:text-primary border-gray-100 bg-gray-50/30"
                    >
                        View
                    </Button>
                    <Button
                        danger
                        icon={<Trash2 size={16} />}
                        onClick={() => {
                            setSelectedResource(record);
                            setIsRemoveModalOpen(true);
                        }}
                        className="flex items-center gap-2 border-[#FF4D4F] text-[#FF4D4F] bg-white hover:bg-red-50"
                    >
                        Remove
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <section className="">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Mentor Resources</h1>
                    <p className="text-gray-500 mt-1">Access curriculum guides, roadmaps, and templates.</p>
                </div>
                <Button
                    type="default"
                    icon={<Plus size={18} className="text-gray-400" />}
                    onClick={() => setIsAddModalOpen(true)}
                    className="h-11 px-4 rounded-xl flex items-center gap-2 text-gray-500 font-medium border-gray-200"
                >
                    Add Resources
                </Button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <Table dataSource={dataSource} columns={columns} pagination={false} className="custom-table" />
            </div>

            <AddResourceModal open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)} />

            <ResourceDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                resource={selectedResource}
            />

            <RemoveResourceModal
                open={isRemoveModalOpen}
                onCancel={() => setIsRemoveModalOpen(false)}
                onRemove={() => {
                    console.log('Removing:', selectedResource?.title);
                    setIsRemoveModalOpen(false);
                }}
                resourceName={selectedResource?.title}
            />
        </section>
    );
};

export default LearningMaterials;
