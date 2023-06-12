import React, { FC, PropsWithChildren } from "react"
import { createPortal } from "react-dom"

export const Portal: FC<Required<PropsWithChildren>> = ({ children }) => {
  return <>{createPortal(children, document.body)}</>
}
