import { getApiPath } from '@/utils/getApiPath'
import { ApiVersionEnum } from '@/enums/ApiVersion'
import { ApiServiceEnum } from '@/enums/ApiService'
import axiosConfig from './config'
import { DataWrapper, User } from './types'

export const getUser = async (): Promise<User> => {
  const response = await axiosConfig<DataWrapper<User>>({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.USER,
      path: '',
    }),
    method: 'GET',
    
  })

  return response.data.data
}
