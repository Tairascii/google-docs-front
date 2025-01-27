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

export const createDocument = async (
  title?: string,
  initialContent?: string
): Promise<string> => {
  const response = await axiosConfig<{ documentId: string }>({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.DOCUMENTS,
      path: '/create',
    }),
    method: 'POST',
    data: {
      title,
      initialContent,
    },
  })

  return response.data.documentId
}
