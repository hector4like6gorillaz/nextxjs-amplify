'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Mounts react-toastify's viewport once, globally. Any feature can then
// trigger a toast from anywhere (hooks included) via notifyToast in
// ~/shared/utils/toast.utils — no per-feature setup needed.
const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      newestOnTop
      closeOnClick
      pauseOnHover
    />
  )
}

export default ToastProvider
