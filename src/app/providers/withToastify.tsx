import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Portal } from "../../shared/ui/Portal"

export const withToastify = (component: () => React.ReactNode) => () => {
  return (
    <>
      {component()}
      <Portal>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Portal>
    </>
  )
}
