/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/worker */ \"./src/scripts/worker.js\");\n// import Example from \"./scripts/example\"\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // console.log('Hello World')\n  // const main = document.getElementById(\"main\");\n  // new Example(main);\n\n  const canvas = document.querySelector('canvas');\n  canvas.style = \"position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto\";\n  let ctx = canvas.getContext('2d');\n\n  //background image\n  var background = new Image();\n  background.src = \"src/assets/background2.png\";\n  background.onload = function () {\n    console.log(\"bg\");\n    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);\n  };\n  canvas.width = window.innerWidth * 0.8;\n  canvas.height = window.innerHeight * 0.8;\n  let midx = canvas.width / 2;\n  let midy = canvas.height / 2;\n  let circle = new _scripts_worker__WEBPACK_IMPORTED_MODULE_0__[\"default\"](midx, midy, 20);\n  window.onload = function () {\n    // drawEnemies();\n    // debugger;\n    // circle.animate(ctx);\n    animate();\n  };\n  function animate() {\n    requestAnimationFrame(animate);\n    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);\n    drawEnemies();\n    // circle.update();\n    // enemies.forEach(enemy => enemy.draw(ctx));\n    circle.draw(ctx);\n  }\n  const enemySize = 50;\n  const enemyColor = 'black';\n  const enemyPositions = [\n  // starting positions\n  {\n    x: 100,\n    y: 100,\n    direction: [0, 1]\n  }, {\n    x: 100,\n    y: 300,\n    dir: [-1, 0]\n  }, {\n    x: 800,\n    y: 100\n  }, {\n    x: 800,\n    y: 300\n  }];\n\n  // const enemies = enemyPositions.map(options => {\n  //   return new Enemy(options);\n  // });\n\n  function drawEnemies() {\n    for (let i = 0; i < enemyPositions.length; i++) {\n      const {\n        x,\n        y\n      } = enemyPositions[i];\n      ctx.fillStyle = enemyColor;\n      ctx.fillRect(x, y, enemySize, enemySize);\n    }\n    // this.update = function() {\n\n    //   if (this.x + 20 < 470) {\n    //     this.x ++\n    //   }\n    //   if (this.y + 20 < 240) {\n    //     this.y ++\n    //   }\n    // }\n    // this.drawEnemies()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUEsU0FBUyxDQUFDO0lBQzFDO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNGO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtZ2FtZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiXG5pbXBvcnQgQ2lyY2xlIGZyb20gXCIuL3NjcmlwdHMvd29ya2VyXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZygnSGVsbG8gV29ybGQnKVxuICAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAvLyBuZXcgRXhhbXBsZShtYWluKTtcblxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKVxuICBjYW52YXMuc3R5bGUgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcmlnaHQ6IDBweDsgYm90dG9tOiAwcHg7IG1hcmdpbjogYXV0b1wiO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgLy9iYWNrZ3JvdW5kIGltYWdlXG4gIHZhciBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gIGJhY2tncm91bmQuc3JjID0gXCJzcmMvYXNzZXRzL2JhY2tncm91bmQyLnBuZ1wiO1xuXG4gIGJhY2tncm91bmQub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcImJnXCIpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwwLDAsY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgICBcbiAgfVxuXG5cbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjg7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAgMC44O1xuXG5cbiAgbGV0IG1pZHggPSBjYW52YXMud2lkdGgvMlxuICBsZXQgbWlkeSA9IGNhbnZhcy5oZWlnaHQvMlxuICBsZXQgY2lyY2xlID0gbmV3IENpcmNsZShtaWR4LCBtaWR5LCAyMClcblxuICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gZHJhd0VuZW1pZXMoKTtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICAvLyBjaXJjbGUuYW5pbWF0ZShjdHgpO1xuICAgIGFuaW1hdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwwLDAsY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgXG5cbiAgICBkcmF3RW5lbWllcygpO1xuICAgIC8vIGNpcmNsZS51cGRhdGUoKTtcbiAgICAvLyBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4gZW5lbXkuZHJhdyhjdHgpKTtcbiAgICBjaXJjbGUuZHJhdyhjdHgpO1xuICB9XG5cblxuXG4gIGNvbnN0IGVuZW15U2l6ZSA9IDUwO1xuICBjb25zdCBlbmVteUNvbG9yID0gJ2JsYWNrJztcbiAgY29uc3QgZW5lbXlQb3NpdGlvbnMgPSBbXG4gICAgLy8gc3RhcnRpbmcgcG9zaXRpb25zXG4gICAgeyB4OiAxMDAsIHk6IDEwMCwgZGlyZWN0aW9uOlswLCAxXSB9LFxuICAgIHsgeDogMTAwLCB5OiAzMDAsIGRpcjogWy0xLCAwXSB9LFxuICAgIHsgeDogODAwLCB5OiAxMDAgfSxcbiAgICB7IHg6IDgwMCwgeTogMzAwIH0sXG4gIF07XG5cbiAgLy8gY29uc3QgZW5lbWllcyA9IGVuZW15UG9zaXRpb25zLm1hcChvcHRpb25zID0+IHtcbiAgLy8gICByZXR1cm4gbmV3IEVuZW15KG9wdGlvbnMpO1xuICAvLyB9KTtcblxuICBmdW5jdGlvbiBkcmF3RW5lbWllcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15UG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGVuZW15UG9zaXRpb25zW2ldO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGVuZW15Q29sb3I7XG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgZW5lbXlTaXplLCBlbmVteVNpemUpO1xuICAgIH1cbiAgICAvLyB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICBcbiAgICAvLyAgIGlmICh0aGlzLnggKyAyMCA8IDQ3MCkge1xuICAgIC8vICAgICB0aGlzLnggKytcbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmICh0aGlzLnkgKyAyMCA8IDI0MCkge1xuICAgIC8vICAgICB0aGlzLnkgKytcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gdGhpcy5kcmF3RW5lbWllcygpXG4gIH1cbn0pOyJdLCJuYW1lcyI6WyJDaXJjbGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImRyYXdJbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwibWlkeCIsIm1pZHkiLCJjaXJjbGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0VuZW1pZXMiLCJkcmF3IiwiZW5lbXlTaXplIiwiZW5lbXlDb2xvciIsImVuZW15UG9zaXRpb25zIiwieCIsInkiLCJkaXJlY3Rpb24iLCJkaXIiLCJpIiwibGVuZ3RoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/worker.js":
/*!*******************************!*\
  !*** ./src/scripts/worker.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Circle; }\n/* harmony export */ });\n// let midx = canvas.width/2\n// let midy = canvas.height/2\n\n// export default function Circle (x, y, radius) {\n//   this.x = x\n//   this.y = y\n//   this.radius = radius\n\n//   this.draw = function(ctx) {\n//     ctx.beginPath()\n//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)\n//     ctx.fillStyle = \"blue\"\n//     ctx.fill()\n//   }\n//   // this.draw()\n// }\n\nclass Circle {\n  constructor(x, y, radius) {\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    ctx.fillStyle = \"blue\";\n    ctx.fill();\n  }\n  update() {\n    this.x++;\n  }\n  animate(ctx) {\n    requestAnimationFrame(this.animate.bind(this, ctx));\n    this.update();\n    this.draw(ctx);\n  }\n}\n// let circle = new Circle(midx, midy, 20)\n\n// window.onload = function() {\n//   circle.draw()\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93b3JrZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxNQUFNQSxNQUFNLENBQUM7RUFDMUJDLFdBQVdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxNQUFNLEVBQUU7SUFDeEIsSUFBSSxDQUFDRixDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNSQSxHQUFHLENBQUNDLFNBQVMsRUFBRTtJQUNmRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNOLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxJQUFJLENBQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUVLLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDM0RKLEdBQUcsQ0FBQ0ssU0FBUyxHQUFHLE1BQU07SUFDdEJMLEdBQUcsQ0FBQ00sSUFBSSxFQUFFO0VBQ1o7RUFFQUMsTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsSUFBSSxDQUFDWCxDQUFDLEVBQUU7RUFDVjtFQUVBWSxPQUFPQSxDQUFDUixHQUFHLEVBQUU7SUFDWFMscUJBQXFCLENBQUMsSUFBSSxDQUFDRCxPQUFPLENBQUNFLElBQUksQ0FBQyxJQUFJLEVBQUVWLEdBQUcsQ0FBQyxDQUFDO0lBRW5ELElBQUksQ0FBQ08sTUFBTSxFQUFFO0lBQ2IsSUFBSSxDQUFDUixJQUFJLENBQUNDLEdBQUcsQ0FBQztFQUNoQjtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtZ2FtZS8uL3NyYy9zY3JpcHRzL3dvcmtlci5qcz8xNWZiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBsZXQgbWlkeCA9IGNhbnZhcy53aWR0aC8yXG4vLyBsZXQgbWlkeSA9IGNhbnZhcy5oZWlnaHQvMlxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaXJjbGUgKHgsIHksIHJhZGl1cykge1xuLy8gICB0aGlzLnggPSB4XG4vLyAgIHRoaXMueSA9IHlcbi8vICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcblxuLy8gICB0aGlzLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcbi8vICAgICBjdHguYmVnaW5QYXRoKClcbi8vICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKVxuLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIlxuLy8gICAgIGN0eC5maWxsKClcbi8vICAgfVxuLy8gICAvLyB0aGlzLmRyYXcoKVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLngrKztcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMsIGN0eCkpO1xuICAgIFxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5kcmF3KGN0eCk7XG4gIH1cbn1cbi8vIGxldCBjaXJjbGUgPSBuZXcgQ2lyY2xlKG1pZHgsIG1pZHksIDIwKVxuXG4vLyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4vLyAgIGNpcmNsZS5kcmF3KClcbi8vIH0iXSwibmFtZXMiOlsiQ2lyY2xlIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsInJhZGl1cyIsImRyYXciLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwidXBkYXRlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/worker.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1nYW1lLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;