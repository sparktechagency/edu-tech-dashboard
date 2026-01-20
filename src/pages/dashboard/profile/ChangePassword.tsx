import { Button, Form, Input } from 'antd';
import { useChangePasswordMutation } from '../../../redux/apiSlices/authSlice';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { errorType } from '../../authentication/Login';
import { useForm } from 'antd/es/form/Form';

const ChangePassword = () => {
    const [form]=useForm()
    const [changePassword, {isSuccess,error }] = useChangePasswordMutation();
    useEffect(() => {
        if (isSuccess) {
            Swal.fire({
                title: "Success",
                text: "Password changed successfully",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            })

            form.resetFields();
            
        }
        else if (error) {
            const errorMessage =
                (error as errorType)?.data?.errorMessages
                    ? (error as errorType)?.data?.errorMessages.map((msg: { message: string }) => msg?.message).join("\n")
                    : (error as errorType)?.data?.message || "Something went wrong. Please try again.";
            Swal.fire({
                title: "Failed to Login",
                text: errorMessage,
                icon: "error",
                timer: 1500,
                showConfirmButton: false
            })
        }
    }, [isSuccess, error]);
    const onFinish = (values: any) => {
        changePassword({
    "currentPassword": values?.current_password,
    "newPassword": values?.new_password,
    "confirmPassword": values?.confirm_password
        })
        
    };
    return (
        <div className="max-w-lg mx-auto">
            <Form layout="vertical" initialValues={{ remember: true }} form={form} onFinish={onFinish}>
                <Form.Item
                    label={
                        <label htmlFor="password" className="block text-primaryText mb-1 text-lg">
                            Current Password
                        </label>
                    }
                    name="current_password"
                    rules={[{ required: true, message: 'Please input new password!' }]}
                >
                    <Input.Password placeholder="KK!@#$15856" className=" h-12 px-6" />
                </Form.Item>
                <Form.Item
                    label={
                        <label htmlFor="password" className="block text-primaryText mb-1 text-lg">
                            New Password
                        </label>
                    }
                    name="new_password"
                    rules={[{ required: true, message: 'Please input confirm password!' }]}
                >
                    <Input.Password placeholder="KK!@#$15856" className="h-12 px-6" />
                </Form.Item>
                <Form.Item
                    label={
                        <label htmlFor="password" className="block text-primaryText mb-1 text-lg">
                            Confirm Password
                        </label>
                    }
                    name="confirm_password"
                    rules={[{ required: true, message: 'Please input confirm password!' }]}
                >
                    <Input.Password placeholder="KK!@#$15856" className="h-12 px-6" />
                </Form.Item>

                <Form.Item className="flex justify-center">
                    <Button
                 
                        type="primary"
                        htmlType="submit"
                        style={{
                            height: 45,
                            width: '100%',
                            fontWeight: 500,
                        }}
                    >
                        Change Password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ChangePassword;
