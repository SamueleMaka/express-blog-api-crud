import posts from "../data.js";

// index
const index = (req,res) => { 
    res.json({
        dataEl: req.searchResult,
        indexEl: req.indexEl,
    });
}


// show
const show = (req,res) =>{ 
        res.json(req.currPost)
        res.sendStatus(204);
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
    const postId = Number(req.params.id); // lo tengo solo per l'output
    const postUpdate = req.body;
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