import { Card, Progress } from 'antd';

interface CurriculumItem {
    name: string;
    percentage: number;
    color: string;
}

interface CurriculumOverviewProps {
    data: CurriculumItem[];
}

const CurriculumOverview = ({ data }: CurriculumOverviewProps) => {
    return (
        <Card
            className="shadow-sm border-none rounded-2xl overflow-hidden"
            title={<span className="text-xl font-bold">Curriculum Overview</span>}
        >
            <div className="space-y-6">
                {data.map((item, idx) => (
                    <div key={idx}>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-700">{item.name}</span>
                            <span className="font-bold text-gray-800">{item.percentage}%</span>
                        </div>
                        <Progress
                            percent={item.percentage}
                            showInfo={false}
                            strokeColor={item.color}
                            strokeWidth={12}
                            className="mb-0"
                        />
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default CurriculumOverview;
