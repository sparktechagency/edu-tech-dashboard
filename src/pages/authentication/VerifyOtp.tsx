import { Button, ConfigProvider, Form, FormProps, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from '../../utils/local-storage';
import AuthSidebar from '../../components/ui/AuthSidebar';

export type errorType = {
    data: {
        errorMessages: { message: string }[];
        message: string;
    };
};
interface VerifyOtpFormValues {
    otp: string;
}

const VerifyOtp = () => {
    const navigate = useNavigate();
    const email = getFromLocalStorage('forgetEmail');

    const onFinish: FormProps<VerifyOtpFormValues>['onFinish'] = (values) => {
        console.log(values);
        navigate('/new-password');
    };

    return (
        <section className="min-h-screen grid grid-cols-2 items-center bg-[#F8FAFC]">
            <AuthSidebar backgroundImage="/assets/images/auth/otp.jpg" />
            <div className="flex items-center justify-center p-10">
                <ConfigProvider
                    theme={{
                        components: {
                            Input: {
                                // lineHeight: 3,
                                controlHeight: 50,

                                borderRadius: 10,
                            },
                        },
                        token: {
                            colorPrimary: '#66D978',
                        },
                    }}
                >
                    <div>
                        <div className="bg-white w-[630px] rounded-lg shadow-lg p-10 ">
                            <div className="text-primaryText space-y-3 text-center">
                                <h1 className="text-3xl   text-center mt-2 text-[#000000] font-bold">
                                    Check your email
                                </h1>
                                <p>We sent a reset link to {email} enter 5 digit code that mentioned in the email</p>
                            </div>

                            <Form
                                name="normal_VerifyOtp"
                                className="my-5"
                                layout="vertical"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    className="flex items-center justify-center mx-auto"
                                    name="otp"
                                    rules={[{ required: true, message: 'Please input otp code here!' }]}
                                >
                                    <Input.OTP
                                        style={{
                                            width: 300,
                                        }}
                                        className=""
                                        variant="filled"
                                        length={5}
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{
                                            height: 45,
                                            width: '100%',
                                            fontWeight: 500,
                                        }}
                                        // onClick={() => navigate('/')}
                                    >
                                        Verify OTP Code
                                    </Button>
                                </Form.Item>
                                <div className="text-center text-lg flex items-center justify-center gap-2">
                                    <p className="text-primaryText">Didn't receive the code?</p>
                                    <p className="text-primary cursor-pointer active:text-red-400">Resend</p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </ConfigProvider>
            </div>
        </section>
    );
};

export default VerifyOtp;
