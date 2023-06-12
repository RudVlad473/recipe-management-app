import compose from "compose-function"

import { withAppContext } from "./withAppContext"
import { withRedux } from "./withRedux"
import { withReduxPersist } from "./withReduxPersist"
import { withToastify } from "./withToastify"

export const withProviders = compose(withRedux, withReduxPersist, withAppContext, withToastify)
