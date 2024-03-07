// import {getUser ,getUserProfile, addUser, followUser} from "./../controllers/user.ctrl.js";
import * as qwert from "./../controllers/user.ctrl.js";

module.exports = (router) => {

    router
        .route('/user/:id')
        .get(qwert.getUser)

    router
        .route('/user/profile/:id')
        .get(qwert.getUserProfile)

    router
        .route('/user')
        .post(qwert.addUser)

    router
        .route('/user/follow')
        .post(qwert.followUser)
}