import posts from "../data.js"

function researchMiddleware(req,res,next){
    const searchParam = req.query.tags;
    let searchResult = posts;
    if(searchParam !== undefined){
        searchResult = searchResult.filter(currPost => currPost.tags.includes(searchParam));
    }else{
        req.searchResult = searchResult;
        req.indexEl = searchResult.length;
        next();
    }
}

export default researchMiddleware;


// NON FUNZIONA