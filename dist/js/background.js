/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
let contentLoadedIds = [];
let lastPanelPosition = 0;
chrome.scripting.getRegisteredContentScripts({
  ids: ["testing-scripts-gen"]
}, async scripts => {
  if (scripts && scripts.length) {
    await chrome.scripting.unregisterContentScripts({
      ids: ["testing-scripts-gen"]
    });
  }
  chrome.scripting.registerContentScripts([{
    id: "testing-scripts-gen",
    js: ['content.js'],
    matches: ['<all_urls>'],
    runAt: "document_start",
    allFrames: true
  }]);
});
chrome.action.onClicked.addListener(function (tab) {
  console.log('Action clicked');
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    handleContentSend(tabs[0].id, "toggle");
  });
});

// 页面关闭，移除id
chrome.tabs.onRemoved.addListener(function (tabId) {
  contentLoadedIds = contentLoadedIds.filter(id => id !== tabId);
});
function handleContentSend(tabId, params = null) {
  if (contentLoadedIds.includes(tabId)) {
    chrome.tabs.sendMessage(tabId, params);
  } else {
    chrome.scripting.executeScript({
      target: {
        tabId,
        allFrames: true
      },
      files: ['content.js']
    }).then(() => {
      chrome.tabs.sendMessage(tabId, params);
    });
  }
}

