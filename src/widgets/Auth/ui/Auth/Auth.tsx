import { useAppDispatch, useAppSelector } from "../../../../app/lib"
import { selectCredentials } from "../../../../entities/User/model"
import { SigninForm } from "../../../../features/SigninForm/ui"
import { SignupForm } from "../../../../features/SignupForm/ui"
import { FormType } from "../../lib/types"
import styles from "./Auth.module.scss"
import { Button } from "antd"
import { FC, useState } from "react"

export const Auth: FC = () => {
  const dispatch = useAppDispatch()

  const [formType, setFormType] = useState<FormType>("SIGN_IN")

  const credentials = useAppSelector(selectCredentials)

  const isSignin = formType === "SIGN_IN"

  function handleFormSwitch() {
    setFormType(isSignin ? "SIGN_UP" : "SIGN_IN")
  }

  return (
    <>
      {credentials ? (
        <div className={styles["signed-in"]}>
          <CredentialsCard />
          <Button
            type="primary"
            onClick={() => {
              dispatch(dropAccessToken())
            }}>
            Logout
          </Button>
        </div>
      ) : (
        <div className={styles["auth-modal"]}>
          <div className={styles["switch-btn"]}>
            <Button
              type="link"
              onClick={handleFormSwitch}>
              {isSignin ? "Sign up" : "Sign in"}
            </Button>
          </div>
          {isSignin ? <SigninForm /> : <SignupForm />}
        </div>
      )}
    </>
  )
}
