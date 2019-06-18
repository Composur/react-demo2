/**
 * 包含了n个接口请求的函数的模块 函数返回值为: promise
 * @param axios(url,data={},type='GET')  默认值
 */

import axios from './axios'

// 注册
export const reqRegister=(data)=>{return axios('/register',data,'POST')}

// 登录
export const reqLogin=(data)=>{return axios('/login',data,'POST')}

//  更新用户信息
export const reqUpdateBoss=(data)=>{return axios('/bossUpdate',data,'POST')}

