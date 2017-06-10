/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 326);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(38);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(47)('wks')
  , uid        = __webpack_require__(32)
  , Symbol     = __webpack_require__(6).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(19)
  , IE8_DOM_DEFINE = __webpack_require__(81)
  , toPrimitive    = __webpack_require__(50)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(156)
  , defined = __webpack_require__(41);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Console = undefined;

var _toConsumableArray2 = __webpack_require__(78);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(142);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Console = exports.Console = function () {
  function Console(native) {
    (0, _classCallCheck3.default)(this, Console);
    this._styles = {
      'b': {
        enterBrowser: {
          'font-weight': 'bold'
        },
        exitBrowser: {
          'font-weight': 'normal'
        },
        enterTerminal: [1],
        exitTerminal: null
      },

      'code': {
        enterBrowser: {
          'font-weight': 'bold',
          'border': '1px solid rgba(0,0,0,0.06)',
          'padding': '1px 3px 0px',
          'border-radius': '2px',
          'background': 'rgba(0,0,0,0.05)'
        },
        exitBrowser: {
          'font-weight': 'normal'
        },
        enterTerminal: [1],
        exitTerminal: null
      },

      'danger': {
        enterBrowser: {
          'font-weight': 'bold',
          'color': '#d64747'
        },
        exitBrowser: {
          'font-weight': 'normal',
          'color': 'initial'
        },
        enterTerminal: [31],
        exitTerminal: null
      }
    };
    this._tagPattern = new RegExp('<(\\/?)(' + (0, _keys2.default)(this._styles).join('|') + ')>', 'g');

    this._native = native;

    this._native.info = this._native.info || this._native.log;
    this._native.warn = this._native.warn || this._native.log;
    this._native.error = this._native.error || this._native.log;
  }

  (0, _createClass3.default)(Console, [{
    key: '_compile',
    value: function _compile(markup, terminalRestoreCode) {
      if (typeof window === 'undefined') {
        return this._compileTerminal(markup, terminalRestoreCode);
      }
      if (process.env.NODE_ENV !== 'production') {
        // If we're in a test
        if (typeof expect !== 'undefined') {
          return this._compileTerminal(markup, terminalRestoreCode);
        }
      }
      return this._compileBrowser(markup);
    }
  }, {
    key: '_compileBrowser',
    value: function _compileBrowser(markup) {
      var _this = this;

      var activeStyleRules = {};
      var styles = [];

      var template = markup.replace(this._tagPattern, function (_, closingSlash, tagName) {
        var isClosing = closingSlash === '/';
        var style = isClosing ? _this._styles[tagName].exitBrowser : _this._styles[tagName].enterBrowser;

        activeStyleRules = style;

        styles.push((0, _keys2.default)(activeStyleRules).map(function (k) {
          return k + ': ' + activeStyleRules[k];
        }).join(';'));

        return '%c';
      });

      return [template].concat(styles);
    }
  }, {
    key: '_compileTerminal',
    value: function _compileTerminal(markup, restoreCode) {
      var _this2 = this;

      return [markup.replace(this._tagPattern, function (_, closingSlash, tagName) {
        var isClosing = closingSlash === '/';
        var style = _this2._styles[tagName];

        var codes = isClosing ? style.exitTerminal == null ? restoreCode : style.exitTerminal : style.enterTerminal;

        return codes.map(function (code) {
          return '\x1B[' + code + 'm';
        }).join('');
      })];
    }
  }, {
    key: '_compileArgs',
    value: function _compileArgs(args, terminalRestoreCode) {
      if (typeof args[0] === 'string') {
        args = [].concat((0, _toConsumableArray3.default)(this._compile(args[0], terminalRestoreCode)), (0, _toConsumableArray3.default)(args.slice(1)));
      }

      return args;
    }
  }, {
    key: 'log',
    value: function log() {
      var _native;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_native = this._native).log.apply(_native, (0, _toConsumableArray3.default)(this._compileArgs(args, [0])));
    }
  }, {
    key: 'info',
    value: function info() {
      var _native2;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_native2 = this._native).info.apply(_native2, (0, _toConsumableArray3.default)(this._compileArgs(args, [0])));
    }
  }, {
    key: 'warn',
    value: function warn() {
      var _native3;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      (_native3 = this._native).warn.apply(_native3, (0, _toConsumableArray3.default)(this._compileArgs(args, [0, 33])));
    }
  }, {
    key: 'error',
    value: function error() {
      var _native4;

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      (_native4 = this._native).error.apply(_native4, (0, _toConsumableArray3.default)(this._compileArgs(args, [0, 31])));
    }
  }]);
  return Console;
}();

exports.default = new Console(console);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(24);
module.exports = __webpack_require__(8) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = exports.mutating = exports.VirtualNode = exports.Engine = exports.Hooks = undefined;

__webpack_require__(125);

var _MutatingDecorator = __webpack_require__(122);

var _MutatingDecorator2 = _interopRequireDefault(_MutatingDecorator);

var _VirtualNode2 = __webpack_require__(124);

var _VirtualNode3 = _interopRequireDefault(_VirtualNode2);

var _hooks = __webpack_require__(75);

var Hooks = _interopRequireWildcard(_hooks);

var _global = __webpack_require__(131);

var _global2 = _interopRequireDefault(_global);

var _Engine2 = __webpack_require__(37);

