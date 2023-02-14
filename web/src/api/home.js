import request from './../util/request.js'


// 发送短信
// url: '/user/valid_code?phoneNum=' + this.phone,

export function valid_code(data) {
  return request({
    url: '/user/valid_code?phoneNum=' + data.phoneNum,
    method: 'POST',
    data
  })
}


// 注册	

export function register(data) {
  return request({
    url: '/user/register',
    method: 'POST',
    data
  })
}


// 登录
export function logins(data) {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

// 查询 个人信息

export function user(data) {
  return request({
    url: '/user',
    method: 'GET',
    data
  })
}

// 修改 邮箱

// / 	url: '/user/email?email=' + this.email,


export function email(data) {
  return request({
    url: '/user/email?email=' + data.email,
    method: 'POST',
    data: {}

  })
}



// 查询下级
export function invitation(data) {
  return request({
    url: 'user/invitation',
    method: 'GET',
    data: data

  })
}

// 查询使用帮助


export function exec(data) {
  return request({
    url: '/script/exec/?pageNum=1&pageSize=1000',
    method: 'GET',
    data: data

  })
}

export function order(data) {
  return request({
    url: '/member/order',
    method: 'POST',
    data: data
  })
}

// 查询使用模块

export function use_help(data) {
  return request({
    url: '/use_help/?pageNum=1&pageSize=1000',
    method: 'GET',
    data: data

  })
}


// /app/multiple 
// 查询多开app的列表  （应用分身   悟空分身 360奇酷手机微信双开  LBE 平行空间(原双开大师)  360分身大师 克隆大师）

export function multiple(data) {
  return request({
    url: '/app/multiple',
    method: 'GET',
    data: data

  })
}



//         1. /app/multiple 是获取过来 显示的位置是 《星级多开 》这个位置，是个array
// 2. get /config/script 获取用户自己的配置，然后把值填入所有的输入框和勾选框
// 3. post /config/script 是用户更新自己的配置数据
// 4. /config/script/default 这个是获取默认配置，不是有一个按钮「还原配置」用在这里。


// 查询脚本配置列表   管理员查所有，用户查询自己的
// 获取用户自己的配置，然后把值填入所有的输入框和勾选框
export function script(data) {
  return request({
    url: '/config/script',
    method: 'GET',
    data: data

  })
}


// /config/script 执行

export function scriptst(data) {
  return request({
    url: '/config/script',
    method: 'POST',
    data: data

  })
}







// 还原配置
export function defaults(data) {
  return request({
    url: '/config/script/default',
    method: 'GET',
    data: data
  })
}





