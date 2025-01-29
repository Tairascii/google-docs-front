export interface Tokens {
  access: string
  refresh: string
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
