import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0ef68abc-451b-4d70-be75-31cf3cabeea3',
  },
})

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response)
  },
}
