import posts from "../data.js"

function postContentChecker (req,res,next){
    const postId = Number(req.params.id); // ho preferito essere un po' rindondante
    const currPost = posts.find((postToFind) => postToFind.id === postId)
    if(currPost.titolo.trim() === "" || currPost.contenuto.trim() === "" || currPost.immagine.trim() === ""){
        res.status(404);
        res.json({
            dataEl: "devi inserire dei dati validi"
        })
    }else{
        next();
    }
}



export default postContentChecker;


/* NON VAAAA */