interface GetApiPathParams {
  version: string
  service: string
  path: string
}

export const getApiPath = ({
  version,
  service,
  path,
}: GetApiPathParams): string => {
  const finalPath = `${process.env.NEXT_PUBLIC_API_URL}/api/${version}/${service}${path}`

  return finalPath
}
