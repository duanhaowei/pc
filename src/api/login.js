export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return new Promise((r,j)=>{
    let res = {};
    res.data.token = "testtoken";
    r(res);
  })

}

export function logout() {
  return new Promise((r,j)=>{
    r();
  })
}

export function getUserInfo(token) {
  return new Promise((r,j)=>{
    let res = {};
    res.data = {};
    res.data.token = "testtoken";
    res.data.roles = ['a1','admin'];
    res.data.name = 'name1';
    res.data.avatar = 'http://www.avatar.com/avatar';
    res.data.introduction = 'introductionintroduction';
    r(res);
  })
}

