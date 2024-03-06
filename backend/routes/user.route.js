import {getUser ,getUserProfile, addUser, followUser} from "./../controllers/user.ctrl";

module.exports = (router) => {

    router
        .route('/user/:id')
        .get(getUser)

    router
        .route('/user/profile/:id')
        .get(getUserProfile)

    router
        .route('/user')
        .post(addUser)

    router
        .route('/user/follow')
        .post(followUser)
}