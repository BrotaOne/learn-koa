import Router from "@koa/router";

const userRoute = new Router({
    prefix: "/user",
});

userRoute.get('s', async (ctx) => {
    ctx.type = 'text/html';
    ctx.body = '<h1>Hello User</h1>';
})

userRoute.post('/', async (ctx) => {
    const { name, age } = ctx.request.body
    ctx.body = {
        name,
        age
    }
    ctx.status = 200;
});

userRoute.get('/:name', async (ctx) => { 
    const { name } = ctx.params;
    ctx.type = 'application/json';
    ctx.body = {
        name,
        age: 20
    }
    ctx.status = 200;
})

export default userRoute;