"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFailedAction = exports.SearchSuccessAction = exports.SearchAction = void 0;
class SearchAction {
    payload;
    actionType = "SEARCH";
    constructor(payload) {
        this.payload = payload;
    }
}
exports.SearchAction = SearchAction;
class SearchSuccessAction {
    payload;
    actionType = "SEARCH_SUCCESS";
    constructor(payload) {
        this.payload = payload;
    }
}
exports.SearchSuccessAction = SearchSuccessAction;
class SearchFailedAction {
    actionType = "SEARCH_FAILED";
}
exports.SearchFailedAction = SearchFailedAction;
