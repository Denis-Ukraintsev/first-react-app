import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY,
  },
})

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response)
  },
}

export const profileApi = {
  getProfile(id) {
    return instance.get(`/profile/${id}`).then((response) => response)
  },
}

export const authApi = {
  signIn(login, password) {
    return instance
      .post(`/auth/login`, {
        email: login,
        password,
        rememberMe: true,
      })
      .then((response) => response)
  },
  signOut() {
    return instance.delete(`/auth/login`).then((response) => response)
  },
  authMe() {
    return instance.get(`/auth/me`).then((response) => response)
  },
}
