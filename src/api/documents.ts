import { getApiPath } from '@/utils/getApiPath'
import axiosConfig from './config'
import { ApiVersionEnum } from '@/enums/ApiVersion'
import { ApiServiceEnum } from '@/enums/ApiService'

export const getDocuments = async (): Promise<any> => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.DOCUMENTS,
      path: '',
    }),
    method: 'GET',
  })

  return response.data
}
