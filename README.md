# 目的

只是为了学习

# 如何简单 mock

get 方法直接在浏览器打开即可, post 方法参考下面

```js
fetch(
    '/user',
    {
        method: 'POST',  
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: '123',
            age: 12
        })
    }
)
```

# koa 相关包

@koa/bodyparser 处理 body 上参数

@koa/router 处理路由

# env

暂时还没搞定本地虚拟环境的 mysql

```.env
APP_PORT = 3001

MYSQL_HOST = 
MYSQL_PORT = 3306
MYSQL_USER = 
MYSQL_PASSWORD = 
MYSQL_DB = 
```