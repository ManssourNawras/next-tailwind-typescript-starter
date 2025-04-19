/* eslint-disable @typescript-eslint/no-explicit-any */
// lib
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import Router from 'next/router'

// custom
import { API_BASE_URL } from '@/utils/constants'
import { RequestData } from '@/models/AxiosRequest'




export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getHeaders = async (
  data?: RequestData,
  isDeleteMethod: boolean = false
): Promise<AxiosRequestConfig> => {
  const axiosConfig: AxiosRequestConfig = {
    headers: {},
  }

  // Retrieve token securely
  const userToken: string | null | undefined = Cookies.get('token')

  axiosConfig.headers = {
    'accept-language': 'en',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  }

  if (data) {
    // Merge custom headers
    if (data.headers) {
      Object.entries(data.headers).forEach(([key, value]) => {
        axiosConfig.headers![key] = value
      })
    }

    if (data.params) {
      axiosConfig.params = { ...data.params }
    }

    if (data.data && isDeleteMethod) {
      axiosConfig.data = { ...data.data }
    }

    if (data.responseType) {
      axiosConfig.responseType = (data.responseType as 'json') ?? 'json'
    }
  }

  // Add Authorization header if token exists
  if (userToken) {
    axiosConfig.headers['Authorization'] = `Bearer ${userToken}`
  }

  return axiosConfig
}

//////// ================================ get =============================== //////
export const get = async <T>(path: string, config?: object): Promise<T> => {
  try {
    // Wait for secure headers to be retrieved
    const headers = await getHeaders(config)
    const response: AxiosResponse<T> = await axiosClient.get(`${path}`, headers)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      Cookies.remove('token')
      Router.push('/login')
    }

    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as T
    } else {
      return { message: (error as Error).message } as T
    }
  }
}
// ===== start example for get  ===== //
// interface User {
//     id: number;
//     name: string;
//     email: string;
// }
// // Using the get function with a typed response
// const fetchUser = async () => {
//     const user = await get<User>("/user/profile");
//     console.log(user.name);
// };
// ===== end example for get  ===== //



//////// ================================ post =============================== //////
export const post = async <T>(
  path: string,
  payload: object,
  config?: object
): Promise<T> => {
  try {
    const headers = await getHeaders(config)
    const response: AxiosResponse<T> = await axiosClient.post(
      `${path}`,
      payload,
      headers
    )

    // Store token in Cookies if received in response
    const token = (response?.data as any)?.data?.token
    if (token) {
      Cookies.set('token', token, {
        secure: true,
        sameSite: 'strict',
        path: '/',
        expires: 7,
      })
    }

    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      Cookies.remove('token')
      Router.push('/login')
    }

    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as T
    } else {
      return { message: (error as Error).message } as T
    }
  }
}
// ===== start example for post  ===== //
// interface LoginResponse {
//     token: string;
//     user: {
//       id: number;
//       name: string;
//       email: string;
//     };
// }
// // Using the post function with a typed response
// const loginUser = async () => {
//     const response = await post<LoginResponse>("/auth/login", {
//         email: "user@example.com",
//         password: "password123",
//     });

//     console.log("User ID:", response.user.id);
// };
// ===== end example for post  ===== //

//////// ================================ put =============================== //////
export const put = async <T>(
  path: string,
  payload: object,
  config?: object
): Promise<T> => {
  try {
    const headers = await getHeaders(config)
    const response: AxiosResponse<T> = await axiosClient.put(
      `${path}`,
      payload,
      headers
    )
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      Cookies.remove('token')
      Router.push('/login')
    }

    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as T
    } else {
      return { message: (error as Error).message } as T
    }
  }
}
// ===== start example for put  ===== //
// interface UpdateUserResponse {
//     id: number;
//     name: string;
//     email: string;
// }
// // Using the put function with a typed response
// const updateUser = async () => {
//     const updatedUser = await put<UpdateUserResponse>("/user/update", {
//         name: "John Doe",
//         email: "johndoe@example.com",
//     });

//     console.log("Updated User:", updatedUser.name);
// };
// ===== end example for put  ===== //

//////// ================================ patch =============================== //////
export const patch = async <T>(
  path: string,
  payload: object,
  config?: object
): Promise<T> => {
  try {
    const headers = await getHeaders(config)
    const response: AxiosResponse<T> = await axiosClient.patch(
      `${path}`,
      payload,
      headers
    )
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      Cookies.remove('token')
      Router.push('/login')
    }

    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as T
    } else {
      return { message: (error as Error).message } as T
    }
  }
}
// ===== start example for patch  ===== //
// interface UpdateProfileResponse {
//     id: number;
//     username: string;
//     profilePicture: string;
// }
// // Using the patch function with a typed response
// const updateProfile = async () => {
//     const updatedProfile = await patch<UpdateProfileResponse>("/user/profile", {
//         username: "new_username",
//     });

//     console.log("Updated Profile:", updatedProfile.username);
// };
// ===== end example for patch  ===== //

//////// ================================ delete =============================== //////
export const deleteMethod = async <T>(
  path: string,
  config?: object
): Promise<T> => {
  try {
    const headers = await getHeaders(config)
    const response: AxiosResponse<T> = await axiosClient.delete(
      `${path}`,
      headers
    )
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      Cookies.remove('token')
      Router.push('/login')
    }

    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as T
    } else {
      return { message: (error as Error).message } as T
    }
  }
}
// ===== start example for delete  ===== //
// interface DeleteResponse {
//     message: string;
// }
// // Using the deleteMethod function with a typed response
// const deleteUser = async () => {
//     const response = await deleteMethod<DeleteResponse>("/user/delete");
//     console.log(response.message);
// };
// ===== end example for delete  ===== //
