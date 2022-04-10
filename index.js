"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var express_1 = require("express");
var express_session_1 = require("express-session");
var path_1 = require("path");
var pg_1 = require("pg");
var app = (0, express_1.default)();
// connecting the database to the server
exports.client = new pg_1.Client({
    database: process.env.DATABASE_URL
    // user: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD
});
exports.client.connect();
// setting up cookies for clients such that server could recognize the session of each request 
app.use((0, express_session_1.default)({
    secret: 'Cloud Computing Group Project',
    resave: true,
    saveUninitialized: true
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve('./public/landing.html'));
});
var registerUser_1 = require("./registerUser");
var loginUser_1 = require("./loginUser");
var logOutUser_1 = require("./logOutUser");
var getProducts_1 = require("./getProducts");
var adminAddProduct_1 = require("./adminAddProduct");
var adminDeleteProduct_1 = require("./adminDeleteProduct");
var adminUpdateProduct_1 = require("./adminUpdateProduct");
var userAddOrder_1 = require("./userAddOrder");
var userDeleteOrder_1 = require("./userDeleteOrder");
var userGetOrders_1 = require("./userGetOrders");
var userUpdateProfile_1 = require("./userUpdateProfile");
var getLogInStatus_1 = require("./getLogInStatus");
var userGetDetails_1 = require("./userGetDetails");
app.use(registerUser_1.registerUserRoute);
app.use(loginUser_1.loginUserRoute);
app.use(logOutUser_1.logOutUserRoute);
app.use(getProducts_1.getProductsRoute);
app.use(getLogInStatus_1.getLogInStatusRoute);
app.use(userGetDetails_1.userGetDetailsRoute);
app.use(userAddOrder_1.userAddOrderRoute);
app.use(userDeleteOrder_1.userDeleteOrderRoute);
app.use(userGetOrders_1.userGetOrdersRoute);
app.use(userUpdateProfile_1.userUpdateProfileRoute);
app.use(adminAddProduct_1.adminAddProductRoute);
app.use(adminDeleteProduct_1.adminDeleteProductRoute);
app.use(adminUpdateProduct_1.adminUpdateProductRoute);
app.use(express_1.default.static('public'));
app.listen(process.env.PORT || 5000);

