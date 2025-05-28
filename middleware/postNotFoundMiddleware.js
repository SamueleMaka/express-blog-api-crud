import posts from "../data.js"

function postNotFoundCheck(req,res,next){
    const postId = Number(req.params.id);
    const currPost = posts.find((postToFind) => postToFind.id === postId)

    if(currPost === undefined){
        res.status(404);
        res.json({
            dataEl: "Elemento Inesistente"
        })
    }else{
        req.currPost = currPost;
        next();
    }
}

export default postNotFoundCheck