import ajax from './ajax'
import axios from 'axios'
//设置跨域，跨域地址为http://localhost:4000
import apiConfig from '../../config/api.config.js'
axios.defaults.baseURL=apiConfig.baseURL

// 用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')
// 发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode', {phone})
// 手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
// 根据会话获取用户信息
export const reqUserInfo = () => ajax('/home')
// 用户登出
export const reqLogout = () => ajax('/logout')
