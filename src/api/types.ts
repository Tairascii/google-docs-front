export interface DataWrapper<T> {
  data: T
}

export interface Tokens {
  accessToken: string
  refreshToken: string
}

export interface GoogleDocument {
  id: string
  title: string
  ownerId: string
  initialContent: string
  roomId: string
  orgId: string
}

export interface SignInData {
  email: string
  password: string
}

export interface User {
  id: string
  name: string
  email: string
  profilePicUrl: string
  createdAt: string
}
