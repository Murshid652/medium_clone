const user = require('./user')
const article = require('./article')

import user from "./user.route.js";
import article from "./article.route.js";

module.exports = (router) => {
    user(router)
    article(router)
}