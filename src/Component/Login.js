import { Button, Card, Checkbox, Form, Input, message } from 'antd';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const dataLogin = {
        username: "admin",
        password: "admin",
        role: "admin"
    };

    const onFinish = (isidata) => {
        console.log('Success:', isidata);
        if (isidata.username === dataLogin.username && isidata.password === dataLogin.password) {
            message.success('Login Berhasil');
            localStorage.setItem("role", "admin");
            navigate("/dashboard");
        } else {
            message.error('Username atau Password Salah');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        console.log('values failed:', errorInfo.values);
    };
    return (
        <>
            <Row style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Col>
                    <Card>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Masukkan Username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Masukkan Password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Login