import { Button, Form, Input } from "antd"
import { FC } from "react"

import { SigninUser } from "../../../../entities/User/lib/types"
import { AuthErrorMessages } from "../../../../widgets/Auth/lib/error-messages"
import { useSignin } from "../../lib/hooks"

export const SigninForm: FC = () => {
  const [form] = Form.useForm()

  const { setSigninData, isError, isLoading, isSuccess, error } = useSignin()

  function onFinish(values: SigninUser) {
    setSigninData(values)
  }

  return (
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
        label="Email"
        name="email"
        rules={[{ required: true, type: "email", message: AuthErrorMessages.WRONG_EMAIL }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: AuthErrorMessages.WRONG_PASSWORD }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" disabled={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
