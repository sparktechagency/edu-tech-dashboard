import { useState, useMemo } from 'react';
import { Button, Input, Typography, ConfigProvider } from 'antd';
import { SearchOutlined, FilterOutlined, PlusOutlined } from '@ant-design/icons';

// Modular Components
import CreateAssignmentModal from './components/CreateAssignmentModal';
import AssignmentDetailsModal from './components/AssignmentDetailsModal';
import SubmissionReviewModal from './components/SubmissionReviewModal';
import AssignmentTable from './components/AssignmentTable';
import SubmissionTable from './components/SubmissionTable';
import { initialAssignments, initialSubmissions } from '../../../constants/assignmentData';
import HeaderTitle from '../../../components/shared/HeaderTitle';

const { Title } = Typography;

function Assignment() {
    const [activeTab, setActiveTab] = useState<'assignment' | 'submission'>('assignment');
    const [assignments, setAssignments] = useState(initialAssignments);
    const [submissions, setSubmissions] = useState(initialSubmissions);
    const [searchText, setSearchText] = useState('');

    // Modal States
    const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    // Selection States
    const [selectedAssignment, setSelectedAssignment] = useState<any>(null);
    const [selectedSubmission, setSelectedSubmission] = useState<any>(null);

    // --- Derived State (Search/Filter Logic) ---

    const filteredAssignments = useMemo(() => {
        return assignments.filter(
            (a) =>
                a.title.toLowerCase().includes(searchText.toLowerCase()) ||
                a.description.toLowerCase().includes(searchText.toLowerCase()),
        );
    }, [assignments, searchText]);

    const filteredSubmissions = useMemo(() => {
        return submissions.filter(
            (s) =>
                s.name.toLowerCase().includes(searchText.toLowerCase()) ||
                s.email.toLowerCase().includes(searchText.toLowerCase()),
        );
    }, [submissions, searchText]);

    // --- Logic Handlers ---

    const handleCreateEditFinish = (values: any) => {
        if (modalMode === 'edit') {
            setAssignments((prev) => prev.map((a) => (a.key === values.key ? { ...a, ...values } : a)));
        } else {
            const newAssignment = {
                ...values,
                key: String(Date.now()),
                status: 'Active',
            };
            setAssignments((prev) => [newAssignment, ...prev]);
        }
        setIsCreateModalOpen(false);
    };

    const handleDelete = (key: string) => {
        setAssignments((prev) => prev.filter((a) => a.key !== key));
    };

    const handleReviewFinish = (key: string, grade: string) => {
        setSubmissions((prev) =>
            prev.map((s) => (s.key === key ? { ...s, grade: `${grade}/100`, status: 'Submitted' } : s)),
        );
    };

    return (
        <div className=" min-h-screen">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"> 
                <HeaderTitle title="Assignment" />
            
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        prefix={<SearchOutlined className="text-gray-400" />}
                        placeholder={activeTab === 'assignment' ? 'Search assignment' : 'Search student'}
                        className="w-full md:w-64 h-10 rounded-lg bg-white border-gray-100 shadow-sm"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                        icon={<FilterOutlined />}
                        className="h-10 px-4 rounded-lg flex items-center gap-2 text-gray-600 bg-white border-gray-100 shadow-sm"
                    >
                        Filter
                    </Button>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="h-10 px-5 rounded-lg bg-[#21C35D] hover:bg-[#1da950] border-none font-bold flex items-center gap-2"
                        onClick={() => {
                            setModalMode('create');
                            setSelectedAssignment(null);
                            setIsCreateModalOpen(true);
                        }}
                    >
                        Create Assignment
                    </Button>
                </div>
            </div>

            {/* Custom Tabs */}
            <div className="flex items-center gap-3 mb-8">
                <button
                    onClick={() => {
                        setActiveTab('assignment');
                        setSearchText('');
                    }}
                    className={`h-10 px-6 rounded-lg font-bold transition-all ${
                        activeTab === 'assignment'
                            ? 'bg-[#3182CE] text-white shadow-lg shadow-[#3182CE]/20'
                            : 'bg-white text-gray-500 border border-gray-100'
                    }`}
                >
                    All Assignment
                </button>
                <button
                    onClick={() => {
                        setActiveTab('submission');
                        setSearchText('');
                    }}
                    className={`h-10 px-6 rounded-lg font-bold transition-all ${
                        activeTab === 'submission'
                            ? 'bg-[#3182CE] text-white shadow-lg shadow-[#3182CE]/20'
                            : 'bg-white text-gray-500 border border-gray-100'
                    }`}
                >
                    Submission
                </button>
            </div>

            {/* Content Area */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                headerBg: '#ffffff',
                                headerColor: '#000000',
                                headerSplitColor: 'transparent',
                                headerBorderRadius: 0,
                            },
                        },
                    }}
                >
                    {activeTab === 'assignment' ? (
                        <AssignmentTable
                            data={filteredAssignments}
                            onView={(record) => {
                                setSelectedAssignment(record);
                                setIsDetailsModalOpen(true);
                            }}
                            onEdit={(record) => {
                                setModalMode('edit');
                                setSelectedAssignment(record);
                                setIsCreateModalOpen(true);
                            }}
                            onDelete={handleDelete}
                        />
                    ) : (
                        <SubmissionTable
                            data={filteredSubmissions}
                            onView={(record) => {
                                setSelectedSubmission(record);
                                setIsReviewModalOpen(true);
                            }}
                        />
                    )}
                </ConfigProvider>
            </div>

            {/* --- Modals --- */}

            <CreateAssignmentModal
                open={isCreateModalOpen}
                mode={modalMode}
                initialValues={selectedAssignment}
                onCancel={() => setIsCreateModalOpen(false)}
                onFinish={handleCreateEditFinish}
            />

            <AssignmentDetailsModal
                open={isDetailsModalOpen}
                assignment={selectedAssignment}
                onCancel={() => setIsDetailsModalOpen(false)}
            />

            <SubmissionReviewModal
                open={isReviewModalOpen}
                submission={selectedSubmission}
                onCancel={() => setIsReviewModalOpen(false)}
                onReview={handleReviewFinish}
            />
        </div>
    );
}

export default Assignment;
