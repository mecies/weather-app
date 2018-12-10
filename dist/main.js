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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const timer = __webpack_require__(/*! ./src/timer */ \"./src/timer.js\")\r\nconst variables = __webpack_require__(/*! ./src/variables */ \"./src/variables.js\");\r\nconst todayWeather = __webpack_require__(/*! ./src/todayWeather */ \"./src/todayWeather.js\");\r\nconst weatherFoecast = __webpack_require__(/*! ./src/forecastWeather */ \"./src/forecastWeather.js\");\r\n\r\ntimer();\r\n\r\nconsole.log(variables.url)\r\n\r\n//search city\r\ndocument.getElementById('search').addEventListener('click', todayWeather);\r\ndocument.getElementById('search').addEventListener('click', weatherFoecast);\r\ndocument.getElementById('city').addEventListener('keypress', function(e){\r\n    let key = e.which || e.keyCode;\r\n    if (key === 13){\r\n       todayWeather();\r\n    }\r\n    else{\r\n        return\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/forecastWeather.js":
/*!********************************!*\
  !*** ./src/forecastWeather.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const variables = __webpack_require__(/*! ./variables */ \"./src/variables.js\")\r\n\r\nconst weatherForecast = function() {\r\n    let city = document.getElementById('city').value\r\n    fetch(`${variables.url}forecast?q=${city}${variables.key}${variables.unit}&cnt=22`)\r\n        .then((response) => {\r\n            return response.json();\r\n        })\r\n        .then((data) => {\r\n            console.log(data)\r\n            document.getElementById('tomorrow').innerHTML = `tomorrow: <br/>${Math.round(data.list[5].main.temp)}° `;\r\n            document.getElementById('in2days').innerHTML = `in 2 days: </br/>${Math.round(data.list[13].main.temp)}°`;\r\n            document.getElementById('in3days').innerHTML = `in 3 days: <br/>${Math.round(data.list[21].main.temp)}°`;\r\n        })\r\n        .catch((err) => {\r\n            console.log(err);\r\n        });\r\n}\r\nmodule.exports = weatherForecast;\n\n//# sourceURL=webpack:///./src/forecastWeather.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst timer = function timer() {\r\n    const today = new Date();\r\n    let h = today.getHours();\r\n    let m = today.getMinutes();\r\n    let ampm = h >= 12 ? 'pm' : 'am';\r\n    h = h % 12;\r\n    h = h ? h : 12; // the hour '0' should be '12'\r\n    function checkTime(i) {\r\n        if (i < 10) {\r\n            i = \"0\" + i\r\n        }; // add zero in front of numbers < 10\r\n        return i;\r\n    }\r\n    m = checkTime(m);\r\n\r\n    document.getElementById('timer').innerHTML = `${h}:${m} ${ampm}`\r\n    const t = setTimeout(timer, 1000);\r\n}\r\n\r\n\r\nmodule.exports = timer\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ }),

/***/ "./src/todayWeather.js":
/*!*****************************!*\
  !*** ./src/todayWeather.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const variables = __webpack_require__(/*! ./variables */ \"./src/variables.js\")\r\n\r\nconst todayWeather = function () {\r\n    let city = document.getElementById('city').value\r\n    fetch(`${variables.url}weather?q=${city}${variables.key}${variables.unit}`)\r\n        .then((response) => {\r\n            return response.json();\r\n        })\r\n        .then((data) => {\r\n\r\n            const nowTimestamp = Math.floor(Date.now() / 1000)\r\n            if ((nowTimestamp >= data.sys.sunrise && nowTimestamp <= data.sys.sunset) &&\r\n                (nowTimestamp >= data.sys.sunrise || nowTimestamp < data.sys.sunset)) {\r\n                document.querySelector('html').style.backgroundColor = '#89cff0';\r\n                document.querySelector('#phone').style.backgroundColor = '#89cff0';\r\n                //day\r\n            } else {\r\n                //night\r\n                document.querySelector('html').style.backgroundColor = '#5d839c';\r\n                document.querySelector('#phone').style.backgroundColor = '#5d839c';\r\n            }\r\n\r\n            document.getElementById('currentWeather').innerHTML =\r\n                \"<p id = cityAPI>\" + data.name + \"</p>\" +\r\n                \"<br/>\" + \"<p id=temperature>\" + Math.round(data.main.temp) + \"°\" +\r\n                \"</p>\" + \"<p id=windspeed>\" +\r\n                \"wind speed: \" + data.wind.speed + \" km/h\" + \"</p>\";\r\n\r\n        })\r\n        .catch((err) => {\r\n            console.log(err);\r\n        });\r\n}\r\nmodule.exports = todayWeather;\n\n//# sourceURL=webpack:///./src/todayWeather.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const variables = {\r\n    key: \"&APPID=2e4a4f77f480288401ccf9dc0dea9a0c\",\r\n    url: \"http://api.openweathermap.org/data/2.5/\",\r\n    unit: \"&units=metric\"\r\n   \r\n}\r\n\r\nmodule.exports = variables\r\n\r\n\n\n//# sourceURL=webpack:///./src/variables.js?");

/***/ })

/******/ });