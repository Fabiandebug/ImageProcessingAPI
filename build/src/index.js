"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
var express_1 = __importDefault(require("express"));
var defaultRender_1 = __importDefault(require("./routes/defaultRender"));
var Images_1 = __importDefault(require("./routes/Images"));
//Server Initialization
var app = (0, express_1.default)();
var port = 3000;
//Routes.
app.use('/', defaultRender_1.default);
app.use('/images', Images_1.default);
app.listen(port, function () {
    console.log('server is running on localhost:' + port);
});
