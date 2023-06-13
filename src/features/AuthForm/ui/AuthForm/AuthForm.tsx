import { TUser } from "../../../../entities/User/lib/types"
import { ErrorMessages } from "../../lib/consts/error-messages"
import { Button, Form, Input } from "antd"
import { FC } from "react"
import { toast } from "react-toastify"

type AuthFormProps = {
  onFinish: (user: TUser) => void
}

export const AuthForm: FC<AuthFormProps> = ({ onFinish }) => {
  const [form] = Form.useForm()

  return (
    <>
      <Form
        form={form}
        name="registration-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={(values: TUser) => onFinish(values)}
        onFinishFailed={(err) =>
          toast.error(`The following fields are incorrect: ${err.errorFields.join(", ")}`)
        }
        autoComplete="on">
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: ErrorMessages.WRONG_USERNAME }]}>
          <Input placeholder="JohnDoe" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: ErrorMessages.WRONG_PASSWORD }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
