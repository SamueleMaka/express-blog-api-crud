import posts from "../data.js";

// index
const index = (req,res) => { 
    const searchParam = req.query.tags;
    let searchResult = posts;
    if(searchParam !== undefined){
        searchResult = searchResult.filter(currPost => currPost.tags.includes(searchParam));
    }
    res.json({
        dataEl: searchResult,
        indexEl: searchResult.length,
    });
}


// show
const show = (req,res) =>{ 
    const postId = Number(req.params.id);
    const currPost = posts.find((postToFind) => postToFind.id === postId)

    if(currPost === undefined){
        res.status(404);
        res.json({
            dataEl: "Elemento Inesistente"
        })
    }else{
        res.json(currPost)
        res.sendStatus(204);
    }
}


// store
const store = (req,res) =>{
    const newPost = req.body;
    newPost.id = posts.length;
    posts.push(newPost);
    res.json({
        dataEl: "Il nuovo elemento è stato creato"
    })
}

// update
const update = (req,res) => {
    const postId = Number(req.params.id);
    const postUpdate = req.body;
    const currPost = posts.find((postToFind) => postToFind.id === postId)

    if(!currPost){ // si controlla se effettivamente è stato trovato qualcosa, in caso contrario si invia un errore
        return res.status(404).json({
            dataEl: "Elemento Insesistente"
        })
    }
        currPost.titolo = postUpdate.titolo;
        currPost.contenuto = postUpdate.contenuto;
        currPost.tags = postUpdate.tags;
        currPost.immagine = postUpdate.immagine;
        res.json({
            dataEl: postUpdate,
            message: `modifico il post con id: ${postId}`
        })
}


// destroy
const destroy = (req, res) =>{ 
    const postId = Number(req.params.id);
    const postIndex = posts.findIndex((currElem) => { // cerchiamo l'indice del post da eliminare
        return currElem.id === postId;
    })
    if(postIndex === -1){ // si controlla che esista il post
        return res.status(404).json({
            dataEl: "Post non trovato"
        })
    }
    posts.splice(postIndex, 1)
    res.status(200).json({
        dataEl: `l'elemento con ID ${postId} è stato eliminato`
    })
}

const foodsController = {
    index,
    show,
    store,
    update,
    destroy
}

export default foodsController;