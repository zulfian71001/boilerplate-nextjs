"use client"

import { childrenProps } from '@/@types'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

const ReduxProvider = ({children}:childrenProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider
