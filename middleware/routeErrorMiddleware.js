function routeErrorMiddleware (req,res,next){
    res.status(404);
    res.json({
        error : "Rotta insesistente"
    })
    next();
}

export default routeErrorMiddleware;