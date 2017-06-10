webpackJsonp([1],{

/***/ 392:
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

var _Article = __webpack_require__(408);

var _Article2 = _interopRequireDefault(_Article);

var _DocsSectionPage = __webpack_require__(399);

var _DocsSectionPage2 = _interopRequireDefault(_DocsSectionPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx VirtualNode */

var DocsSubsectionPage = function () {
  (0, _createClass3.default)(DocsSubsectionPage, null, [{
    key: 'load',
    value: function load(router, box, section, subsection, manifest) {
      return new DocsSubsectionPage(box, router, section, subsection, new _Layout2.default(router, manifest));
    }
  }]);

  function DocsSubsectionPage(box, router, section, subsection, layout) {
    (0, _classCallCheck3.default)(this, DocsSubsectionPage);

    this.title = subsection.headers.title + ' \u2039 ' + section.name + ' \u2039 Docs \u2039 Tweed';

    this._box = box;
    this._router = router;
    this._section = section;
    this._subsection = subsection;
    this._layout = layout;
  }

  (0, _createClass3.default)(DocsSubsectionPage, [{
    key: 'render',
    value: function render() {
      var nextIndex = this._section.subsections.map(function (s) {
        return s.slug;
      }).indexOf(this._subsection.slug) + 1;
      var nextSubsection = this._section.subsections[nextIndex];
      var isLast = nextSubsection == null;

      return this._layout.render(this._subsection.headers.title, (0, _tweed.VirtualNode)(
        'article',
        { 'class': _Article2.default.article },
        this._resolveContent(),
        (0, _tweed.VirtualNode)(
          'div',
          { 'class': _DocsSectionPage2.default.wrapper },
          isLast ? this._router.link('/docs', 'Back to docs', { class: _DocsSectionPage2.default.link }) : this._router.link('/docs/' + this._section.slug + '/' + nextSubsection.slug, 'Next: ' + nextSubsection.headers.title, { class: _DocsSectionPage2.default.link })
        )
      ));
    }
  }, {
    key: '_resolveContent',
    value: function _resolveContent() {
      var _this = this;

      var _subsection$content = this._subsection.content,
          examples = _subsection$content.examples,
          html = _subsection$content.html;


      return html.split('<example-slot></example-slot>').map(function (html) {
        return (0, _tweed.VirtualNode)('div', { innerHTML: html });
      }).reduce(function (sections, preExample, index) {
        if (examples.length <= index) {
          return sections.concat(preExample);
        }
        return sections.concat(preExample, _this._example(examples[index]));
      }, []);
    }
  }, {
    key: '_example',
    value: function _example(_ref) {
      var javascript = _ref.javascript,
          typescript = _ref.typescript,
          fiddle = _ref.fiddle;

      return this._box.render({
        'JavaScript': javascript,
        'TypeScript': typescript
      }, fiddle);
    }
  }]);
  return DocsSubsectionPage;
}();

exports.default = DocsSubsectionPage;

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

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "._1CdiW {\n  margin-bottom: 5vw;\n}\n\n._1CdiW h1,\n._1CdiW h2,\n._1CdiW h3,\n._1CdiW h4,\n._1CdiW h5,\n._1CdiW h6 {\n  margin: 2em 0 0.8em;\n}\n\n._1CdiW p,\n._1CdiW blockquote {\n  margin: 1em 0;\n  max-width: 45em;\n}\n\n._1CdiW p {\n  line-height: 1.6;\n}\n\n._1CdiW p a {\n  color: #0062FF;\n  text-decoration: none;\n}\n\n._1CdiW blockquote {\n  border-left: 3px solid #DDD;\n  padding-left: 1em;\n  color: #555;\n}\n\n._1CdiW hr {\n  border: 0;\n  background: #EEE;\n  height: 3px;\n  margin: 3em 0;\n}\n\n._1CdiW pre {\n  background: #F9F9F9;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  border-radius: 3px;\n}\n\n._1CdiW code {\n  background: #F9F9F9;\n  border-radius: 3px;\n  display: inline-block;\n  font-family: 'SF Mono', 'SFMono-Regular', 'Roboto Mono', Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n  font-size: 0.9em;\n  line-height: 1.5;\n}\n\n._1CdiW p code {\n  padding: 0 0.2em;\n  font-size: 0.95em;\n}\n\n._1CdiW pre code {\n  padding: 0.6em 0.9em;\n}\n\n/* Code */\n._1CdiW .token {\n  color: #2D2D2D;\n}\n\n._1CdiW .token.keyword {\n  color: #0062FF;\n}\n\n._1CdiW .token.annotation {\n  color: #0062FF;\n}\n\n._1CdiW .token.punctuation {\n  color: #999;\n}\n\n._1CdiW .token.boolean {\n  color: #8F55CA;\n}\n\n._1CdiW .token.number {\n  color: #8F55CA;\n}\n\n._1CdiW .token.function {\n  color: #8F55CA;\n}\n\n._1CdiW .token.comment {\n  color: #999;\n}\n\n._1CdiW .token.operator {\n  color: #4C4C4C;\n}\n\n._1CdiW .token.string {\n  color: #5BAB22;\n}\n\n._1CdiW .token.class-name {\n  color: #FF4A60;\n}\n\n._1CdiW .token.tag {\n  color: #0062FF;\n}\n\n._1CdiW .token.attr-name {\n  color: #8F55CA;\n}\n\n._1CdiW .token.attr-value .punctuation:first-child {\n  color: #4C4C4C;\n}\n\n._1CdiW .token.attr-value,\n._1CdiW .token.attr-value > .punctuation:not(:first-child) {\n  color: #5BAB22;\n}\n\n._1CdiW .lang-shell {\n  margin-left: 1.2em;\n}\n\n._1CdiW .shell-prompt {\n  width: 0;\n  position: relative;\n}\n\n._1CdiW .shell-prompt:before {\n  content: '$';\n  position: absolute;\n  color: #CCC;\n  left: -1.2em;\n}\n", ""]);

// exports
exports.locals = {
	"article": "_1CdiW"
};

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "._200Fg {\n  text-decoration: none;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  padding: 1em 2em;\n  display: inline-block;\n  background: #F9F9F9;\n  border-radius: 3px;\n  transition: background-color 200ms;\n}\n\n._200Fg:hover {\n  background-color: #EEE;\n}\n\n._1_Nby {\n  margin-top: 2em;\n  text-align: center;\n}\n", ""]);

// exports
exports.locals = {
	"link": "_200Fg",
	"wrapper": "_1_Nby"
};

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(398);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(67)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[hash:base64:5]!./DocsSectionPage.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[hash:base64:5]!./DocsSectionPage.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(397);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(67)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[hash:base64:5]!./Article.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[hash:base64:5]!./Article.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});