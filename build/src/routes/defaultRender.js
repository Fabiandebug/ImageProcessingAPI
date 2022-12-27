"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mainRender = express_1.default.Router();
mainRender.get('/', function (req, res) {
    res.send('Image Processing API!').status(200);
});
exports.default = mainRender;
