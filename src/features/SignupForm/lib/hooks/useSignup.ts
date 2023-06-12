import { useEffect, useState } from "react"

import { useSignupMutation } from "../../../../entities/User/api"
import { SignupUser } from "../../../../entities/User/lib/types"
import { useAppDispatch } from "../../../../shared/lib/hooks"
import { setAccessToken } from "../../../../widgets/Auth/model"

export function useSignup() {
  const [signupData, setSignupData] = useState<SignupUser | undefined>()

  const [signup, { data, isLoading, isSuccess, isError, error }] = useSignupMutation()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (signupData && data?.access_token) {
      const { access_token } = data

      dispatch(setAccessToken({ access_token }))
    }
  }, [data, dispatch, signupData])

  useEffect(() => {
    if (signupData) {
      signup(signupData)
    }
  }, [signup, signupData])

  return {
    setSignupData,
    isLoading,
    isSuccess,
    isError,
    error,
  }
}
