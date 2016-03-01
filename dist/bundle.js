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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/1.
	 */


	console.log(__webpack_require__(/*! ./json */ 1));
	console.log(__webpack_require__(/*! ./script */ 3));


/***/ },
/* 1 */
/*!***************************!*\
  !*** ./app/json/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/1.
	 */
	module.exports=__webpack_require__(/*! json!./config.json */ 2);

	//console.log(require('./config.json'));


/***/ },
/* 2 */
/*!**********************************************!*\
  !*** ./~/json-loader!./app/json/config.json ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = {
		"name": "config"
	};

/***/ },
/* 3 */
/*!*****************************!*\
  !*** ./app/script/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/1.
	 */

	__webpack_require__(/*! script!./browser_require.js */ 4)

/***/ },
/* 4 */
/*!*********************************************************!*\
  !*** ./~/script-loader!./app/script/browser_require.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! !./~/script-loader/addScript.js */ 5)(__webpack_require__(/*! !./~/raw-loader!./app/script/browser_require.js */ 6))

/***/ },
/* 5 */
/*!**************************************!*\
  !*** ./~/script-loader/addScript.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 6 */
/*!******************************************************!*\
  !*** ./~/raw-loader!./app/script/browser_require.js ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = "/**\n * Created by wyvern on 16/3/1.\n */\nwindow.require=function(){\n    console.log(arguments);\n}\nrequire(2);\n"

/***/ }
/******/ ]);