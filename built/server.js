/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "built/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRedux = __webpack_require__(6);

	var _configureStore = __webpack_require__(7);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _renderFullHTMLPage = __webpack_require__(11);

	var _renderFullHTMLPage2 = _interopRequireDefault(_renderFullHTMLPage);

	var _app = __webpack_require__(12);

	var _app2 = _interopRequireDefault(_app);

	var _path = __webpack_require__(14);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	var server = (0, _express2.default)();
	server.disable('x-powered-by');
	server.use('/images', _express2.default.static(_path2.default.join(__dirname, '../src/assets/images')));
	server.use('/scripts', _express2.default.static('built'));
	server.use('/styles', _express2.default.static('lib'));
	server.use('/built', _express2.default.static(_path2.default.join(__dirname, 'built')));
	server.use('/built', _express2.default.static('built'));
	server.use(_express2.default.static(_path2.default.join(__dirname, '../')));
	server.get('/favicon.ico', function (req, res) {
	  return res.send('');
	});

	server.get('/', function () {
	  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
	    var data, store, intialHTML, state;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            try {
	              data = [{ tileImage: 'http://res.cloudinary.com/kingoro/image/upload/v1479035464/image1.png', title: 'Classic Identity', descriptionTitle: 'Brand tone and voice' }];
	              store = (0, _configureStore2.default)({ data: data });
	              intialHTML = (0, _server.renderToString)(_react2.default.createElement(
	                _reactRedux.Provider,
	                { store: store },
	                _react2.default.createElement(_app2.default, null)
	              ));
	              state = store.getState();


	              res.send((0, _renderFullHTMLPage2.default)(intialHTML, state));
	            } catch (err) {
	              /* eslint-disable */
	              console.error('error', err);
	              /* eslint-enable */

	              res.status(500).send('' + err);
	            }

	          case 1:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function (_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}());

	var PORT = process.env.PORT || 3000;

	server.listen(PORT, function () {
	  return console.log('listening on ', PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(8);

	var _reduxThunk = __webpack_require__(9);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _index = __webpack_require__(10);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var middleware = [_reduxThunk2.default];

	function configureStore(initialState) {
	  var store = (0, _redux.createStore)(_index2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware)));

	  if (false) {
	    module.hot.accept('./reducers/index', function () {
	      /*eslint-disable*/
	      store.replaceReducer(require('./reducers/index').default);
	      /*eslint-enable*/
	    });
	  }

	  return store;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(8);

	var rootReducer = (0, _redux.combineReducers)({
	  data: function data() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: '' };
	    return state;
	  }
	});

	exports.default = rootReducer;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = renderFullHTMLPage;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function renderFullHTMLPage(stringifyHTML, initialState) {
	  return '<!doctype html>' + _server2.default.renderToStaticMarkup(_react2.default.createElement(
	    'html',
	    null,
	    _react2.default.createElement(
	      'head',
	      null,
	      _react2.default.createElement(
	        'title',
	        null,
	        'server side rendering'
	      ),
	      _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/scripts/style.css' })
	    ),
	    _react2.default.createElement(
	      'body',
	      null,
	      _react2.default.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: stringifyHTML } }),
	      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'window.__PRELOADED_STATE__ = ' + JSON.stringify(initialState) + ';' } }),
	      _react2.default.createElement('script', { src: '/scripts/bundle.js' })
	    )
	  ));
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _app = __webpack_require__(13);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      initialMessage: 'greeting'
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var initialMessage = this.state.initialMessage;

	      return _react2.default.createElement(
	        'div',
	        { className: _app2.default.root },
	        initialMessage
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    data: state.data
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
		"root": "app_root_3dVcj"
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);