import { useState } from "react";
import { Table, Button, Select, Space, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  FilterOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import MentorDetailsModal from "../../../components/modals/mentor-coordinator/MentorDetailsModal";
import StudentDetailsModal from "../../../components/modals/mentor-coordinator/StudentDetailsModal";
import HeaderTitle from "../../../components/shared/HeaderTitle";
import { useGetAllMentorsQuery } from "../../../redux/apiSlices/coordinator/overViewSlice";


export interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
}

export interface Mentor {
  key: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  status: "Active" | "Inactive";
  assignedStudents: Student[];
}


const Mentors = () => {
  const { data, isLoading } = useGetAllMentorsQuery(undefined);

  const [isViewStudentsModalOpen, setIsViewStudentsModalOpen] =
    useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const mentorsData: Mentor[] =
    data?.data?.map((mentor: any) => ({
      key: mentor._id,
      name: `${mentor.firstName} ${mentor.lastName}`,
      email: mentor.email,
      company: mentor.company || "N/A",
      jobTitle: mentor.jobTitle || "N/A",
      location: mentor.address || "N/A",
      status: mentor.verified ? "Active" : "Inactive",
      assignedStudents: mentor.assignedStudents || [],
    })) || [];


  const handleViewStudents = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsViewStudentsModalOpen(true);
  };

  const handleDetails = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsDetailsModalOpen(true);
  };


  const columns: ColumnsType<Mentor> = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span className="font-medium text-gray-700">{text}</span>
      ),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "COMPANY",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "JOB TITLE",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "LOCATION",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Select
          defaultValue={status}
          style={{ width: 110 }}
          options={[
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
          className={
            status === "Active" ? "text-green-600" : "text-red-600"
          }
        />
      ),
    },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => handleViewStudents(record)}
            style={{ backgroundColor: "#007bff" }}
          >
            View Students ({record.assignedStudents.length})
          </Button>

          <Button
            onClick={() => handleDetails(record)}
            className="bg-gray-100 hover:bg-gray-200 border-none"
          >
            Details
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {/* ===== Header ===== */}
      <div className="flex justify-between items-center mb-4">
        <HeaderTitle title="Mentors" />

        <div className="flex gap-4">
          <Input
            placeholder="Search mentor"
            prefix={
              <SearchOutlined className="text-gray-400 text-lg" />
            }
            className="w-72 rounded-lg border-gray-200"
            style={{ height: "42px" }}
          />

          <Button
            icon={<FilterOutlined />}
            className="flex items-center gap-2 h-[42px] px-6 rounded-lg border-gray-200 font-medium"
          >
            Filter
          </Button>
        </div>
      </div>

      {/* ===== Table ===== */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
        <Table
          columns={columns}
          dataSource={mentorsData}
          loading={isLoading}
          rowKey="key"
          pagination={{ pageSize: 10 }}
          rowClassName="hover:bg-gray-50"
        />
      </div>

      {/* ===== Mentor Details Modal ===== */}
      <MentorDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        mentor={selectedMentor}
      />
        <StudentDetailsModal
        isOpen={isViewStudentsModalOpen}
        onClose={() => setIsViewStudentsModalOpen(false)}
        mentor={selectedMentor}
        />
    </div>
  );
};

export default Mentors;