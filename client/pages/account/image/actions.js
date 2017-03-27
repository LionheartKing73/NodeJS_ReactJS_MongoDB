'use strict';
const ApiActions = require('../../../actions/api');
const Constants = require('./constants');
const Store = require('./store');


class Actions {
    static getDetails() {

        ApiActions.get(
            '/api/accounts/my',
            undefined,
            Store,
            Constants.GET_DETAILS,
            Constants.GET_DETAILS_RESPONSE
        );
    }   

    static getUser() {

        ApiActions.get(
            '/api/users/my',
            undefined,
            Store,
            Constants.GET_USER,
            Constants.GET_USER_RESPONSE
        );
    }

    // === image upload ===
    static uploadImage(data) {

        ApiActions.post(
            '/api/accounts/imageUpLoad',
            data,
            Store,
            Constants.SAVE_DETAILS,
            Constants.SAVE_DETAILS_RESPONSE
        );
    }     

}

module.exports = Actions;
