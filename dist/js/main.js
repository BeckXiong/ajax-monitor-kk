/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/main.jsx ***!
  \**********************/
// 命名空间
let ajax_interceptor_qoweifjqon = {
  settings: {
    ajaxInterceptor_switchOn: false,
    ajaxInterceptor_always200On: true,
    // 默认开启，后期可以扩展成设置项
    ajaxInterceptor_rules: []
  },
  // 获取匹配到的规则项
  getMatchedInterface: ({
    thisRequestUrl = '',
    thisMethod = ''
  }) => {
    console.log('thisRequestUrl', thisRequestUrl);
    console.log('thisMethod', thisMethod);
    console.log('ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_rules', ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_rules);
    return ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_rules.find(item => {
      const {
        filterType = 'normal',
        limitMethod = 'ALL',
        switchOn = true,
        match
      } = item;
      const matchedMethod = thisMethod === limitMethod || limitMethod === 'ALL';
      const matchedRequest = filterType === 'normal' && thisRequestUrl === match || filterType === 'regex' && thisRequestUrl.match(new RegExp(match, 'i'));
      return switchOn && matchedMethod && matchedRequest;
    });
  },
  // 执行用户输入的函数，如果有错误会抛出到控制台
  executeStringFunction: (stringFunction, args, funcName = '') => {
    try {
      stringFunction = new Function('...args', stringFunction)(args);
    } catch (e) {
      console.error(`[Ajax Modifier] ExecuteFunctionError: Please check the ${funcName} function.\n`, e);
    }
    return stringFunction;
  },
  getRequestParams: requestUrl => {
    if (!requestUrl) {
      return null;
    }
    const paramStr = requestUrl.split('?').pop();
    const keyValueArr = paramStr.split('&');
    let keyValueObj = {};
    keyValueArr.forEach(item => {
      // 保证中间不会把=给忽略掉
      const itemArr = item.replace('=', '〓').split('〓');
      const itemObj = {
        [itemArr[0]]: itemArr[1]
      };
      keyValueObj = Object.assign(keyValueObj, itemObj);
    });
    return keyValueObj;
  },
  getCompleteUrl: inputUrl => {
    let url = inputUrl.trim();
    const protocol = window.location.protocol;
    const host = window.location.host;
    const currentUrl = window.location.href;
    try {
      // 如果解析成功，表示输入是完整的URL，不需要处理
      new URL(url);
    } catch (e) {
      if (url.startsWith("./") || url.startsWith("../")) {
        // 相对路由
        url = new URL(url, currentUrl).href;
      } else if (url.startsWith("//")) {
        // 只缺少协议，补全协议
        url = protocol + url;
      } else {
        // 既没有协议也没有域名，补全域名和协议
        url = protocol + "//" + host + (url.startsWith("/") ? "" : "/") + url;
      }
    }
    return url;
  },
  originalXHR: window.XMLHttpRequest,
  myXHR: function () {
    let pageScriptEventDispatched = false;
    const modifyResponse = () => {
      console.log(this);
      const [method, requestUrl] = this._openArgs;
      const queryParams = ajax_interceptor_qoweifjqon.getRequestParams(requestUrl);
      const [requestPayload] = this._sendArgs;
      const matchedInterface = this._matchedInterface;
      console.log('matchedInterface', matchedInterface);
      if (matchedInterface && (matchedInterface.overrideTxt || matchedInterface.overrideResponseFunc)) {
        const {
          overrideTxt,
          overrideResponseFunc,
          match,
          isExpert = false
        } = matchedInterface;
        let overrideResponse = undefined;
        let overrideStatus = undefined;
        let overrideStatusText = undefined;
        if (overrideTxt && !isExpert) {
          // 普通模式，直接替换
          overrideResponse = overrideTxt;
          // 状态用200覆盖
          if (ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_always200On && this.status !== 200) {
            overrideStatus = 200;
            overrideStatusText = 'OK';
          }
        } else if (overrideResponseFunc && isExpert) {
          // 专业模式，用函数替换
          const funcArgs = {
            method,
            payload: {
              queryParams,
              requestPayload
            },
            orgResponse: this.response,
            orgStatus: this.status,
            orgStatusText: this.statusText
          };
          const res = ajax_interceptor_qoweifjqon.executeStringFunction(overrideResponseFunc, funcArgs, 'response');
          // 返回是对象才处理
          if (typeof res === 'object' && res !== null) {
            const {
              response: newResponse = undefined,
              status: newStatus = undefined,
              statusText: newStatusText = undefined
            } = res;
            overrideResponse = newResponse;
            overrideStatus = newStatus;
            overrideStatusText = newStatusText;
          } else {
            console.error(`[Ajax Modifier] ExecuteFunctionError: Please check your return in the response function. See more details in the examples. \n`);
          }
        }
        // 没有返回不替换
        this.responseText = overrideResponse !== undefined ? overrideResponse : this.responseText;
        this.response = overrideResponse !== undefined ? overrideResponse : this.response;
        this.status = overrideStatus !== undefined ? overrideStatus : this.status;
        this.statusText = overrideStatusText !== undefined ? overrideStatusText : this.statusText;
        if (!pageScriptEventDispatched) {
          window.dispatchEvent(new CustomEvent("pageScript", {
            detail: {
              url: this.responseURL,
              match
            }
          }));
          pageScriptEventDispatched = true;
        }
      }
    };
    const xhr = new ajax_interceptor_qoweifjqon.originalXHR();
    for (let attr in xhr) {
      if (attr === 'onreadystatechange') {
        xhr.onreadystatechange = (...args) => {
          if (this.readyState === 4) {
            // 请求成功
            modifyResponse();
          }
          this.onreadystatechange && this.onreadystatechange.apply(this, args);
        };
        this.onreadystatechange = null;
        continue;
      } else if (attr === 'onload') {
        xhr.onload = (...args) => {
          // 请求成功
          modifyResponse();
          this.onload && this.onload.apply(this, args);
        };
        this.onload = null;
        continue;
      } else if (attr === 'open') {
        this.open = (...args) => {
          this._openArgs = args;
          const [method, requestUrl] = args;
          this._matchedInterface = ajax_interceptor_qoweifjqon.getMatchedInterface({
            thisRequestUrl: ajax_interceptor_qoweifjqon.getCompleteUrl(requestUrl),
            thisMethod: method
          });
          const matchedInterface = this._matchedInterface;
          // modify request
          if (matchedInterface) {
            const {
              overridePayloadFunc,
              isExpert = false
            } = matchedInterface;
            if (overridePayloadFunc && isExpert && args[0] && args[1] && args[0].toUpperCase() === 'GET') {
              const queryParams = ajax_interceptor_qoweifjqon.getRequestParams(args[1]);
              const data = {
                requestUrl: args[1],
                queryParams
              };
              args[1] = ajax_interceptor_qoweifjqon.executeStringFunction(overridePayloadFunc, data, 'payload');
            }
          }
          xhr.open && xhr.open.apply(xhr, args);
        };
        continue;
      } else if (attr === 'setRequestHeader') {
        this.setRequestHeader = (...args) => {
          // get headers
          this._headerArgs = this._headerArgs ? Object.assign(this._headerArgs, {
            [args[0]]: args[1]
          }) : {
            [args[0]]: args[1]
          };
          const matchedInterface = this._matchedInterface;
          if (!(matchedInterface && matchedInterface.overrideHeadersFunc && matchedInterface.isExpert)) {
            // 没有要拦截修改或添加的header
            xhr.setRequestHeader && xhr.setRequestHeader.apply(xhr, args);
          }
        };
        continue;
      } else if (attr === 'send') {
        this.send = (...args) => {
          const matchedInterface = this._matchedInterface;
          if (matchedInterface) {
            // modify headers
            const {
              overrideHeadersFunc,
              overridePayloadFunc,
              isExpert = false
            } = matchedInterface;
            if (overrideHeadersFunc && isExpert) {
              const headers = ajax_interceptor_qoweifjqon.executeStringFunction(overrideHeadersFunc, this._headerArgs, 'headers');
              Object.keys(headers).forEach(key => {
                xhr.setRequestHeader && xhr.setRequestHeader.apply(xhr, [key, headers[key]]);
              });
            }
            // modify not GET payload
            const [method] = this._openArgs;
            if (overridePayloadFunc && isExpert && method !== 'GET') {
              args[0] = ajax_interceptor_qoweifjqon.executeStringFunction(overridePayloadFunc, args[0], 'payload');
            }
          }
          this._sendArgs = args;
          xhr.send && xhr.send.apply(xhr, args);
        };
        continue;
      }
      if (typeof xhr[attr] === 'function') {
        this[attr] = xhr[attr].bind(xhr);
      } else {
        // responseText和response不是writeable的，但拦截时需要修改它，所以修改就存储在this[`_${attr}`]上
        if (['responseText', 'response', 'status', 'statusText'].includes(attr)) {
          Object.defineProperty(this, attr, {
            get: () => this[`_${attr}`] == undefined ? xhr[attr] : this[`_${attr}`],
            set: val => this[`_${attr}`] = val,
            enumerable: true
          });
        } else {
          Object.defineProperty(this, attr, {
            get: () => xhr[attr],
            set: val => xhr[attr] = val,
            enumerable: true
          });
        }
      }
    }
  },
  originalFetch: window.fetch.bind(window),
  myFetch: function (...args) {
    const getOriginalResponse = async stream => {
      let text = '';
      const decoder = new TextDecoder('utf-8');
      const reader = stream.getReader();
      const processData = result => {
        if (result.done) {
          return text;
        }
        const value = result.value; // Uint8Array
        text += decoder.decode(value, {
          stream: true
        });
        // 读取下一个文件片段，重复处理步骤
        return reader.read().then(processData);
      };
      return await reader.read().then(processData);
    };
    const [requestUrl, data] = args;
    let inputUrl = '';
    if (typeof requestUrl === 'string') {
      inputUrl = requestUrl;
    } else if (typeof requestUrl === 'object') {
      inputUrl = requestUrl.url || '';
    }
    const matchedInterface = ajax_interceptor_qoweifjqon.getMatchedInterface({
      thisRequestUrl: ajax_interceptor_qoweifjqon.getCompleteUrl(inputUrl),
      thisMethod: data && data.method
    });
    if (matchedInterface && args) {
      const {
        overrideHeadersFunc,
        overridePayloadFunc,
        isExpert = false
      } = matchedInterface;
      if (overrideHeadersFunc && isExpert && args[1]) {
        const headers = ajax_interceptor_qoweifjqon.executeStringFunction(overrideHeadersFunc, this._headerArgs, 'headers');
        args[1].headers = headers;
      }
      if (overridePayloadFunc && isExpert && args[0] && args[1]) {
        const {
          method
        } = args[1];
        if (['GET', 'HEAD'].includes(method.toUpperCase())) {
          const queryParams = ajax_interceptor_qoweifjqon.getRequestParams(args[0]);
          const data = {
            requestUrl: args[0],
            queryParams
          };
          args[0] = ajax_interceptor_qoweifjqon.executeStringFunction(overridePayloadFunc, data, 'payload');
        } else {
          data.body = ajax_interceptor_qoweifjqon.executeStringFunction(overridePayloadFunc, data.body, 'payload');
        }
      }
    }
    return ajax_interceptor_qoweifjqon.originalFetch(...args).then(async response => {
      if (matchedInterface && (matchedInterface.overrideTxt || matchedInterface.overrideResponseFunc)) {
        window.dispatchEvent(new CustomEvent("pageScript", {
          detail: {
            url: response.url,
            match: matchedInterface.match
          }
        }));
        let txt = undefined;
        txt = matchedInterface.overrideTxt;
        const {
          overrideTxt,
          overrideResponseFunc,
          isExpert = false
        } = matchedInterface;
        let overrideResponse = undefined;
        let overrideStatus = undefined;
        let overrideStatusText = undefined;
        if (overrideTxt && !isExpert) {
          // 普通模式，直接替换
          overrideResponse = overrideTxt;
          // 状态用200覆盖
          if (ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_always200On && this.status !== 200) {
            overrideStatus = 200;
            overrideStatusText = 'OK';
          }
        } else if (overrideResponseFunc && isExpert) {
          // 专业模式，用函数替换
          const queryParams = ajax_interceptor_qoweifjqon.getRequestParams(requestUrl);
          const orgResponse = await getOriginalResponse(response.body);
          const funcArgs = {
            method: data?.method,
            payload: {
              queryParams,
              requestPayload: data?.body
            },
            orgResponse,
            orgStatus: response.status,
            orgStatusText: response.statusText
          };
          const res = ajax_interceptor_qoweifjqon.executeStringFunction(overrideResponseFunc, funcArgs, 'response');
          if (typeof res === 'object' && res !== null) {
            const {
              response: newResponse = undefined,
              status: newStatus = undefined,
              statusText: newStatusText = undefined
            } = res;
            overrideResponse = newResponse;
            overrideStatus = newStatus;
            overrideStatusText = newStatusText;
          } else {
            console.error(`[Ajax Modifier] ExecuteFunctionError: Please check your return in the response function. See more details in the examples. \n`);
          }
        }
        txt = overrideResponse !== undefined ? overrideResponse : response.responseText;
        const stream = new ReadableStream({
          start(controller) {
            // const bufView = new Uint8Array(new ArrayBuffer(txt.length))
            // for (var i = 0 i < txt.length i++) {
            //   bufView[i] = txt.charCodeAt(i)
            // }
            controller.enqueue(new TextEncoder().encode(txt));
            controller.close();
          }
        });
        let params = {
          status: overrideStatus !== undefined ? overrideStatus : response.status,
          statusText: overrideStatusText !== undefined ? overrideStatusText : response.statusText
        };
        const newResponse = new Response(stream, {
          headers: response.headers,
          ...params
        });
        const proxy = new Proxy(newResponse, {
          get: function (target, name) {
            switch (name) {
              case 'redirected':
              case 'type':
              case 'url':
              case 'useFinalURL':
              case 'body':
              case 'bodyUsed':
                return response[name];
            }
            return target[name];
          }
        });
        for (let key in proxy) {
          if (typeof proxy[key] === 'function') {
            proxy[key] = proxy[key].bind(newResponse);
          }
        }
        return proxy;
      } else {
        return response;
      }
    });
  }
};
console.log('main.js');
window.addEventListener("message", function (event) {
  const data = event.data;
  // console.log('data from content_script main.js', data)

  if (data.type === 'ajaxInterceptor' && data.to === 'pageScript') {
    ajax_interceptor_qoweifjqon.settings[data.key] = data.value;
  }
  if (ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_switchOn) {
    window.XMLHttpRequest = ajax_interceptor_qoweifjqon.myXHR;
    window.fetch = ajax_interceptor_qoweifjqon.myFetch;
  } else {
    console.log('restore original', ajax_interceptor_qoweifjqon);
    window.XMLHttpRequest = ajax_interceptor_qoweifjqon.originalXHR;
    window.fetch = ajax_interceptor_qoweifjqon.originalFetch;
  }
}, false);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJNUgsMkJBQTJCLENBQUNDLFFBQVEsQ0FBQ0Msd0JBQXdCLEVBQUU7SUFDakUwQyxNQUFNLENBQUNRLGNBQWMsR0FBR3BELDJCQUEyQixDQUFDcUQsS0FBSztJQUN6RFQsTUFBTSxDQUFDb0UsS0FBSyxHQUFHaEgsMkJBQTJCLENBQUNpSCxPQUFPO0VBQ3BELENBQUMsTUFBTTtJQUNMekcsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUVULDJCQUEyQixDQUFDO0lBQzVENEMsTUFBTSxDQUFDUSxjQUFjLEdBQUdwRCwyQkFBMkIsQ0FBQ21ELFdBQVc7SUFDL0RQLE1BQU0sQ0FBQ29FLEtBQUssR0FBR2hILDJCQUEyQixDQUFDK0csYUFBYTtFQUMxRDtBQUNGLENBQUMsRUFBRSxLQUFLLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL21haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIOWRveWQjeepuumXtFxubGV0IGFqYXhfaW50ZXJjZXB0b3JfcW93ZWlmanFvbiA9IHtcbiAgc2V0dGluZ3M6IHtcbiAgICBhamF4SW50ZXJjZXB0b3Jfc3dpdGNoT246IGZhbHNlLFxuICAgIGFqYXhJbnRlcmNlcHRvcl9hbHdheXMyMDBPbjogdHJ1ZSwgLy8g6buY6K6k5byA5ZCv77yM5ZCO5pyf5Y+v5Lul5omp5bGV5oiQ6K6+572u6aG5XG4gICAgYWpheEludGVyY2VwdG9yX3J1bGVzOiBbXSxcbiAgfSxcbiAgLy8g6I635Y+W5Yy56YWN5Yiw55qE6KeE5YiZ6aG5XG4gIGdldE1hdGNoZWRJbnRlcmZhY2U6ICh7IHRoaXNSZXF1ZXN0VXJsID0gJycsIHRoaXNNZXRob2QgPSAnJyB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3RoaXNSZXF1ZXN0VXJsJywgdGhpc1JlcXVlc3RVcmwpXG4gICAgY29uc29sZS5sb2coJ3RoaXNNZXRob2QnLCB0aGlzTWV0aG9kKVxuICAgIGNvbnNvbGUubG9nKCdhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uc2V0dGluZ3MuYWpheEludGVyY2VwdG9yX3J1bGVzJywgYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLnNldHRpbmdzLmFqYXhJbnRlcmNlcHRvcl9ydWxlcylcbiAgICByZXR1cm4gYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLnNldHRpbmdzLmFqYXhJbnRlcmNlcHRvcl9ydWxlcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeyBmaWx0ZXJUeXBlID0gJ25vcm1hbCcsIGxpbWl0TWV0aG9kID0gJ0FMTCcsIHN3aXRjaE9uID0gdHJ1ZSwgbWF0Y2ggfSA9IGl0ZW1cbiAgICAgIGNvbnN0IG1hdGNoZWRNZXRob2QgPSB0aGlzTWV0aG9kID09PSBsaW1pdE1ldGhvZCB8fCBsaW1pdE1ldGhvZCA9PT0gJ0FMTCdcbiAgICAgIGNvbnN0IG1hdGNoZWRSZXF1ZXN0ID0gKGZpbHRlclR5cGUgPT09ICdub3JtYWwnICYmIHRoaXNSZXF1ZXN0VXJsID09PSBtYXRjaCkgfHxcbiAgICAgICAgKGZpbHRlclR5cGUgPT09ICdyZWdleCcgJiYgdGhpc1JlcXVlc3RVcmwubWF0Y2gobmV3IFJlZ0V4cChtYXRjaCwgJ2knKSkpXG4gICAgICByZXR1cm4gc3dpdGNoT24gJiYgbWF0Y2hlZE1ldGhvZCAmJiBtYXRjaGVkUmVxdWVzdFxuICAgIH0pXG4gIH0sXG4gIC8vIOaJp+ihjOeUqOaIt+i+k+WFpeeahOWHveaVsO+8jOWmguaenOaciemUmeivr+S8muaKm+WHuuWIsOaOp+WItuWPsFxuICBleGVjdXRlU3RyaW5nRnVuY3Rpb246IChzdHJpbmdGdW5jdGlvbiwgYXJncywgZnVuY05hbWUgPSAnJykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzdHJpbmdGdW5jdGlvbiA9IChuZXcgRnVuY3Rpb24oJy4uLmFyZ3MnLCBzdHJpbmdGdW5jdGlvbikpKGFyZ3MpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgW0FqYXggTW9kaWZpZXJdIEV4ZWN1dGVGdW5jdGlvbkVycm9yOiBQbGVhc2UgY2hlY2sgdGhlICR7ZnVuY05hbWV9IGZ1bmN0aW9uLlxcbmAsIGUpXG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdGdW5jdGlvbjtcbiAgfSxcbiAgZ2V0UmVxdWVzdFBhcmFtczogKHJlcXVlc3RVcmwpID0+IHtcbiAgICBpZiAoIXJlcXVlc3RVcmwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbVN0ciA9IHJlcXVlc3RVcmwuc3BsaXQoJz8nKS5wb3AoKTtcbiAgICBjb25zdCBrZXlWYWx1ZUFyciA9IHBhcmFtU3RyLnNwbGl0KCcmJyk7XG4gICAgbGV0IGtleVZhbHVlT2JqID0ge307XG4gICAga2V5VmFsdWVBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8g5L+d6K+B5Lit6Ze05LiN5Lya5oqKPee7meW/veeVpeaOiVxuICAgICAgY29uc3QgaXRlbUFyciA9IGl0ZW0ucmVwbGFjZSgnPScsICfjgJMnKS5zcGxpdCgn44CTJyk7XG4gICAgICBjb25zdCBpdGVtT2JqID0ge1tpdGVtQXJyWzBdXTogaXRlbUFyclsxXX07XG4gICAgICBrZXlWYWx1ZU9iaiA9IE9iamVjdC5hc3NpZ24oa2V5VmFsdWVPYmosIGl0ZW1PYmopO1xuICAgIH0pO1xuICAgIHJldHVybiBrZXlWYWx1ZU9iajtcbiAgfSxcbiAgZ2V0Q29tcGxldGVVcmw6IChpbnB1dFVybCkgPT4ge1xuICAgIGxldCB1cmwgPSBpbnB1dFVybC50cmltKClcbiAgICBjb25zdCBwcm90b2NvbCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbFxuICAgIGNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdFxuICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgIHRyeSB7XG4gICAgICAvLyDlpoLmnpzop6PmnpDmiJDlip/vvIzooajnpLrovpPlhaXmmK/lrozmlbTnmoRVUkzvvIzkuI3pnIDopoHlpITnkIZcbiAgICAgIG5ldyBVUkwodXJsKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcIi4vXCIpIHx8IHVybC5zdGFydHNXaXRoKFwiLi4vXCIpKSB7XG4gICAgICAgIC8vIOebuOWvuei3r+eUsVxuICAgICAgICB1cmwgPSBuZXcgVVJMKHVybCwgY3VycmVudFVybCkuaHJlZlxuICAgICAgfWVsc2UgaWYgKHVybC5zdGFydHNXaXRoKFwiLy9cIikpIHtcbiAgICAgICAgLy8g5Y+q57y65bCR5Y2P6K6u77yM6KGl5YWo5Y2P6K6uXG4gICAgICAgIHVybCA9IHByb3RvY29sICsgdXJsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDml6LmsqHmnInljY/orq7kuZ/msqHmnInln5/lkI3vvIzooaXlhajln5/lkI3lkozljY/orq5cbiAgICAgICAgdXJsID0gcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0ICsgKHVybC5zdGFydHNXaXRoKFwiL1wiKSA/IFwiXCIgOiBcIi9cIikgKyB1cmxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybFxuICB9LFxuICBvcmlnaW5hbFhIUjogd2luZG93LlhNTEh0dHBSZXF1ZXN0LFxuICBteVhIUjogZnVuY3Rpb24gKCkge1xuICAgIGxldCBwYWdlU2NyaXB0RXZlbnREaXNwYXRjaGVkID0gZmFsc2VcbiAgICBjb25zdCBtb2RpZnlSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICBjb25zdCBbbWV0aG9kLCByZXF1ZXN0VXJsXSA9IHRoaXMuX29wZW5BcmdzXG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGFqYXhfaW50ZXJjZXB0b3JfcW93ZWlmanFvbi5nZXRSZXF1ZXN0UGFyYW1zKHJlcXVlc3RVcmwpXG4gICAgICBjb25zdCBbcmVxdWVzdFBheWxvYWRdID0gdGhpcy5fc2VuZEFyZ3NcbiAgICAgIGNvbnN0IG1hdGNoZWRJbnRlcmZhY2UgPSB0aGlzLl9tYXRjaGVkSW50ZXJmYWNlXG4gICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZEludGVyZmFjZScsIG1hdGNoZWRJbnRlcmZhY2UpXG4gICAgICBpZiAobWF0Y2hlZEludGVyZmFjZSAmJiAobWF0Y2hlZEludGVyZmFjZS5vdmVycmlkZVR4dCB8fCBtYXRjaGVkSW50ZXJmYWNlLm92ZXJyaWRlUmVzcG9uc2VGdW5jKSkge1xuICAgICAgICBjb25zdCB7IG92ZXJyaWRlVHh0LCBvdmVycmlkZVJlc3BvbnNlRnVuYywgbWF0Y2gsIGlzRXhwZXJ0ID0gZmFsc2UgfSA9IG1hdGNoZWRJbnRlcmZhY2VcbiAgICAgICAgbGV0IG92ZXJyaWRlUmVzcG9uc2UgPSB1bmRlZmluZWRcbiAgICAgICAgbGV0IG92ZXJyaWRlU3RhdHVzID0gdW5kZWZpbmVkXG4gICAgICAgIGxldCBvdmVycmlkZVN0YXR1c1RleHQgPSB1bmRlZmluZWRcbiAgICAgICAgaWYgKG92ZXJyaWRlVHh0ICYmICFpc0V4cGVydCkge1xuICAgICAgICAgIC8vIOaZrumAmuaooeW8j++8jOebtOaOpeabv+aNolxuICAgICAgICAgIG92ZXJyaWRlUmVzcG9uc2UgPSBvdmVycmlkZVR4dFxuICAgICAgICAgIC8vIOeKtuaAgeeUqDIwMOimhuebllxuICAgICAgICAgIGlmIChhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uc2V0dGluZ3MuYWpheEludGVyY2VwdG9yX2Fsd2F5czIwME9uICYmIHRoaXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIG92ZXJyaWRlU3RhdHVzID0gMjAwXG4gICAgICAgICAgICBvdmVycmlkZVN0YXR1c1RleHQgPSAnT0snXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG92ZXJyaWRlUmVzcG9uc2VGdW5jICYmIGlzRXhwZXJ0KSB7XG4gICAgICAgICAgLy8g5LiT5Lia5qih5byP77yM55So5Ye95pWw5pu/5o2iXG4gICAgICAgICAgY29uc3QgZnVuY0FyZ3MgPSB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgICByZXF1ZXN0UGF5bG9hZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9yZ1Jlc3BvbnNlOiB0aGlzLnJlc3BvbnNlLFxuICAgICAgICAgICAgb3JnU3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgIG9yZ1N0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCByZXMgPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uZXhlY3V0ZVN0cmluZ0Z1bmN0aW9uKG92ZXJyaWRlUmVzcG9uc2VGdW5jLCBmdW5jQXJncywgJ3Jlc3BvbnNlJylcbiAgICAgICAgICAvLyDov5Tlm57mmK/lr7nosaHmiY3lpITnkIZcbiAgICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgcmVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlOiBuZXdSZXNwb25zZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgc3RhdHVzOiBuZXdTdGF0dXMgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHN0YXR1c1RleHQ6IG5ld1N0YXR1c1RleHQgPSB1bmRlZmluZWRcbiAgICAgICAgICAgIH0gPSByZXNcbiAgICAgICAgICAgIG92ZXJyaWRlUmVzcG9uc2UgPSBuZXdSZXNwb25zZVxuICAgICAgICAgICAgb3ZlcnJpZGVTdGF0dXMgPSBuZXdTdGF0dXNcbiAgICAgICAgICAgIG92ZXJyaWRlU3RhdHVzVGV4dCA9IG5ld1N0YXR1c1RleHRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW0FqYXggTW9kaWZpZXJdIEV4ZWN1dGVGdW5jdGlvbkVycm9yOiBQbGVhc2UgY2hlY2sgeW91ciByZXR1cm4gaW4gdGhlIHJlc3BvbnNlIGZ1bmN0aW9uLiBTZWUgbW9yZSBkZXRhaWxzIGluIHRoZSBleGFtcGxlcy4gXFxuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5rKh5pyJ6L+U5Zue5LiN5pu/5o2iXG4gICAgICAgIHRoaXMucmVzcG9uc2VUZXh0ID0gb3ZlcnJpZGVSZXNwb25zZSAhPT0gdW5kZWZpbmVkID8gb3ZlcnJpZGVSZXNwb25zZSA6IHRoaXMucmVzcG9uc2VUZXh0XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSBvdmVycmlkZVJlc3BvbnNlICE9PSB1bmRlZmluZWQgPyBvdmVycmlkZVJlc3BvbnNlIDogdGhpcy5yZXNwb25zZVxuICAgICAgICB0aGlzLnN0YXR1cyA9IG92ZXJyaWRlU3RhdHVzICE9PSB1bmRlZmluZWQgPyBvdmVycmlkZVN0YXR1cyA6IHRoaXMuc3RhdHVzXG4gICAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IG92ZXJyaWRlU3RhdHVzVGV4dCAhPT0gdW5kZWZpbmVkID8gb3ZlcnJpZGVTdGF0dXNUZXh0IDogdGhpcy5zdGF0dXNUZXh0XG4gICAgICAgIGlmICghcGFnZVNjcmlwdEV2ZW50RGlzcGF0Y2hlZCkge1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhZ2VTY3JpcHRcIiwge1xuICAgICAgICAgICAgZGV0YWlsOiB7IHVybDogdGhpcy5yZXNwb25zZVVSTCwgbWF0Y2ggfVxuICAgICAgICAgIH0pKVxuICAgICAgICAgIHBhZ2VTY3JpcHRFdmVudERpc3BhdGNoZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB4aHIgPSBuZXcgYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLm9yaWdpbmFsWEhSXG4gICAgZm9yIChsZXQgYXR0ciBpbiB4aHIpIHtcbiAgICAgIGlmIChhdHRyID09PSAnb25yZWFkeXN0YXRlY2hhbmdlJykge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAvLyDor7fmsYLmiJDlip9cbiAgICAgICAgICAgIG1vZGlmeVJlc3BvbnNlKClcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgJiYgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UuYXBwbHkodGhpcywgYXJncylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGxcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ29ubG9hZCcpIHtcbiAgICAgICAgeGhyLm9ubG9hZCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgLy8g6K+35rGC5oiQ5YqfXG4gICAgICAgICAgbW9kaWZ5UmVzcG9uc2UoKVxuICAgICAgICAgIHRoaXMub25sb2FkICYmIHRoaXMub25sb2FkLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbmxvYWQgPSBudWxsXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdvcGVuJykge1xuICAgICAgICB0aGlzLm9wZW4gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHRoaXMuX29wZW5BcmdzID0gYXJnc1xuICAgICAgICAgIGNvbnN0IFttZXRob2QsIHJlcXVlc3RVcmxdID0gYXJnc1xuICAgICAgICAgIHRoaXMuX21hdGNoZWRJbnRlcmZhY2UgPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uZ2V0TWF0Y2hlZEludGVyZmFjZSh7XG4gICAgICAgICAgICB0aGlzUmVxdWVzdFVybDogYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLmdldENvbXBsZXRlVXJsKHJlcXVlc3RVcmwpLFxuICAgICAgICAgICAgdGhpc01ldGhvZDogbWV0aG9kXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCBtYXRjaGVkSW50ZXJmYWNlID0gdGhpcy5fbWF0Y2hlZEludGVyZmFjZVxuICAgICAgICAgIC8vIG1vZGlmeSByZXF1ZXN0XG4gICAgICAgICAgaWYgKG1hdGNoZWRJbnRlcmZhY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb3ZlcnJpZGVQYXlsb2FkRnVuYywgaXNFeHBlcnQgPSBmYWxzZSB9ID0gbWF0Y2hlZEludGVyZmFjZVxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlUGF5bG9hZEZ1bmMgJiYgaXNFeHBlcnQgJiYgYXJnc1swXSAmJiBhcmdzWzFdICYmIGFyZ3NbMF0udG9VcHBlckNhc2UoKSA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uZ2V0UmVxdWVzdFBhcmFtcyhhcmdzWzFdKVxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IGFyZ3NbMV0sXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhcmdzWzFdID0gYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLmV4ZWN1dGVTdHJpbmdGdW5jdGlvbihvdmVycmlkZVBheWxvYWRGdW5jLCBkYXRhLCAncGF5bG9hZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHhoci5vcGVuICYmIHhoci5vcGVuLmFwcGx5KHhociwgYXJncylcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnc2V0UmVxdWVzdEhlYWRlcicpIHtcbiAgICAgICAgdGhpcy5zZXRSZXF1ZXN0SGVhZGVyID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAvLyBnZXQgaGVhZGVyc1xuICAgICAgICAgIHRoaXMuX2hlYWRlckFyZ3MgPSB0aGlzLl9oZWFkZXJBcmdzID8gT2JqZWN0LmFzc2lnbih0aGlzLl9oZWFkZXJBcmdzLCB7W2FyZ3NbMF1dOiBhcmdzWzFdfSkgOiB7W2FyZ3NbMF1dOiBhcmdzWzFdfTtcbiAgICAgICAgICBjb25zdCBtYXRjaGVkSW50ZXJmYWNlID0gdGhpcy5fbWF0Y2hlZEludGVyZmFjZTtcbiAgICAgICAgICBpZiAoIShtYXRjaGVkSW50ZXJmYWNlICYmIG1hdGNoZWRJbnRlcmZhY2Uub3ZlcnJpZGVIZWFkZXJzRnVuYyAmJiBtYXRjaGVkSW50ZXJmYWNlLmlzRXhwZXJ0KSkgeyAvLyDmsqHmnInopoHmi6bmiKrkv67mlLnmiJbmt7vliqDnmoRoZWFkZXJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyICYmIHhoci5zZXRSZXF1ZXN0SGVhZGVyLmFwcGx5KHhociwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnc2VuZCcpIHtcbiAgICAgICAgdGhpcy5zZW5kID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRjaGVkSW50ZXJmYWNlID0gdGhpcy5fbWF0Y2hlZEludGVyZmFjZVxuICAgICAgICAgIGlmIChtYXRjaGVkSW50ZXJmYWNlKSB7XG4gICAgICAgICAgICAvLyBtb2RpZnkgaGVhZGVyc1xuICAgICAgICAgICAgY29uc3QgeyBvdmVycmlkZUhlYWRlcnNGdW5jLCBvdmVycmlkZVBheWxvYWRGdW5jLCBpc0V4cGVydCA9IGZhbHNlIH0gPSBtYXRjaGVkSW50ZXJmYWNlXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGVIZWFkZXJzRnVuYyAmJiBpc0V4cGVydCkge1xuICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLmV4ZWN1dGVTdHJpbmdGdW5jdGlvbihvdmVycmlkZUhlYWRlcnNGdW5jLCB0aGlzLl9oZWFkZXJBcmdzLCAnaGVhZGVycycpXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyICYmIHhoci5zZXRSZXF1ZXN0SGVhZGVyLmFwcGx5KHhociwgW2tleSwgaGVhZGVyc1trZXldXSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtb2RpZnkgbm90IEdFVCBwYXlsb2FkXG4gICAgICAgICAgICBjb25zdCBbbWV0aG9kXSA9IHRoaXMuX29wZW5BcmdzXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGVQYXlsb2FkRnVuYyAmJiBpc0V4cGVydCAmJiBtZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgIGFyZ3NbMF0gPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uZXhlY3V0ZVN0cmluZ0Z1bmN0aW9uKG92ZXJyaWRlUGF5bG9hZEZ1bmMsIGFyZ3NbMF0sICdwYXlsb2FkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3NlbmRBcmdzID0gYXJnc1xuICAgICAgICAgIHhoci5zZW5kICYmIHhoci5zZW5kLmFwcGx5KHhociwgYXJncylcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHhoclthdHRyXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2F0dHJdID0geGhyW2F0dHJdLmJpbmQoeGhyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVzcG9uc2VUZXh05ZKMcmVzcG9uc2XkuI3mmK93cml0ZWFibGXnmoTvvIzkvYbmi6bmiKrml7bpnIDopoHkv67mlLnlroPvvIzmiYDku6Xkv67mlLnlsLHlrZjlgqjlnKh0aGlzW2BfJHthdHRyfWBd5LiKXG4gICAgICAgIGlmIChbJ3Jlc3BvbnNlVGV4dCcsICdyZXNwb25zZScsICdzdGF0dXMnLCAnc3RhdHVzVGV4dCddLmluY2x1ZGVzKGF0dHIpKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGF0dHIsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4gdGhpc1tgXyR7YXR0cn1gXSA9PSB1bmRlZmluZWQgPyB4aHJbYXR0cl0gOiB0aGlzW2BfJHthdHRyfWBdLFxuICAgICAgICAgICAgc2V0OiAodmFsKSA9PiB0aGlzW2BfJHthdHRyfWBdID0gdmFsLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGF0dHIsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4geGhyW2F0dHJdLFxuICAgICAgICAgICAgc2V0OiAodmFsKSA9PiB4aHJbYXR0cl0gPSB2YWwsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgb3JpZ2luYWxGZXRjaDogd2luZG93LmZldGNoLmJpbmQod2luZG93KSxcbiAgbXlGZXRjaDogZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBnZXRPcmlnaW5hbFJlc3BvbnNlID0gYXN5bmMgKHN0cmVhbSkgPT4ge1xuICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04Jyk7XG4gICAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgICBjb25zdCBwcm9jZXNzRGF0YSA9IChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHQudmFsdWU7IC8vIFVpbnQ4QXJyYXlcbiAgICAgICAgdGV4dCArPSBkZWNvZGVyLmRlY29kZSh2YWx1ZSwge3N0cmVhbTogdHJ1ZX0pO1xuICAgICAgICAvLyDor7vlj5bkuIvkuIDkuKrmlofku7bniYfmrrXvvIzph43lpI3lpITnkIbmraXpqqRcbiAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbihwcm9jZXNzRGF0YSk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGF3YWl0IHJlYWRlci5yZWFkKCkudGhlbihwcm9jZXNzRGF0YSk7XG4gICAgfVxuICAgIGNvbnN0IFtyZXF1ZXN0VXJsLCBkYXRhXSA9IGFyZ3M7XG5cblxuICAgIGxldCBpbnB1dFVybCA9ICcnXG5cbiAgICBpZiAodHlwZW9mIHJlcXVlc3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpbnB1dFVybCA9IHJlcXVlc3RVcmxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXF1ZXN0VXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5wdXRVcmwgPSByZXF1ZXN0VXJsLnVybCB8fCAnJ1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoZWRJbnRlcmZhY2UgPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uZ2V0TWF0Y2hlZEludGVyZmFjZSh7XG4gICAgICB0aGlzUmVxdWVzdFVybDogYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLmdldENvbXBsZXRlVXJsKGlucHV0VXJsKSxcbiAgICAgIHRoaXNNZXRob2Q6IGRhdGEgJiYgZGF0YS5tZXRob2RcbiAgICB9KVxuICAgIGlmIChtYXRjaGVkSW50ZXJmYWNlICYmIGFyZ3MpIHtcbiAgICAgIGNvbnN0IHsgb3ZlcnJpZGVIZWFkZXJzRnVuYywgb3ZlcnJpZGVQYXlsb2FkRnVuYywgaXNFeHBlcnQgPSBmYWxzZSB9ID0gbWF0Y2hlZEludGVyZmFjZTtcbiAgICAgIGlmIChvdmVycmlkZUhlYWRlcnNGdW5jICYmIGlzRXhwZXJ0ICYmIGFyZ3NbMV0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGFqYXhfaW50ZXJjZXB0b3JfcW93ZWlmanFvbi5leGVjdXRlU3RyaW5nRnVuY3Rpb24ob3ZlcnJpZGVIZWFkZXJzRnVuYywgdGhpcy5faGVhZGVyQXJncywgJ2hlYWRlcnMnKVxuICAgICAgICBhcmdzWzFdLmhlYWRlcnMgPSBoZWFkZXJzXG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVQYXlsb2FkRnVuYyAmJiBpc0V4cGVydCAmJiBhcmdzWzBdICYmIGFyZ3NbMV0pIHtcbiAgICAgICAgY29uc3QgeyBtZXRob2QgfSA9IGFyZ3NbMV1cbiAgICAgICAgaWYgKFsnR0VUJywgJ0hFQUQnXS5pbmNsdWRlcyhtZXRob2QudG9VcHBlckNhc2UoKSkpIHtcbiAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGFqYXhfaW50ZXJjZXB0b3JfcW93ZWlmanFvbi5nZXRSZXF1ZXN0UGFyYW1zKGFyZ3NbMF0pO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICByZXF1ZXN0VXJsOiBhcmdzWzBdLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXNcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJnc1swXSA9IGFqYXhfaW50ZXJjZXB0b3JfcW93ZWlmanFvbi5leGVjdXRlU3RyaW5nRnVuY3Rpb24ob3ZlcnJpZGVQYXlsb2FkRnVuYywgZGF0YSwgJ3BheWxvYWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhLmJvZHkgPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uZXhlY3V0ZVN0cmluZ0Z1bmN0aW9uKG92ZXJyaWRlUGF5bG9hZEZ1bmMsIGRhdGEuYm9keSwgJ3BheWxvYWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLm9yaWdpbmFsRmV0Y2goLi4uYXJncykudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChtYXRjaGVkSW50ZXJmYWNlICYmIChtYXRjaGVkSW50ZXJmYWNlLm92ZXJyaWRlVHh0IHx8IG1hdGNoZWRJbnRlcmZhY2Uub3ZlcnJpZGVSZXNwb25zZUZ1bmMpKSB7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhZ2VTY3JpcHRcIiwge1xuICAgICAgICAgIGRldGFpbDogeyB1cmw6IHJlc3BvbnNlLnVybCwgbWF0Y2g6IG1hdGNoZWRJbnRlcmZhY2UubWF0Y2ggfVxuICAgICAgICB9KSlcbiAgICAgICAgbGV0IHR4dCA9IHVuZGVmaW5lZFxuICAgICAgICB0eHQgPSBtYXRjaGVkSW50ZXJmYWNlLm92ZXJyaWRlVHh0XG4gICAgICAgIGNvbnN0IHsgb3ZlcnJpZGVUeHQsIG92ZXJyaWRlUmVzcG9uc2VGdW5jLCBpc0V4cGVydCA9IGZhbHNlIH0gPSBtYXRjaGVkSW50ZXJmYWNlXG4gICAgICAgIGxldCBvdmVycmlkZVJlc3BvbnNlID0gdW5kZWZpbmVkXG4gICAgICAgIGxldCBvdmVycmlkZVN0YXR1cyA9IHVuZGVmaW5lZFxuICAgICAgICBsZXQgb3ZlcnJpZGVTdGF0dXNUZXh0ID0gdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgKG92ZXJyaWRlVHh0ICYmICFpc0V4cGVydCkge1xuICAgICAgICAgIC8vIOaZrumAmuaooeW8j++8jOebtOaOpeabv+aNolxuICAgICAgICAgIG92ZXJyaWRlUmVzcG9uc2UgPSBvdmVycmlkZVR4dFxuICAgICAgICAgIC8vIOeKtuaAgeeUqDIwMOimhuebllxuICAgICAgICAgIGlmIChhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uc2V0dGluZ3MuYWpheEludGVyY2VwdG9yX2Fsd2F5czIwME9uICYmIHRoaXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIG92ZXJyaWRlU3RhdHVzID0gMjAwXG4gICAgICAgICAgICBvdmVycmlkZVN0YXR1c1RleHQgPSAnT0snXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG92ZXJyaWRlUmVzcG9uc2VGdW5jICYmIGlzRXhwZXJ0KSB7XG4gICAgICAgICAgLy8g5LiT5Lia5qih5byP77yM55So5Ye95pWw5pu/5o2iXG4gICAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uZ2V0UmVxdWVzdFBhcmFtcyhyZXF1ZXN0VXJsKVxuICAgICAgICAgIGNvbnN0IG9yZ1Jlc3BvbnNlID0gYXdhaXQgZ2V0T3JpZ2luYWxSZXNwb25zZShyZXNwb25zZS5ib2R5KTtcbiAgICAgICAgICBjb25zdCBmdW5jQXJncyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogZGF0YT8ubWV0aG9kLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBxdWVyeVBhcmFtcyxcbiAgICAgICAgICAgICAgcmVxdWVzdFBheWxvYWQ6IGRhdGE/LmJvZHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmdSZXNwb25zZSxcbiAgICAgICAgICAgIG9yZ1N0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgb3JnU3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCByZXMgPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uZXhlY3V0ZVN0cmluZ0Z1bmN0aW9uKG92ZXJyaWRlUmVzcG9uc2VGdW5jLCBmdW5jQXJncywgJ3Jlc3BvbnNlJylcbiAgICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgcmVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlOiBuZXdSZXNwb25zZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgc3RhdHVzOiBuZXdTdGF0dXMgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHN0YXR1c1RleHQ6IG5ld1N0YXR1c1RleHQgPSB1bmRlZmluZWRcbiAgICAgICAgICAgIH0gPSByZXNcbiAgICAgICAgICAgIG92ZXJyaWRlUmVzcG9uc2UgPSBuZXdSZXNwb25zZVxuICAgICAgICAgICAgb3ZlcnJpZGVTdGF0dXMgPSBuZXdTdGF0dXNcbiAgICAgICAgICAgIG92ZXJyaWRlU3RhdHVzVGV4dCA9IG5ld1N0YXR1c1RleHRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW0FqYXggTW9kaWZpZXJdIEV4ZWN1dGVGdW5jdGlvbkVycm9yOiBQbGVhc2UgY2hlY2sgeW91ciByZXR1cm4gaW4gdGhlIHJlc3BvbnNlIGZ1bmN0aW9uLiBTZWUgbW9yZSBkZXRhaWxzIGluIHRoZSBleGFtcGxlcy4gXFxuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHh0ID0gb3ZlcnJpZGVSZXNwb25zZSAhPT0gdW5kZWZpbmVkID8gb3ZlcnJpZGVSZXNwb25zZSA6IHJlc3BvbnNlLnJlc3BvbnNlVGV4dFxuICAgICAgICBjb25zdCBzdHJlYW0gPSBuZXcgUmVhZGFibGVTdHJlYW0oe1xuICAgICAgICAgIHN0YXJ0KGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGJ1ZlZpZXcgPSBuZXcgVWludDhBcnJheShuZXcgQXJyYXlCdWZmZXIodHh0Lmxlbmd0aCkpXG4gICAgICAgICAgICAvLyBmb3IgKHZhciBpID0gMCBpIDwgdHh0Lmxlbmd0aCBpKyspIHtcbiAgICAgICAgICAgIC8vICAgYnVmVmlld1tpXSA9IHR4dC5jaGFyQ29kZUF0KGkpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHR4dCkpXG4gICAgICAgICAgICBjb250cm9sbGVyLmNsb3NlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgc3RhdHVzOiBvdmVycmlkZVN0YXR1cyAhPT0gdW5kZWZpbmVkID8gb3ZlcnJpZGVTdGF0dXMgOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogb3ZlcnJpZGVTdGF0dXNUZXh0ICE9PSB1bmRlZmluZWQgPyBvdmVycmlkZVN0YXR1c1RleHQgOiByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1Jlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHN0cmVhbSwge1xuICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KG5ld1Jlc3BvbnNlLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgICAgY2FzZSAncmVkaXJlY3RlZCc6XG4gICAgICAgICAgICAgIGNhc2UgJ3R5cGUnOlxuICAgICAgICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgICAgICBjYXNlICd1c2VGaW5hbFVSTCc6XG4gICAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICBjYXNlICdib2R5VXNlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlW25hbWVdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJveHkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHByb3h5W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHByb3h5W2tleV0gPSBwcm94eVtrZXldLmJpbmQobmV3UmVzcG9uc2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm94eVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbn1cbmNvbnNvbGUubG9nKCdtYWluLmpzJylcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXG4gIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhXG4gIC8vIGNvbnNvbGUubG9nKCdkYXRhIGZyb20gY29udGVudF9zY3JpcHQgbWFpbi5qcycsIGRhdGEpXG5cbiAgaWYgKGRhdGEudHlwZSA9PT0gJ2FqYXhJbnRlcmNlcHRvcicgJiYgZGF0YS50byA9PT0gJ3BhZ2VTY3JpcHQnKSB7XG4gICAgYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLnNldHRpbmdzW2RhdGEua2V5XSA9IGRhdGEudmFsdWVcbiAgfVxuXG4gIGlmIChhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24uc2V0dGluZ3MuYWpheEludGVyY2VwdG9yX3N3aXRjaE9uKSB7XG4gICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0ID0gYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLm15WEhSXG4gICAgd2luZG93LmZldGNoID0gYWpheF9pbnRlcmNlcHRvcl9xb3dlaWZqcW9uLm15RmV0Y2hcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygncmVzdG9yZSBvcmlnaW5hbCcsIGFqYXhfaW50ZXJjZXB0b3JfcW93ZWlmanFvbilcbiAgICB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24ub3JpZ2luYWxYSFJcbiAgICB3aW5kb3cuZmV0Y2ggPSBhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24ub3JpZ2luYWxGZXRjaFxuICB9XG59LCBmYWxzZSlcbiJdLCJuYW1lcyI6WyJhamF4X2ludGVyY2VwdG9yX3Fvd2VpZmpxb24iLCJzZXR0aW5ncyIsImFqYXhJbnRlcmNlcHRvcl9zd2l0Y2hPbiIsImFqYXhJbnRlcmNlcHRvcl9hbHdheXMyMDBPbiIsImFqYXhJbnRlcmNlcHRvcl9ydWxlcyIsImdldE1hdGNoZWRJbnRlcmZhY2UiLCJ0aGlzUmVxdWVzdFVybCIsInRoaXNNZXRob2QiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsIml0ZW0iLCJmaWx0ZXJUeXBlIiwibGltaXRNZXRob2QiLCJzd2l0Y2hPbiIsIm1hdGNoIiwibWF0Y2hlZE1ldGhvZCIsIm1hdGNoZWRSZXF1ZXN0IiwiUmVnRXhwIiwiZXhlY3V0ZVN0cmluZ0Z1bmN0aW9uIiwic3RyaW5nRnVuY3Rpb24iLCJhcmdzIiwiZnVuY05hbWUiLCJGdW5jdGlvbiIsImUiLCJlcnJvciIsImdldFJlcXVlc3RQYXJhbXMiLCJyZXF1ZXN0VXJsIiwicGFyYW1TdHIiLCJzcGxpdCIsInBvcCIsImtleVZhbHVlQXJyIiwia2V5VmFsdWVPYmoiLCJmb3JFYWNoIiwiaXRlbUFyciIsInJlcGxhY2UiLCJpdGVtT2JqIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0Q29tcGxldGVVcmwiLCJpbnB1dFVybCIsInVybCIsInRyaW0iLCJwcm90b2NvbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsImN1cnJlbnRVcmwiLCJocmVmIiwiVVJMIiwic3RhcnRzV2l0aCIsIm9yaWdpbmFsWEhSIiwiWE1MSHR0cFJlcXVlc3QiLCJteVhIUiIsInBhZ2VTY3JpcHRFdmVudERpc3BhdGNoZWQiLCJtb2RpZnlSZXNwb25zZSIsIm1ldGhvZCIsIl9vcGVuQXJncyIsInF1ZXJ5UGFyYW1zIiwicmVxdWVzdFBheWxvYWQiLCJfc2VuZEFyZ3MiLCJtYXRjaGVkSW50ZXJmYWNlIiwiX21hdGNoZWRJbnRlcmZhY2UiLCJvdmVycmlkZVR4dCIsIm92ZXJyaWRlUmVzcG9uc2VGdW5jIiwiaXNFeHBlcnQiLCJvdmVycmlkZVJlc3BvbnNlIiwidW5kZWZpbmVkIiwib3ZlcnJpZGVTdGF0dXMiLCJvdmVycmlkZVN0YXR1c1RleHQiLCJzdGF0dXMiLCJmdW5jQXJncyIsInBheWxvYWQiLCJvcmdSZXNwb25zZSIsInJlc3BvbnNlIiwib3JnU3RhdHVzIiwib3JnU3RhdHVzVGV4dCIsInN0YXR1c1RleHQiLCJyZXMiLCJuZXdSZXNwb25zZSIsIm5ld1N0YXR1cyIsIm5ld1N0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJyZXNwb25zZVVSTCIsInhociIsImF0dHIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiYXBwbHkiLCJvbmxvYWQiLCJvcGVuIiwib3ZlcnJpZGVQYXlsb2FkRnVuYyIsInRvVXBwZXJDYXNlIiwiZGF0YSIsInNldFJlcXVlc3RIZWFkZXIiLCJfaGVhZGVyQXJncyIsIm92ZXJyaWRlSGVhZGVyc0Z1bmMiLCJzZW5kIiwiaGVhZGVycyIsImtleXMiLCJrZXkiLCJiaW5kIiwiaW5jbHVkZXMiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsInZhbCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEZldGNoIiwiZmV0Y2giLCJteUZldGNoIiwiZ2V0T3JpZ2luYWxSZXNwb25zZSIsInN0cmVhbSIsInRleHQiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwcm9jZXNzRGF0YSIsInJlc3VsdCIsImRvbmUiLCJ2YWx1ZSIsImRlY29kZSIsInJlYWQiLCJ0aGVuIiwiYm9keSIsInR4dCIsIlJlYWRhYmxlU3RyZWFtIiwic3RhcnQiLCJjb250cm9sbGVyIiwiZW5xdWV1ZSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiY2xvc2UiLCJwYXJhbXMiLCJSZXNwb25zZSIsInByb3h5IiwiUHJveHkiLCJ0YXJnZXQiLCJuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidHlwZSIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==