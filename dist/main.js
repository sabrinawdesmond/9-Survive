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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/circle */ \"./src/scripts/circle.js\");\n\n// import Square from \"./scripts/squares\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('canvas');\n  canvas.style = \"position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto\";\n  let ctx = canvas.getContext('2d');\n\n  //background image\n  var background = new Image();\n  background.src = \"src/assets/background2.png\";\n  background.onload = function () {\n    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);\n  };\n  canvas.width = window.innerWidth * 0.5;\n  canvas.height = window.innerHeight * 0.8;\n  let midx = canvas.width / 2;\n  let midy = canvas.height / 2;\n  let circle = new _scripts_circle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](midx, midy, 20);\n  window.onload = function () {\n    // drawEnemies();\n    // debugger;\n    // circle.animate(ctx);\n    animate();\n  };\n  const enemySize = 50;\n  const enemyColor = 'black';\n  const enemyPositions = [\n  // starting positions\n  {\n    x: 10,\n    y: midy,\n    direction: [1, 0]\n  }, {\n    x: midx,\n    y: 10,\n    direction: [0, -1]\n  }, {\n    x: canvas.width - 60,\n    y: midy,\n    direction: [-1, 0]\n  }, {\n    x: midx,\n    y: canvas.height - 60,\n    direction: [0, 1]\n  }];\n  // const enemies = enemyPositions.map(options => {\n  //   return new Square(options);\n  // });\n  class Square {\n    constructor(x, y, direction) {\n      this.x = x;\n      this.y = y;\n      this.direction = direction;\n    }\n    drawEnemies() {\n      for (let i = 0; i < enemies.length; i++) {\n        const {\n          x,\n          y\n        } = enemies[i];\n        ctx.fillStyle = enemyColor;\n        ctx.fillRect(x, y, enemySize, enemySize);\n      }\n    }\n    update() {\n      // this.x += this.direction[0];\n      // this.y += this.direction[1];\n\n      if (this.x < midx) {\n        this.x += .1;\n      } else {\n        this.x -= .1;\n      }\n      if (this.y < midy) {\n        this.y += .1;\n      } else {\n        this.y -= .1;\n      }\n    }\n    animate(ctx) {\n      requestAnimationFrame(this.animate.bind(this, ctx));\n      this.update();\n      this.drawEnemies();\n    }\n  }\n  let enemies = enemyPositions.map(options => {\n    return new Square(options.x, options.y, options.direction);\n  });\n  function animate() {\n    requestAnimationFrame(animate);\n    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);\n    // endrawEnemies();\n    // circle.update();\n    circle.draw(ctx);\n    // enemies.forEach(enemy => enemy.drawEnemies(ctx));\n    let i = 0;\n    function drawNextEnemy() {\n      if (i < enemies.length) {\n        enemies[i].animate(ctx);\n        i++;\n        setTimeout(drawNextEnemy, 1500); // delay of 1 second\n      }\n    }\n\n    drawNextEnemy();\n    ;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUM7SUFDVCxTQUFTVyxhQUFhQSxDQUFBLEVBQUc7TUFDdkIsSUFBSVgsQ0FBQyxHQUFHQyxPQUFPLENBQUNDLE1BQU0sRUFBRTtRQUN0QkQsT0FBTyxDQUFDRCxDQUFDLENBQUMsQ0FBQ1YsT0FBTyxDQUFDZixHQUFHLENBQUM7UUFDdkJ5QixDQUFDLEVBQUU7UUFDSFksVUFBVSxDQUFDRCxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUNuQztJQUNGOztJQUVBQSxhQUFhLEVBQUU7SUFDakI7RUFDQTtBQUVGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWdhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2lyY2xlIGZyb20gXCIuL3NjcmlwdHMvY2lyY2xlXCJcbi8vIGltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXG4gIGNhbnZhcy5zdHlsZSA9IFwicG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsgbGVmdDogMHB4OyByaWdodDogMHB4OyBib3R0b206IDBweDsgbWFyZ2luOiBhdXRvXCI7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvL2JhY2tncm91bmQgaW1hZ2VcbiAgdmFyIGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgYmFja2dyb3VuZC5zcmMgPSBcInNyYy9hc3NldHMvYmFja2dyb3VuZDIucG5nXCI7XG5cbiAgYmFja2dyb3VuZC5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwwLDAsY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgICBcbiAgfVxuXG5cbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjU7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAgMC44O1xuXG5cbiAgbGV0IG1pZHggPSBjYW52YXMud2lkdGgvMlxuICBsZXQgbWlkeSA9IGNhbnZhcy5oZWlnaHQvMlxuICBsZXQgY2lyY2xlID0gbmV3IENpcmNsZShtaWR4LCBtaWR5LCAyMClcblxuICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gZHJhd0VuZW1pZXMoKTtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICAvLyBjaXJjbGUuYW5pbWF0ZShjdHgpO1xuICAgIGFuaW1hdGUoKTtcbiAgfVxuICBjb25zdCBlbmVteVNpemUgPSA1MDtcbiAgY29uc3QgZW5lbXlDb2xvciA9ICdibGFjayc7XG4gIGNvbnN0IGVuZW15UG9zaXRpb25zID0gW1xuICAgIC8vIHN0YXJ0aW5nIHBvc2l0aW9uc1xuICAgIHsgeDogMTAsIHk6IG1pZHksIGRpcmVjdGlvbjogWzEsMF0gfSxcbiAgICB7IHg6IG1pZHgsIHk6IDEwLCBkaXJlY3Rpb246IFswLCAtMV0gfSxcbiAgICB7IHg6IGNhbnZhcy53aWR0aCAtIDYwLCB5OiBtaWR5LCBkaXJlY3Rpb246IFstMSwgMF0gfSxcbiAgICB7IHg6IG1pZHgsIHk6IGNhbnZhcy5oZWlnaHQgLSA2MCwgZGlyZWN0aW9uOiBbMCwgMV0gfSxcbiAgXTtcbiAgLy8gY29uc3QgZW5lbWllcyA9IGVuZW15UG9zaXRpb25zLm1hcChvcHRpb25zID0+IHtcbiAgLy8gICByZXR1cm4gbmV3IFNxdWFyZShvcHRpb25zKTtcbiAgLy8gfSk7XG4gIGNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLnggPSB4O1xuICAgICAgdGhpcy55ID0geTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uXG4gICAgfVxuICBcbiAgICBkcmF3RW5lbWllcygpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbWllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGVuZW1pZXNbaV07XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBlbmVteUNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgZW5lbXlTaXplLCBlbmVteVNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgdXBkYXRlKCkge1xuICAgICAgLy8gdGhpcy54ICs9IHRoaXMuZGlyZWN0aW9uWzBdO1xuICAgICAgLy8gdGhpcy55ICs9IHRoaXMuZGlyZWN0aW9uWzFdO1xuICAgICBcbiAgICAgIGlmICh0aGlzLnggPCBtaWR4KSB7XG4gICAgICAgIHRoaXMueCArPSAuMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy54IC09IC4xXG4gICAgICB9XG4gIFxuICAgICAgaWYgKHRoaXMueSA8IG1pZHkpIHtcbiAgICAgICAgdGhpcy55ICs9IC4xXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgLT0gLjFcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzLCBjdHgpKTtcbiAgICAgIFxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIHRoaXMuZHJhd0VuZW1pZXMoKTtcbiAgICB9XG4gIH1cbiAgbGV0IGVuZW1pZXMgPSBlbmVteVBvc2l0aW9ucy5tYXAob3B0aW9ucyA9PiB7XG4gICAgcmV0dXJuIG5ldyBTcXVhcmUob3B0aW9ucy54LCBvcHRpb25zLnksIG9wdGlvbnMuZGlyZWN0aW9uKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLDAsMCxjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyBcbiAgICAvLyBlbmRyYXdFbmVtaWVzKCk7XG4gICAgLy8gY2lyY2xlLnVwZGF0ZSgpO1xuICAgIGNpcmNsZS5kcmF3KGN0eCk7XG4gICAgLy8gZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LmRyYXdFbmVtaWVzKGN0eCkpO1xuICAgIGxldCBpID0gMDtcbiAgICBmdW5jdGlvbiBkcmF3TmV4dEVuZW15KCkge1xuICAgICAgaWYgKGkgPCBlbmVtaWVzLmxlbmd0aCkge1xuICAgICAgICBlbmVtaWVzW2ldLmFuaW1hdGUoY3R4KTtcbiAgICAgICAgaSsrO1xuICAgICAgICBzZXRUaW1lb3V0KGRyYXdOZXh0RW5lbXksIDE1MDApOyAvLyBkZWxheSBvZiAxIHNlY29uZFxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZHJhd05leHRFbmVteSgpO1xuICA7XG4gIH1cblxufSk7Il0sIm5hbWVzIjpbIkNpcmNsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImN0eCIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm1pZHgiLCJtaWR5IiwiY2lyY2xlIiwiYW5pbWF0ZSIsImVuZW15U2l6ZSIsImVuZW15Q29sb3IiLCJlbmVteVBvc2l0aW9ucyIsIngiLCJ5IiwiZGlyZWN0aW9uIiwiU3F1YXJlIiwiY29uc3RydWN0b3IiLCJkcmF3RW5lbWllcyIsImkiLCJlbmVtaWVzIiwibGVuZ3RoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwibWFwIiwib3B0aW9ucyIsImRyYXciLCJkcmF3TmV4dEVuZW15Iiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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