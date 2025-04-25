import koa from 'koa';
import router from './router/index.js';
import bodyParser from '@koa/bodyparser';
import {appPort} from './config/index.js';
import {errorHanlde, logRT, setRt} from './middleware/index.js';

const app = new koa();

app.use(logRT)
app.use(setRt)
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(errorHanlde);

app.context.author = 'Brota'

app.listen(appPort, () => {
    console.log('Server is running on http://localhost:' + appPort);
});

