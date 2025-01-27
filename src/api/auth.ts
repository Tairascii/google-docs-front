import { getApiPath } from '@/utils/getApiPath'
import axiosConfig from './config'
import { ApiVersionEnum } from '@/enums/ApiVersion'
import { ApiServiceEnum } from '@/enums/ApiService'
import { Tokens } from './types'

export const signIn = async (): Promise<Tokens> => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.USER,
      path: '',
    }),
    method: 'GET',
  })

  return response.data
}
