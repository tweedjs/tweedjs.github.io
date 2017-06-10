webpackJsonp([3],{

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tweed = __webpack_require__(18);

var _Layout = __webpack_require__(394);

var _Layout2 = _interopRequireDefault(_Layout);

var _DocsPage = __webpack_require__(409);

var _DocsPage2 = _interopRequireDefault(_DocsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocsPage = function () {
  (0, _createClass3.default)(DocsPage, null, [{
    key: 'load',
    value: function load(router, manifest) {
      return new DocsPage(router, manifest, new _Layout2.default(router, manifest));
    }
  }]);

  function DocsPage(router, manifest, layout) {
    (0, _classCallCheck3.default)(this, DocsPage);
    this.title = 'Docs ‹ Tweed';

    this._router = router;
    this._manifest = manifest;
    this._layout = layout;
  }

  (0, _createClass3.default)(DocsPage, [{
    key: 'render',
    value: function render() {
      var _this = this;

      return this._layout.render('Documentation', "To make learning about Tweed easy and fun, we've made a few different series. " + 'Pick the one that suits your experience!', this._manifest.sections.map(function (_ref) {
        var name = _ref.name,
            slug = _ref.slug,
            description = _ref.description,
            subsections = _ref.subsections;
        return _this._router.link('/docs/' + slug + '/' + subsections[0].slug, (0, _tweed.VirtualNode)(
          'div',
          null,
          (0, _tweed.VirtualNode)(
            'h4',
            { 'class': _DocsPage2.default.title },
            name
          ),
          (0, _tweed.VirtualNode)(
            'p',
            { 'class': _DocsPage2.default.description },
            description
          )
        ), { class: _DocsPage2.default.link });
      }));
    }
  }]);
  return DocsPage;
}(); /** @jsx VirtualNode */

exports.default = DocsPage;

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tweed = __webpack_require__(18);

var _Layout = __webpack_require__(396);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx VirtualNode */

var Layout = function () {
  function Layout(router, manifest) {
    (0, _classCallCheck3.default)(this, Layout);

    this._router = router;
    this._manifest = manifest;

    this._sectionMenu = this._sectionMenu.bind(this);
    this._setAside = this._setAside.bind(this);
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render(title, description, content) {
      if (content == null) {
        content = description;
        description = null;
      }

      return (0, _tweed.VirtualNode)(
        'section',
        { 'class': _Layout2.default.wrapper },
        (0, _tweed.VirtualNode)(
          'header',
          { 'class': _Layout2.default.header },
          (0, _tweed.VirtualNode)(
            'h2',
            { 'class': _Layout2.default.title },
            title
          ),
          description ? (0, _tweed.VirtualNode)(
            'p',
            { 'class': _Layout2.default.description },
            description
          ) : null
        ),
        (0, _tweed.VirtualNode)(
          'div',
          { 'class': _Layout2.default.columns },
          (0, _tweed.VirtualNode)(
            'aside',
            { 'hook-update': this._setAside, 'class': _Layout2.default.aside },
            this._menu()
          ),
          (0, _tweed.VirtualNode)(
            'main',
            { 'class': _Layout2.default.main },
            content
          ),
          (0, _tweed.VirtualNode)('div', { 'class': _Layout2.default.filler })
        )
      );
    }
  }, {
    key: '_setAside',
    value: function _setAside(_ref) {
      var element = _ref.element;

      this._aside = element;
    }
  }, {
    key: '_menu',
    value: function _menu() {
      var menuClass = this._aside && this._aside.getBoundingClientRect().top < 50 ? _Layout2.default.menuSticky : _Layout2.default.menu;

      return (0, _tweed.VirtualNode)(
        'ul',
        { 'class': menuClass },
        this._manifest.sections.map(this._sectionMenu)
      );
    }
  }, {
    key: '_sectionMenu',
    value: function _sectionMenu(_ref2) {
      var slug = _ref2.slug,
          name = _ref2.name,
          subsections = _ref2.subsections;

      var url = '/docs/' + slug;
      var isActive = this._router.currentPath.indexOf(url) === 0;
      var classes = isActive ? _Layout2.default.menuItemSectionActive : _Layout2.default.menuItemSection;

      return (0, _tweed.VirtualNode)(
        'li',
        { 'class': classes },
        this._router.link(url, name),
        isActive ? (0, _tweed.VirtualNode)(
          'ul',
          { 'class': _Layout2.default.subMenu },
          subsections.map(this._subsectionItem.bind(this, slug))
        ) : null
      );
    }
  }, {
    key: '_subsectionItem',
    value: function _subsectionItem(slug, _ref3) {
      var subSlug = _ref3.slug,
          title = _ref3.headers.title;

      var url = '/docs/' + slug + '/' + subSlug;
      var classes = this._router.isActive(url) ? _Layout2.default.menuItemSubsectionActive : _Layout2.default.menuItemSubsection;

      return (0, _tweed.VirtualNode)(
        'li',
        { 'class': classes },
        this._router.link(url, title)
      );
    }
  }]);
  return Layout;
}();

exports.default = Layout;

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, ".DDb6_ {\n  padding-top: calc(1.5em + 5vw);\n  padding-bottom: calc(0.5em + 1vw);\n  text-align: center;\n}\n\n._1emDc {\n  padding: 0 4vw;\n  margin: 0 auto 5vw;\n  max-width: 65em;\n}\n\n._1-k5f {\n  display: flex;\n  flex-direction: column;\n}\n\n._3Qobu {\n  font-weight: 400;\n  font-size: 1.3em;\n  margin-bottom: 0.6em;\n}\n\n.ymNy_ {\n  margin: 0 auto;\n  max-width: 41em;\n  margin-bottom: 0.2em;\n  line-height: 1.5;\n  color: #555;\n}\n\n._72WqG {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.uxMEn {\n  margin: 1.05em 0;\n}\n\n._97P8u {\n}\n\n.uxMEn a {\n  text-decoration: none;\n  line-height: 1;\n  display: inline-block;\n  padding: 0.3em 0 0.1em;\n  margin-bottom: 0.3em;\n  color: #000;\n  font-weight: 600;\n}\n\n.BjTBA {\n  margin-left: 1em;\n}\n\n._3zkN7 {\n\n}\n\n._2ldgy {\n}\n\n._2yyyp {\n\n}\n\n._3cLpj {\n}\n\n._3zkN7 > a, ._2yyyp > a {\n  display: inline-block;\n  border-bottom: 0.14em solid transparent;\n}\n\n._2ldgy > a, ._3cLpj > a {\n  border-bottom-color: #DDD;\n}\n\n@media (min-width: 40em) {\n  ._3Qobu {\n    font-weight: 300;\n    font-size: 3vw;\n  }\n}\n\n@media (max-width: 59.99999999em) {\n  ._2p_hO {\n    align-self: center;\n  }\n}\n\n@media (min-width: 60em) {\n  ._1-k5f {\n    flex-direction: row-reverse;\n  }\n\n  ._2p_hO {\n    margin-left: 2em;\n    flex: 0 0 18em;\n  }\n\n  ._2Ui1D {\n    flex: 1 1 auto;\n    max-width: calc(100% - 20em)\n  }\n\n  ._97P8u {\n    position: fixed;\n    top: 50px;\n  }\n}\n\n@media (min-width: 80em) {\n  ._2UKWQ {\n    margin-right: 2em;\n    flex: 0 0 18em;\n  }\n\n  ._2Ui1D {\n    max-width: calc(100% - 40em)\n  }\n\n  ._1emDc {\n    max-width: 85em;\n  }\n}\n", ""]);

