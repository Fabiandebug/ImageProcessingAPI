"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resizer_1 = __importDefault(require("../../utilities/resizer"));
var fs_1 = __importDefault(require("fs"));
var assert_1 = __importDefault(require("assert"));
var path_1 = __importDefault(require("path"));
describe('Testing if image processing works', function () {
    it('should generate a resized image path', function () {
        var fname = 'santamonica';
        var w = 250;
        var h = 500;
        var inPath = path_1.default.join(fname);
        console.log(inPath);
        var outPath = path_1.default.join(__dirname, '..', '..', '..', 'src', 'images', 'resizedimg', fname + w + 'x' + h + '.jpg');
        // Test if the function generates a resized image
        if (fs_1.default.existsSync(outPath)) {
            fs_1.default.unlinkSync(outPath);
        }
        return (0, resizer_1.default)(inPath, w, h).then(function () {
            (0, assert_1.default)(fs_1.default.existsSync(outPath));
        });
    });
});
