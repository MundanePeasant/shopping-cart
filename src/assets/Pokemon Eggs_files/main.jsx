import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=e0e89700"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=e0e89700"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=e0e89700"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.jsx";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=e0e89700";
import Homepage from "/src/Homepage.jsx";
import Shop from "/src/Shop.jsx";
import Cart from "/src/Cart.jsx";
import "/src/index.css";
const router = createBrowserRouter(
  [
    {
      path: "",
      element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
        fileName: "/home/mundane/odin-redo/shopping-cart/src/main.jsx",
        lineNumber: 13,
        columnNumber: 12
      }, this),
      children: [
        {
          path: "",
          element: /* @__PURE__ */ jsxDEV(Homepage, {}, void 0, false, {
            fileName: "/home/mundane/odin-redo/shopping-cart/src/main.jsx",
            lineNumber: 17,
            columnNumber: 14
          }, this)
        },
        {
          path: "/shop",
          element: /* @__PURE__ */ jsxDEV(Shop, {}, void 0, false, {
            fileName: "/home/mundane/odin-redo/shopping-cart/src/main.jsx",
            lineNumber: 21,
            columnNumber: 14
          }, this)
        },
        {
          path: "/cart",
          element: /* @__PURE__ */ jsxDEV(Cart, {}, void 0, false, {
            fileName: "/home/mundane/odin-redo/shopping-cart/src/main.jsx",
            lineNumber: 25,
            columnNumber: 14
          }, this)
        }
      ]
    }
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "/home/mundane/odin-redo/shopping-cart/src/main.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/mundane/odin-redo/shopping-cart/src/main.jsx",
    lineNumber: 32,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWWE7QUFaYixPQUFPQSxXQUFXO0FBQ2xCLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsU0FBUztBQUNoQixTQUFTQyxxQkFBcUJDLHNCQUFzQjtBQUNwRCxPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsVUFBVTtBQUNqQixPQUFPO0FBRVAsTUFBTUMsU0FBU0w7QUFBQUEsRUFBb0I7QUFBQSxJQUNqQztBQUFBLE1BQ0VNLE1BQU07QUFBQSxNQUNOQyxTQUFTLHVCQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFJO0FBQUEsTUFDYkMsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFRixNQUFNO0FBQUEsVUFDTkMsU0FBUyx1QkFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVM7QUFBQSxRQUNwQjtBQUFBLFFBQ0E7QUFBQSxVQUNFRCxNQUFNO0FBQUEsVUFDTkMsU0FBUyx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUs7QUFBQSxRQUNoQjtBQUFBLFFBQ0E7QUFBQSxVQUNFRCxNQUFNO0FBQUEsVUFDTkMsU0FBUyx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUs7QUFBQSxRQUNoQjtBQUFBLE1BQUM7QUFBQSxJQUVMO0FBQUEsRUFBQztBQUNGO0FBRURULFNBQVNXLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFDLEVBQUVDO0FBQUFBLEVBQ25ELHVCQUFDLE1BQU0sWUFBTixFQUNDLGlDQUFDLGtCQUFlLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0IsS0FEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQ0YiLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIlJvdXRlclByb3ZpZGVyIiwiSG9tZXBhZ2UiLCJTaG9wIiwiQ2FydCIsInJvdXRlciIsInBhdGgiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qc3gnO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBIb21lcGFnZSBmcm9tICcuL0hvbWVwYWdlJztcbmltcG9ydCBTaG9wIGZyb20gJy4vU2hvcCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgZWxlbWVudDogPEFwcCAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgZWxlbWVudDogPEhvbWVwYWdlIC8+LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy9zaG9wJyxcbiAgICAgICAgZWxlbWVudDogPFNob3AgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnL2NhcnQnLFxuICAgICAgICBlbGVtZW50OiA8Q2FydCAvPixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl0pO1xuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuKTtcbiJdLCJmaWxlIjoiL2hvbWUvbXVuZGFuZS9vZGluLXJlZG8vc2hvcHBpbmctY2FydC9zcmMvbWFpbi5qc3gifQ==