// exports
exports.locals = {
	"header": "DDb6_",
	"wrapper": "_1emDc",
	"columns": "_1-k5f",
	"title": "_3Qobu",
	"description": "ymNy_",
	"menulike": "_72WqG",
	"menu": "uxMEn _72WqG",
	"menuSticky": "_97P8u uxMEn _72WqG",
	"subMenu": "BjTBA _72WqG",
	"menuItemSection": "_3zkN7",
	"menuItemSectionActive": "_2ldgy _3zkN7",
	"menuItemSubsection": "_2yyyp",
	"menuItemSubsectionActive": "_3cLpj _2yyyp",
	"aside": "_2p_hO",
	"main": "_2Ui1D",
	"filler": "_2UKWQ"
};

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(395);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(67)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[hash:base64:5]!./Layout.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[hash:base64:5]!./Layout.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "._3K4vB {\n  color: #000;\n  text-decoration: none;\n  background: #F9F9F9;\n  display: block;\n  border-radius: 3px;\n  padding: 1.2em 1.4em;\n  margin-bottom: 1em;\n  transition: background-color 200ms;\n}\n\n._3K4vB:hover {\n  background-color: #EEE;\n}\n\n._17BXM {\n  font-weight: 300;\n  font-size: 1.7em;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\n._3CqGc {\n  line-height: 1.5;\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n", ""]);

// exports
exports.locals = {
	"link": "_3K4vB",
	"title": "_17BXM",
	"description": "_3CqGc"
};

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(403);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(67)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[hash:base64:5]!./DocsPage.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[hash:base64:5]!./DocsPage.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});