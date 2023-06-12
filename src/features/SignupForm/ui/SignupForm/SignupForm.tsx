import { Button, Form, Input } from "antd"
import { FC } from "react"

import { SignupUser } from "../../../../entities/User/lib/types"
import { AuthErrorMessages } from "../../../../widgets/Auth/lib/error-messages"
import { useSignup } from "../../lib/hooks"

export const SignupForm: FC = () => {
  const [form] = Form.useForm()

  const { setSignupData, isError, isLoading, isSuccess, error } = useSignup()

  function onFinish(values: SignupUser) {
    setSignupData(values)
  }

  return (
    <>
      <Form
        form={form}
        name="registration-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={(err) => {}}
        autoComplete="on">
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: AuthErrorMessages.WRONG_USERNAME }]}>
          <Input placeholder="JohnDoe" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email", message: AuthErrorMessages.WRONG_EMAIL }]}>
          <Input placeholder="johndoe@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: AuthErrorMessages.WRONG_PASSWORD }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button disabled={isLoading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
