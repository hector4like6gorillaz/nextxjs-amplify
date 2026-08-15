'use client'

import { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './index'
import type { AppStore } from './index'

const StoreProvider = ({ children }: PropsWithChildren) => {
  const [store] = useState<AppStore>(() => makeStore())

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
