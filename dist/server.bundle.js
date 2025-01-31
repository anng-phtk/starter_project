/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "node:module";
/******/ var __webpack_modules__ = ({

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("express");;

/***/ }),

/***/ "express-ejs-layouts":
/*!**************************************!*\
  !*** external "express-ejs-layouts" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("express-ejs-layouts");;

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:path");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:url");

/***/ }),

/***/ "./src/server/routes/CIKRoutes.js":
/*!****************************************!*\
  !*** ./src/server/routes/CIKRoutes.js ***!
  \****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([express__WEBPACK_IMPORTED_MODULE_0__]);\nexpress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n// const express = require('express');\r\n\r\nconst cikRouter = express__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Router();\r\n\r\n// Define an example /hello route that will be accessible via localhost:3000/api/vi/cik/hello\r\ncikRouter.get('/hello', (req, res) => {\r\n    res.send('Hello, world!');\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cikRouter);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://js-secana-ap/./src/server/routes/CIKRoutes.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _CIKRoutes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CIKRoutes.js */ \"./src/server/routes/CIKRoutes.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([express__WEBPACK_IMPORTED_MODULE_0__, _CIKRoutes_js__WEBPACK_IMPORTED_MODULE_1__]);\n([express__WEBPACK_IMPORTED_MODULE_0__, _CIKRoutes_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Router();\r\n\r\nrouter.use('/cik', _CIKRoutes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); // Mount the cikRoutes under /cik\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://js-secana-ap/./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var node_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:url */ \"node:url\");\n/* harmony import */ var express_ejs_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-ejs-layouts */ \"express-ejs-layouts\");\n/* harmony import */ var _routes_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/index.js */ \"./src/server/routes/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([express__WEBPACK_IMPORTED_MODULE_0__, express_ejs_layouts__WEBPACK_IMPORTED_MODULE_3__, _routes_index_js__WEBPACK_IMPORTED_MODULE_4__]);\n([express__WEBPACK_IMPORTED_MODULE_0__, express_ejs_layouts__WEBPACK_IMPORTED_MODULE_3__, _routes_index_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst app = (0,express__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst PORT = {\"ACLOCAL_PATH\":\"C:\\\\Program Files\\\\Git\\\\mingw64\\\\share\\\\aclocal;C:\\\\Program Files\\\\Git\\\\usr\\\\share\\\\aclocal\",\"ALLUSERSPROFILE\":\"C:\\\\ProgramData\",\"APPDATA\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Roaming\",\"ChocolateyInstall\":\"C:\\\\ProgramData\\\\chocolatey\",\"ChocolateyLastPathUpdate\":\"133397197543235502\",\"CHROME_CRASHPAD_PIPE_NAME\":\"\\\\\\\\.\\\\pipe\\\\crashpad_19276_FSMYKZDQMNGGZYVH\",\"COLOR\":\"1\",\"COLORTERM\":\"truecolor\",\"COMMONPROGRAMFILES\":\"C:\\\\Program Files\\\\Common Files\",\"CommonProgramFiles(x86)\":\"C:\\\\Program Files (x86)\\\\Common Files\",\"CommonProgramW6432\":\"C:\\\\Program Files\\\\Common Files\",\"COMPUTERNAME\":\"ANANG-LAPTOP\",\"COMSPEC\":\"C:\\\\Windows\\\\system32\\\\cmd.exe\",\"CONFIG_SITE\":\"C:/Program Files/Git/etc/config.site\",\"DISPLAY\":\"needs-to-be-defined\",\"DriverData\":\"C:\\\\Windows\\\\System32\\\\Drivers\\\\DriverData\",\"EDITOR\":\"C:\\\\Windows\\\\notepad.exe\",\"EFC_22908\":\"1\",\"EXEPATH\":\"C:\\\\Program Files\\\\Git\\\\bin\",\"FG_ROOT\":\"C:\\\\Program Files\\\\FlightGear 2020.3\\\\data\",\"FPS_BROWSER_APP_PROFILE_STRING\":\"Internet Explorer\",\"FPS_BROWSER_USER_PROFILE_STRING\":\"Default\",\"GIT_ASKPASS\":\"c:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Programs\\\\Microsoft VS Code\\\\resources\\\\app\\\\extensions\\\\git\\\\dist\\\\askpass.sh\",\"HOME\":\"C:\\\\Users\\\\anang\",\"HOMEDRIVE\":\"C:\",\"HOMEPATH\":\"\\\\Users\\\\anang\",\"HOSTNAME\":\"Anang-Laptop\",\"INFOPATH\":\"C:\\\\Program Files\\\\Git\\\\mingw64\\\\local\\\\info;C:\\\\Program Files\\\\Git\\\\mingw64\\\\share\\\\info;C:\\\\Program Files\\\\Git\\\\usr\\\\local\\\\info;C:\\\\Program Files\\\\Git\\\\usr\\\\share\\\\info;C:\\\\Program Files\\\\Git\\\\usr\\\\info;C:\\\\Program Files\\\\Git\\\\share\\\\info\",\"INIT_CWD\":\"E:\\\\Development\\\\JSProject\\\\js-secana-ap\",\"LANG\":\"en_US.UTF-8\",\"LOCALAPPDATA\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Local\",\"LOGONSERVER\":\"\\\\\\\\ANANG-LAPTOP\",\"MANPATH\":\"C:\\\\Program Files\\\\Git\\\\mingw64\\\\local\\\\man;C:\\\\Program Files\\\\Git\\\\mingw64\\\\share\\\\man;C:\\\\Program Files\\\\Git\\\\usr\\\\local\\\\man;C:\\\\Program Files\\\\Git\\\\usr\\\\share\\\\man;C:\\\\Program Files\\\\Git\\\\usr\\\\man;C:\\\\Program Files\\\\Git\\\\share\\\\man\",\"MINGW_CHOST\":\"x86_64-w64-mingw32\",\"MINGW_PACKAGE_PREFIX\":\"mingw-w64-x86_64\",\"MINGW_PREFIX\":\"C:/Program Files/Git/mingw64\",\"MSYS\":\"disable_pcon\",\"MSYSTEM\":\"MINGW64\",\"MSYSTEM_CARCH\":\"x86_64\",\"MSYSTEM_CHOST\":\"x86_64-w64-mingw32\",\"MSYSTEM_PREFIX\":\"C:/Program Files/Git/mingw64\",\"NODE\":\"C:\\\\Program Files\\\\nodejs\\\\node.exe\",\"npm_command\":\"run-script\",\"npm_config_cache\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\npm-cache\",\"npm_config_globalconfig\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Roaming\\\\npm\\\\etc\\\\npmrc\",\"npm_config_global_prefix\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Roaming\\\\npm\",\"npm_config_init_module\":\"C:\\\\Users\\\\anang\\\\.npm-init.js\",\"npm_config_local_prefix\":\"E:\\\\Development\\\\JSProject\\\\js-secana-ap\",\"npm_config_node_gyp\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\npm\\\\node_modules\\\\node-gyp\\\\bin\\\\node-gyp.js\",\"npm_config_noproxy\":\"\",\"npm_config_npm_version\":\"10.8.3\",\"npm_config_prefix\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Roaming\\\\npm\",\"npm_config_userconfig\":\"C:\\\\Users\\\\anang\\\\.npmrc\",\"npm_config_user_agent\":\"npm/10.8.3 node/v20.7.0 win32 x64 workspaces/false\",\"npm_execpath\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\npm\\\\bin\\\\npm-cli.js\",\"npm_lifecycle_event\":\"build\",\"npm_lifecycle_script\":\"webpack --mode development\",\"npm_node_execpath\":\"C:\\\\Program Files\\\\nodejs\\\\node.exe\",\"npm_package_json\":\"E:\\\\Development\\\\JSProject\\\\js-secana-ap\\\\package.json\",\"npm_package_name\":\"js-secana-ap\",\"npm_package_version\":\"1.0.0\",\"NUMBER_OF_PROCESSORS\":\"12\",\"OneDrive\":\"C:\\\\Users\\\\anang\\\\OneDrive\",\"OneDriveConsumer\":\"C:\\\\Users\\\\anang\\\\OneDrive\",\"ORIGINAL_PATH\":\"C:\\\\Program Files\\\\Git\\\\mingw64\\\\bin;C:\\\\Program Files\\\\Git\\\\usr\\\\bin;C:\\\\Users\\\\anang\\\\bin;C:\\\\Python311\\\\Scripts;C:\\\\Python311;C:\\\\Windows\\\\system32;C:\\\\Windows;C:\\\\Windows\\\\System32\\\\Wbem;C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0;C:\\\\Windows\\\\System32\\\\OpenSSH;C:\\\\Program Files\\\\Docker\\\\Docker\\\\resources\\\\bin;C:\\\\Program Files\\\\Git\\\\cmd;C:\\\\Program Files\\\\nodejs;C:\\\\ProgramData\\\\chocolatey\\\\bin;C:\\\\Program Files\\\\Kubernetes\\\\Minikube;C:\\\\Program Files\\\\dotnet;C:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Microsoft\\\\WindowsApps;C:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Programs\\\\Microsoft VS Code\\\\bin;C:\\\\Users\\\\anang\\\\AppData\\\\Roaming\\\\npm\",\"ORIGINAL_TEMP\":\"C:/Users/anang/AppData/Local/Temp\",\"ORIGINAL_TMP\":\"C:/Users/anang/AppData/Local/Temp\",\"ORIGINAL_XDG_CURRENT_DESKTOP\":\"undefined\",\"OS\":\"Windows_NT\",\"PATH\":\"E:\\\\Development\\\\JSProject\\\\js-secana-ap\\\\node_modules\\\\.bin;E:\\\\Development\\\\JSProject\\\\node_modules\\\\.bin;E:\\\\Development\\\\node_modules\\\\.bin;E:\\\\node_modules\\\\.bin;C:\\\\Users\\\\anang\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\npm\\\\node_modules\\\\@npmcli\\\\run-script\\\\lib\\\\node-gyp-bin;C:\\\\Users\\\\anang\\\\bin;C:\\\\Program Files\\\\Git\\\\mingw64\\\\bin;C:\\\\Program Files\\\\Git\\\\usr\\\\local\\\\bin;C:\\\\Program Files\\\\Git\\\\usr\\\\bin;C:\\\\Program Files\\\\Git\\\\usr\\\\bin;C:\\\\Program Files\\\\Git\\\\mingw64\\\\bin;C:\\\\Program Files\\\\Git\\\\usr\\\\bin;C:\\\\Users\\\\anang\\\\bin;C:\\\\Python311\\\\Scripts;C:\\\\Python311;C:\\\\Windows\\\\system32;C:\\\\Windows;C:\\\\Windows\\\\System32\\\\Wbem;C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0;C:\\\\Windows\\\\System32\\\\OpenSSH;C:\\\\Program Files\\\\Docker\\\\Docker\\\\resources\\\\bin;C:\\\\Program Files\\\\Git\\\\cmd;C:\\\\Program Files\\\\nodejs;C:\\\\ProgramData\\\\chocolatey\\\\bin;C:\\\\Program Files\\\\Kubernetes\\\\Minikube;C:\\\\Program Files\\\\dotnet;C:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Microsoft\\\\WindowsApps;C:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Programs\\\\Microsoft VS Code\\\\bin;C:\\\\Users\\\\anang\\\\AppData\\\\Roaming\\\\npm;C:\\\\Program Files\\\\Git\\\\usr\\\\bin\\\\vendor_perl;C:\\\\Program Files\\\\Git\\\\usr\\\\bin\\\\core_perl\",\"PATHEXT\":\".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW\",\"PKG_CONFIG_PATH\":\"C:\\\\Program Files\\\\Git\\\\mingw64\\\\lib\\\\pkgconfig;C:\\\\Program Files\\\\Git\\\\mingw64\\\\share\\\\pkgconfig\",\"PKG_CONFIG_SYSTEM_INCLUDE_PATH\":\"C:/Program Files/Git/mingw64/include\",\"PKG_CONFIG_SYSTEM_LIBRARY_PATH\":\"C:/Program Files/Git/mingw64/lib\",\"PLINK_PROTOCOL\":\"ssh\",\"PROCESSOR_ARCHITECTURE\":\"AMD64\",\"PROCESSOR_IDENTIFIER\":\"Intel64 Family 6 Model 158 Stepping 10, GenuineIntel\",\"PROCESSOR_LEVEL\":\"6\",\"PROCESSOR_REVISION\":\"9e0a\",\"ProgramData\":\"C:\\\\ProgramData\",\"PROGRAMFILES\":\"C:\\\\Program Files\",\"ProgramFiles(x86)\":\"C:\\\\Program Files (x86)\",\"ProgramW6432\":\"C:\\\\Program Files\",\"PROMPT\":\"$P$G\",\"PSModulePath\":\"C:\\\\Program Files\\\\WindowsPowerShell\\\\Modules;C:\\\\Windows\\\\system32\\\\WindowsPowerShell\\\\v1.0\\\\Modules\",\"PUBLIC\":\"C:\\\\Users\\\\Public\",\"PWD\":\"E:/Development/JSProject/js-secana-ap\",\"SESSIONNAME\":\"Console\",\"SHELL\":\"C:\\\\Program Files\\\\Git\\\\usr\\\\bin\\\\bash.exe\",\"SHLVL\":\"2\",\"SSH_ASKPASS\":\"C:/Program Files/Git/mingw64/bin/git-askpass.exe\",\"SYSTEMDRIVE\":\"C:\",\"SYSTEMROOT\":\"C:\\\\Windows\",\"TEMP\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Temp\",\"TERM\":\"xterm-256color\",\"TERM_PROGRAM\":\"vscode\",\"TERM_PROGRAM_VERSION\":\"1.96.4\",\"TMP\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Temp\",\"TMPDIR\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Temp\",\"USERDOMAIN\":\"ANANG-LAPTOP\",\"USERDOMAIN_ROAMINGPROFILE\":\"ANANG-LAPTOP\",\"USERNAME\":\"anang\",\"USERPROFILE\":\"C:\\\\Users\\\\anang\",\"VSCODE_GIT_ASKPASS_EXTRA_ARGS\":\"\",\"VSCODE_GIT_ASKPASS_MAIN\":\"c:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Programs\\\\Microsoft VS Code\\\\resources\\\\app\\\\extensions\\\\git\\\\dist\\\\askpass-main.js\",\"VSCODE_GIT_ASKPASS_NODE\":\"C:\\\\Users\\\\anang\\\\AppData\\\\Local\\\\Programs\\\\Microsoft VS Code\\\\Code.exe\",\"VSCODE_GIT_IPC_HANDLE\":\"\\\\\\\\.\\\\pipe\\\\vscode-git-35f904f5e9-sock\",\"WINDIR\":\"C:\\\\Windows\",\"_\":\"C:/Program Files/nodejs/node.exe\"}.PORT || 3000;\n\nconst __filename = (0,node_url__WEBPACK_IMPORTED_MODULE_2__.fileURLToPath)(\"file:///E:/Development/JSProject/js-secana-ap/src/server/server.js\");\nconst __dirname = node_path__WEBPACK_IMPORTED_MODULE_1__.dirname(__filename);\n\n// Set EJS as the templating engine\napp.set('view engine', 'ejs');\napp.set('views', node_path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'views'));\napp.use(express_ejs_layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"]); // Use the middleware\n\n\n// Parse JSON and URL-encoded bodies\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"default\"].urlencoded({ extended: true }));\n\n// mount all routes\napp.use('/api/v1', _routes_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n\n\n\n\n// example code to verify everything is working\n// ---------------------------------------------\n\n// Dynamic route (EJS)\napp.get('/dynamic', (req, res) => {\n  const data = {\n    title: 'Dynamic Page',\n    message: 'This content is rendered dynamically!',\n    items: ['Item 1', 'Item 2', 'Item 3'],\n  };\n\n  // Render the EJS template with data\n  res.render('dynamic', data);\n});\n\n// Home route (static HTML)\napp.get('/', (req, res) => {\n  console.log(\"serving\")\n  res.sendFile(node_path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, '../public/index.html'));\n});\n\n// ---------------------------------------------\n\n\n\n// Serve static files (moved after routes)\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"static\"](node_path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, './src/public')));\n\n// Start the server\napp.listen(PORT, () => {\n  console.log(`Server is running on http://localhost:${PORT}`);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://js-secana-ap/./src/server/server.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = (queue) => {
/******/ 		if(queue && queue.d < 1) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, (e) => {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = (fn) => (fn(queue));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = x => {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}));
/******/ 	__webpack_require__.a = (module, body, hasAwait) => {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = -1);
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = () => (currentDeps.map((d) => {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}))
/******/ 			var promise = new Promise((resolve) => {
/******/ 				fn = () => (resolve(getResult));
/******/ 				fn.r = 0;
/******/ 				var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 				currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 		queue && queue.d < 0 && (queue.d = 0);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ __webpack_exports__ = await __webpack_exports__;
/******/ 
