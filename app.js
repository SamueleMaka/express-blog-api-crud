import express from "express";
import router from "./routers/postsRouter.js";

const app = express();
const port = 3000;
app.use(express.json()); //! Mettere sempre in cima, ci sono impazzito aiuto

app.use(express.static("public"));
app.use("/posts", router);

app.listen(port, ()=>{
    console.log("Server avviato");
})
