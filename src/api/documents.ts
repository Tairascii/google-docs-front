import { getApiPath } from '@/utils/getApiPath'
import axiosConfig from './config'
import { ApiVersionEnum } from '@/enums/ApiVersion'
import { ApiServiceEnum } from '@/enums/ApiService'
import { DataWrapper, GoogleDocument } from './types'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

export const getDocuments = async (
  search: string = ''
): Promise<GoogleDocument[]> => {
  const response = await axiosConfig<DataWrapper<GoogleDocument[]>>({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.DOCUMENTS,
      path: '',
    }),
    params: { search },
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
      path: '',
    }),
    method: 'POST',
    data: {
      title,
      initialContent,
    },
  })

  return response.data.data.documentId
}

export const deleteDocument = async (id: string) => {
  await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.DOCUMENTS,
      path: `/${id}`,
    }),
    method: 'DELETE',
  })
}

// export const documentWSProvider = (
//   id: string,
//   doc: Y.Doc
// ): WebsocketProvider => {
  

//   return provider
// }
