const express = require('express');
const newsRouter = express.Router();
const axios = require('axios')
const apiKey = process.env.API_KEY
const url = `https://newsapi.org/v2/everything?q=playstation&apiKey=${apiKey}`



newsRouter.get('/', async(req, res)=> {
    try {
        const newsApi = await axios.get(url)
        res.render('news', {data: newsApi.data})
        
    }
    catch(error){
       console.log(error)
    }
        
    
});




module.exports = newsRouter