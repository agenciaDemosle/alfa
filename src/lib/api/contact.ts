import { apiClient } from './axios'

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export interface ContactResponse {
  ok: boolean
  error?: string
}

export const sendContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  const response = await apiClient.post<ContactResponse>('/deployServer/sendmail.php', data)
  return response.data
}
