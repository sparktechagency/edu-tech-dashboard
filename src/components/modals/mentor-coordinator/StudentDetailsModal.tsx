import { Modal, Avatar, Button } from "antd";

import { Mentor } from "../../../pages/mentor-coordinator/mentors";


interface Props {
  isOpen: boolean;
  onClose: () => void;
  mentor: Mentor | null;
}

const StudentDetailsModal = ({ isOpen, onClose, mentor }: Props) => {
  const students = mentor?.assignedStudents || [];

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
      ]}
      title="Student Details"
      width={600}
    >
      {students.length === 0 ? (
        <p className="text-gray-500 text-center py-6">
          No students assigned.
        </p>
      ) : (
        students.map((student: any) => (
          <div
            key={student._id}
            className="flex items-center justify-between mb-4 p-3 border rounded-lg"
          >
            <div className="flex items-center gap-4">
              <Avatar src={student.profile} size={50} />
              <div>
                <p className="font-medium">
                  {student.firstName} {student.lastName}
                </p>
                <p className="text-gray-500 text-sm">
                  {student.email}
                </p>
              </div>
            </div>

            {/* Optional extra info */}
            <div className="text-sm text-gray-600">
              <p>
                <span className="font-medium">Group:</span>{" "}
                Skill Path
              </p>
              <p>
                <span className="font-medium">Track:</span> Data
              </p>
            </div>
          </div>
        ))
      )}
    </Modal>
  );
};

export default StudentDetailsModal;