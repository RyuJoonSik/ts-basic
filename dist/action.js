"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFailedAction = exports.SearchSuccessAction = exports.SearchAction = void 0;
var SearchAction = /** @class */ (function () {
    function SearchAction(payload) {
        this.payload = payload;
        this.actionType = "SEARCH";
    }
    return SearchAction;
}());
exports.SearchAction = SearchAction;
var SearchSuccessAction = /** @class */ (function () {
    function SearchSuccessAction(payload) {
        this.payload = payload;
        this.actionType = "SEARCH_SUCCESS";
    }
    return SearchSuccessAction;
}());
exports.SearchSuccessAction = SearchSuccessAction;
var SearchFailedAction = /** @class */ (function () {
    function SearchFailedAction() {
        this.actionType = "SEARCH_FAILED";
    }
    return SearchFailedAction;
}());
exports.SearchFailedAction = SearchFailedAction;
