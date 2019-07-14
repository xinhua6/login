# login
vue+nodejs实现登录系统

vue为前台框架
运行命令：npm run dev


nodejs为后台
使用框架express+mongoose
运行命令：npm run start

同时运行自己电脑上的数据库，这里我用的是MongoDB

实现功能：
1.路由守卫，只有登录成功才可以进入首页
2.用户密码登录，手机短信登录两种登录方式
3.登录成功后显示用户信息，刷新时信息不消失
4.如果超过登录时间，退出登录，回到登录界面（这是我在nodejs设置的登录时间为24小时，有需要的可以按照自己项目需求更改，在app.js上）


详细的编码思路请查看：https://www.cnblogs.com/lanhuo666/p/11167273.html
