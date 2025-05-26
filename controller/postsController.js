import posts from "../data.js";

// index
const index = (req,res) => { //! DA IMPLEMENTARE LA RICERCA
    res.json({
        dataEl: posts,
        indexEl: posts.length,
    });
}


// show
const show = (req,res) =>{ 
    const postId = Number(req.params.id);
    const currPost = posts.find((postToFind) => postToFind.id === postId)
    res.json(currPost)
    res.sendStatus(204);
}


// store
const store = (req,res) =>{
    res.json({
        dataEl: "Il nuovo elemento è stato creato"
    })
}

// update
const update = (req,res) => {
    const postId = req.params.id;
    const currPost = posts.find((postToFind) => postToFind.id === postId)
    res.json({
        dataEl: `modifico il post con id: ${postId}`
    })
}


// destroy
const destroy = (req, res) =>{ 
    const postId = req.params.id;
    const filteredPosts = posts.filter((currElem) => {
        Number(currElem.id) !== Number(postId)
    })
    res.json({
        dataEl: filteredPosts
    });
    res.sendStatus(204);
}

const foodsController = {
    index,
    show,
    store,
    update,
    destroy
}

export default foodsController;