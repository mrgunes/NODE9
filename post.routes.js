const express = require('express')
const router = express.Router()

/*Model */
const PostModel = require('../models/Post')

router.get('/', (req, res) => {
    /*PostModel.find()
                    .then((resultData)=>{res.json(resultData)})
                    .catch((error)=>{res.json(error)});*/
    PostModel.find((resultData,error)=>{
        if(error) res.json(error)
        res.json(resultData)
    })
})


router.get('/find', (req, res) => {
    PostModel.find({isActive:false,subTitle:'My Subtitle'},'title isActive')
                    .then((resultData)=>{res.json(resultData)})
                    .catch((error)=>{res.json(error)});    
})

router.get('/findOne', (req, res) => {
    PostModel.findOne({isActive:false,subTitle:'My Subtitle'},'title')
                    .then((resultData)=>{res.json(resultData)})
                    .catch((error)=>{res.json(error)});    
})

router.get('/findById', (req, res) => {
    PostModel.findById('6032d72db905323a284faf8e')
                    .then((resultData)=>{res.json(resultData)})
                    .catch((error)=>{res.json(error)});    
})

router.post('/', function (req, res) {
    const myPostModel = new PostModel({
        title:"My new title 2",
        subTitle:"My Subtitle 2",
        //createdDate:Date.now(),
        isActive:true,
        meta:{votes:54,favs:93},
        comments:[{message:'Good Job!'},{message:'Bad Job!'}]
    });
    myPostModel.save((err,data)=>{
        if(err) res.json(err)
        res.json(data)
    });
})

module.exports = router