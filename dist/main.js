/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n\n\nlet tempSymbol;\nlet weather;\n\nconst getWeather = (city) => {\n  const container = document.getElementById('weather-container');\n  container.innerHTML = '<h2 class=\"loading\">Loading...</h2>';\n  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04d4d495e39f2311c4acd1148b6e2130`)\n    .then(response => response.json())\n    .then(response => {\n      if (response.message) {\n        container.innerHTML = `<h2 class=\"error\">${response.message}</h2>`;\n      } else {\n        loadWeather(response);\n      }\n    });\n}\n\nconst displayWeather = (response) => {\n  document.getElementById('weather-container').innerHTML = '';\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('h2', 'weather-container', weather.city);\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'weather-container', null, [['src', weather.icon]]);\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('h3', 'weather-container', weather.weather_title);\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'weather-container', `Temperature: ${weather.d_temp}°${tempSymbol}`);\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('p', 'weather-container', `Today: ${weather.weather_desc} and it feels like ${weather.d_temp_feel}°${tempSymbol}`);\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'weather-container', `Min Temp: ${weather.d_temp_min}°${tempSymbol}`);\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'weather-container', `Max Temp: ${weather.d_temp_max}°${tempSymbol}`);\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'weather-container', `Humidity: ${weather.humidity}%`);\n}\n\nconst toF = (temp) => ((temp * 9/5) + 32).toFixed(0);\n\nconst useSymbol = (symbol) => {\n  if (tempSymbol != symbol) {\n    tempSymbol = symbol;\n    if (symbol == 'F') {\n      weather.d_temp = toF(weather.temp);\n      weather.d_temp_feel = toF(weather.temp_feel);\n      weather.d_temp_min = toF(weather.temp_min);\n      weather.d_temp_max = toF(weather.temp_max);\n    } else {\n      weather.d_temp = weather.temp.toFixed(0);\n      weather.d_temp_feel = weather.temp_feel.toFixed(0);\n      weather.d_temp_min = weather.temp_min.toFixed(0);\n      weather.d_temp_max = weather.temp_max.toFixed(0);\n    }\n    displayWeather();\n  }\n}\n\nconst loadWeather = (response) => {\n  const d = response.weather[0].description;\n  weather = {\n    city: response.name,\n    temp: response.main.temp - 273.15,\n    temp_feel: response.main.feels_like - 273.15,\n    temp_min: response.main.temp_min - 273.15,\n    temp_max: response.main.temp_max - 273.15,\n    d_temp: (response.main.temp - 273.15).toFixed(0),\n    d_temp_feel: (response.main.feels_like - 273.15).toFixed(0),\n    d_temp_min: (response.main.temp_min - 273.15).toFixed(0),\n    d_temp_max: (response.main.temp_max - 273.15).toFixed(0),\n    humidity: response.main.humidity,\n    weather_title: response.weather[0].main,\n    weather_desc: d.charAt(0).toUpperCase() + d.slice(1),\n    icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png?appid=04d4d495e39f2311c4acd1148b6e2130`,\n  };\n  useSymbol('C');\n}\n\nconst submit = (e) => {\n  e.preventDefault();\n  getWeather(e.target.elements.city.value);\n}\n\n\n;(0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('h1', 'content', 'Weather');\n(0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('form', 'content', null, [['id', 'city-form']], (node) => {\n  node.addEventListener('submit', (e) => { submit(e); });\n});\n(0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('input', 'city-form', null, [['type', 'text'], ['name', 'city'], ['placeholder', 'Type city and press Enter to get weather']]);\n(0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'content', null, [['id', 'weather-container'], ['class', 'weather-container']]);\ngetWeather('london');\n(0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'content', 'Use °C', null, (node) => {\n  node.addEventListener('click', () => { useSymbol('C'); });\n});\n(0,_library__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'content', 'Use °F', null, (node) => {\n  node.addEventListener('click', () => { useSymbol('F'); });\n});\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst el = (type, parent, content, attr, cb) => {\n  const node = document.createElement(type);\n  if (attr) {\n    for (let i = 0; i < attr.length; i += 1) {\n      node.setAttribute(attr[i][0], attr[i][1]);\n    }\n  }\n  if (content) node.appendChild(document.createTextNode(content));\n  document.getElementById(parent).appendChild(node);\n  if (cb) {\n    cb(node);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (el);\n\n\n//# sourceURL=webpack://weather/./src/library.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;