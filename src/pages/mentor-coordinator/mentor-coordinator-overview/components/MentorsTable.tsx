import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useGetAllMentorsQuery } from "../../../../redux/apiSlices/coordinator/overViewSlice";
import { Mentor } from "../../mentors";

interface MentorData {
  key: string;
  name: string;
  email: string;
  company?: string;
  jobTitle?: string;
}

const MentorsTable = () => {
  const { data, isLoading } = useGetAllMentorsQuery({});

  const mentorsData: Mentor[] =
  data?.data?.mentors?.map((mentor: any) => ({
    key: mentor._id,
    name: mentor.firstName 
      ? `${mentor.firstName} ${mentor.lastName || ''}`.trim()
      : (mentor.name || "N/A"),
    email: mentor.email,
    company: mentor.company || mentor.professionalTitle || "N/A",
    jobTitle: mentor.professionalTitle || "N/A",
  })) || [];

  const columns: ColumnsType<MentorData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Button
    //       className="text-green-500 border-green-500 hover:text-green-600 hover:border-green-600 rounded-full px-6"
    //     >
    //       Student ({record.key})
    //     </Button>
    //   ),
    // },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Mentors</h2>
      <Table
        columns={columns}
        dataSource={mentorsData}
        loading={isLoading}
        pagination={false}
        rowKey="key"
      />
    </div>
  );
};

export default MentorsTable;