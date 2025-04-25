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