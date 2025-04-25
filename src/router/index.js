import Router from '@koa/router';
import userRoute from './user.route.js';

const router = new Router({
    prefix: '/api',
});

router.get('/', async (ctx) => {
    ctx.type = 'text/html';
    ctx.body = '<h1>Hello World</h1>';
})

router.get('/about', async (ctx) => {
    const name = ctx.query.name || 'Guest';
    ctx.response.set('content-type', 'text/plain');
    ctx.body = 'About Us' + '\n' + 'Hello ' + name;
})

router.get('/err', (ctx) => {
    ctx.body = 'This will not be reached';

    throw new Error('This is an error');
});

router.use(userRoute.routes(), userRoute.allowedMethods());

export default router;