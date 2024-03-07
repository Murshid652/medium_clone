// import { User } from "../models/user.model";
import { Article } from "../models/article.model.js";
import { v2 as cloudinary } from 'cloudinary';

module.exports = {
    addArticle : (req,res,next) => {
        let { text, title, claps, description } = req.body

        if(req.files.image){
            cloudinary.uploader.upload(req.files.image.path , (result) => {
                let obj = {text , title, claps , description, feature_image: result.url !=null ? result.url : ''}

                saveArticle(obj)
            },{
                resourse_type: 'image',
                eager : [
                    {effect : 'sepia'}
                ]
            })
        }
        else {
            saveArticle({text, title, claps, description, feature_image: ''})
        }


        function saveArticle(obj){
            new Article(obj).save((err , article) => {
                if(err) res.send(err);
                else if(!article) res.send(400)
                else {
                    return article.addAuthor(req.body.author_id).then((_article) => {
                        return res.send(_article)
                    })
                }
                next();
            })
        }
    },
    getAll : (req,res,next) => {
        Article.find(req.params.id)
        .populate('author')
        .populate('comments.author')
        .exec((err, article) => {
            if(err) res.send(err);
            else if(!article) res.send(404);
            else res.send(article);
            next();
        })

    },
    clapArticle : (req,res,next) => {
        Article.findById(req.body.article_id).then((article)=>{
            return article.clap().then(()=>{
                return res.json({msg: "DONE"})
            })
        }).catch(next)
    },
    commentArticle : (req,res,next) => {
        Article.findById(req.body.article_id).then((article) => {
            return article.comment({
                author : req.body.author_id,
                text: req.body.comment
            })
            .then(()=>{
                return res.json({msg : "DONE"})
            })
        })
        .catch(next)
    },
    getArticle : (req,res,next) => {
        Article.findById(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err , article) => {
            if (err)
                res.send(err)
            else if (!article)
                res.send(404)
            else
                res.send(article)
            next()
        })
    }
}
