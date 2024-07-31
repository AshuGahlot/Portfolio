import express from "express";
import routes from "./router/routes.js";
import path from "path";
const app =express();

const port=process.env.PORT|| 3000;

//statics file
app.use(express.static(path.join(process.cwd(),'public')))

//ejs file
app.set('view engine','ejs');
app.set('views','./views')


//router
app.use('/',routes)

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})