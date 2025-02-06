import { getApiPath } from '@/utils/getApiPath'
import axiosConfig from './config'
import { DataWrapper } from './types'
import { ApiVersionEnum } from '@/enums/ApiVersion'
import { ApiServiceEnum } from '@/enums/ApiService'

export const createOrganization = async (title: string): Promise<string> => {
  const response = await axiosConfig<DataWrapper<{ orgId: string }>>({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.ORGANIZATION,
      path: '',
    }),
    method: 'POST',
    data: {
      title,
    },
  })
  return response.data.data.orgId
}

export const addUserToOrganization = async (
  email: string,
  role: string
): Promise<void> => {
  await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.ORGANIZATION,
      path: '',
    }),
    method: 'POST',
    data: {
      email,
      role,
    },
  })
}
