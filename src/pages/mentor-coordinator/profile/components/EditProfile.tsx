import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Input, Divider } from 'antd';
import { UserContext } from '../../../../provider/User';
import { imageUrl } from '../../../../redux/api/baseApi';
import { errorType } from '../../../authentication/Login';
import { useUpdateProfileMutation } from '../../../../redux/apiSlices/authSlice';
import { CameraOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';

const { TextArea } = Input;

interface EditProfileProps {
    onCancel: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ onCancel }) => {
    const user = useContext(UserContext);
    const [profileForm] = Form.useForm();
    const [imgURL, setImgURL] = useState('');
    const [imgFile, setImageFile] = useState<File | null>(null);
    const [updateProfile, { isLoading, isSuccess, isError, error, data }] = useUpdateProfileMutation();

    useEffect(() => {
        if (user) {
            profileForm.setFieldsValue({
                name: user?.name,
                email: user?.email,
                contact: user?.contact,
                professionalTitle: user?.professionalTitle,
                preferredGroup: user?.preferredGroup,
                availableHours: user?.availableHours,
                aboutMe: user?.aboutMe,
                linkedin: user?.linkedin,
                github: user?.github,
                personalWebsite: user?.personalWebsite,
                city: user?.city,
                zipCode: user?.zipCode,
                streetAddress: user?.streetAddress,
            });
            setImgURL(user?.profilePic?.startsWith('http') ? user?.profilePic : `${imageUrl}${user?.profilePic}`);
        }
    }, [profileForm, user]);

    useEffect(() => {
        if (isSuccess) {
            if (data) {
                Swal.fire({
                    text: data?.message,
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                }).then(() => {
                    onCancel();
                    window.location.reload();
                });
            }
        }

        if (isError) {
            const errorMessage = (error as errorType)?.data?.errorMessages
                ? (error as errorType)?.data?.errorMessages.map((msg: { message: string }) => msg?.message).join('\n')
                : (error as errorType)?.data?.message || 'Something went wrong. Please try again.';
            Swal.fire({
                text: errorMessage,
                icon: 'error',
            });
        }
    }, [isSuccess, isError, error, data, onCancel]);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const imgUrl = URL.createObjectURL(file);
            setImgURL(imgUrl);
            setImageFile(file);
        }
    };

    const onProfileFinish = async (values: any) => {
        const formData = new FormData();

        if (imgFile) {
            formData.append('image', imgFile);
        }

        Object.keys(values).forEach((key) => {
            if (values[key] !== undefined && values[key] !== null) {
                formData.append(key, values[key]);
            }
        });

        await updateProfile(formData).unwrap();
    };

    const sectionTitle = (title: string) => (
        <div className="mb-6">
            <h4 className="text-lg font-bold text-[#333333]">{title}</h4>
            <Divider className="my-2 border-gray-100" />
        </div>
    );

    return (
        <div className="container mx-auto bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <Form
                name="update_profile"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onProfileFinish}
                form={profileForm}
                className="edit-profile-form"
            >
                {/* Profile Photo */}
                <div className="flex flex-col items-center mb-12">
                    <div className="relative">
                        <div
                            className="w-32 h-32 rounded-xl bg-gray-100 bg-cover bg-center border-2 border-gray-100 shadow-inner"
                            style={{ backgroundImage: `url(${imgURL})` }}
                        />
                        <div className="hidden">
                            <input onChange={onChange} type="file" id="img" className="hidden" />
                        </div>
                        <label
                            htmlFor="img"
                            className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer shadow-lg hover:bg-primary/90 transition-all border-2 border-white group"
                        >
                            <CameraOutlined className="text-white text-lg group-hover:scale-110 transition-transform" />
                        </label>
                    </div>
                    <span className="text-gray-500 text-sm mt-4 font-medium uppercase tracking-wider">
                        Update Profile Photo
                    </span>
                </div>

                {/* About Me */}
                {sectionTitle('About Me')}
                <Form.Item name="aboutMe" className="mb-8">
                    <TextArea
                        rows={5}
                        placeholder="Tell us about yourself..."
                        className="rounded-lg border-gray-200 focus:border-primary hover:border-primary transition-colors text-gray-700"
                    />
                </Form.Item>

                {/* Basic Information */}
                {sectionTitle('Basic Information')}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">Full Name</span>}
                        name="name"
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                        <Input className="h-12 rounded-lg" placeholder="Alex Michael Johnson" />
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">Email</span>}
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            className="h-12 rounded-lg bg-gray-50 cursor-not-allowed"
                            placeholder="alexmichael@gmail.com"
                            readOnly
                        />
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">Professional Title</span>}
                        name="professionalTitle"
                    >
                        <Input className="h-12 rounded-lg" placeholder="Coordinator" />
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">Preferred Group</span>}
                        name="preferredGroup"
                    >
                        <Input className="h-12 rounded-lg" placeholder="Expedition" />
                    </Form.Item>
                    <Form.Item label={<span className="font-semibold text-gray-700">Phone</span>} name="contact">
                        <Input className="h-12 rounded-lg" placeholder="+31 6123456789" />
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">Available Hours</span>}
                        name="availableHours"
                    >
                        <Input className="h-12 rounded-lg" placeholder="39.5 hours" />
                    </Form.Item>
                </div>

                {/* Links */}
                {sectionTitle('Links')}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 mb-8">
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">Linkedin Profile</span>}
                        name="linkedin"
                    >
                        <Input className="h-12 rounded-lg" placeholder="https://linkedin.com/..." />
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">GitHub Profile</span>}
                        name="github"
                    >
                        <Input className="h-12 rounded-lg" placeholder="https://github.com/..." />
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">Personal Website</span>}
                        name="personalWebsite"
                    >
                        <Input className="h-12 rounded-lg" placeholder="https://..." />
                    </Form.Item>
                </div>

                {/* Address Information */}
                {sectionTitle('Address Information')}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 mb-8">
                    <Form.Item label={<span className="font-semibold text-gray-700">City</span>} name="city">
                        <Input className="h-12 rounded-lg" placeholder="Rotterdam" />
                    </Form.Item>
                    <Form.Item label={<span className="font-semibold text-gray-700">Zip Code</span>} name="zipCode">
                        <Input className="h-12 rounded-lg" placeholder="3225 CD" />
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">Street Address</span>}
                        name="streetAddress"
                    >
                        <Input className="h-12 rounded-lg" placeholder="Kralingseweg 225" />
                    </Form.Item>
                </div>

                <div className="flex justify-end gap-4 mt-12 pt-8 border-t border-gray-100">
                    <Button
                        onClick={onCancel}
                        className="h-12 px-8 rounded-lg border-gray-200 hover:text-red-500 hover:border-red-500 transition-all font-medium"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                        className="h-12 px-10 rounded-lg shadow-md font-bold transition-all"
                    >
                        Save Changes
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default EditProfile;
