import { Provider } from "react-redux"

import { store } from "../lib/store"

export const withRedux = (component: () => React.ReactNode) => () => {
  return <Provider store={store}>{component()}</Provider>
}
