import { getApiPath } from '@/utils/getApiPath'
import { ApiVersionEnum } from '@/enums/ApiVersion'
import { ApiServiceEnum } from '@/enums/ApiService'
import axiosConfig from './config'
import { DataWrapper, SignInData, Tokens } from './types'

export const signIn = async ({
  email,
  password,
}: SignInData): Promise<DataWrapper<Tokens>> => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.USER,
      path: '/sign-in',
    }),
    method: 'POST',
    data: {
      email,
      password,
    },
  })

  return response.data
}
