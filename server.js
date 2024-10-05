import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port=2000;
const sv_app=express();
const sv_path=path.dirname(fileURLToPath(import.meta.url));

function validity(req,res,next) {
  req.validVal=req.body._email==="abc@gmail.com" && req.body._pass==="000";
  next();
}

sv_app.use(express.urlencoded({extended:true}));

sv_app.listen(port,() => {
  console.log(`port ${port} connected...`);
})

sv_app.use("/static",express.static(path.join(sv_path,"static")));
sv_app.use(validity);
sv_app.set("view engine","ejs")
sv_app.set("views",path.join(sv_path,"static"));

sv_app.get("/",(req,res) => {
  res.sendFile(path.join(sv_path,"login.html"));
})

sv_app.post("/login",(req,res) => {
  res.render("main.ejs",{
    email:req.body._email,
    password:req.body._pass
  })
})

