import {get , post} from '@/lib/axiosClient'

export const fetchProjects = async () => {
  const response = await get('/projects')
  return response
}

export const createProject = async (payload: object) => {
  const response = await post('/projects', payload)
  return response
}
