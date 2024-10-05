import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port=2000;
const sv_app=express();
const sv_path=path.dirname(fileURLToPath(import.meta.url));

sv_app.listen(port,() => {
  console.log(`port ${port} connected...`);
})

sv_app.use("/static",express.static(path.join(sv_path,"static")));

sv_app.get("/",(req,res) => {
  res.sendFile(path.join(sv_path,"login.html"));
})

