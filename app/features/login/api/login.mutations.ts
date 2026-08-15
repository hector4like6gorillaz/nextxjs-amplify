import { useMutation } from 'react-query'
import { postLogin } from './login.service'

export const usePostLogin = () => {
  return useMutation({
    mutationFn: postLogin,
  })
}
