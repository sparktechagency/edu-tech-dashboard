import { Card } from 'antd';
import { FileText, Download } from 'lucide-react';

interface MaterialItem {
    title: string;
    type: string;
    size: string;
    category?: string;
}

interface LearningMaterialsProps {
    data: MaterialItem[];
}

const LearningMaterials = ({ data }: LearningMaterialsProps) => {
    return (
        <Card
            className="shadow-sm border-none rounded-2xl overflow-hidden"
            title={<span className="text-xl font-bold">Learning Materials</span>}
        >
            <div className="space-y-4">
                {data.map((material, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                <FileText className="text-green-500 w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">{material.title}</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                                    {material.type} • {material.size} {material.category && `• ${material.category}`}
                                </p>
                            </div>
                        </div>
                        <Download className="text-purple-500 w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default LearningMaterials;
