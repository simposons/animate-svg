
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

/**
 *
 *
 * @export
 * @class AnimateSvg
 */
var AnimateSvg = /** @class */ (function () {
    function AnimateSvg(key, options) {
        this.key = '';
        this.svgKey = '';
        this.options = {
            file: '',
            animation: '',
            duration: 200
        };
        this.divElement = null;
        this.svgElement = null;
        this.elementList = null;
        this.elementLengthList = [];
        this.key = key;
        this.svgKey = "".concat(key.slice(1), "-svg");
        this.options = __assign(__assign({}, this.options), options);
        if (this.key === '') {
            console.error('无法获取key,请传入');
            return;
        }
        void this.init();
    }
    /**
       *初始化方法
       * @protected
       * @return {*}  {Promise<void>}
       * @memberof AnimateSvg
       */
    AnimateSvg.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initSvg()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getPath()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setAnimate()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
       *初始化 element节点 加载svg
       * @protected
       * @return {*}  {Promise<void>}
       * @memberof AnimateSvg
       */
    AnimateSvg.prototype.initSvg = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.divElement = document.querySelector(_this.key);
                            if (_this.divElement == null) {
                                console.error('请传入正确的key，以获取正确的document');
                                return;
                            }
                            var Req = new window.XMLHttpRequest();
                            Req.addEventListener('load', function (e) {
                                var element = _this.divElement;
                                element.innerHTML = e.currentTarget.responseText;
                                _this.svgElement = element.querySelector('svg');
                                _this.svgElement.setAttribute('id', _this.svgKey);
                                resolve(0);
                            });
                            Req.open('GET', _this.options.file);
                            Req.send();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
       *  获取svg中path节点和path长度
       * @protected
       * @return {*}  {Promise<void>}
       * @memberof AnimateSvg
       */
    AnimateSvg.prototype.getPath = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var _a;
                            _this.elementList = (_a = _this.svgElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll('path');
                            var elementList = Array.from(_this.elementList);
                            console.log({ elementList: elementList });
                            elementList.forEach(function (item) {
                                item.setAttribute('data-length', item.getTotalLength().toString());
                                var obj = {
                                    length: item.getTotalLength().toString(),
                                    element: item
                                };
                                _this.elementLengthList.push(obj);
                                resolve(0);
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
       * 设置path动画
       * @protected
       * @memberof AnimateSvg
       */
    AnimateSvg.prototype.setAnimate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keyframes, style;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyframes = '@keyframes offset {to { stroke-dashoffset: 0;}}';
                        style = document.createElement('style');
                        // 将 keyframes样式写入style内
                        style.innerHTML = keyframes;
                        // 将style样式存放到box标签
                        document.getElementsByTagName('head')[0].appendChild(style);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.elementLengthList.forEach(function (item) {
                                    var element = item.element, length = item.length;
                                    console.log({ element: element }, { length: length });
                                    element.style.strokeDasharray = length + ' ' + length;
                                    element.style.strokeDashoffset = length;
                                    element.style.animation = 'offset 1.5s linear 1 forwards';
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
       *外放方法 获取path对象及长度
       * @return {*}  {Array<pathType>}
       * @memberof AnimateSvg
       */
    AnimateSvg.prototype.getelementList = function () {
        console.log('elementLengthList', this.elementLengthList);
        return this.elementLengthList;
    };
    return AnimateSvg;
}());

export { AnimateSvg as default };
//# sourceMappingURL=index.esm.js.map
