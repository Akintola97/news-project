const express = require('express');
const articleRouter = express.Router();
const axios = require('axios')
const apiKey = process.env.API_KEY





articleRouter.get('/:title', async(req, res)=> {
    const articleTitle = req.params.title
    const url = `https://newsapi.org/v2/everything?q=playstation&title=${articleTitle}&apiKey=${apiKey}`
    try {
        const newsApi = await axios.get(url)
        res.render('articleDisplay', {display: newsApi.data})
       
    }   
    catch(error){
       console.log(error)
    }
        
    
});




module.exports = articleRouter