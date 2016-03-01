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


	console.log(__webpack_require__(/*! ./json */ 3));
	console.log(__webpack_require__(/*! ./script */ 5));
	console.log(__webpack_require__(/*! ./hson */ 9));
	console.log(__webpack_require__(/*! ./raw */ 11));
	console.log(__webpack_require__(/*! ./val */ 1));
	console.log(__webpack_require__(/*! ./to-string */ 13));
	console.log(__webpack_require__(/*! ./imports */ 15))
	console.log(__webpack_require__(/*! ./exports */ 19))
	console.log(__webpack_require__(/*! ./expose */ 22))



/***/ },
/* 1 */
/*!**************************!*\
  !*** ./app/val/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/2.
	 */
	module.exports=__webpack_require__(/*! val!./config.js */ 2)

/***/ },
/* 2 */
/*!******************************************!*\
  !*** ./~/val-loader!./app/val/config.js ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports="darwin";

/***/ },
/* 3 */
/*!***************************!*\
  !*** ./app/json/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/1.
	 */
	module.exports=__webpack_require__(/*! json!./config.json */ 4);

	//console.log(require('./config.json'));


/***/ },
/* 4 */
/*!**********************************************!*\
  !*** ./~/json-loader!./app/json/config.json ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = {
		"name": "config"
	};

/***/ },
/* 5 */
/*!*****************************!*\
  !*** ./app/script/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/1.
	 */

	__webpack_require__(/*! script!./browser_require.js */ 6)

/***/ },
/* 6 */
/*!*********************************************************!*\
  !*** ./~/script-loader!./app/script/browser_require.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! !./~/script-loader/addScript.js */ 7)(__webpack_require__(/*! !./~/raw-loader!./app/script/browser_require.js */ 8))

/***/ },
/* 7 */
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
/* 8 */
/*!******************************************************!*\
  !*** ./~/raw-loader!./app/script/browser_require.js ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = "/**\n * Created by wyvern on 16/3/1.\n */\nwindow.require=function(){\n    console.log(arguments);\n}\nrequire(2);\n"

/***/ },
/* 9 */
/*!***************************!*\
  !*** ./app/hson/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/2.
	 */

	module.exports=__webpack_require__(/*! hson!./config.hson */ 10);

/***/ },
/* 10 */
/*!**********************************************!*\
  !*** ./~/hson-loader!./app/hson/config.hson ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = {"name":"hscon"}

/***/ },
/* 11 */
/*!**************************!*\
  !*** ./app/raw/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/2.
	 */
	module.exports=__webpack_require__(/*! raw!./config.txt */ 12);

/***/ },
/* 12 */
/*!*******************************************!*\
  !*** ./~/raw-loader!./app/raw/config.txt ***!
  \*******************************************/
/***/ function(module, exports) {

	module.exports = "/**\n * Created by wyvern on 16/3/2.\n */\n"

/***/ },
/* 13 */
/*!********************************!*\
  !*** ./app/to-string/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/2.
	 */
	module.exports=__webpack_require__(/*! to-string!./config.js */ 14)

/***/ },
/* 14 */
/*!***********************************************************************!*\
  !*** ./~/to-string-loader/src/to-string.js!./app/to-string/config.js ***!
  \***********************************************************************/
/***/ function(module, exports) {

	module.exports = "darwin"

/***/ },
/* 15 */
/*!******************************!*\
  !*** ./app/imports/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/2.
	 */
	module.exports=__webpack_require__(/*! imports?uuid!./config.js */ 16);

/***/ },
/* 16 */
/*!*******************************************************!*\
  !*** ./~/imports-loader?uuid!./app/imports/config.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var uuid = __webpack_require__(/*! uuid */ 17);

	/**
	 * Created by wyvern on 16/3/2.
	 */
	module.exports=uuid();


/***/ },
/* 17 */
/*!************************!*\
  !*** ./~/uuid/uuid.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(/*! ./rng */ 18);

	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}

	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;

	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });

	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }

	  return buf;
	}

	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}

	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html

	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();

	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];

	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;

	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];

	  options = options || {};

	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }

	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }

	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }

	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;

	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;

	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;

	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;

	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;

	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;

	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;

	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }

	  return buf ? buf : unparse(b);
	}

	// **`v4()` - Generate random UUID**

	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || _rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || unparse(rnds);
	}

	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;

	module.exports = uuid;


/***/ },
/* 18 */
/*!*******************************!*\
  !*** ./~/uuid/rng-browser.js ***!
  \*******************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;

	if (global.crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}

	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return _rnds;
	  };
	}

	module.exports = rng;


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/*!******************************!*\
  !*** ./app/exports/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/2.
	 */
	module.exports=__webpack_require__(/*! exports?config!./config.js */ 21);


/***/ },
/* 20 */,
/* 21 */
/*!*********************************************************!*\
  !*** ./~/exports-loader?config!./app/exports/config.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	/**
	 * Created by wyvern on 16/3/2.
	 */
	var config = {
	    name:'need_to_be_exported'
	}

	/*** EXPORTS FROM exports-loader ***/
	module.exports = config;

/***/ },
/* 22 */
/*!*****************************!*\
  !*** ./app/expose/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wyvern on 16/3/2.
	 */
	__webpack_require__(/*! expose?window.Date.defaultConfig!./config */ 28);

/***/ },
/* 23 */,
/* 24 */
/*!******************************!*\
  !*** ./app/expose/config.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * Created by wyvern on 16/3/2.
	 */
	module.exports={
	    name:'expose'
	}

	console.log(Date.defaultConfig);
	setTimeout(function(){
	    console.log(Date.defaultConfig);
	},1)

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/*!**************************************************************************!*\
  !*** ./~/expose-loader?window.Date.defaultConfig!./app/expose/config.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {if(!global["window"]) global["window"] = {};
	if(!global["window"]["Date"]) global["window"]["Date"] = {};
	module.exports = global["window"]["Date"]["defaultConfig"] = __webpack_require__(/*! -!./app/expose/config.js */ 24);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);