var _Engine3 = _interopRequireDefault(_Engine2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Hooks = Hooks;
exports.Engine = _Engine3.default;
exports.VirtualNode = _VirtualNode3.default;
var mutating = exports.mutating = _MutatingDecorator2.default.bind(null, false);
mutating.sync = _MutatingDecorator2.default.bind(null, true);
mutating.async = mutating;

// This part makes JSX work even if someone is using a transpiler
// that converts to `React.createElement` instead of `VirtualNode`.
if (_global2.default.React == null) {
  _global2.default.React = {
    createElement: _VirtualNode3.default
  };
}

var Node = exports.Node = process.env.NODE_ENV !== 'production' ? function () {
  return __webpack_require__(127);
} : undefined;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(79)
  , hide      = __webpack_require__(14)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(86)
  , enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _class, _temp;

var _EngineCollection = __webpack_require__(74);

var _EngineCollection2 = _interopRequireDefault(_EngineCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENGINE_INSTANCE_ID = -1;

var Engine = (_temp = _class = function () {
  function Engine(renderer) {
    (0, _classCallCheck3.default)(this, Engine);

    this._renderer = renderer;

    if (process.env.NODE_ENV !== 'production') {
      this.__id = ++ENGINE_INSTANCE_ID;
    }

    _EngineCollection2.default.instance.connectEngine(this);
  }

  (0, _createClass3.default)(Engine, [{
    key: 'render',
    value: function render(factory) {
      this.rerender = this.render.bind(this, factory);

      var vdom = typeof factory.render === 'function' ? factory.render() : factory.render;

      this._renderer.render(vdom);

      if (process.env.NODE_ENV !== 'production') {
        __webpack_require__(126).default(this, factory, vdom);
      }
    }
  }], [{
    key: 'snabbdomModules',
    get: function get() {
      var getModules = function getModules(p) {
        return p.snabbdomModules;
      };

      return this.plugins.filter(getModules).map(getModules).reduce(function (a, b) {
        return a.concat(b);
      });
    }
  }]);
  return Engine;
}(), _class.plugins = [], _temp);
exports.default = Engine;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(143);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(77);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(9)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(47)('keys')
  , uid    = __webpack_require__(32);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(41);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(31);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(6)
  , core           = __webpack_require__(5)
  , LIBRARY        = __webpack_require__(43)
  , wksExt         = __webpack_require__(52)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INSTANCE = void 0;

var EngineCollection = function () {
  function EngineCollection() {
    (0, _classCallCheck3.default)(this, EngineCollection);
    this._engines = [];
    this._isDirty = false;
  }

  (0, _createClass3.default)(EngineCollection, [{
    key: 'connectEngine',
    value: function connectEngine(engine) {
      this._engines.push(engine);
    }
  }, {
    key: 'notify',
    value: function notify(obj, prop, sync, newValue, oldValue) {
      var _this = this;

      if (sync) {
        this._notify();
        return;
      }

      if (this._isDirty) {
        return;
      }
      this._isDirty = true;

      this._tick(function () {
        _this._isDirty = false;
        _this._notify();
      });
    }
  }, {
    key: '_notify',
    value: function _notify() {
      for (var i = 0; i < this._engines.length; i++) {
        this._engines[i].rerender();
      }
    }
  }, {
    key: '_tick',
    value: function _tick(callback) {
      if (typeof requestIdleCallback !== 'undefined') {
        /* global requestIdleCallback */
        return requestIdleCallback(callback, { timeout: 100 });
      }

      if (typeof requestAnimationFrame !== 'undefined') {
        /* global requestAnimationFrame */
        return requestAnimationFrame(callback);
      }

      setTimeout(callback);
    }
  }], [{
    key: 'instance',
    get: function get() {
      return INSTANCE || (INSTANCE = new EngineCollection());
    }
  }]);
  return EngineCollection;
}();

exports.default = EngineCollection;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostHook = exports.RemoveHook = exports.Destroy = exports.PostPatchHook = exports.UpdateHook = exports.PrePatchHook = exports.InsertHook = exports.CreateHook = exports.InitHook = exports.PreHook = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreHook = exports.PreHook = function PreHook() {
  (0, _classCallCheck3.default)(this, PreHook);
};

var InitHook = exports.InitHook = function InitHook(node) {
  (0, _classCallCheck3.default)(this, InitHook);

  this.node = node;
};

var CreateHook = exports.CreateHook = function CreateHook(emptyVnode, vnode) {
  (0, _classCallCheck3.default)(this, CreateHook);

  this.old = emptyVnode;
  this.new = vnode;
  this.element = vnode.element;
};

var InsertHook = exports.InsertHook = function InsertHook(node) {
  (0, _classCallCheck3.default)(this, InsertHook);

  this.node = node;
  this.element = node.element;
};

var PrePatchHook = exports.PrePatchHook = function PrePatchHook(oldNode, node) {
  (0, _classCallCheck3.default)(this, PrePatchHook);

  this.old = oldNode;
  this.new = node;
  this.element = node.element;
};

var UpdateHook = exports.UpdateHook = function UpdateHook(oldNode, node) {
  (0, _classCallCheck3.default)(this, UpdateHook);

  this.old = oldNode;
  this.new = node;
  this.element = node.element;
};

var PostPatchHook = exports.PostPatchHook = function PostPatchHook(oldNode, node) {
  (0, _classCallCheck3.default)(this, PostPatchHook);

  this.old = oldNode;
  this.new = node;
  this.element = node.element;
};

var Destroy = exports.Destroy = function Destroy(node) {
  (0, _classCallCheck3.default)(this, Destroy);

  this.node = node;
  this.element = node.element;
};

var RemoveHook = exports.RemoveHook = function RemoveHook(node, callback) {
  (0, _classCallCheck3.default)(this, RemoveHook);

  this.node = node;
  this.done = callback;
};

var PostHook = exports.PostHook = function PostHook() {
  (0, _classCallCheck3.default)(this, PostHook);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArray;
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(141);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(149);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(21)(function(){
  return Object.defineProperty(__webpack_require__(80)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(43)
  , $export        = __webpack_require__(20)
  , redefine       = __webpack_require__(87)
  , hide           = __webpack_require__(14)
  , has            = __webpack_require__(9)
  , Iterators      = __webpack_require__(22)
  , $iterCreate    = __webpack_require__(160)
  , setToStringTag = __webpack_require__(45)
  , getPrototypeOf = __webpack_require__(168)
  , ITERATOR       = __webpack_require__(2)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(19)
  , dPs         = __webpack_require__(165)
  , enumBugKeys = __webpack_require__(42)
  , IE_PROTO    = __webpack_require__(46)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(80)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(155).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(86)
  , hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(9)
  , toIObject    = __webpack_require__(10)
  , arrayIndexOf = __webpack_require__(151)(false)
  , IE_PROTO     = __webpack_require__(46)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(48)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(170)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(82)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140)


/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(38);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

exports.default = MutatingDecorator;

var _Symbols = __webpack_require__(123);

var _isArray = __webpack_require__(76);

var _isArray2 = _interopRequireDefault(_isArray);

var _EngineCollection = __webpack_require__(74);

var _EngineCollection2 = _interopRequireDefault(_EngineCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MutatingDecorator(sync, prototype, name, desc) {
  if (!prototype[_Symbols.STATEFUL]) {
    prototype[_Symbols.STATEFUL] = true;
  }

  if (prototype[_Symbols.MUTATING_FIELDS] == null) {
    prototype[_Symbols.MUTATING_FIELDS] = [];
  }

  prototype[_Symbols.MUTATING_FIELDS].push(name);

  var VALUE = (0, _Symbols.createSymbol)('[[actual ' + name + ']]');

  if (desc && desc.initializer) {
    var initialValue = desc.initializer();

    if ((0, _isArray2.default)(initialValue)) {
      wrapArray(sync, initialValue);
    }

    prototype[VALUE] = initialValue;
  }

  var descriptor = {
    enumerable: true,
    configurable: false,
    get: function get() {
      return this[VALUE];
    },
    set: function set(newValue) {
      var oldValue = this[VALUE];

      if ((0, _isArray2.default)(newValue)) {
        wrapArray(sync, newValue, name);
      }

      this[VALUE] = newValue;

      _EngineCollection2.default.instance.notify(this, name, sync, newValue, oldValue);
    }
  };

  (0, _defineProperty2.default)(prototype, name, descriptor);

  return {};
}

var MUTATOR_METHODS = ['copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'];

function wrapArray(sync, subject, arrayPropName) {
  MUTATOR_METHODS.forEach(function (name) {
    if (typeof subject[name] === 'function') {
      var method = subject[name];
      subject[name] = function () {
        var oldValue = process.env.NODE_ENV === 'production' ? this : this.slice();
        var returnValue = method.apply(this, arguments);
        var newValue = this;
        ensureSetters(sync, this);
        _EngineCollection2.default.instance.notify(subject, arrayPropName, sync, newValue, oldValue);
        return returnValue;
      };
    }
  });
}

function ensureSetters(sync, array) {
  if (!array[_Symbols.STATEFUL]) {
    array[_Symbols.STATEFUL] = true;
  }

  if (array[_Symbols.MUTATING_FIELDS] == null) {
    array[_Symbols.MUTATING_FIELDS] = [];
  }

  var _loop = function _loop(i) {
    if (array[_Symbols.MUTATING_FIELDS].indexOf(i) !== -1) {
      return 'continue';
    }

    array[_Symbols.MUTATING_FIELDS].push(i);

    var INDEX = (0, _Symbols.createSymbol)('[[actual ' + i + ']]');

    array[INDEX] = array[i];

    (0, _defineProperty2.default)(array, i, {
      enumerable: true,
      configurable: false,
      get: function get() {
        return this[INDEX];
      },
      set: function set(newValue) {
        var oldValue = this[INDEX];
        this[INDEX] = newValue;
        _EngineCollection2.default.instance.notify(this, INDEX, sync, newValue, oldValue);
      }
    });
  };

  for (var i = 0; i < array.length; i++) {
    var _ret = _loop(i);

    if (_ret === 'continue') continue;
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MUTATING_FIELDS = exports.WATCHED = exports.STATEFUL = exports.UPDATE = exports.createSymbol = undefined;

var _symbol = __webpack_require__(77);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createSymbol = exports.createSymbol = typeof _symbol2.default === 'undefined' ? String : _symbol2.default;

var UPDATE = exports.UPDATE = createSymbol('[[UPDATE]]');
var STATEFUL = exports.STATEFUL = createSymbol('[[STATEFUL]]');
var WATCHED = exports.WATCHED = createSymbol('[[WATCHED]]');
var MUTATING_FIELDS = exports.MUTATING_FIELDS = createSymbol('[[MUTATING_FIELDS]]');

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualNode = exports.VirtualTextNode = undefined;

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = __webpack_require__(78);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _isArray = __webpack_require__(76);

var _isArray2 = _interopRequireDefault(_isArray);

var _Engine = __webpack_require__(37);

var _Engine2 = _interopRequireDefault(_Engine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VirtualTextNode = exports.VirtualTextNode = function () {
  function VirtualTextNode(text) {
    (0, _classCallCheck3.default)(this, VirtualTextNode);

    this.text = text;
    this.attributes = {};
    this.isTextNode = true;
  }

  (0, _createClass3.default)(VirtualTextNode, [{
    key: 'toString',
    value: function toString() {
      return this.text;
    }
  }, {
    key: 'toPureSnabbdomVNode',
    value: function toPureSnabbdomVNode() {
      return {
        sel: undefined,
        data: undefined,
        children: undefined,
        elm: undefined,
        text: this.text,
        key: undefined
      };
    }
  }]);
  return VirtualTextNode;
}();

var VirtualNode = exports.VirtualNode = function () {
  /**
   * Creates a new Virtual DOM Node.
   *
   * @param string       tagName    The tag name of the DOM node
   * @param any          attributes Attributes on the DOM node
   * @param Renderable[] children   DOM child nodes
   */
  function VirtualNode(tagName, attributes, children) {
    (0, _classCallCheck3.default)(this, VirtualNode);
    this.isTextNode = false;
    this._trackedChildren = null;
    this.text = undefined;
    this.elm = undefined;
    this.key = undefined;

    this.tagName = tagName;
    this.attributes = attributes == null ? {} : attributes;
    this.children = this._renderChildren(this._transformRenderables(children).filter(this._isRenderable));
    this.data = this._createSnabbdomData();

    if (process.env.NODE_ENV !== 'production') {
      this.__stack = process.env.NODE_ENV === 'test' ? '' : new Error().stack;
    }
  }

  /**
   * Filters out children that should not be rendered
   * at all.
   *
   * @param any renderable
   *
   * @returns Renderable
   */


  (0, _createClass3.default)(VirtualNode, [{
    key: '_isRenderable',
    value: function _isRenderable(renderable) {
      if (renderable == null) {
        return false;
      }

      if (renderable === '') {
        return false;
      }

      return true;
    }
  }, {
    key: '_transformRenderables',
    value: function _transformRenderables(renderables) {
      return renderables.map(this._transformRenderable);
    }
  }, {
    key: '_transformRenderable',
    value: function _transformRenderable(renderable) {
      for (var i = 0; i < _Engine2.default.plugins.length; i++) {
        var plugin = _Engine2.default.plugins[i];

        if (typeof plugin.transformRenderable === 'function') {
          var res = plugin.transformRenderable(renderable);

          if (res != null) {
            return res;
          }
        }
      }
      return renderable;
    }
  }, {
    key: 'toString',
    value: function toString() {
      if (this._circularCheck) {
        return '[circular]';
      }

      this._circularCheck = true;

      if (this.children == null || this.children.length === 0) {
        return this.tagName + ' {}';
      }

      var inner = this.children.map(function (c) {
        return c.toString();
      }).join('\n  ');

      this._circularCheck = false;

      return this.tagName + ' {\n  ' + inner + '\n}';
    }
  }, {
    key: '_renderChildren',
    value: function _renderChildren(childRenderable) {
      var _childRenderable$redu = childRenderable.reduce(VirtualNode._renderChild, {
        children: [],
        tracked: []
      }),
          children = _childRenderable$redu.children,
          tracked = _childRenderable$redu.tracked;

      if (process.env.NODE_ENV !== 'production') {
        this._ownTrackedChildren = tracked;
      }

      this._trackedChildren = [].concat((0, _toConsumableArray3.default)(tracked), (0, _toConsumableArray3.default)(children.reduce(function (a, c) {
        if (c._trackedChildren != null) {
          return a.concat(c._trackedChildren);
        }
        return a;
      }, [])));

      return children;
    }
  }, {
    key: 'toPureSnabbdomVNode',
    value: function toPureSnabbdomVNode() {
      return {
        sel: this.sel,
        data: this.data,
        children: this.children.map(function (c) {
          return c.toPureSnabbdomVNode();
        }),
        elm: this.elm,
        text: this.text,
        key: this.key
      };
    }

    /**
     * Creates the data property for the snabbdom
     * vnode. Should be considered unsafely mutable
     * and is referenced in the snabbdom "modules" (plugins).
     *
     * @returns Object
     */

  }, {
    key: '_createSnabbdomData',
    value: function _createSnabbdomData() {
      var _this = this;

      var data = {};
      var attributes = {};

      if ('key' in this.attributes) {
        data.key = this.attributes.key;
        delete this.attributes.key;
      }

      // Shallow copy
      for (var p in this.attributes) {
        attributes[p] = this.attributes[p];
      }

      _Engine2.default.plugins.forEach(function (p) {
        return (
          // This method may mutate data freely, and also
          // remove items from attributes, but not mutate
          // any of the attribute values
          p.consumeAttributes(data, attributes, _this)
        );
      });

      return data;
    }

    /**
     * @internal
     * @see snabbdom
     */

  }, {
    key: 'element',
    get: function get() {
      return this.elm || null;
    }
  }, {
    key: 'sel',
    get: function get() {
      return this.tagName;
    }

    /**
     * @internal
     * @see snabbdom
     */


    /**
     * @internal
     * @see snabbdom
     */


    /**
     * @internal
     * @see snabbdom
     */

  }], [{
    key: '_renderChild',
    value: function _renderChild(_ref, renderable) {
      var children = _ref.children,
          tracked = _ref.tracked;

      if (renderable == null) {
        return { children: children, tracked: tracked };
      }

      if (typeof renderable === 'string') {
        return {
          children: [].concat((0, _toConsumableArray3.default)(children), [new VirtualTextNode(renderable)]),
          tracked: tracked
        };
      }

      if ((0, _isArray2.default)(renderable)) {
        var _renderable$reduce = renderable.reduce(VirtualNode._renderChild, { children: [], tracked: [] }),
            reducedChildren = _renderable$reduce.children,
            reducedTracked = _renderable$reduce.tracked;

        return {
          children: [].concat((0, _toConsumableArray3.default)(children), (0, _toConsumableArray3.default)(reducedChildren)),
          tracked: [].concat((0, _toConsumableArray3.default)(tracked), (0, _toConsumableArray3.default)(reducedTracked))
        };
      }

      if ((typeof renderable === 'undefined' ? 'undefined' : (0, _typeof3.default)(renderable)) !== 'object') {
        return VirtualNode._renderChild({ children: children, tracked: tracked }, String(renderable));
      }

      if (renderable.render != null) {
        if (typeof renderable.render === 'function') {
          return VirtualNode._renderChild({
            children: children,
            tracked: [].concat((0, _toConsumableArray3.default)(tracked), [renderable])
          }, renderable.render());
        }

        return VirtualNode._renderChild({ children: children, tracked: tracked }, renderable.render);
      }

      return {
        children: [].concat((0, _toConsumableArray3.default)(children), [renderable]),
        tracked: tracked
      };
    }
  }]);
  return VirtualNode;
}();

exports.default = function (tagName, attributes) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return new VirtualNode(tagName, attributes, children);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

try {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    __webpack_require__(13).default.info("You're running Tweed in <b>dev mode</b>. Make sure you build before deploying to production.");
  }
} catch (e) {
  window.process = {
    env: {
      NODE_ENV: 'development'
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (engine, factory, vnode) {
  if (vnode.__DONT_NOTIFY_DEVTOOLS__) {
    return;
  }
  globl[listeners].forEach(function (l) {
    return l(engine, factory, vnode);
  });
  globl[listeners].all.push([engine, factory, vnode]);
};

var globl = typeof window === 'undefined' ? global : window;

var listeners = '__TWEED_ON_RENDER_LISTENERS__';

globl[listeners] = globl[listeners] || [];

globl[listeners].all = globl[listeners].all || [];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Console = __webpack_require__(13);

var _Console2 = _interopRequireDefault(_Console);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Console2.default.error('To prevent collisions with the browser API, <b>Node</b> has been ' + 'renamed to <b>VirtualNode</b>.');

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Console = __webpack_require__(13);

var _Console2 = _interopRequireDefault(_Console);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Console2.default.warn('The <code>className</code> attribute is deprecated. Use <code>class</code> instead.');

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _Console = __webpack_require__(13);

var _Console2 = _interopRequireDefault(_Console);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stack = (typeof window !== 'undefined' ? global : window).dontMakePromisesInRenderStack;

var rendersInStack = stack.split('\n').filter(function (l) {
  return (/render/.test(l)
  );
});

_Console2.default.error("Is seems like you're making a <code>Promise</code> from " + 'within a <code>render</code> method. Move the call to the ' + 'constructor instead. ' + (rendersInStack.length > 0 ? 'Maybe check out these locations:\n' + rendersInStack.join('\n') : ''));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Console = __webpack_require__(13);

var _Console2 = _interopRequireDefault(_Console);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Console2.default.info("You're using the <code>innerHTML</code> attribute. Please be " + 'advised that this <danger>can be dangerous</danger>. You can ignore this message ' + "if you know what you're doing.");

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = typeof window !== 'undefined' ? window : global;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHOULD_BE_PROPS = ['value'];

var AttributesPlugin = function () {
  function AttributesPlugin(snabbdomModules) {
    (0, _classCallCheck3.default)(this, AttributesPlugin);

    this.snabbdomModules = snabbdomModules;
  }

  (0, _createClass3.default)(AttributesPlugin, [{
    key: 'consumeAttributes',
    value: function consumeAttributes(data, attributes) {
      data.attrs = {};
      data.props = {};

      for (var p in attributes) {
        if (SHOULD_BE_PROPS.indexOf(p) > -1) {
          data.props[p] = attributes[p];
        } else {
          data.attrs[p] = attributes[p];
        }
        delete attributes[p];
      }
    }
  }]);
  return AttributesPlugin;
}();

exports.default = AttributesPlugin;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClassPlugin = function () {
  function ClassPlugin(snabbdomModules) {
    (0, _classCallCheck3.default)(this, ClassPlugin);

    this.snabbdomModules = snabbdomModules;
  }

  (0, _createClass3.default)(ClassPlugin, [{
    key: 'consumeAttributes',
    value: function consumeAttributes(data, attributes) {
      data.class = {};

      for (var a in attributes) {
        if (process.env.NODE_ENV !== 'production') {
          if (a === 'className') {
            __webpack_require__(128);
          }
        }

        if (a === 'class' || a === 'className') {
          var classNames = attributes[a];
          delete attributes[a];

          if (typeof classNames === 'string') {
            classNames.split(' ').forEach(function (c) {
              if (c) {
                data.class[c] = true;
              }
            });
          } else if (classNames != null && (typeof classNames === 'undefined' ? 'undefined' : (0, _typeof3.default)(classNames)) === 'object') {
            for (var name in classNames) {
              if (classNames[name]) {
                data.class[name] = classNames[name];
              }
            }
          } else if (typeof classNames === 'undefined') {
            // Skip undefined
          } else {
            if (process.env.NODE_ENV !== 'production') {
              var message = 'Invalid <code>' + a + '</code> attribute. Must be object or string, but was <code>' + classNames + '</code>.';
              var stack = new Error().stack;
              var unique = stack + message;
              this.__informedAboutInvalid = this.__informedAboutInvalid || [];

              if (this.__informedAboutInvalid.indexOf(unique) > -1) {
                continue;
              }

              this.__informedAboutInvalid.push(unique);

              __webpack_require__(13).default.error(message);
            }
          }

          continue;
        }

        if (a.slice(0, 6) === 'class-') {
          var className = a.slice(6);
          var active = attributes[a];
          delete attributes[a];

          if (className) {
            data.class[className] = !!active;
          }
        }
      }
    }
  }]);
  return ClassPlugin;
}();

exports.default = ClassPlugin;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventsPlugin = function () {
  function EventsPlugin(snabbdomModules) {
    (0, _classCallCheck3.default)(this, EventsPlugin);

    this.snabbdomModules = snabbdomModules;
  }

  (0, _createClass3.default)(EventsPlugin, [{
    key: 'consumeAttributes',
    value: function consumeAttributes(data, attributes) {
      data.on = {};

      for (var a in attributes) {
        if (a === 'on') {
          for (var eventName in attributes[a]) {
            data.on[eventName] = attributes[a][eventName];
          }
          delete attributes[a];
          continue;
        }
        if (a.slice(0, 3) === 'on-') {
          var _eventName = a.slice(3);
          data.on[_eventName] = attributes[a];
          delete attributes[a];
        }
      }
    }
  }]);
  return EventsPlugin;
}();

exports.default = EventsPlugin;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _hooks = __webpack_require__(75);

var hooks = _interopRequireWildcard(_hooks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HooksPlugin = function () {
  function HooksPlugin() {
    (0, _classCallCheck3.default)(this, HooksPlugin);
    this._hooks = {
      'pre': hooks.PreHook,
      'init': hooks.InitHook,
      'create': hooks.CreateHook,
      'insert': hooks.InsertHook,
      'prepatch': hooks.PrePatchHook,
      'update': hooks.UpdateHook,
      'postpatch': hooks.PostPatchHook,
      'destroy': hooks.Destroy,
      'remove': hooks.RemoveHook,
      'post': hooks.PostHook
    };
  }

  (0, _createClass3.default)(HooksPlugin, [{
    key: 'consumeAttributes',
    value: function consumeAttributes(data, attributes) {
      data.hook = {};

      for (var a in attributes) {
        if (a === 'hook') {
          for (var hookName in attributes[a]) {
            data.hook[hookName] = this._wrapHook(hookName, attributes[a][hookName]);
          }
          delete attributes[a];
          continue;
        }
        if (a.slice(0, 5) === 'hook-') {
          var _hookName = a.slice(5);
          data.hook[_hookName] = this._wrapHook(_hookName, attributes[a]);
          delete attributes[a];
        }
      }
    }
  }, {
    key: '_wrapHook',
    value: function _wrapHook(hookName, listener) {
      var _this = this;

      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return listener(new (Function.prototype.bind.apply(_this._hooks[hookName], [null].concat(args)))());
      };
    }
  }]);
  return HooksPlugin;
}();

exports.default = HooksPlugin;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var updateInnerHTML = function updateInnerHTML(oldNode, newNode) {
  var oldHTML = oldNode.data.innerHTML;
  var newHTML = newNode.data.innerHTML;

  if (oldHTML === newHTML) {
    return;
  }

  newNode.elm.innerHTML = newHTML || '';
};

exports.default = {
  create: updateInnerHTML,
  update: updateInnerHTML
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerHTMLPlugin = function () {
  function InnerHTMLPlugin(snabbdomModules) {
    (0, _classCallCheck3.default)(this, InnerHTMLPlugin);

    this.snabbdomModules = snabbdomModules;
  }

  (0, _createClass3.default)(InnerHTMLPlugin, [{
    key: 'consumeAttributes',
    value: function consumeAttributes(data, attributes) {
      if ('innerHTML' in attributes) {
        if (process.env.NODE_ENV !== 'production') {
          __webpack_require__(130);
        }
        var html = attributes.innerHTML;
        data.innerHTML = html;
        delete attributes.innerHTML;
      }
    }
  }]);
  return InnerHTMLPlugin;
}();

exports.default = InnerHTMLPlugin;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty = __webpack_require__(38);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class2, _descriptor;

var _ = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var awaitedPromises = [];
var awaitedRenderablePromises = [];
var awaitedRenderablePromiseStacks = [];

var RenderablePromisePlugin = function () {
  function RenderablePromisePlugin() {
    (0, _classCallCheck3.default)(this, RenderablePromisePlugin);
    this.snabbdomModules = [{ update: this.update }];
  }

  (0, _createClass3.default)(RenderablePromisePlugin, [{
    key: 'consumeAttributes',
    value: function consumeAttributes() {}
  }, {
    key: 'transformRenderable',
    value: function transformRenderable(renderable) {
      if (renderable != null && (typeof renderable === 'undefined' ? 'undefined' : (0, _typeof3.default)(renderable)) === 'object' && typeof renderable.then === 'function') {
        if (awaitedPromises.indexOf(renderable) > -1) {
          return awaitedRenderablePromises[awaitedPromises.indexOf(renderable)];
        }

        var p = new RenderablePromise(renderable);

        if (process.env.NODE_ENV !== 'production') {
          p.__stack = new Error().stack;
        }

        return p;
      }
    }
  }, {
    key: 'update',
    value: function update(oldVNode, newVNode) {
      var oldTracked = oldVNode._ownTrackedChildren || [];
      var newTracked = newVNode._ownTrackedChildren || [];

      for (var i = 0; i < oldTracked.length; i++) {
        var tracked = oldTracked[i];

        if (process.env.NODE_ENV !== 'production') {
          if (oldTracked[i] instanceof RenderablePromise && newTracked[i] instanceof RenderablePromise && oldTracked[i] !== newTracked[i] && oldTracked[i].__stack === newTracked[i].__stack) {
            ;(typeof window !== 'undefined' ? global : window).dontMakePromisesInRenderStack = newVNode.__stack;
            __webpack_require__(129);
          }
        }

        if (newTracked.indexOf(tracked) > -1) {
          continue;
        }

        var index = awaitedRenderablePromises.indexOf(tracked);
        if (index === -1) {
          continue;
        }

        awaitedPromises.splice(index, 1);
        awaitedRenderablePromises.splice(index, 1);
        if (process.env.NODE_ENV !== 'production') {
          awaitedRenderablePromiseStacks.splice(index, 1);
        }
      }
    }
  }]);
  return RenderablePromisePlugin;
}();

exports.default = RenderablePromisePlugin;
var RenderablePromise = (_class2 = function () {
  function RenderablePromise(promise) {
    var _this = this;

    (0, _classCallCheck3.default)(this, RenderablePromise);

    _initDefineProp(this, 'value', _descriptor, this);

    this._promise = promise;

    awaitedPromises.push(promise);
    awaitedRenderablePromises.push(this);

    promise.then(function (v) {
      _this.value = v;
    });
  }

  (0, _createClass3.default)(RenderablePromise, [{
    key: 'render',
    value: function render() {
      return this.value;
    }
  }]);
  return RenderablePromise;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_.mutating], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class2);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(12)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StylePlugin = function () {
  function StylePlugin(snabbdomModules) {
    (0, _classCallCheck3.default)(this, StylePlugin);

    this.snabbdomModules = snabbdomModules;
  }

  (0, _createClass3.default)(StylePlugin, [{
    key: 'consumeAttributes',
    value: function consumeAttributes(data, attributes) {
      data.style = {};

      for (var a in attributes) {
        if (a === 'style') {
          for (var styleProp in attributes[a]) {
            data.style[styleProp] = attributes[a][styleProp];
          }
          delete attributes[a];
          continue;
        }
        if (a.slice(0, 6) === 'style-') {
          var _styleProp = a.slice(6);
          data.style[_styleProp] = attributes[a];
          delete attributes[a];
        }
      }
    }
  }]);
  return StylePlugin;
}();

exports.default = StylePlugin;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMRenderer = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = render;

var _Engine = __webpack_require__(37);

var _Engine2 = _interopRequireDefault(_Engine);

var _snabbdom = __webpack_require__(189);

var _ClassPlugin = __webpack_require__(133);

var _ClassPlugin2 = _interopRequireDefault(_ClassPlugin);

var _EventsPlugin = __webpack_require__(134);

var _EventsPlugin2 = _interopRequireDefault(_EventsPlugin);

var _HooksPlugin = __webpack_require__(135);

var _HooksPlugin2 = _interopRequireDefault(_HooksPlugin);

var _StylePlugin = __webpack_require__(139);

var _StylePlugin2 = _interopRequireDefault(_StylePlugin);

var _InnerHTMLPlugin = __webpack_require__(137);

var _InnerHTMLPlugin2 = _interopRequireDefault(_InnerHTMLPlugin);

var _InnerHTMLPlugin3 = __webpack_require__(136);

var _InnerHTMLPlugin4 = _interopRequireDefault(_InnerHTMLPlugin3);

var _RenderablePromisePlugin = __webpack_require__(138);

var _RenderablePromisePlugin2 = _interopRequireDefault(_RenderablePromisePlugin);

var _AttributesPlugin = __webpack_require__(132);

var _AttributesPlugin2 = _interopRequireDefault(_AttributesPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Engine2.default.plugins = [new _ClassPlugin2.default([__webpack_require__(185)]), new _EventsPlugin2.default([__webpack_require__(186)]), new _HooksPlugin2.default([]), new _StylePlugin2.default([__webpack_require__(188)]), new _InnerHTMLPlugin2.default([_InnerHTMLPlugin4.default]), new _RenderablePromisePlugin2.default(), new _AttributesPlugin2.default([__webpack_require__(184), __webpack_require__(187)])];

var patch = (0, _snabbdom.init)(_Engine2.default.snabbdomModules);

var DOMRenderer = exports.DOMRenderer = function () {
  function DOMRenderer(element) {
    (0, _classCallCheck3.default)(this, DOMRenderer);

    if (element == null) {
      throw new Error('Root element was null.');
    }

    this._root = element;
  }

  (0, _createClass3.default)(DOMRenderer, [{
    key: 'render',
    value: function render(node) {
      this._root = patch(this._root, node);
    }
  }]);
  return DOMRenderer;
}();

function render(factory, element) {
  var engine = new _Engine2.default(new DOMRenderer(element));

  engine.render(factory);
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
__webpack_require__(173);
module.exports = __webpack_require__(5).Array.from;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(175);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(176);
module.exports = __webpack_require__(5).Object.keys;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(178);
__webpack_require__(177);
__webpack_require__(179);
__webpack_require__(180);
module.exports = __webpack_require__(5).Symbol;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
__webpack_require__(181);
module.exports = __webpack_require__(52).f('iterator');

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10)
  , toLength  = __webpack_require__(88)
  , toIndex   = __webpack_require__(171);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(40)
  , TAG = __webpack_require__(2)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7)
  , createDesc      = __webpack_require__(24);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(23)
  , gOPS    = __webpack_require__(85)
  , pIE     = __webpack_require__(44);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(40);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(22)
  , ITERATOR   = __webpack_require__(2)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(40);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(19);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(83)
  , descriptor     = __webpack_require__(24)
  , setToStringTag = __webpack_require__(45)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(2)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(23)
  , toIObject = __webpack_require__(10);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(32)('meta')
  , isObject = __webpack_require__(31)
  , has      = __webpack_require__(9)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(21)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(19)
  , getKeys  = __webpack_require__(23);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(44)
  , createDesc     = __webpack_require__(24)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(50)
  , has            = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(81)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10)
  , gOPN      = __webpack_require__(84).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(9)
  , toObject    = __webpack_require__(49)
  , IE_PROTO    = __webpack_require__(46)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(20)
  , core    = __webpack_require__(5)
  , fails   = __webpack_require__(21);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48)
  , defined   = __webpack_require__(41);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(152)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(22);
module.exports = __webpack_require__(5).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(79)
  , $export        = __webpack_require__(20)
  , toObject       = __webpack_require__(49)
  , call           = __webpack_require__(159)
  , isArrayIter    = __webpack_require__(157)
  , toLength       = __webpack_require__(88)
  , createProperty = __webpack_require__(153)
  , getIterFn      = __webpack_require__(172);

$export($export.S + $export.F * !__webpack_require__(161)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(150)
  , step             = __webpack_require__(162)
  , Iterators        = __webpack_require__(22)
  , toIObject        = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(82)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(49)
  , $keys    = __webpack_require__(23);

__webpack_require__(169)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 177 */
/***/ (function(module, exports) {



/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(6)
  , has            = __webpack_require__(9)
  , DESCRIPTORS    = __webpack_require__(8)
  , $export        = __webpack_require__(20)
  , redefine       = __webpack_require__(87)
  , META           = __webpack_require__(164).KEY
  , $fails         = __webpack_require__(21)
  , shared         = __webpack_require__(47)
  , setToStringTag = __webpack_require__(45)
  , uid            = __webpack_require__(32)
  , wks            = __webpack_require__(2)
  , wksExt         = __webpack_require__(52)
  , wksDefine      = __webpack_require__(51)
  , keyOf          = __webpack_require__(163)
  , enumKeys       = __webpack_require__(154)
  , isArray        = __webpack_require__(158)
  , anObject       = __webpack_require__(19)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(50)
  , createDesc     = __webpack_require__(24)
  , _create        = __webpack_require__(83)
  , gOPNExt        = __webpack_require__(167)
  , $GOPD          = __webpack_require__(166)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(23)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(84).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(44).f  = $propertyIsEnumerable;
  __webpack_require__(85).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(43)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)('asyncIterator');

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)('observable');

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(174);
var global        = __webpack_require__(6)
  , hide          = __webpack_require__(14)
  , Iterators     = __webpack_require__(22)
  , TO_STRING_TAG = __webpack_require__(2)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 182 */
/***/ (function(module, exports) {

function createElement(tagName){
  return document.createElement(tagName);
}

function createElementNS(namespaceURI, qualifiedName){
  return document.createElementNS(namespaceURI, qualifiedName);
}

function createTextNode(text){
  return document.createTextNode(text);
}


function insertBefore(parentNode, newNode, referenceNode){
  parentNode.insertBefore(newNode, referenceNode);
}


function removeChild(node, child){
  node.removeChild(child);
}

function appendChild(node, child){
  node.appendChild(child);
}

function parentNode(node){
  return node.parentElement;
}

function nextSibling(node){
  return node.nextSibling;
}

function tagName(node){
  return node.tagName;
}

function setTextContent(node, text){
  node.textContent = text;
}

module.exports = {
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  appendChild: appendChild,
  removeChild: removeChild,
  insertBefore: insertBefore,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent
};


/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = {
  array: Array.isArray,
  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
};


/***/ }),
/* 184 */
/***/ (function(module, exports) {

var NamespaceURIs = {
  "xlink": "http://www.w3.org/1999/xlink"
};

var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare",
                "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable",
                "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple",
                "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly",
                "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate",
                "truespeed", "typemustmatch", "visible"];

var booleanAttrsDict = Object.create(null);
for(var i=0, len = booleanAttrs.length; i < len; i++) {
  booleanAttrsDict[booleanAttrs[i]] = true;
}

function updateAttrs(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs, namespaceSplit;

  if (!oldAttrs && !attrs) return;
  oldAttrs = oldAttrs || {};
  attrs = attrs || {};

  // update modified attributes, add new attributes
  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      if(!cur && booleanAttrsDict[key])
        elm.removeAttribute(key);
      else {
        namespaceSplit = key.split(":");
        if(namespaceSplit.length > 1 && NamespaceURIs.hasOwnProperty(namespaceSplit[0]))
          elm.setAttributeNS(NamespaceURIs[namespaceSplit[0]], key, cur);
        else
          elm.setAttribute(key, cur);
      }
    }
  }
  //remove removed attributes
  // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
  // the other option is to remove all attributes with value == undefined
  for (key in oldAttrs) {
    if (!(key in attrs)) {
      elm.removeAttribute(key);
    }
  }
}

module.exports = {create: updateAttrs, update: updateAttrs};


/***/ }),
/* 185 */
/***/ (function(module, exports) {

function updateClass(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldClass = oldVnode.data.class,
      klass = vnode.data.class;

  if (!oldClass && !klass) return;
  oldClass = oldClass || {};
  klass = klass || {};

  for (name in oldClass) {
    if (!klass[name]) {
      elm.classList.remove(name);
    }
  }
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      elm.classList[cur ? 'add' : 'remove'](name);
    }
  }
}

module.exports = {create: updateClass, update: updateClass};


/***/ }),
/* 186 */
/***/ (function(module, exports) {

function invokeHandler(handler, vnode, event) {
  if (typeof handler === "function") {
    // call function handler
    handler.call(vnode, event, vnode);
  } else if (typeof handler === "object") {
    // call handler with arguments
    if (typeof handler[0] === "function") {
      // special case for single argument for performance
      if (handler.length === 2) {
        handler[0].call(vnode, handler[1], event, vnode);
      } else {
        var args = handler.slice(1);
        args.push(event);
        args.push(vnode);
        handler[0].apply(vnode, args);
      }
    } else {
      // call multiple handlers
      for (var i = 0; i < handler.length; i++) {
        invokeHandler(handler[i]);
      }
    }
  }
}

function handleEvent(event, vnode) {
  var name = event.type,
      on = vnode.data.on;

  // call event handler(s) if exists
  if (on && on[name]) {
    invokeHandler(on[name], vnode, event);
  }
}

function createListener() {
  return function handler(event) {
    handleEvent(event, handler.vnode);
  }
}

function updateEventListeners(oldVnode, vnode) {
  var oldOn = oldVnode.data.on,
      oldListener = oldVnode.listener,
      oldElm = oldVnode.elm,
      on = vnode && vnode.data.on,
      elm = vnode && vnode.elm,
      name;

  // optimization for reused immutable handlers
  if (oldOn === on) {
    return;
  }

  // remove existing listeners which no longer used
  if (oldOn && oldListener) {
    // if element changed or deleted we remove all existing listeners unconditionally
    if (!on) {
      for (name in oldOn) {
        // remove listener if element was changed or existing listeners removed
        oldElm.removeEventListener(name, oldListener, false);
      }
    } else {
      for (name in oldOn) {
        // remove listener if existing listener removed
        if (!on[name]) {
          oldElm.removeEventListener(name, oldListener, false);
        }
      }
    }
  }

  // add new listeners which has not already attached
  if (on) {
    // reuse existing listener or create new
    var listener = vnode.listener = oldVnode.listener || createListener();
    // update vnode for listener
    listener.vnode = vnode;

    // if element changed or added we add all needed listeners unconditionally
    if (!oldOn) {
      for (name in on) {
        // add listener if element was changed or new listeners added
        elm.addEventListener(name, listener, false);
      }
    } else {
      for (name in on) {
        // add listener if new listener added
        if (!oldOn[name]) {
          elm.addEventListener(name, listener, false);
        }
      }
    }
  }
}

module.exports = {
  create: updateEventListeners,
  update: updateEventListeners,
  destroy: updateEventListeners
};


/***/ }),
/* 187 */
/***/ (function(module, exports) {

function updateProps(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldProps = oldVnode.data.props, props = vnode.data.props;

  if (!oldProps && !props) return;
  oldProps = oldProps || {};
  props = props || {};

  for (key in oldProps) {
    if (!props[key]) {
      delete elm[key];
    }
  }
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
      elm[key] = cur;
    }
  }
}

module.exports = {create: updateProps, update: updateProps};


/***/ }),
/* 188 */
/***/ (function(module, exports) {

var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function updateStyle(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldStyle = oldVnode.data.style,
      style = vnode.data.style;

  if (!oldStyle && !style) return;
  oldStyle = oldStyle || {};
  style = style || {};
  var oldHasDel = 'delayed' in oldStyle;

  for (name in oldStyle) {
    if (!style[name]) {
      elm.style[name] = '';
    }
  }
  for (name in style) {
    cur = style[name];
    if (name === 'delayed') {
      for (name in style.delayed) {
        cur = style.delayed[name];
        if (!oldHasDel || cur !== oldStyle.delayed[name]) {
          setNextFrame(elm.style, name, cur);
        }
      }
    } else if (name !== 'remove' && cur !== oldStyle[name]) {
      elm.style[name] = cur;
    }
  }
}

function applyDestroyStyle(vnode) {
  var style, name, elm = vnode.elm, s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}

function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  var name, elm = vnode.elm, idx, i = 0, maxDur = 0,
      compStyle, style = s.remove, amount = 0, applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  compStyle = getComputedStyle(elm);
  var props = compStyle['transition-property'].split(', ');
  for (; i < props.length; ++i) {
    if(applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener('transitionend', function(ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}

module.exports = {create: updateStyle, update: updateStyle, destroy: applyDestroyStyle, remove: applyRemoveStyle};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// jshint newcap: false
/* global require, module, document, Node */


var VNode = __webpack_require__(190);
var is = __webpack_require__(183);
var domApi = __webpack_require__(182);

function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }

var emptyNode = VNode('', {}, [], undefined, undefined);

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, map = {}, key;
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

function init(modules, api) {
  var i, j, cbs = {};

  if (isUndef(api)) api = domApi;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
    }
  }

  function emptyNodeAt(elm) {
    var id = elm.id ? '#' + elm.id : '';
    var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
    return VNode(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    return function() {
      if (--listeners === 0) {
        var parent = api.parentNode(childElm);
        api.removeChild(parent, childElm);
      }
    };
  }

  function createElm(vnode, insertedVnodeQueue) {
    var i, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode);
        data = vnode.data;
      }
    }
    var elm, children = vnode.children, sel = vnode.sel;
    if (isDef(sel)) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                                                          : api.createElement(tag);
      if (hash < dot) elm.id = sel.slice(hash + 1, dot);
      if (dotIdx > 0) elm.className = sel.slice(dot + 1).replace(/\./g, ' ');
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          api.appendChild(elm, createElm(children[i], insertedVnodeQueue));
        }
      } else if (is.primitive(vnode.text)) {
        api.appendChild(elm, api.createTextNode(vnode.text));
      }
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      elm = vnode.elm = api.createTextNode(vnode.text);
    }
    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      api.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i, listeners, rm, ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);
          for (i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
          if (isDef(i = ch.data) && isDef(i = i.hook) && isDef(i = i.remove)) {
            i(ch, rm);
          } else {
            rm();
          }
        } else { // Text node
          api.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0, newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) { // New element
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
          oldCh[idxInOld] = undefined;
          api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx+1]) ? null : newCh[newEndIdx+1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var i, hook;
    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
    if (oldVnode === vnode) return;
    if (!sameVnode(oldVnode, vnode)) {
      var parentElm = api.parentNode(oldVnode.elm);
      elm = createElm(vnode, insertedVnodeQueue);
      api.insertBefore(parentElm, elm, oldVnode.elm);
      removeVnodes(parentElm, [oldVnode], 0, 0);
      return;
    }
    if (isDef(vnode.data)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      i = vnode.data.hook;
      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) api.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      api.setTextContent(elm, vnode.text);
    }
    if (isDef(hook) && isDef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
  }

  return function(oldVnode, vnode) {
    var i, elm, parent;
    var insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();

    if (isUndef(oldVnode.sel)) {
      oldVnode = emptyNodeAt(oldVnode);
    }

    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = api.parentNode(elm);

      createElm(vnode, insertedVnodeQueue);

      if (parent !== null) {
        api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }

    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}

module.exports = {init: init};


/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = function(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {sel: sel, data: data, children: children,
          text: text, elm: elm, key: key};
};


/***/ }),
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tweed = __webpack_require__(18);

var Tweed = _interopRequireWildcard(_tweed);

var _dom = __webpack_require__(91);

var DOMRender = _interopRequireWildcard(_dom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

window.require = function (module) {
  switch (module) {
    case 'tweed':
      return Tweed;
    case 'tweed/render/dom':
      return DOMRender;
    default:
      throw new Error('The module ' + module + ' is not included in the JSFiddle bundle.');
  }
};

/***/ })
/******/ ]);