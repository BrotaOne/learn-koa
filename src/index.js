import koa from 'koa';
import router from './router/index.js';
import bodyParser from '@koa/bodyparser';
import staticServer from 'koa-static';
import mount from 'koa-mount';
import {appPort} from './config/index.js';
import {errorHanlde, logRT, setRt} from './middleware/index.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = new koa();

app.use(logRT)
app.use(setRt)
app.use(bodyParser());
app.use(
    mount(
        '/static',
        staticServer(
            join(__dirname, '..', 'public')
        )
    )
);

app.use(router.routes());
app.use(router.allowedMethods());
app.use(errorHanlde);

app.context.author = 'Brota'

app.listen(appPort, () => {
    console.log('Server is running on http://localhost:' + appPort + '/api');
});

