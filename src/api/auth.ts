import { getApiPath } from '@/utils/getApiPath'
import axiosConfig from './config'
import { ApiVersionEnum } from '@/enums/ApiVersion'
import { ApiServiceEnum } from '@/enums/ApiService'
import { SignInData, Tokens } from './types'

export const signIn = async ({
  email,
  password,
}: SignInData): Promise<Tokens> => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.USER,
      path: '',
    }),
    method: 'POST',
    data: {
      email,
      password,
    },
  })

  return response.data
}
