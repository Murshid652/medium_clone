// const user = require('./user')
// const article = require('./article')

import * as user from "./user.route.js";
import * as article from "./article.route.js";

module.exports = (router) => {
    user(router)
    article(router)
}