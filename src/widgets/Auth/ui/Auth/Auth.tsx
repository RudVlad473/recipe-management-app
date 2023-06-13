import { useAppDispatch, useAppSelector } from "../../../../app/lib"
import users from "../../../../entities/User/lib/data/user.json"
import { TUser } from "../../../../entities/User/lib/types"
import {
  dropCredentials,
  selectCredentials,
  selectIsLoggedIn,
  setCredentials,
} from "../../../../entities/User/model"
import { AuthForm } from "../../../../features/AuthForm/ui"
import { CredentialsCard } from "../../../../features/CredentialsCard/ui"
import { FormType } from "../../lib/types"
import styles from "./Auth.module.scss"
import { Button } from "antd"
import { FC, useCallback, useState } from "react"
import { toast } from "react-toastify"

export const Auth: FC = () => {
  const dispatch = useAppDispatch()

  const [formType, setFormType] = useState<FormType>("SIGN_IN")

  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const isSignin = formType === "SIGN_IN"

  function handleFormSwitch() {
    setFormType(isSignin ? "SIGN_UP" : "SIGN_IN")
  }

  const handleSignin = useCallback(
    (user: TUser) => {
      console.log(user)
      console.log(users[0])

      const areCredentialsCorrect = users.some(({ password, username }) => {
        return password == user.password && username == user.username
      })

      if (areCredentialsCorrect) {
        dispatch(setCredentials(user))

        toast.success("You've been signed in!")
      } else {
        toast.error("Credentials are wrong, try again")
      }
    },
    [dispatch]
  )

  const handleSignup = useCallback(
    (user: TUser) => {
      dispatch(setCredentials(user))

      toast.success("You've been signed up!")
    },
    [dispatch]
  )

  return (
    <>
      {isLoggedIn ? (
        <div className={styles["signed-in"]}>
          <CredentialsCard />
          <Button
            type="primary"
            onClick={() => dispatch(dropCredentials())}>
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
          <AuthForm onFinish={isSignin ? handleSignin : handleSignup} />
        </div>
      )}
    </>
  )
}
