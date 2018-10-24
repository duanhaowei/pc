import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

// 验证是不是存在用户token
export function getToken() {
  return "facktoken";
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
