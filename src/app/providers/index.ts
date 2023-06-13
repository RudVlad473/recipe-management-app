import { withRedux } from "./withRedux"
import { withReduxPersist } from "./withReduxPersist"
import { withToastify } from "./withToastify"
import compose from "compose-function"

export const withProviders = compose(withRedux, withReduxPersist, withToastify)
