const Koa = require('Koa');
//10- Import this file to your server.js file
const HomeRoutes = require('./routes/home.router');
const PostsRoutes = require('./routes/post.routes')
const bodyParser = require('koa-bodyparser');


const app = new Koa();
app.use(bodyParser());
//app.use(PostsRoutes());
/*
app.use(ctx =>{
    ctx.body = 'Hello world';
});*/

app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());
app.use(PostsRoutes.routes()).use(PostsRoutes.allowedMethods());
app.listen(3000);
console.log('Application running on port 3000');

