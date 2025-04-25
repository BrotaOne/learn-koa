export const logRT = async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.author} ${ctx.method} ${ctx.url} - ${rt}`);
};

export const setRt = async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
};

export const errorHanlde = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err.status === 404) {
            ctx.status = 404;
            ctx.body = 'Page Not Found';
        } else {
            ctx.status = err.status || 500;
            ctx.body = err.message || 'Internal Server Error';
        }
    }
};