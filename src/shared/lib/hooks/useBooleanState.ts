import { useCallback, useState } from "react"

export function useBooleanState(initialValue = false) {
  const [state, setState] = useState<boolean>(initialValue)

  const toggleState = useCallback(() => {
    // (value === undefined ? !prevValue : value)
    setState((prevValue) => !prevValue)
  }, [])

  return {
    state,
    toggleState,
  }
}
