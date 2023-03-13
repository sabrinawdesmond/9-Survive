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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/circle */ \"./src/scripts/circle.js\");\n// import Example from \"./scripts/example\"\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // console.log('Hello World')\n  // const main = document.getElementById(\"main\");\n  // new Example(main);\n\n  const canvas = document.querySelector('canvas');\n  canvas.style = \"position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto\";\n  let ctx = canvas.getContext('2d');\n\n  //background image\n  var background = new Image();\n  background.src = \"src/assets/background2.png\";\n  background.onload = function () {\n    console.log(\"bg\");\n    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);\n  };\n  canvas.width = window.innerWidth * 0.8;\n  canvas.height = window.innerHeight * 0.8;\n  let midx = canvas.width / 2;\n  let midy = canvas.height / 2;\n  let circle = new _scripts_circle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](midx, midy, 20);\n  window.onload = function () {\n    // drawEnemies();\n    // debugger;\n    // circle.animate(ctx);\n    animate();\n  };\n  function animate() {\n    requestAnimationFrame(animate);\n    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);\n    drawEnemies();\n    // circle.update();\n    // enemies.forEach(enemy => enemy.draw(ctx));\n    circle.draw(ctx);\n  }\n  const enemySize = 50;\n  const enemyColor = 'black';\n  const enemyPositions = [\n  // starting positions\n  {\n    x: 10,\n    y: midy,\n    direction: [1, 0]\n  }, {\n    x: midx,\n    y: 10,\n    direction: [0, -1]\n  }, {\n    x: canvas.width - 60,\n    y: midy,\n    direction: [-1, 0]\n  }, {\n    x: midx,\n    y: canvas.height - 60,\n    direction: [0, 1]\n  }];\n  const enemies = enemyPositions.map(options => {\n    return new Enemy(options);\n  });\n  function drawEnemies() {\n    for (let i = 0; i < enemyPositions.length; i++) {\n      const {\n        x,\n        y\n      } = enemyPositions[i];\n      ctx.fillStyle = enemyColor;\n      ctx.fillRect(x, y, enemySize, enemySize);\n    }\n    // this.update = function() {\n\n    //   if (this.x + 20 < 470) {\n    //     this.x ++\n    //   }\n    //   if (this.y + 20 < 240) {\n    //     this.y ++\n    //   }\n    // }\n    // this.drawEnemies()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdSLGNBQWMsQ0FBQ1MsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUM5QyxNQUFNO1FBQUVQLENBQUM7UUFBRUM7TUFBRSxDQUFDLEdBQUdGLGNBQWMsQ0FBQ1EsQ0FBQyxDQUFDO01BQ2xDL0IsR0FBRyxDQUFDaUMsU0FBUyxHQUFHWCxVQUFVO01BQzFCdEIsR0FBRyxDQUFDa0MsUUFBUSxDQUFDVixDQUFDLEVBQUVDLENBQUMsRUFBRUosU0FBUyxFQUFFQSxTQUFTLENBQUM7SUFDMUM7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1nYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCJcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vc2NyaXB0cy9jaXJjbGVcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCcpXG4gIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIC8vIG5ldyBFeGFtcGxlKG1haW4pO1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXG4gIGNhbnZhcy5zdHlsZSA9IFwicG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsgbGVmdDogMHB4OyByaWdodDogMHB4OyBib3R0b206IDBweDsgbWFyZ2luOiBhdXRvXCI7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvL2JhY2tncm91bmQgaW1hZ2VcbiAgdmFyIGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgYmFja2dyb3VuZC5zcmMgPSBcInNyYy9hc3NldHMvYmFja2dyb3VuZDIucG5nXCI7XG5cbiAgYmFja2dyb3VuZC5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiYmdcIik7XG4gICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLDAsMCxjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAgIFxuICB9XG5cblxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuODtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqICAwLjg7XG5cblxuICBsZXQgbWlkeCA9IGNhbnZhcy53aWR0aC8yXG4gIGxldCBtaWR5ID0gY2FudmFzLmhlaWdodC8yXG4gIGxldCBjaXJjbGUgPSBuZXcgQ2lyY2xlKG1pZHgsIG1pZHksIDIwKVxuXG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBkcmF3RW5lbWllcygpO1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIC8vIGNpcmNsZS5hbmltYXRlKGN0eCk7XG4gICAgYW5pbWF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLDAsMCxjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyBcblxuICAgIGRyYXdFbmVtaWVzKCk7XG4gICAgLy8gY2lyY2xlLnVwZGF0ZSgpO1xuICAgIC8vIGVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiBlbmVteS5kcmF3KGN0eCkpO1xuICAgIGNpcmNsZS5kcmF3KGN0eCk7XG4gIH1cblxuXG5cbiAgY29uc3QgZW5lbXlTaXplID0gNTA7XG4gIGNvbnN0IGVuZW15Q29sb3IgPSAnYmxhY2snO1xuICBjb25zdCBlbmVteVBvc2l0aW9ucyA9IFtcbiAgICAvLyBzdGFydGluZyBwb3NpdGlvbnNcbiAgICB7IHg6IDEwLCB5OiBtaWR5LCBkaXJlY3Rpb246WzEsMF0gfSxcbiAgICB7IHg6IG1pZHgsIHk6IDEwLCBkaXJlY3Rpb246IFswLCAtMV0gfSxcbiAgICB7IHg6IGNhbnZhcy53aWR0aCAtIDYwLCB5OiBtaWR5LCBkaXJlY3Rpb246IFstMSwgMF0gfSxcbiAgICB7IHg6IG1pZHgsIHk6IGNhbnZhcy5oZWlnaHQgLSA2MCwgZGlyZWN0aW9uOiBbMCwgMV0gfSxcbiAgXTtcblxuICBjb25zdCBlbmVtaWVzID0gZW5lbXlQb3NpdGlvbnMubWFwKG9wdGlvbnMgPT4ge1xuICAgIHJldHVybiBuZXcgRW5lbXkob3B0aW9ucyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRyYXdFbmVtaWVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZW5lbXlQb3NpdGlvbnNbaV07XG4gICAgICBjdHguZmlsbFN0eWxlID0gZW5lbXlDb2xvcjtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCBlbmVteVNpemUsIGVuZW15U2l6ZSk7XG4gICAgfVxuICAgIC8vIHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIFxuICAgIC8vICAgaWYgKHRoaXMueCArIDIwIDwgNDcwKSB7XG4gICAgLy8gICAgIHRoaXMueCArK1xuICAgIC8vICAgfVxuICAgIC8vICAgaWYgKHRoaXMueSArIDIwIDwgMjQwKSB7XG4gICAgLy8gICAgIHRoaXMueSArK1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyB0aGlzLmRyYXdFbmVtaWVzKClcbiAgfVxufSk7Il0sIm5hbWVzIjpbIkNpcmNsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImN0eCIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJtaWR4IiwibWlkeSIsImNpcmNsZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3RW5lbWllcyIsImRyYXciLCJlbmVteVNpemUiLCJlbmVteUNvbG9yIiwiZW5lbXlQb3NpdGlvbnMiLCJ4IiwieSIsImRpcmVjdGlvbiIsImVuZW1pZXMiLCJtYXAiLCJvcHRpb25zIiwiRW5lbXkiLCJpIiwibGVuZ3RoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/circle.js":
/*!*******************************!*\
  !*** ./src/scripts/circle.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Circle; }\n/* harmony export */ });\nclass Circle {\n  constructor(x, y, radius) {\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    ctx.fillStyle = \"blue\";\n    ctx.fill();\n  }\n  update() {\n    this.x++;\n  }\n  animate(ctx) {\n    requestAnimationFrame(this.animate.bind(this, ctx));\n    this.update();\n    this.draw(ctx);\n  }\n}\n// let circle = new Circle(midx, midy, 20)\n\n// window.onload = function() {\n//   circle.draw()\n// }\n\n// let midx = canvas.width/2\n// let midy = canvas.height/2\n\n// export default function Circle (x, y, radius) {\n//   this.x = x\n//   this.y = y\n//   this.radius = radius\n\n//   this.draw = function(ctx) {\n//     ctx.beginPath()\n//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)\n//     ctx.fillStyle = \"blue\"\n//     ctx.fill()\n//   }\n//   // this.draw()\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaXJjbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNlLE1BQU1BLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLE1BQU0sRUFBRTtJQUN4QixJQUFJLENBQUNGLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7RUFFQUMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ1JBLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2ZELEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRUssSUFBSSxDQUFDQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUMzREosR0FBRyxDQUFDSyxTQUFTLEdBQUcsTUFBTTtJQUN0QkwsR0FBRyxDQUFDTSxJQUFJLEVBQUU7RUFDWjtFQUVBQyxNQUFNQSxDQUFBLEVBQUc7SUFDUCxJQUFJLENBQUNYLENBQUMsRUFBRTtFQUNWO0VBRUFZLE9BQU9BLENBQUNSLEdBQUcsRUFBRTtJQUNYUyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRVYsR0FBRyxDQUFDLENBQUM7SUFFbkQsSUFBSSxDQUFDTyxNQUFNLEVBQUU7SUFDYixJQUFJLENBQUNSLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0VBQ2hCO0FBQ0Y7QUFDQTs7QUFFQTtBQUNFO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtZ2FtZS8uL3NyYy9zY3JpcHRzL2NpcmNsZS5qcz9jNDc5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgcmFkaXVzKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICB9XG4gIFxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuICBcbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueCsrO1xuICB9XG4gIFxuICBhbmltYXRlKGN0eCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzLCBjdHgpKTtcbiAgICBcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuZHJhdyhjdHgpO1xuICB9XG59XG4vLyBsZXQgY2lyY2xlID0gbmV3IENpcmNsZShtaWR4LCBtaWR5LCAyMClcblxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAvLyAgIGNpcmNsZS5kcmF3KClcbiAgLy8gfVxuICBcbiAgXG4gIC8vIGxldCBtaWR4ID0gY2FudmFzLndpZHRoLzJcbiAgLy8gbGV0IG1pZHkgPSBjYW52YXMuaGVpZ2h0LzJcbiAgXG4gIC8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENpcmNsZSAoeCwgeSwgcmFkaXVzKSB7XG4gIC8vICAgdGhpcy54ID0geFxuICAvLyAgIHRoaXMueSA9IHlcbiAgLy8gICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICBcbiAgLy8gICB0aGlzLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcbiAgLy8gICAgIGN0eC5iZWdpblBhdGgoKVxuICAvLyAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSlcbiAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIlxuICAvLyAgICAgY3R4LmZpbGwoKVxuICAvLyAgIH1cbiAgLy8gICAvLyB0aGlzLmRyYXcoKVxuICAvLyB9Il0sIm5hbWVzIjpbIkNpcmNsZSIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJyYWRpdXMiLCJkcmF3IiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsInVwZGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/circle.js\n");

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