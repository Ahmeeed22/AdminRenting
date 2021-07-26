"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var jwt_decode_1 = require("jwt-decode");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(_HttpClient, _Router) {
        this._HttpClient = _HttpClient;
        this._Router = _Router;
        this.currentUser = new rxjs_1.BehaviorSubject(null);
        if (localStorage.getItem("userToken") != null) {
            this.saveCurrentUser();
        }
    }
    AuthService.prototype.saveCurrentUser = function () {
        var token = localStorage.getItem("userToken");
        this.currentUser.next(jwt_decode_1["default"](token));
        console.log(this.currentUser);
    };
    AuthService.prototype.login = function (formData) {
        return this._HttpClient.post("http://localhost:3333/api/user/login", formData);
    };
    AuthService.prototype.register = function (formData) {
        return this._HttpClient.post("http://localhost:3333/api/user/add-user", formData);
    };
    AuthService.prototype.logout = function () {
        this.currentUser.next(null);
        localStorage.clear();
        this._Router.navigate(["./sign-in"]);
    };
    AuthService.prototype.getAllUser = function () {
        return this._HttpClient.get("http://localhost:3333/api/user/all-user");
    };
    AuthService.prototype.deleteUser = function (id) {
        return this._HttpClient["delete"]("http://localhost:3333/api/user/delete-user/" + id);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
