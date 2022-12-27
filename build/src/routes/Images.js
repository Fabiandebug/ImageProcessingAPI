"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizer_1 = __importDefault(require("../utilities/resizer"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var imageResizer = express_1.default.Router();
imageResizer.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var filename, width, height, fname, w, h, inPath, outPath;
    return __generator(this, function (_a) {
        filename = req.query.filename;
        width = req.query.width;
        height = req.query.height;
        fname = typeof filename === 'string' ? filename : '';
        w = typeof width === 'string' ? parseInt(width, 0) : 0;
        h = typeof height === 'string' ? parseInt(height, 0) : 0;
        inPath = path_1.default.join(__dirname, '..', '..', 'images', fname + '.jpg');
        outPath = path_1.default.join(__dirname, '..', '..', 'images', 'resizedimg', fname + w + 'x' + h + '.jpg');
        if (filename != null) {
            //filename is entered in query string.
            if (!fs_1.default.existsSync(inPath)) {
                //check if that file exists or not,if the file doesn't exist, return file not found.
                res
                    .status(404)
                    .send('File not found,Enter correct image name');
            }
            //file exists
            else {
                //if there is no width or hight entered, return original image.
                if (width == null && height == null) {
                    //return original image.
                    res.status(200).sendFile(inPath);
                }
                else {
                    //first check if a resized image is stored, if not then resize it .
                    if (!fs_1.default.existsSync(outPath)) {
                        //if a resized image doesn't exist, resize a new image using sharp and save 
                        if (width != null && height != null) {
                            //both width and height are entered
                            //if width and height are not numbers, raise error
                            if (isNaN(w) || isNaN(h)) {
                                res.status(400).send({
                                    error: 'Invalid width or height',
                                    message: 'Please enter a number for the width and height'
                                });
                            }
                            else {
                                //resize the image and return the result.
                                try {
                                    (0, resizer_1.default)(fname, w, h).then(function () {
                                        res.status(200).sendFile(outPath);
                                    });
                                }
                                catch (error) {
                                    console.error(error);
                                    res.status(500).send("Failed to resize image");
                                }
                            }
                        }
                    }
                    //Retrieve a stored image if it exixts
                    else {
                        res.sendFile(outPath);
                        res.status(201);
                    }
                }
            }
        }
        else {
            //Check if image name has been provided.
            res.status(400).send('Please provide the image name');
        }
        return [2 /*return*/];
    });
}); });
//export func
exports.default = imageResizer;
