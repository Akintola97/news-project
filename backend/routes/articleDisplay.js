const express = require('express');
const articleRouter = express.Router();
const axios = require('axios')
const apiKey = process.env.API_KEY





articleRouter.get('/:url', async(req, res)=> {
    const articleUrl = req.params.url
    const url = `https://newsapi.org/v2/everything?q=${url}&searchIn=url&apiKey=${apiKey}`
    try {
        const newsApi = await axios.get(url)
        res.render('articleDisplay', {display: newsApi.data.articles[0]})
        console.log("API CALL")
        console.log(newsApi.data)
    }   
    catch(error){
       console.log(error)
    }
        
    
});




module.exports = articleRouter