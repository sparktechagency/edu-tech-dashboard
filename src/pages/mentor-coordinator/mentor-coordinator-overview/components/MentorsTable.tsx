import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useGetAllMentorsQuery } from "../../../../redux/apiSlices/coordinator/overViewSlice";

interface MentorData {
  key: string;
  name: string;
  email: string;
  company?: string;
  jobTitle?: string;
}

const MentorsTable = () => {
  const { data, isLoading } = useGetAllMentorsQuery(undefined);

  const mentorsData: MentorData[] =
    data?.data?.map((mentor: any) => ({
      key: mentor._id,
      name: `${mentor.firstName} ${mentor.lastName}`,
      email: mentor.email,
      company: mentor.company || "N/A",
      jobTitle: mentor.jobTitle || "N/A",
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