import { getApiPath } from '@/utils/getApiPath'
import axiosConfig from './config'
import { ApiVersionEnum } from '@/enums/ApiVersion'
import { ApiServiceEnum } from '@/enums/ApiService'
import { DataWrapper, GoogleDocument } from './types'

export const getDocuments = async (): Promise<GoogleDocument[]> => {
  const response = await axiosConfig<DataWrapper<GoogleDocument[]>>({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.DOCUMENTS,
      path: '',
    }),
    method: 'GET',
  })

  return response.data.data
}

export const createDocument = async (
  title?: string,
  initialContent?: string
): Promise<string> => {
  const response = await axiosConfig<DataWrapper<{ documentId: string }>>({
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

  return response.data.data.documentId
}
