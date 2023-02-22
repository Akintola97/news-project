const express = require('express');
const newsRouter = express.Router();
const axios = require('axios')
const apiKey = process.env.API_KEY
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=30&apiKey=${apiKey}`


newsRouter.post('/', async(req, res)=>{
    const title = req.body.title
    const urlSearch = `https://newsapi.org/v2/everything?q=${title}&searchIn=title&pageSize=30&language=en&apiKey=${apiKey}`

    try{
        const searchApi  = await axios.get(urlSearch)
        res.render('search', {news: searchApi.data})
       
    }
    catch(error){
        console.log(error)
     }
})


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