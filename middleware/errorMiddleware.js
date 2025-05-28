function ErrorMiddleware (err, req,res,next){
    res.status(500);
    res.json({
        error: "errore nel server"
    })
}

export default ErrorMiddleware