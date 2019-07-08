const express=require("express");
const hbs=require("hbs");

const app=express();
const port=process.env.PORT||3000;
hbs.registerPartials(__dirname+'/views/partials/');
hbs.registerHelper('year',()=>{
    return new Date().getFullYear();
})
app.set('view engine','hbs');
app.use((req,res,next)=>{
    var now=new Date().getFullYear();
    console.log(`${now}:${req.method} ${req.url}`);
    next();
});

// app.use((req,res,next)=>{
//     res.render("maintanance.hbs");
// });
//app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.render(
        "home.hbs",{
            page:"Home Page",
            greet:"Welcome Hetal",
        }
    );
});

app.get('/about',(req, res)=>{
    res.render("about.hbs",{
        page: "About Page",
       
    });
});
app.get('/bad',(req,res)=>{
    res.send({
        errMsg:"bad request you have made!"
    });
});
app.get('/demo',(req,res)=>{
    res.send("j");
});
app.listen(port,()=>{
    console.log(`server is on port ${port}`);
});
