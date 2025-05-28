import express from "express";
import router from "./routers/postsRouter.js";
import routeErrorMiddleware from "./middleware/routeErrorMiddleware.js";
import ErrorMiddleware from "./middleware/errorMiddleware.js";

const app = express();
const port = 3000;
app.use(express.json()); //! Mettere sempre in cima, ci sono impazzito aiuto

app.use(express.static("public"));
app.use("/posts", router);

/* Errore fittizio per testare
app.get('/crash', (req, res, next) => {
    const errore = new Error('errore');
    next(errore);
  });
*/

app.use(routeErrorMiddleware); 
app.use(ErrorMiddleware);


app.listen(port, ()=>{
    console.log("Server avviato");
})
