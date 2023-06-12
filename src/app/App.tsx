/* eslint-disable react-refresh/only-export-components */
import { Home } from "../pages/Home"
import { HomeLayout } from "../shared/ui/layouts/HomeLayout"
import "./index.scss"
import { withProviders } from "./providers"

function App() {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  )
}

export default withProviders(App)
