import { useEffect, useState } from "react"

import { useSigninMutation } from "../../../../entities/User/api"
import { SigninUser } from "../../../../entities/User/lib/types"
import { useAppDispatch } from "../../../../shared/lib/hooks"
import { setAccessToken } from "../../../../widgets/Auth/model"

export function useSignin() {
  const [signinData, setSigninData] = useState<SigninUser | undefined>()

  const [signin, { data, isLoading, isSuccess, isError, error }] = useSigninMutation()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (signinData && data?.access_token) {
      const { access_token } = data

      dispatch(setAccessToken({ access_token }))
    }
  }, [data, dispatch, signinData])

  useEffect(() => {
    if (signinData) {
      signin(signinData)
    }
  }, [signin, signinData])

  return {
    setSigninData,
    isLoading,
    isSuccess,
    isError,
    error,
  }
}