// 接收iframe传来的信息，转发给content.js
chrome.runtime.onMessage.addListener(msg => {
  if (msg.type === 'ajaxInterceptor' && msg.to === 'background') {
    console.log(msg);
    if (msg.hasOwnProperty('contentScriptLoaded')) {
      msg.contentScriptLoaded && chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        tabs && tabs.length && !contentLoadedIds.includes(tabs[0].id) && contentLoadedIds.push(tabs[0].id);
      });
      // 收到的传送信息是contentScriptLoaded，说明是刷新状态，更新popup
      chrome.storage.local.get(['customFunction'], result => {
        lastPanelPosition = !!result.customFunction?.panelPosition;
        setPopup(!!result.customFunction?.panelPosition);
      });
    }
    if (msg.key === 'ajaxInterceptor_switchOn') {
      // return
      // if (msg.value === true) {
      //   chrome.action.setIcon({
      //     path: {
      //       16: '/images/16.png',
      //       32: '/images/32.png',
      //       48: '/images/48.png',
      //       128: '/images/128.png',
      //     }
      //   })
      // } else {
      //   chrome.action.setIcon({
      //     path: {
      //       16: '/images/16_gray.png',
      //       32: '/images/32_gray.png',
      //       48: '/images/48_gray.png',
      //       128: '/images/128_gray.png',
      //     }
      //   })
      // }
    }
    if (msg.key === 'customFunction') {
      setPopup(msg.value.panelPosition);
    }
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      if (tabs && tabs.length) {
        handleContentSend(tabs[0].id, {
          ...msg,
          to: 'content'
        });
      } else if (msg.hasOwnProperty('iframeScriptLoaded')) {
        // 收到的传送信息是iframeScriptLoaded，说明是suspend刷新状态，提示需要在页面上刷新（只有在suspend时才会有此类情况）
        console.warn("[Ajax Modifier] To make the Ajax Modifier work, please do not refresh on devtools.");
      } else if (msg.key === "ajaxInterceptor_rules" || msg.key === 'ajaxInterceptor_switchOn') {
        // 收到的传送信息是修改rules且拿不到tab，说明内容也更新不到page script上，提示需要刷新（只有在分离的devtools时才会有此类情况）
        chrome.runtime.sendMessage(chrome.runtime.id, {
          type: 'ajaxInterceptor',
          to: 'iframe',
          showFreshTip: true
        });
      }
    });
  }
});
chrome.storage.local.get(['ajaxInterceptor_switchOn', 'ajaxInterceptor_rules', 'customFunction'], result => {
  if (result.hasOwnProperty('ajaxInterceptor_switchOn')) {
    if (result.ajaxInterceptor_switchOn) {
      // chrome.action.setIcon({ path: "/images/16.png" })
    } else {
      // chrome.action.setIcon({ path: "/images/16_gray.png" })
    }
  }
});
function setPopup(curPanelPosition = false) {
  // panelPosition - 0:页面悬浮面板, 1:devTools
  // 面板从devtools切换为悬浮，提示需要刷新
  if (lastPanelPosition && !curPanelPosition) {
    chrome.action.setPopup({
      popup: 'popupSusFresh.html'
    });
  } else {
    // 其他情况，判断当前是devtools，则提示打开devtools
    chrome.action.setPopup({
      popup: curPanelPosition ? 'popupDev.html' : 'popup.html'
    });
  }
  // 面板从悬浮切换为devtools，悬浮面板消失
  if (!lastPanelPosition && curPanelPosition) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      handleContentSend(tabs[0].id, "toggle");
    });
  }
  lastPanelPosition = curPanelPosition;
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "importRules") {
    chrome.tabs.create({
      url: 'import.html',
      active: true
    }, tab => {
      if (!tab.id) return;
      const tabId = tab.id;
      chrome.tabs.onUpdated.addListener(function listener(updatedTabId, info) {
        if (info.status === 'complete' && updatedTabId === tabId) {
          chrome.tabs.onUpdated.removeListener(listener);
          chrome.tabs.sendMessage(tabId, {
            action: "initializeImport"
          }, response => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
              return;
            }
            if (response && response.success) {
              chrome.tabs.remove(tabId);
              sendResponse(response);
            }
          });
        }
      });
    });
    return true; // Indicates that the response will be sent asynchronously
  }
});
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function buildUUID() {
  const dt = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNNLENBQUMsS0FBSyxHQUFHLEdBQUdDLENBQUMsR0FBSUEsQ0FBQyxHQUFHLEdBQUcsR0FBSSxHQUFHLEVBQUVULFFBQVEsQ0FBQyxFQUFFLENBQUM7RUFDdkQsQ0FBQyxDQUFDO0FBQ0osQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvbnRlbnRMb2FkZWRJZHMgPSBbXVxubGV0IGxhc3RQYW5lbFBvc2l0aW9uID0gMFxuXG5jaHJvbWUuc2NyaXB0aW5nLmdldFJlZ2lzdGVyZWRDb250ZW50U2NyaXB0cyh7IGlkczogW1widGVzdGluZy1zY3JpcHRzLWdlblwiXSB9LFxuICBhc3luYyAoc2NyaXB0cykgPT4ge1xuICAgIGlmIChzY3JpcHRzICYmIHNjcmlwdHMubGVuZ3RoKSB7XG4gICAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLnVucmVnaXN0ZXJDb250ZW50U2NyaXB0cyh7XG4gICAgICAgIGlkczogW1widGVzdGluZy1zY3JpcHRzLWdlblwiXVxuICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgY2hyb21lLnNjcmlwdGluZ1xuICAgICAgLnJlZ2lzdGVyQ29udGVudFNjcmlwdHMoW3tcbiAgICAgICAgaWQ6IFwidGVzdGluZy1zY3JpcHRzLWdlblwiLFxuICAgICAgICBqczogWydjb250ZW50LmpzJ10sXG4gICAgICAgIG1hdGNoZXM6IFsnPGFsbF91cmxzPiddLFxuICAgICAgICBydW5BdDogXCJkb2N1bWVudF9zdGFydFwiLFxuICAgICAgICBhbGxGcmFtZXM6IHRydWVcbiAgICAgIH1dKVxuICB9XG4pXG5cbmNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICh0YWIpIHtcbiAgY29uc29sZS5sb2coJ0FjdGlvbiBjbGlja2VkJylcbiAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICBoYW5kbGVDb250ZW50U2VuZCh0YWJzWzBdLmlkLCBcInRvZ2dsZVwiKVxuICB9KVxufSlcblxuLy8g6aG16Z2i5YWz6Zet77yM56e76ZmkaWRcbmNocm9tZS50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAodGFiSWQpIHtcbiAgY29udGVudExvYWRlZElkcyA9IGNvbnRlbnRMb2FkZWRJZHMuZmlsdGVyKGlkID0+IGlkICE9PSB0YWJJZClcbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZUNvbnRlbnRTZW5kKHRhYklkLCBwYXJhbXMgPSBudWxsKSB7XG4gIGlmIChjb250ZW50TG9hZGVkSWRzLmluY2x1ZGVzKHRhYklkKSkge1xuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCBwYXJhbXMpXG4gIH0gZWxzZSB7XG4gICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZCwgYWxsRnJhbWVzOiB0cnVlIH0sXG4gICAgICBmaWxlczogWydjb250ZW50LmpzJ11cbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCBwYXJhbXMpXG4gICAgfSlcbiAgfVxufVxuXG4vLyDmjqXmlLZpZnJhbWXkvKDmnaXnmoTkv6Hmga/vvIzovazlj5Hnu5ljb250ZW50LmpzXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobXNnID0+IHtcbiAgaWYgKG1zZy50eXBlID09PSAnYWpheEludGVyY2VwdG9yJyAmJiBtc2cudG8gPT09ICdiYWNrZ3JvdW5kJykge1xuICAgIGNvbnNvbGUubG9nKG1zZylcbiAgICBpZiAobXNnLmhhc093blByb3BlcnR5KCdjb250ZW50U2NyaXB0TG9hZGVkJykpIHtcbiAgICAgIG1zZy5jb250ZW50U2NyaXB0TG9hZGVkICYmIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIHRhYnMgJiYgdGFicy5sZW5ndGggJiYgIWNvbnRlbnRMb2FkZWRJZHMuaW5jbHVkZXModGFic1swXS5pZCkgJiYgY29udGVudExvYWRlZElkcy5wdXNoKHRhYnNbMF0uaWQpXG4gICAgICB9KVxuICAgICAgLy8g5pS25Yiw55qE5Lyg6YCB5L+h5oGv5pivY29udGVudFNjcmlwdExvYWRlZO+8jOivtOaYjuaYr+WIt+aWsOeKtuaAge+8jOabtOaWsHBvcHVwXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydjdXN0b21GdW5jdGlvbiddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGxhc3RQYW5lbFBvc2l0aW9uID0gISFyZXN1bHQuY3VzdG9tRnVuY3Rpb24/LnBhbmVsUG9zaXRpb25cbiAgICAgICAgc2V0UG9wdXAoISFyZXN1bHQuY3VzdG9tRnVuY3Rpb24/LnBhbmVsUG9zaXRpb24pXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAobXNnLmtleSA9PT0gJ2FqYXhJbnRlcmNlcHRvcl9zd2l0Y2hPbicpIHtcbiAgICAgIC8vIHJldHVyblxuICAgICAgLy8gaWYgKG1zZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgLy8gICAgIHBhdGg6IHtcbiAgICAgIC8vICAgICAgIDE2OiAnL2ltYWdlcy8xNi5wbmcnLFxuICAgICAgLy8gICAgICAgMzI6ICcvaW1hZ2VzLzMyLnBuZycsXG4gICAgICAvLyAgICAgICA0ODogJy9pbWFnZXMvNDgucG5nJyxcbiAgICAgIC8vICAgICAgIDEyODogJy9pbWFnZXMvMTI4LnBuZycsXG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIC8vICAgICBwYXRoOiB7XG4gICAgICAvLyAgICAgICAxNjogJy9pbWFnZXMvMTZfZ3JheS5wbmcnLFxuICAgICAgLy8gICAgICAgMzI6ICcvaW1hZ2VzLzMyX2dyYXkucG5nJyxcbiAgICAgIC8vICAgICAgIDQ4OiAnL2ltYWdlcy80OF9ncmF5LnBuZycsXG4gICAgICAvLyAgICAgICAxMjg6ICcvaW1hZ2VzLzEyOF9ncmF5LnBuZycsXG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfVxuICAgIH1cbiAgICBpZiAobXNnLmtleSA9PT0gJ2N1c3RvbUZ1bmN0aW9uJykge1xuICAgICAgc2V0UG9wdXAobXNnLnZhbHVlLnBhbmVsUG9zaXRpb24pXG4gICAgfVxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICBpZiAodGFicyAmJiB0YWJzLmxlbmd0aCkge1xuICAgICAgICBoYW5kbGVDb250ZW50U2VuZCh0YWJzWzBdLmlkLCB7IC4uLm1zZywgdG86ICdjb250ZW50JyB9KVxuICAgICAgfSBlbHNlIGlmIChtc2cuaGFzT3duUHJvcGVydHkoJ2lmcmFtZVNjcmlwdExvYWRlZCcpKSB7XG4gICAgICAgIC8vIOaUtuWIsOeahOS8oOmAgeS/oeaBr+aYr2lmcmFtZVNjcmlwdExvYWRlZO+8jOivtOaYjuaYr3N1c3BlbmTliLfmlrDnirbmgIHvvIzmj5DnpLrpnIDopoHlnKjpobXpnaLkuIrliLfmlrDvvIjlj6rmnInlnKhzdXNwZW5k5pe25omN5Lya5pyJ5q2k57G75oOF5Ya177yJXG4gICAgICAgIGNvbnNvbGUud2FybihcIltBamF4IE1vZGlmaWVyXSBUbyBtYWtlIHRoZSBBamF4IE1vZGlmaWVyIHdvcmssIHBsZWFzZSBkbyBub3QgcmVmcmVzaCBvbiBkZXZ0b29scy5cIilcbiAgICAgIH0gZWxzZSBpZiAobXNnLmtleSA9PT0gXCJhamF4SW50ZXJjZXB0b3JfcnVsZXNcIiB8fCBtc2cua2V5ID09PSAnYWpheEludGVyY2VwdG9yX3N3aXRjaE9uJykge1xuICAgICAgICAvLyDmlLbliLDnmoTkvKDpgIHkv6Hmga/mmK/kv67mlLlydWxlc+S4lOaLv+S4jeWIsHRhYu+8jOivtOaYjuWGheWuueS5n+abtOaWsOS4jeWIsHBhZ2Ugc2NyaXB05LiK77yM5o+Q56S66ZyA6KaB5Yi35paw77yI5Y+q5pyJ5Zyo5YiG56a755qEZGV2dG9vbHPml7bmiY3kvJrmnInmraTnsbvmg4XlhrXvvIlcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoY2hyb21lLnJ1bnRpbWUuaWQsIHt0eXBlOiAnYWpheEludGVyY2VwdG9yJywgdG86ICdpZnJhbWUnLCBzaG93RnJlc2hUaXA6IHRydWV9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2FqYXhJbnRlcmNlcHRvcl9zd2l0Y2hPbicsICdhamF4SW50ZXJjZXB0b3JfcnVsZXMnLCAnY3VzdG9tRnVuY3Rpb24nXSwgKHJlc3VsdCkgPT4ge1xuICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KCdhamF4SW50ZXJjZXB0b3Jfc3dpdGNoT24nKSkge1xuICAgIGlmIChyZXN1bHQuYWpheEludGVyY2VwdG9yX3N3aXRjaE9uKSB7XG4gICAgICAvLyBjaHJvbWUuYWN0aW9uLnNldEljb24oeyBwYXRoOiBcIi9pbWFnZXMvMTYucG5nXCIgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hyb21lLmFjdGlvbi5zZXRJY29uKHsgcGF0aDogXCIvaW1hZ2VzLzE2X2dyYXkucG5nXCIgfSlcbiAgICB9XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHNldFBvcHVwKGN1clBhbmVsUG9zaXRpb24gPSBmYWxzZSkge1xuICAvLyBwYW5lbFBvc2l0aW9uIC0gMDrpobXpnaLmgqzmta7pnaLmnb8sIDE6ZGV2VG9vbHNcbiAgLy8g6Z2i5p2/5LuOZGV2dG9vbHPliIfmjaLkuLrmgqzmta7vvIzmj5DnpLrpnIDopoHliLfmlrBcbiAgaWYgKGxhc3RQYW5lbFBvc2l0aW9uICYmICFjdXJQYW5lbFBvc2l0aW9uKSB7XG4gICAgY2hyb21lLmFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAncG9wdXBTdXNGcmVzaC5odG1sJyB9KVxuICB9IGVsc2UgeyAgIC8vIOWFtuS7luaDheWGte+8jOWIpOaWreW9k+WJjeaYr2RldnRvb2xz77yM5YiZ5o+Q56S65omT5byAZGV2dG9vbHNcbiAgICBjaHJvbWUuYWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6IGN1clBhbmVsUG9zaXRpb24gPyAncG9wdXBEZXYuaHRtbCcgOiAncG9wdXAuaHRtbCcgfSlcbiAgfVxuICAvLyDpnaLmnb/ku47mgqzmta7liIfmjaLkuLpkZXZ0b29sc++8jOaCrOa1rumdouadv+a2iOWksVxuICBpZiAoIWxhc3RQYW5lbFBvc2l0aW9uICYmIGN1clBhbmVsUG9zaXRpb24pIHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xuICAgICAgaGFuZGxlQ29udGVudFNlbmQodGFic1swXS5pZCwgXCJ0b2dnbGVcIilcbiAgICB9KVxuICB9XG4gIGxhc3RQYW5lbFBvc2l0aW9uID0gY3VyUGFuZWxQb3NpdGlvblxufVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJpbXBvcnRSdWxlc1wiKSB7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiAnaW1wb3J0Lmh0bWwnLCBhY3RpdmU6IHRydWUgfSwgKHRhYikgPT4ge1xuICAgICAgaWYgKCF0YWIuaWQpIHJldHVybjtcbiAgICAgIFxuICAgICAgY29uc3QgdGFiSWQgPSB0YWIuaWQ7XG4gICAgICBcbiAgICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiBsaXN0ZW5lcih1cGRhdGVkVGFiSWQsIGluZm8pIHtcbiAgICAgICAgaWYgKGluZm8uc3RhdHVzID09PSAnY29tcGxldGUnICYmIHVwZGF0ZWRUYWJJZCA9PT0gdGFiSWQpIHtcbiAgICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGFjdGlvbjogXCJpbml0aWFsaXplSW1wb3J0XCIgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICBjaHJvbWUudGFicy5yZW1vdmUodGFiSWQpO1xuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGVzIHRoYXQgdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudCBhc3luY2hyb25vdXNseVxuICB9XG59KTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVJZCgpIHtcbiAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xufVxuXG5mdW5jdGlvbiBidWlsZFVVSUQoKSB7XG4gIGNvbnN0IGR0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XG4gICAgY29uc3QgciA9IChkdCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgcmV0dXJuIChjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XG4gIH0pO1xufSJdLCJuYW1lcyI6WyJjb250ZW50TG9hZGVkSWRzIiwibGFzdFBhbmVsUG9zaXRpb24iLCJjaHJvbWUiLCJzY3JpcHRpbmciLCJnZXRSZWdpc3RlcmVkQ29udGVudFNjcmlwdHMiLCJpZHMiLCJzY3JpcHRzIiwibGVuZ3RoIiwidW5yZWdpc3RlckNvbnRlbnRTY3JpcHRzIiwicmVnaXN0ZXJDb250ZW50U2NyaXB0cyIsImlkIiwianMiLCJtYXRjaGVzIiwicnVuQXQiLCJhbGxGcmFtZXMiLCJhY3Rpb24iLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsInRhYiIsImNvbnNvbGUiLCJsb2ciLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwiaGFuZGxlQ29udGVudFNlbmQiLCJvblJlbW92ZWQiLCJ0YWJJZCIsImZpbHRlciIsInBhcmFtcyIsImluY2x1ZGVzIiwic2VuZE1lc3NhZ2UiLCJleGVjdXRlU2NyaXB0IiwidGFyZ2V0IiwiZmlsZXMiLCJ0aGVuIiwicnVudGltZSIsIm9uTWVzc2FnZSIsIm1zZyIsInR5cGUiLCJ0byIsImhhc093blByb3BlcnR5IiwiY29udGVudFNjcmlwdExvYWRlZCIsInB1c2giLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJyZXN1bHQiLCJjdXN0b21GdW5jdGlvbiIsInBhbmVsUG9zaXRpb24iLCJzZXRQb3B1cCIsImtleSIsInZhbHVlIiwid2FybiIsInNob3dGcmVzaFRpcCIsImFqYXhJbnRlcmNlcHRvcl9zd2l0Y2hPbiIsImN1clBhbmVsUG9zaXRpb24iLCJwb3B1cCIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJjcmVhdGUiLCJ1cmwiLCJvblVwZGF0ZWQiLCJsaXN0ZW5lciIsInVwZGF0ZWRUYWJJZCIsImluZm8iLCJzdGF0dXMiLCJyZW1vdmVMaXN0ZW5lciIsInJlc3BvbnNlIiwibGFzdEVycm9yIiwiZXJyb3IiLCJzdWNjZXNzIiwicmVtb3ZlIiwiZ2VuZXJhdGVVbmlxdWVJZCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHIiLCJidWlsZFVVSUQiLCJkdCIsImdldFRpbWUiLCJyZXBsYWNlIiwiYyIsInIiXSwic291cmNlUm9vdCI6IiJ9