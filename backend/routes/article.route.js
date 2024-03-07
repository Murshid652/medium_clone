import * as qwert from "./../controllers/article.ctrl.js"

// const articlecontroller = require('./../controllers/article.ctrl')
// const multipart = require('connect-multiparty')

import multipart from "connect-multiparty"
const multipartWare = multipart();

module.exports = (router) => {

    router
        .route('/articles')
        .get(qwert.getAll)

    router
        .route('/article')
        .post(multipartWare, qwert.addArticle)

    router
        .route('/article/clap')
        .post(qwert.clapArticle)

    router
        .route('/article/comment')
        .post(qwert.commentArticle)

    router
        .route('/article/:id')
        .get(qwert.getArticle)
}