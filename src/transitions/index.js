import React from 'react'
import { CSSTransition } from 'react-transition-group'

export const Fade = ({ children, ...props }) => (
  <CSSTransition
    timeout={600}
    classNames="fade"
    mountOnEnter
    unmountOnExit
    {...props}
  >
    {children}
  </CSSTransition>
)
