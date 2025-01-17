/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mainpanel.tsx":
/*!***************************!*\
  !*** ./src/mainpanel.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/collapse/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/badge/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/switch/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/upload/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/spin/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/table/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/divider/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/PlusOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CopyOutlined.js");
/* harmony import */ var react_json_pretty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-json-pretty */ "./node_modules/react-json-pretty/dist/JSONPretty.js");
/* harmony import */ var react_json_pretty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_json_pretty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var json_edit_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! json-edit-react */ "./node_modules/json-edit-react/build/index.esm.js");
/* harmony import */ var _components_Replacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Replacer */ "./src/components/Replacer/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/index.less");







const { Panel } = antd__WEBPACK_IMPORTED_MODULE_3__["default"];
const { Option } = antd__WEBPACK_IMPORTED_MODULE_4__["default"];


const buildUUID = () => {
    const dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (dt + Math.random() * 16) % 16 | 0;
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};
const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const App = () => {
    const [interceptedRequests, setInterceptedRequests] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [showAllRules, setShowAllRules] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [positionClass, setPositionClass] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('suspend');
    const [customFunction, setCustomFunction] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ panelPosition: 0 });
    const [showRefreshTip, setShowRefreshTip] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [searchName, setSearchName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [newTabName, setNewTabName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [searchUrl, setSearchUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const forceUpdateTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [, forceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(x => x + 1, 0);
    const [activeKey, setActiveKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const [switchOn, setSwitchOn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [rules, setRules] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [dataList, setDataList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const tableBoxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [tableBoxHeight, setTableBoxHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [showDetail, setShowDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [currentEditRule, setCurrentEditRule] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (tableBoxRef.current) {
            setTableBoxHeight(window.innerHeight - tableBoxRef.current.offsetTop - 20);
        }
    }, [tableBoxRef.current]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.storage.local.get(['ajaxInterceptor_switchOn', 'ajaxInterceptor_rules', 'customFunction'], (result) => {
            setSwitchOn(result.ajaxInterceptor_switchOn || false);
            // Initialize default rule if no rules exist
            if (!result.ajaxInterceptor_rules || result.ajaxInterceptor_rules.length === 0) {
                const defaultRule = {
                    id: generateUniqueId(),
                    match: '',
                    label: 'Default Rule',
                    switchOn: true,
                    key: buildUUID(),
                    tabId: 'Default',
                };
                const defaultRules = [defaultRule];
                setRules(defaultRules);
                set('ajaxInterceptor_rules', defaultRules);
            }
            else {
                setRules(result.ajaxInterceptor_rules);
            }
            setCustomFunction(result.customFunction || { panelPosition: 0 });
            setIsLoading(false);
        });
        setupMessageListener();
        notifyBackgroundScriptLoaded();
    }, []);
    const groupRulesByTab = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        const groupedRules = rules.reduce((acc, rule) => {
            const tab = rule.tabId || 'Default';
            if (!acc[tab]) {
                acc[tab] = [];
            }
            acc[tab].push(rule);
            return acc;
        }, {});
        if (Object.keys(groupedRules).length === 0) {
            groupedRules['Default'] = [];
        }
        setDataList(groupedRules);
        // Only set the activeKey if it's not already set
        if (!activeKey) {
            const firstTabId = Object.keys(groupedRules)[0];
            setActiveKey(firstTabId);
        }
    }, [rules, activeKey]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        groupRulesByTab();
    }, [rules, groupRulesByTab]);
    const setupMessageListener = () => {
        chrome.runtime.onMessage.addListener(handleIncomingMessage);
    };
    const uploadProps = {
        name: 'file',
        action: '#',
        accept: '.json',
        beforeUpload(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                var _a;
                try {
                    const jsonDatabase = JSON.parse((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
                    setRules(jsonDatabase);
                    set('ajaxInterceptor_rules', jsonDatabase);
                    groupRulesByTab();
                    antd__WEBPACK_IMPORTED_MODULE_7__["default"].success(`${file.name} uploaded successfully`);
                }
                catch (error) {
                    antd__WEBPACK_IMPORTED_MODULE_7__["default"].error('Failed to parse JSON file');
                    console.error(error);
                }
            };
            reader.readAsText(file);
            return false; // Prevent default upload behavior
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
        },
    };
    const handleIncomingMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ type, to, url, match, contentScriptLoaded = false, showFreshTip = false, }) => {
        if (type === 'ajaxInterceptor' && to === 'iframe') {
            if (contentScriptLoaded || showFreshTip) {
                setShowRefreshTip(showFreshTip);
                return;
            }
            setInterceptedRequests(prev => {
                const newRequests = Object.assign({}, prev);
                if (!newRequests[match])
                    newRequests[match] = [];
                const exists = newRequests[match].some(obj => {
                    if (obj.url === url) {
                        obj.num++;
                        return true;
                    }
                    return false;
                });
                if (!exists) {
                    newRequests[match].push({ url, num: 1 });
                }
                return newRequests;
            });
        }
    }, []);
    const notifyBackgroundScriptLoaded = () => {
        chrome.runtime.sendMessage(chrome.runtime.id, {
            type: 'ajaxInterceptor',
            to: 'background',
            iframeScriptLoaded: true,
        });
    };
    const set = (key, value) => {
        var _a;
        setIsLoading(true);
        // First ensure we have the latest state before sending messages
        (_a = chrome.storage) === null || _a === void 0 ? void 0 : _a.local.set({ [key]: value }, () => {
            console.log(`[set] key: ${key}, value: ${value}`);
            chrome.runtime.sendMessage(chrome.runtime.id, {
                type: 'ajaxInterceptor',
                to: 'background',
                key,
                value,
            });
        });
        setIsLoading(false);
    };
    const forceUpdateDebouce = () => {
        if (forceUpdateTimeoutRef.current) {
            clearTimeout(forceUpdateTimeoutRef.current);
        }
        forceUpdateTimeoutRef.current = setTimeout(() => {
            forceUpdate();
        }, 1000);
    };
    const handleSingleSwitchChange = (switchOn, ruleId) => {
        setRules(prevRules => {
            const newRules = prevRules.map(rule => rule.id === ruleId ? Object.assign(Object.assign({}, rule), { switchOn }) : rule);
            set('ajaxInterceptor_rules', newRules);
            return newRules;
        });
    };
    const handleLimitMethodChange = (val, ruleId) => {
        setRules(prevRules => {
            const newRules = prevRules.map(rule => rule.id === ruleId ? Object.assign(Object.assign({}, rule), { limitMethod: val }) : rule);
            set('ajaxInterceptor_rules', newRules);
            return newRules;
        });
    };
    const handleExportRules = () => {
        const rulesForExport = rules.map(rule => (Object.assign(Object.assign({}, rule), { overrideTxt: typeof rule.overrideTxt === 'string' ?
                (() => {
                    try {
                        return JSON.parse(rule.overrideTxt);
                    }
                    catch (e) {
                        return rule.overrideTxt;
                    }
                })()
                : rule.overrideTxt })));
        const dataStr = JSON.stringify(rulesForExport, null, 2);
        const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
        const exportFileDefaultName = 'ajax_interceptor_rules.json';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };
    const handleImportRules = () => {
        console.log('handleImportRules');
    };
    const handleFilterTypeChange = (val, ruleId) => {
        setRules(prevRules => {
            const newRules = prevRules.map(rule => rule.id === ruleId ? Object.assign(Object.assign({}, rule), { filterType: val }) : rule);
            set('ajaxInterceptor_rules', newRules);
            return newRules;
        });
    };
    const handleMatchChange = (e, ruleId) => {
        const value = e.target.value.replace(/\n$/, '');
        setRules(prevRules => {
            const newRules = prevRules.map(rule => rule.id === ruleId ? Object.assign(Object.assign({}, rule), { match: value }) : Object.assign({}, rule));
            console.log(`[handleMatchChange] newRules:`, newRules);
            set('ajaxInterceptor_rules', newRules);
            return newRules;
        });
    };
    const handleLabelChange = (e, ruleId) => {
        setRules(prevRules => {
            const newRules = prevRules.map(rule => rule.id === ruleId ? Object.assign(Object.assign({}, rule), { label: e.target.value }) : rule);
            set('ajaxInterceptor_rules', newRules);
            return newRules;
        });
    };
    const handleAddNewRule = () => {
        const newRule = {
            id: generateUniqueId(),
            match: '',
            label: `url${rules.length + 1}`,
            switchOn: true,
            key: buildUUID(),
            tabId: 'Default',
        };
        setCurrentEditRule(newRule);
        setShowDetail(true);
    };
    const handleClickAdd = (tabId) => {
        const newRule = {
            id: generateUniqueId(),
            match: '',
            label: `url${rules.length + 1}`,
            switchOn: true,
            key: buildUUID(),
            tabId: tabId,
        };
        setActiveKey(tabId);
        setRules(prevRules => {
            const newRules = [...prevRules, newRule];
            set('ajaxInterceptor_rules', newRules);
            return newRules;
        });
    };
    const handleBatchRemove = (ruleIds, needGroupRulesByTab = false) => {
        setRules(prevRules => {
            const newRules = prevRules.filter(rule => !ruleIds.includes(rule.id));
            set('ajaxInterceptor_rules', newRules);
            return newRules;
        });
        setInterceptedRequests(prev => {
            const newRequests = Object.assign({}, prev);
            ruleIds.forEach(id => {
                const rule = rules.find(r => r.id === id);
                if (rule) {
                    delete newRequests[rule.match];
                    delete newRequests[rule.label];
                }
            });
            return newRequests;
        });
        if (needGroupRulesByTab) {
            groupRulesByTab();
        }
        else {
            setDataList(prevDataList => {
                const newDataList = Object.assign({}, prevDataList);
                Object.keys(newDataList).forEach(tabId => {
                    newDataList[tabId] = newDataList[tabId].filter(rule => !ruleIds.includes(rule.id));
                });
                return newDataList;
            });
        }
    };
    const handleClickRemove = (e, ruleId) => {
        e.stopPropagation();
        const currentTabId = activeKey;
        handleBatchRemove([ruleId]);
        setDataList(prevDataList => {
            var _a;
            const newDataList = Object.assign({}, prevDataList);
            if (currentTabId && ((_a = newDataList[currentTabId]) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                delete newDataList[currentTabId];
                const remainingTabs = Object.keys(newDataList);
                setActiveKey(remainingTabs.length > 0 ? remainingTabs[0] : undefined);
            }
            return newDataList;
        });
    };
    const handleCollaseChange = () => {
    };
    const handleSwitchChange = () => {
        setSwitchOn(prev => {
            const newSwitchOn = !prev;
            set('ajaxInterceptor_switchOn', newSwitchOn);
            return newSwitchOn;
        });
    };
    const handleSearch = (e) => {
        setSearchName(e.target.value);
    };
    const handleUrlSearch = (e) => {
        setSearchUrl(e.target.value);
    };
    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };
    const handleTabEdit = (targetKey, action) => {
        if (action === 'add') {
            const newTabId = generateRandomString(5);
            handleClickAdd(newTabId);
        }
        else {
            const tabId = targetKey;
            let deletingRuleIds = dataList[tabId].map(rule => rule.id);
            handleBatchRemove(deletingRuleIds, true);
            const remainingTabs = Object.keys(dataList).filter(id => id !== tabId);
            // Set the activeKey to the last remaining tab, or undefined if no tabs left
            setActiveKey(remainingTabs.length > 0 ? remainingTabs[remainingTabs.length - 1] : undefined);
        }
    };
    const renderTabs = () => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { activeKey: activeKey, size: 'small', onChange: (key) => setActiveKey(key), type: "editable-card", items: Object.entries(dataList).map(([tabId, rules]) => {
                const filteredRules = rules.filter(rule => searchName ? rule.label.indexOf(searchName) > -1 : true).filter(rule => searchUrl ? rule.match.indexOf(searchUrl) > -1 : true);
                const newLocal = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], { className: 'collapse', onChange: handleCollaseChange }, renderRules(filteredRules)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { size: "large", className: 'btn-add', type: "primary", onClick: () => handleClickAdd(tabId), disabled: !switchOn },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], null))));
                return {
                    key: tabId,
                    label: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], { className: "site-badge-count-109", count: filteredRules.length, size: 'small', style: { backgroundColor: '#52c41a' } }),
                        "\u00A0",
                        tabId)),
                    children: newLocal,
                };
            }), onEdit: handleTabEdit }));
    };
    const renderRules = (rules) => {
        return rules.map((rule) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Panel, { key: rule.key, header: renderPanelHeader(rule) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Replacer__WEBPACK_IMPORTED_MODULE_5__["default"], { updateAddBtnTop_interval: () => { }, ruleId: rule.id, set: set, rule: rule, rules: rules }),
            renderInterceptedRequests(rule.match))));
    };
    const renderPanelHeader = ({ id, filterType = 'normal', limitMethod = 'ALL', match, label, switchOn = true, key }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "panel-header", onClick: e => e.stopPropagation() },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"].Compact, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { size: "small", placeholder: "name", style: {
                        maxWidth: '200px',
                        flex: 'auto',
                        display: 'inline-block',
                    }, defaultValue: label, onChange: e => handleLabelChange(e, id) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "small", defaultValue: limitMethod, style: {
                        width: '1px',
                        maxWidth: '120px',
                        flex: '1.5 1 auto',
                        display: 'inline-block',
                    }, onChange: val => handleLimitMethodChange(val, id) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "ALL" }, "ALL"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "GET" }, "GET"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "POST" }, "POST"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "PUT" }, "PUT"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "HEAD" }, "HEAD"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "DELETE" }, "DELETE"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "OPTIONS" }, "OPTIONS")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "small", defaultValue: filterType, style: {
                        width: '1px',
                        maxWidth: '120px',
                        flex: '1.5 1 auto',
                        display: 'inline-block',
                    }, onChange: val => handleFilterTypeChange(val, id) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "normal" }, "normal"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "regex" }, "regex"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"].TextArea, { rows: 2, size: "small", placeholder: filterType === 'normal' ? 'eg: abc/get' : 'eg: abc.*', style: {
                    flex: '1',
                    width: '100%',
                    display: 'inline-block',
                    marginTop: 10,
                }, defaultValue: match, onChange: e => handleMatchChange(e, id) })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "button-group" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], { size: "small", defaultChecked: switchOn, onChange: val => handleSingleSwitchChange(val, id), style: {
                    width: '28px',
                    flex: 'none',
                    marginRight: '8px',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { danger: true, type: "primary", shape: "circle", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], null), size: "small", onClick: e => handleClickRemove(e, id), style: { width: '24px', flex: 'none' } }))));
    const renderInterceptedRequests = (match) => {
        if (!interceptedRequests[match]) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "intercepted-requests" }, "Intercepted Networks:"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "intercepted" }, interceptedRequests[match].map(({ url, num }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_16__["default"], { placement: "top", title: url, key: url },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], { count: num, style: {
                        backgroundColor: '#fff',
                        color: '#999',
                        boxShadow: '0 0 0 1px #d9d9d9 inset',
                        marginTop: '-3px',
                        marginRight: '4px',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "url" }, url)))))));
    };
    const renderHeader = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            textAlign: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'white',
            paddingBottom: 10,
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], { checked: switchOn, onChange: handleSwitchChange }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"].Compact, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { allowClear: true, onChange: (e) => {
                            setNewTabName(e.target.value);
                        }, placeholder: "Add new tab", onPressEnter: (e) => {
                            handleClickAdd(newTabName || generateRandomString(5));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "primary", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], null), onClick: () => handleClickAdd(newTabName || generateRandomString(5)) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "primary", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_17__.FaFileExport, { style: {
                                marginBottom: -1
                            } }), onClick: () => handleExportRules() }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_18__["default"], Object.assign({}, uploadProps),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "primary", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_17__.FaFileImport, { style: {
                                    marginBottom: -1
                                } }) })))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'center',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { style: { marginRight: 10 }, placeholder: "Search by name", onPressEnter: handleSearch }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { style: { marginRight: 10 }, placeholder: "Search by url", onPressEnter: handleUrlSearch }),
                showRefreshTip && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                        color: '#1890ff',
                        lineHeight: '16px',
                        marginTop: '16px',
                    } }, "Please Refresh your page after changing rules."))))));
    if (isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    const handleViewDetail = (text, record) => {
        setCurrentEditRule(record);
        setShowDetail(true);
    };
    const tableColumns = [
        {
            title: "id",
            dataIndex: "id",
            width: '160px',
            ellipsis: true,
            key: "id",
            render: (text, record) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_16__["default"], { title: text },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, text)))
        },
        {
            title: "Name",
            width: '150px',
            dataIndex: "label",
            key: "label",
            ellipsis: true,
        },
        {
            title: "Enable",
            width: '120px',
            dataIndex: "switchOn",
            key: "switchOn",
            render: (text, record) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], { checked: record.switchOn, onChange: () => handleSingleSwitchChange(record.switchOn, record.id) }))
        },
        {
            title: "match",
            dataIndex: "match",
            key: "match",
            ellipsis: true,
            render: (text, record) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_16__["default"], { title: text },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "link", size: "small", onClick: () => handleViewDetail(text, record) }, text)))
        },
        {
            title: "Action",
            width: '100px',
            render: (text, record) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "text", danger: true, onClick: () => handleClickRemove(text, record.id), icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], null) }))
        }
    ];
    const handleRulesChange = (data) => {
        console.log(1);
        if (currentEditRule) {
            setCurrentEditRule(Object.assign(Object.assign({}, currentEditRule), { overrideTxt: JSON.stringify(data) }));
        }
    };
    const handleUpdateRules = () => {
        if (currentEditRule) {
            const index = rules.findIndex(rule => rule.id === currentEditRule.id);
            if (index !== -1) {
                const newRules = [...rules];
                newRules[index] = currentEditRule;
                setRules(newRules);
            }
            else {
                // new rule
                setRules(prevRules => [...prevRules, currentEditRule]);
            }
            setShowDetail(false);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_19__["default"], { spinning: isLoading },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                width: '100%',
                height: '100%',
                padding: '20px',
                boxSizing: 'border-box',
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    padding: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], { checkedChildren: "On", unCheckedChildren: "Off", checked: switchOn, onChange: handleSwitchChange })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"].Search, { placeholder: "Search by name", onPressEnter: handleSearch }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"].Search, { placeholder: "Search by url", onPressEnter: handleUrlSearch }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "primary", onClick: handleAddNewRule }, "Add Rule"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: tableBoxRef, style: {
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    height: tableBoxHeight,
                    position: 'relative',
                } },
                !switchOn && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        zIndex: 1,
                        cursor: 'not-allowed',
                        pointerEvents: 'none',
                    } })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_20__["default"], { bordered: true, style: {
                        height: tableBoxHeight,
                        opacity: switchOn ? 1 : 0.65,
                    }, scroll: { y: tableBoxHeight }, size: 'small', columns: tableColumns, dataSource: rules })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_21__["default"], { maskClosable: false, width: 1200, title: "Detail", open: showDetail, onClose: () => {
                    setShowDetail(false);
                }, extra: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { onClick: () => setShowDetail(false) }, "Cancel"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "primary", onClick: handleUpdateRules }, "OK")) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                        display: 'flex',
                        gap: '10px',
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                            width: 500
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_22__["default"].Title, { level: 4, style: {
                                marginTop: 0
                            } }, "Id:"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"].Compact, { style: {
                                width: '100%',
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { style: {
                                    marginBottom: '10px',
                                }, disabled: true, value: (currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.id) || '' }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "primary", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_23__["default"], null), onClick: () => {
                                    navigator.clipboard.writeText((currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.id) || '');
                                    antd__WEBPACK_IMPORTED_MODULE_7__["default"].success('Copied to clipboard');
                                } })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_22__["default"].Title, { level: 4 }, "Label:"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { style: {
                                marginBottom: '10px',
                            }, value: (currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.label) || '', onChange: (e) => {
                                if (currentEditRule) {
                                    setCurrentEditRule(Object.assign(Object.assign({}, currentEditRule), { label: e.target.value }));
                                }
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_22__["default"].Title, { level: 4 }, "Match:"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"].TextArea, { rows: 10, style: {
                                marginBottom: '10px',
                            }, value: (currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.match) || '', onChange: (e) => {
                                if (currentEditRule) {
                                    setCurrentEditRule(Object.assign(Object.assign({}, currentEditRule), { match: e.target.value }));
                                }
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(json_edit_react__WEBPACK_IMPORTED_MODULE_24__.JsonEditor, { rootName: '', className: 'json-editor', data: JSON.parse((currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.overrideTxt) || '{}'), setData: handleRulesChange }))))));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ajax-modifier-main", style: {
            margin: '0 auto',
            width: '100%',
            height: '100%',
            padding: '20px',
        } },
        renderHeader(),
        showAllRules && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_json_pretty__WEBPACK_IMPORTED_MODULE_2___default()), { data: rules }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_25__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_json_pretty__WEBPACK_IMPORTED_MODULE_2___default()), { data: dataList }))),
        !showAllRules && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'setting-body', style: {
                background: '#fff',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            } }, renderTabs()))));
};
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("root"));
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null)));


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"mainpanel": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchrome_extension_typescript_starter"] = self["webpackChunkchrome_extension_typescript_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/mainpanel.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0hBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NWQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvbWFpbnBhbmVsLnRzeCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgU3dpdGNoLCBDb2xsYXBzZSwgSW5wdXQsIFNlbGVjdCwgQnV0dG9uLCBCYWRnZSwgVG9vbHRpcCwgU3BhY2UsIFRhYnMsIERpdmlkZXIsIG1lc3NhZ2UsIFVwbG9hZCwgVGFibGUsIERyYXdlciwgVHlwb2dyYXBoeSwgU3BpbiwgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQsIENvcHlPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCBKU09OUHJldHR5IGZyb20gJ3JlYWN0LWpzb24tcHJldHR5JztcbmltcG9ydCB7IEZhRmlsZUV4cG9ydCwgRmFGaWxlSW1wb3J0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBKc29uRWRpdG9yIH0gZnJvbSAnanNvbi1lZGl0LXJlYWN0JztcbmNvbnN0IHsgUGFuZWwgfSA9IENvbGxhcHNlO1xuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcbmltcG9ydCBSZXBsYWNlciBmcm9tICcuL2NvbXBvbmVudHMvUmVwbGFjZXInO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuY29uc3QgYnVpbGRVVUlEID0gKCkgPT4ge1xuICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICAgICAgY29uc3QgciA9IChkdCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgIHJldHVybiAoYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4OCkudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xufTtcbmNvbnN0IGdlbmVyYXRlVW5pcXVlSWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xufTtcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBbaW50ZXJjZXB0ZWRSZXF1ZXN0cywgc2V0SW50ZXJjZXB0ZWRSZXF1ZXN0c10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW3Nob3dBbGxSdWxlcywgc2V0U2hvd0FsbFJ1bGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcG9zaXRpb25DbGFzcywgc2V0UG9zaXRpb25DbGFzc10gPSB1c2VTdGF0ZSgnc3VzcGVuZCcpO1xuICAgIGNvbnN0IFtjdXN0b21GdW5jdGlvbiwgc2V0Q3VzdG9tRnVuY3Rpb25dID0gdXNlU3RhdGUoeyBwYW5lbFBvc2l0aW9uOiAwIH0pO1xuICAgIGNvbnN0IFtzaG93UmVmcmVzaFRpcCwgc2V0U2hvd1JlZnJlc2hUaXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzZWFyY2hOYW1lLCBzZXRTZWFyY2hOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbmV3VGFiTmFtZSwgc2V0TmV3VGFiTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlYXJjaFVybCwgc2V0U2VhcmNoVXJsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBmb3JjZVVwZGF0ZVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgWywgZm9yY2VVcGRhdGVdID0gdXNlUmVkdWNlcih4ID0+IHggKyAxLCAwKTtcbiAgICBjb25zdCBbYWN0aXZlS2V5LCBzZXRBY3RpdmVLZXldID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCBbc3dpdGNoT24sIHNldFN3aXRjaE9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcnVsZXMsIHNldFJ1bGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZGF0YUxpc3QsIHNldERhdGFMaXN0XSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCB0YWJsZUJveFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RhYmxlQm94SGVpZ2h0LCBzZXRUYWJsZUJveEhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2N1cnJlbnRFZGl0UnVsZSwgc2V0Q3VycmVudEVkaXRSdWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0YWJsZUJveFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRUYWJsZUJveEhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0YWJsZUJveFJlZi5jdXJyZW50Lm9mZnNldFRvcCAtIDIwKTtcbiAgICAgICAgfVxuICAgIH0sIFt0YWJsZUJveFJlZi5jdXJyZW50XSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnYWpheEludGVyY2VwdG9yX3N3aXRjaE9uJywgJ2FqYXhJbnRlcmNlcHRvcl9ydWxlcycsICdjdXN0b21GdW5jdGlvbiddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBzZXRTd2l0Y2hPbihyZXN1bHQuYWpheEludGVyY2VwdG9yX3N3aXRjaE9uIHx8IGZhbHNlKTtcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCBydWxlIGlmIG5vIHJ1bGVzIGV4aXN0XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5hamF4SW50ZXJjZXB0b3JfcnVsZXMgfHwgcmVzdWx0LmFqYXhJbnRlcmNlcHRvcl9ydWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0UnVsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGdlbmVyYXRlVW5pcXVlSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6ICcnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RlZmF1bHQgUnVsZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaE9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZXk6IGJ1aWxkVVVJRCgpLFxuICAgICAgICAgICAgICAgICAgICB0YWJJZDogJ0RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFJ1bGVzID0gW2RlZmF1bHRSdWxlXTtcbiAgICAgICAgICAgICAgICBzZXRSdWxlcyhkZWZhdWx0UnVsZXMpO1xuICAgICAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgZGVmYXVsdFJ1bGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFJ1bGVzKHJlc3VsdC5hamF4SW50ZXJjZXB0b3JfcnVsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Q3VzdG9tRnVuY3Rpb24ocmVzdWx0LmN1c3RvbUZ1bmN0aW9uIHx8IHsgcGFuZWxQb3NpdGlvbjogMCB9KTtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXR1cE1lc3NhZ2VMaXN0ZW5lcigpO1xuICAgICAgICBub3RpZnlCYWNrZ3JvdW5kU2NyaXB0TG9hZGVkKCk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGdyb3VwUnVsZXNCeVRhYiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBlZFJ1bGVzID0gcnVsZXMucmVkdWNlKChhY2MsIHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhYiA9IHJ1bGUudGFiSWQgfHwgJ0RlZmF1bHQnO1xuICAgICAgICAgICAgaWYgKCFhY2NbdGFiXSkge1xuICAgICAgICAgICAgICAgIGFjY1t0YWJdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2NbdGFiXS5wdXNoKHJ1bGUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZ3JvdXBlZFJ1bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGdyb3VwZWRSdWxlc1snRGVmYXVsdCddID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2V0RGF0YUxpc3QoZ3JvdXBlZFJ1bGVzKTtcbiAgICAgICAgLy8gT25seSBzZXQgdGhlIGFjdGl2ZUtleSBpZiBpdCdzIG5vdCBhbHJlYWR5IHNldFxuICAgICAgICBpZiAoIWFjdGl2ZUtleSkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RUYWJJZCA9IE9iamVjdC5rZXlzKGdyb3VwZWRSdWxlcylbMF07XG4gICAgICAgICAgICBzZXRBY3RpdmVLZXkoZmlyc3RUYWJJZCk7XG4gICAgICAgIH1cbiAgICB9LCBbcnVsZXMsIGFjdGl2ZUtleV0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdyb3VwUnVsZXNCeVRhYigpO1xuICAgIH0sIFtydWxlcywgZ3JvdXBSdWxlc0J5VGFiXSk7XG4gICAgY29uc3Qgc2V0dXBNZXNzYWdlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihoYW5kbGVJbmNvbWluZ01lc3NhZ2UpO1xuICAgIH07XG4gICAgY29uc3QgdXBsb2FkUHJvcHMgPSB7XG4gICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgYWN0aW9uOiAnIycsXG4gICAgICAgIGFjY2VwdDogJy5qc29uJyxcbiAgICAgICAgYmVmb3JlVXBsb2FkKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkRhdGFiYXNlID0gSlNPTi5wYXJzZSgoX2EgPSBlLnRhcmdldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFJ1bGVzKGpzb25EYXRhYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywganNvbkRhdGFiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBSdWxlc0J5VGFiKCk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtmaWxlLm5hbWV9IHVwbG9hZGVkIHN1Y2Nlc3NmdWxseWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcignRmFpbGVkIHRvIHBhcnNlIEpTT04gZmlsZScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgZGVmYXVsdCB1cGxvYWQgYmVoYXZpb3JcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2UoaW5mbykge1xuICAgICAgICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUluY29taW5nTWVzc2FnZSA9IHVzZUNhbGxiYWNrKCh7IHR5cGUsIHRvLCB1cmwsIG1hdGNoLCBjb250ZW50U2NyaXB0TG9hZGVkID0gZmFsc2UsIHNob3dGcmVzaFRpcCA9IGZhbHNlLCB9KSA9PiB7XG4gICAgICAgIGlmICh0eXBlID09PSAnYWpheEludGVyY2VwdG9yJyAmJiB0byA9PT0gJ2lmcmFtZScpIHtcbiAgICAgICAgICAgIGlmIChjb250ZW50U2NyaXB0TG9hZGVkIHx8IHNob3dGcmVzaFRpcCkge1xuICAgICAgICAgICAgICAgIHNldFNob3dSZWZyZXNoVGlwKHNob3dGcmVzaFRpcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SW50ZXJjZXB0ZWRSZXF1ZXN0cyhwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSZXF1ZXN0cyA9IE9iamVjdC5hc3NpZ24oe30sIHByZXYpO1xuICAgICAgICAgICAgICAgIGlmICghbmV3UmVxdWVzdHNbbWF0Y2hdKVxuICAgICAgICAgICAgICAgICAgICBuZXdSZXF1ZXN0c1ttYXRjaF0gPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdHMgPSBuZXdSZXF1ZXN0c1ttYXRjaF0uc29tZShvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLnVybCA9PT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoubnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UmVxdWVzdHNbbWF0Y2hdLnB1c2goeyB1cmwsIG51bTogMSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1JlcXVlc3RzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3Qgbm90aWZ5QmFja2dyb3VuZFNjcmlwdExvYWRlZCA9ICgpID0+IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoY2hyb21lLnJ1bnRpbWUuaWQsIHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4SW50ZXJjZXB0b3InLFxuICAgICAgICAgICAgdG86ICdiYWNrZ3JvdW5kJyxcbiAgICAgICAgICAgIGlmcmFtZVNjcmlwdExvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBzZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgLy8gRmlyc3QgZW5zdXJlIHdlIGhhdmUgdGhlIGxhdGVzdCBzdGF0ZSBiZWZvcmUgc2VuZGluZyBtZXNzYWdlc1xuICAgICAgICAoX2EgPSBjaHJvbWUuc3RvcmFnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxvY2FsLnNldCh7IFtrZXldOiB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW3NldF0ga2V5OiAke2tleX0sIHZhbHVlOiAke3ZhbHVlfWApO1xuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoY2hyb21lLnJ1bnRpbWUuaWQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWpheEludGVyY2VwdG9yJyxcbiAgICAgICAgICAgICAgICB0bzogJ2JhY2tncm91bmQnLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGZvcmNlVXBkYXRlRGVib3VjZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGZvcmNlVXBkYXRlVGltZW91dFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZm9yY2VVcGRhdGVUaW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGZvcmNlVXBkYXRlVGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVNpbmdsZVN3aXRjaENoYW5nZSA9IChzd2l0Y2hPbiwgcnVsZUlkKSA9PiB7XG4gICAgICAgIHNldFJ1bGVzKHByZXZSdWxlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdSdWxlcyA9IHByZXZSdWxlcy5tYXAocnVsZSA9PiBydWxlLmlkID09PSBydWxlSWQgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJ1bGUpLCB7IHN3aXRjaE9uIH0pIDogcnVsZSk7XG4gICAgICAgICAgICBzZXQoJ2FqYXhJbnRlcmNlcHRvcl9ydWxlcycsIG5ld1J1bGVzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdSdWxlcztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVMaW1pdE1ldGhvZENoYW5nZSA9ICh2YWwsIHJ1bGVJZCkgPT4ge1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBwcmV2UnVsZXMubWFwKHJ1bGUgPT4gcnVsZS5pZCA9PT0gcnVsZUlkID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBydWxlKSwgeyBsaW1pdE1ldGhvZDogdmFsIH0pIDogcnVsZSk7XG4gICAgICAgICAgICBzZXQoJ2FqYXhJbnRlcmNlcHRvcl9ydWxlcycsIG5ld1J1bGVzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdSdWxlcztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVFeHBvcnRSdWxlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZXNGb3JFeHBvcnQgPSBydWxlcy5tYXAocnVsZSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBydWxlKSwgeyBvdmVycmlkZVR4dDogdHlwZW9mIHJ1bGUub3ZlcnJpZGVUeHQgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocnVsZS5vdmVycmlkZVR4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlLm92ZXJyaWRlVHh0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgIDogcnVsZS5vdmVycmlkZVR4dCB9KSkpO1xuICAgICAgICBjb25zdCBkYXRhU3RyID0gSlNPTi5zdHJpbmdpZnkocnVsZXNGb3JFeHBvcnQsIG51bGwsIDIpO1xuICAgICAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04LCR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFTdHIpfWA7XG4gICAgICAgIGNvbnN0IGV4cG9ydEZpbGVEZWZhdWx0TmFtZSA9ICdhamF4X2ludGVyY2VwdG9yX3J1bGVzLmpzb24nO1xuICAgICAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgZGF0YVVyaSk7XG4gICAgICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBleHBvcnRGaWxlRGVmYXVsdE5hbWUpO1xuICAgICAgICBsaW5rRWxlbWVudC5jbGljaygpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlSW1wb3J0UnVsZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVJbXBvcnRSdWxlcycpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlRmlsdGVyVHlwZUNoYW5nZSA9ICh2YWwsIHJ1bGVJZCkgPT4ge1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBwcmV2UnVsZXMubWFwKHJ1bGUgPT4gcnVsZS5pZCA9PT0gcnVsZUlkID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBydWxlKSwgeyBmaWx0ZXJUeXBlOiB2YWwgfSkgOiBydWxlKTtcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgbmV3UnVsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU1hdGNoQ2hhbmdlID0gKGUsIHJ1bGVJZCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJyk7XG4gICAgICAgIHNldFJ1bGVzKHByZXZSdWxlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdSdWxlcyA9IHByZXZSdWxlcy5tYXAocnVsZSA9PiBydWxlLmlkID09PSBydWxlSWQgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJ1bGUpLCB7IG1hdGNoOiB2YWx1ZSB9KSA6IE9iamVjdC5hc3NpZ24oe30sIHJ1bGUpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbaGFuZGxlTWF0Y2hDaGFuZ2VdIG5ld1J1bGVzOmAsIG5ld1J1bGVzKTtcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgbmV3UnVsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUxhYmVsQ2hhbmdlID0gKGUsIHJ1bGVJZCkgPT4ge1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBwcmV2UnVsZXMubWFwKHJ1bGUgPT4gcnVsZS5pZCA9PT0gcnVsZUlkID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBydWxlKSwgeyBsYWJlbDogZS50YXJnZXQudmFsdWUgfSkgOiBydWxlKTtcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgbmV3UnVsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUFkZE5ld1J1bGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1J1bGUgPSB7XG4gICAgICAgICAgICBpZDogZ2VuZXJhdGVVbmlxdWVJZCgpLFxuICAgICAgICAgICAgbWF0Y2g6ICcnLFxuICAgICAgICAgICAgbGFiZWw6IGB1cmwke3J1bGVzLmxlbmd0aCArIDF9YCxcbiAgICAgICAgICAgIHN3aXRjaE9uOiB0cnVlLFxuICAgICAgICAgICAga2V5OiBidWlsZFVVSUQoKSxcbiAgICAgICAgICAgIHRhYklkOiAnRGVmYXVsdCcsXG4gICAgICAgIH07XG4gICAgICAgIHNldEN1cnJlbnRFZGl0UnVsZShuZXdSdWxlKTtcbiAgICAgICAgc2V0U2hvd0RldGFpbCh0cnVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrQWRkID0gKHRhYklkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1J1bGUgPSB7XG4gICAgICAgICAgICBpZDogZ2VuZXJhdGVVbmlxdWVJZCgpLFxuICAgICAgICAgICAgbWF0Y2g6ICcnLFxuICAgICAgICAgICAgbGFiZWw6IGB1cmwke3J1bGVzLmxlbmd0aCArIDF9YCxcbiAgICAgICAgICAgIHN3aXRjaE9uOiB0cnVlLFxuICAgICAgICAgICAga2V5OiBidWlsZFVVSUQoKSxcbiAgICAgICAgICAgIHRhYklkOiB0YWJJZCxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0QWN0aXZlS2V5KHRhYklkKTtcbiAgICAgICAgc2V0UnVsZXMocHJldlJ1bGVzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1J1bGVzID0gWy4uLnByZXZSdWxlcywgbmV3UnVsZV07XG4gICAgICAgICAgICBzZXQoJ2FqYXhJbnRlcmNlcHRvcl9ydWxlcycsIG5ld1J1bGVzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdSdWxlcztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVCYXRjaFJlbW92ZSA9IChydWxlSWRzLCBuZWVkR3JvdXBSdWxlc0J5VGFiID0gZmFsc2UpID0+IHtcbiAgICAgICAgc2V0UnVsZXMocHJldlJ1bGVzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1J1bGVzID0gcHJldlJ1bGVzLmZpbHRlcihydWxlID0+ICFydWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpKTtcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgbmV3UnVsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0SW50ZXJjZXB0ZWRSZXF1ZXN0cyhwcmV2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlcXVlc3RzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldik7XG4gICAgICAgICAgICBydWxlSWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlcy5maW5kKHIgPT4gci5pZCA9PT0gaWQpO1xuICAgICAgICAgICAgICAgIGlmIChydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdSZXF1ZXN0c1tydWxlLm1hdGNoXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1JlcXVlc3RzW3J1bGUubGFiZWxdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1JlcXVlc3RzO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5lZWRHcm91cFJ1bGVzQnlUYWIpIHtcbiAgICAgICAgICAgIGdyb3VwUnVsZXNCeVRhYigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0RGF0YUxpc3QocHJldkRhdGFMaXN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEYXRhTGlzdCA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZEYXRhTGlzdCk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobmV3RGF0YUxpc3QpLmZvckVhY2godGFiSWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhTGlzdFt0YWJJZF0gPSBuZXdEYXRhTGlzdFt0YWJJZF0uZmlsdGVyKHJ1bGUgPT4gIXJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdEYXRhTGlzdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDbGlja1JlbW92ZSA9IChlLCBydWxlSWQpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRhYklkID0gYWN0aXZlS2V5O1xuICAgICAgICBoYW5kbGVCYXRjaFJlbW92ZShbcnVsZUlkXSk7XG4gICAgICAgIHNldERhdGFMaXN0KHByZXZEYXRhTGlzdCA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhTGlzdCA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZEYXRhTGlzdCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhYklkICYmICgoX2EgPSBuZXdEYXRhTGlzdFtjdXJyZW50VGFiSWRdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdEYXRhTGlzdFtjdXJyZW50VGFiSWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RhYnMgPSBPYmplY3Qua2V5cyhuZXdEYXRhTGlzdCk7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlS2V5KHJlbWFpbmluZ1RhYnMubGVuZ3RoID4gMCA/IHJlbWFpbmluZ1RhYnNbMF0gOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGFMaXN0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNvbGxhc2VDaGFuZ2UgPSAoKSA9PiB7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHNldFN3aXRjaE9uKHByZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U3dpdGNoT24gPSAhcHJldjtcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3N3aXRjaE9uJywgbmV3U3dpdGNoT24pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N3aXRjaE9uO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlVXJsU2VhcmNoID0gKGUpID0+IHtcbiAgICAgICAgc2V0U2VhcmNoVXJsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGdlbmVyYXRlUmFuZG9tU3RyaW5nID0gKGxlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVycy5sZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlVGFiRWRpdCA9ICh0YXJnZXRLZXksIGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSAnYWRkJykge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFiSWQgPSBnZW5lcmF0ZVJhbmRvbVN0cmluZyg1KTtcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrQWRkKG5ld1RhYklkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYklkID0gdGFyZ2V0S2V5O1xuICAgICAgICAgICAgbGV0IGRlbGV0aW5nUnVsZUlkcyA9IGRhdGFMaXN0W3RhYklkXS5tYXAocnVsZSA9PiBydWxlLmlkKTtcbiAgICAgICAgICAgIGhhbmRsZUJhdGNoUmVtb3ZlKGRlbGV0aW5nUnVsZUlkcywgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCByZW1haW5pbmdUYWJzID0gT2JqZWN0LmtleXMoZGF0YUxpc3QpLmZpbHRlcihpZCA9PiBpZCAhPT0gdGFiSWQpO1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBhY3RpdmVLZXkgdG8gdGhlIGxhc3QgcmVtYWluaW5nIHRhYiwgb3IgdW5kZWZpbmVkIGlmIG5vIHRhYnMgbGVmdFxuICAgICAgICAgICAgc2V0QWN0aXZlS2V5KHJlbWFpbmluZ1RhYnMubGVuZ3RoID4gMCA/IHJlbWFpbmluZ1RhYnNbcmVtYWluaW5nVGFicy5sZW5ndGggLSAxXSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlclRhYnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChUYWJzLCB7IGFjdGl2ZUtleTogYWN0aXZlS2V5LCBzaXplOiAnc21hbGwnLCBvbkNoYW5nZTogKGtleSkgPT4gc2V0QWN0aXZlS2V5KGtleSksIHR5cGU6IFwiZWRpdGFibGUtY2FyZFwiLCBpdGVtczogT2JqZWN0LmVudHJpZXMoZGF0YUxpc3QpLm1hcCgoW3RhYklkLCBydWxlc10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFJ1bGVzID0gcnVsZXMuZmlsdGVyKHJ1bGUgPT4gc2VhcmNoTmFtZSA/IHJ1bGUubGFiZWwuaW5kZXhPZihzZWFyY2hOYW1lKSA+IC0xIDogdHJ1ZSkuZmlsdGVyKHJ1bGUgPT4gc2VhcmNoVXJsID8gcnVsZS5tYXRjaC5pbmRleE9mKHNlYXJjaFVybCkgPiAtMSA6IHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xvY2FsID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sbGFwc2UsIHsgY2xhc3NOYW1lOiAnY29sbGFwc2UnLCBvbkNoYW5nZTogaGFuZGxlQ29sbGFzZUNoYW5nZSB9LCByZW5kZXJSdWxlcyhmaWx0ZXJlZFJ1bGVzKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHNpemU6IFwibGFyZ2VcIiwgY2xhc3NOYW1lOiAnYnRuLWFkZCcsIHR5cGU6IFwicHJpbWFyeVwiLCBvbkNsaWNrOiAoKSA9PiBoYW5kbGVDbGlja0FkZCh0YWJJZCksIGRpc2FibGVkOiAhc3dpdGNoT24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGx1c091dGxpbmVkLCBudWxsKSkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHRhYklkLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFkZ2UsIHsgY2xhc3NOYW1lOiBcInNpdGUtYmFkZ2UtY291bnQtMTA5XCIsIGNvdW50OiBmaWx0ZXJlZFJ1bGVzLmxlbmd0aCwgc2l6ZTogJ3NtYWxsJywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnIzUyYzQxYScgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1MDBBMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSWQpKSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IG5ld0xvY2FsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSwgb25FZGl0OiBoYW5kbGVUYWJFZGl0IH0pKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlclJ1bGVzID0gKHJ1bGVzKSA9PiB7XG4gICAgICAgIHJldHVybiBydWxlcy5tYXAoKHJ1bGUpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFBhbmVsLCB7IGtleTogcnVsZS5rZXksIGhlYWRlcjogcmVuZGVyUGFuZWxIZWFkZXIocnVsZSkgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVwbGFjZXIsIHsgdXBkYXRlQWRkQnRuVG9wX2ludGVydmFsOiAoKSA9PiB7IH0sIHJ1bGVJZDogcnVsZS5pZCwgc2V0OiBzZXQsIHJ1bGU6IHJ1bGUsIHJ1bGVzOiBydWxlcyB9KSxcbiAgICAgICAgICAgIHJlbmRlckludGVyY2VwdGVkUmVxdWVzdHMocnVsZS5tYXRjaCkpKSk7XG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJQYW5lbEhlYWRlciA9ICh7IGlkLCBmaWx0ZXJUeXBlID0gJ25vcm1hbCcsIGxpbWl0TWV0aG9kID0gJ0FMTCcsIG1hdGNoLCBsYWJlbCwgc3dpdGNoT24gPSB0cnVlLCBrZXkgfSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFuZWwtaGVhZGVyXCIsIG9uQ2xpY2s6IGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2UuQ29tcGFjdCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHNpemU6IFwic21hbGxcIiwgcGxhY2Vob2xkZXI6IFwibmFtZVwiLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVmYXVsdFZhbHVlOiBsYWJlbCwgb25DaGFuZ2U6IGUgPT4gaGFuZGxlTGFiZWxDaGFuZ2UoZSwgaWQpIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCB7IHNpemU6IFwic21hbGxcIiwgZGVmYXVsdFZhbHVlOiBsaW1pdE1ldGhvZCwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTIwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogJzEuNSAxIGF1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiB2YWwgPT4gaGFuZGxlTGltaXRNZXRob2RDaGFuZ2UodmFsLCBpZCkgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6IFwiQUxMXCIgfSwgXCJBTExcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7IHZhbHVlOiBcIkdFVFwiIH0sIFwiR0VUXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogXCJQT1NUXCIgfSwgXCJQT1NUXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogXCJQVVRcIiB9LCBcIlBVVFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6IFwiSEVBRFwiIH0sIFwiSEVBRFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6IFwiREVMRVRFXCIgfSwgXCJERUxFVEVcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7IHZhbHVlOiBcIk9QVElPTlNcIiB9LCBcIk9QVElPTlNcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCB7IHNpemU6IFwic21hbGxcIiwgZGVmYXVsdFZhbHVlOiBmaWx0ZXJUeXBlLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnMS41IDEgYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IHZhbCA9PiBoYW5kbGVGaWx0ZXJUeXBlQ2hhbmdlKHZhbCwgaWQpIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7IHZhbHVlOiBcIm5vcm1hbFwiIH0sIFwibm9ybWFsXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogXCJyZWdleFwiIH0sIFwicmVnZXhcIikpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQuVGV4dEFyZWEsIHsgcm93czogMiwgc2l6ZTogXCJzbWFsbFwiLCBwbGFjZWhvbGRlcjogZmlsdGVyVHlwZSA9PT0gJ25vcm1hbCcgPyAnZWc6IGFiYy9nZXQnIDogJ2VnOiBhYmMuKicsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgICAgfSwgZGVmYXVsdFZhbHVlOiBtYXRjaCwgb25DaGFuZ2U6IGUgPT4gaGFuZGxlTWF0Y2hDaGFuZ2UoZSwgaWQpIH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b24tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2gsIHsgc2l6ZTogXCJzbWFsbFwiLCBkZWZhdWx0Q2hlY2tlZDogc3dpdGNoT24sIG9uQ2hhbmdlOiB2YWwgPT4gaGFuZGxlU2luZ2xlU3dpdGNoQ2hhbmdlKHZhbCwgaWQpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI4cHgnLFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcbiAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgZGFuZ2VyOiB0cnVlLCB0eXBlOiBcInByaW1hcnlcIiwgc2hhcGU6IFwiY2lyY2xlXCIsIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVsZXRlT3V0bGluZWQsIG51bGwpLCBzaXplOiBcInNtYWxsXCIsIG9uQ2xpY2s6IGUgPT4gaGFuZGxlQ2xpY2tSZW1vdmUoZSwgaWQpLCBzdHlsZTogeyB3aWR0aDogJzI0cHgnLCBmbGV4OiAnbm9uZScgfSB9KSkpKTtcbiAgICBjb25zdCByZW5kZXJJbnRlcmNlcHRlZFJlcXVlc3RzID0gKG1hdGNoKSA9PiB7XG4gICAgICAgIGlmICghaW50ZXJjZXB0ZWRSZXF1ZXN0c1ttYXRjaF0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW50ZXJjZXB0ZWQtcmVxdWVzdHNcIiB9LCBcIkludGVyY2VwdGVkIE5ldHdvcmtzOlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW50ZXJjZXB0ZWRcIiB9LCBpbnRlcmNlcHRlZFJlcXVlc3RzW21hdGNoXS5tYXAoKHsgdXJsLCBudW0gfSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBwbGFjZW1lbnQ6IFwidG9wXCIsIHRpdGxlOiB1cmwsIGtleTogdXJsIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYWRnZSwgeyBjb3VudDogbnVtLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM5OTknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMXB4ICNkOWQ5ZDkgaW5zZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTNweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzRweCcsXG4gICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwidXJsXCIgfSwgdXJsKSkpKSkpKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB6SW5kZXg6IDEwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTAsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoLCB7IGNoZWNrZWQ6IHN3aXRjaE9uLCBvbkNoYW5nZTogaGFuZGxlU3dpdGNoQ2hhbmdlIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2UuQ29tcGFjdCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBhbGxvd0NsZWFyOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdUYWJOYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBsYWNlaG9sZGVyOiBcIkFkZCBuZXcgdGFiXCIsIG9uUHJlc3NFbnRlcjogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGlja0FkZChuZXdUYWJOYW1lIHx8IGdlbmVyYXRlUmFuZG9tU3RyaW5nKDUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHR5cGU6IFwicHJpbWFyeVwiLCBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFBsdXNPdXRsaW5lZCwgbnVsbCksIG9uQ2xpY2s6ICgpID0+IGhhbmRsZUNsaWNrQWRkKG5ld1RhYk5hbWUgfHwgZ2VuZXJhdGVSYW5kb21TdHJpbmcoNSkpIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInByaW1hcnlcIiwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChGYUZpbGVFeHBvcnQsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksIG9uQ2xpY2s6ICgpID0+IGhhbmRsZUV4cG9ydFJ1bGVzKCkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXBsb2FkLCBPYmplY3QuYXNzaWduKHt9LCB1cGxvYWRQcm9wcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInByaW1hcnlcIiwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChGYUZpbGVJbXBvcnQsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHN0eWxlOiB7IG1hcmdpblJpZ2h0OiAxMCB9LCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggYnkgbmFtZVwiLCBvblByZXNzRW50ZXI6IGhhbmRsZVNlYXJjaCB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHN0eWxlOiB7IG1hcmdpblJpZ2h0OiAxMCB9LCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggYnkgdXJsXCIsIG9uUHJlc3NFbnRlcjogaGFuZGxlVXJsU2VhcmNoIH0pLFxuICAgICAgICAgICAgICAgIHNob3dSZWZyZXNoVGlwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzE4OTBmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgfSB9LCBcIlBsZWFzZSBSZWZyZXNoIHlvdXIgcGFnZSBhZnRlciBjaGFuZ2luZyBydWxlcy5cIikpKSkpKTtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwiTG9hZGluZy4uLlwiKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlVmlld0RldGFpbCA9ICh0ZXh0LCByZWNvcmQpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudEVkaXRSdWxlKHJlY29yZCk7XG4gICAgICAgIHNldFNob3dEZXRhaWwodHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCB0YWJsZUNvbHVtbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcImlkXCIsXG4gICAgICAgICAgICBkYXRhSW5kZXg6IFwiaWRcIixcbiAgICAgICAgICAgIHdpZHRoOiAnMTYwcHgnLFxuICAgICAgICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICAgICAgICBrZXk6IFwiaWRcIixcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyB0aXRsZTogdGV4dCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIHRleHQpKSlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiTmFtZVwiLFxuICAgICAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgICAgICBkYXRhSW5kZXg6IFwibGFiZWxcIixcbiAgICAgICAgICAgIGtleTogXCJsYWJlbFwiLFxuICAgICAgICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkVuYWJsZVwiLFxuICAgICAgICAgICAgd2lkdGg6ICcxMjBweCcsXG4gICAgICAgICAgICBkYXRhSW5kZXg6IFwic3dpdGNoT25cIixcbiAgICAgICAgICAgIGtleTogXCJzd2l0Y2hPblwiLFxuICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2gsIHsgY2hlY2tlZDogcmVjb3JkLnN3aXRjaE9uLCBvbkNoYW5nZTogKCkgPT4gaGFuZGxlU2luZ2xlU3dpdGNoQ2hhbmdlKHJlY29yZC5zd2l0Y2hPbiwgcmVjb3JkLmlkKSB9KSlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwibWF0Y2hcIixcbiAgICAgICAgICAgIGRhdGFJbmRleDogXCJtYXRjaFwiLFxuICAgICAgICAgICAga2V5OiBcIm1hdGNoXCIsXG4gICAgICAgICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyB0aXRsZTogdGV4dCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHR5cGU6IFwibGlua1wiLCBzaXplOiBcInNtYWxsXCIsIG9uQ2xpY2s6ICgpID0+IGhhbmRsZVZpZXdEZXRhaWwodGV4dCwgcmVjb3JkKSB9LCB0ZXh0KSkpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFjdGlvblwiLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInRleHRcIiwgZGFuZ2VyOiB0cnVlLCBvbkNsaWNrOiAoKSA9PiBoYW5kbGVDbGlja1JlbW92ZSh0ZXh0LCByZWNvcmQuaWQpLCBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KERlbGV0ZU91dGxpbmVkLCBudWxsKSB9KSlcbiAgICAgICAgfVxuICAgIF07XG4gICAgY29uc3QgaGFuZGxlUnVsZXNDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygxKTtcbiAgICAgICAgaWYgKGN1cnJlbnRFZGl0UnVsZSkge1xuICAgICAgICAgICAgc2V0Q3VycmVudEVkaXRSdWxlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudEVkaXRSdWxlKSwgeyBvdmVycmlkZVR4dDogSlNPTi5zdHJpbmdpZnkoZGF0YSkgfSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVVcGRhdGVSdWxlcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRFZGl0UnVsZSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBydWxlcy5maW5kSW5kZXgocnVsZSA9PiBydWxlLmlkID09PSBjdXJyZW50RWRpdFJ1bGUuaWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1J1bGVzID0gWy4uLnJ1bGVzXTtcbiAgICAgICAgICAgICAgICBuZXdSdWxlc1tpbmRleF0gPSBjdXJyZW50RWRpdFJ1bGU7XG4gICAgICAgICAgICAgICAgc2V0UnVsZXMobmV3UnVsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbmV3IHJ1bGVcbiAgICAgICAgICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4gWy4uLnByZXZSdWxlcywgY3VycmVudEVkaXRSdWxlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTaG93RGV0YWlsKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW4sIHsgc3Bpbm5pbmc6IGlzTG9hZGluZyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSknLFxuICAgICAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2gsIHsgY2hlY2tlZENoaWxkcmVuOiBcIk9uXCIsIHVuQ2hlY2tlZENoaWxkcmVuOiBcIk9mZlwiLCBjaGVja2VkOiBzd2l0Y2hPbiwgb25DaGFuZ2U6IGhhbmRsZVN3aXRjaENoYW5nZSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTAsXG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dC5TZWFyY2gsIHsgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGJ5IG5hbWVcIiwgb25QcmVzc0VudGVyOiBoYW5kbGVTZWFyY2ggfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQuU2VhcmNoLCB7IHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBieSB1cmxcIiwgb25QcmVzc0VudGVyOiBoYW5kbGVVcmxTZWFyY2ggfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHR5cGU6IFwicHJpbWFyeVwiLCBvbkNsaWNrOiBoYW5kbGVBZGROZXdSdWxlIH0sIFwiQWRkIFJ1bGVcIikpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHRhYmxlQm94UmVmLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCA4cHggcmdiYSgwLDAsMCwwLjEpJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0YWJsZUJveEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICFzd2l0Y2hPbiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGUsIHsgYm9yZGVyZWQ6IHRydWUsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhYmxlQm94SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogc3dpdGNoT24gPyAxIDogMC42NSxcbiAgICAgICAgICAgICAgICAgICAgfSwgc2Nyb2xsOiB7IHk6IHRhYmxlQm94SGVpZ2h0IH0sIHNpemU6ICdzbWFsbCcsIGNvbHVtbnM6IHRhYmxlQ29sdW1ucywgZGF0YVNvdXJjZTogcnVsZXMgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcmF3ZXIsIHsgbWFza0Nsb3NhYmxlOiBmYWxzZSwgd2lkdGg6IDEyMDAsIHRpdGxlOiBcIkRldGFpbFwiLCBvcGVuOiBzaG93RGV0YWlsLCBvbkNsb3NlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dEZXRhaWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sIGV4dHJhOiBSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBvbkNsaWNrOiAoKSA9PiBzZXRTaG93RGV0YWlsKGZhbHNlKSB9LCBcIkNhbmNlbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdHlwZTogXCJwcmltYXJ5XCIsIG9uQ2xpY2s6IGhhbmRsZVVwZGF0ZVJ1bGVzIH0sIFwiT0tcIikpIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHkuVGl0bGUsIHsgbGV2ZWw6IDQsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgXCJJZDpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlLkNvbXBhY3QsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRpc2FibGVkOiB0cnVlLCB2YWx1ZTogKGN1cnJlbnRFZGl0UnVsZSA9PT0gbnVsbCB8fCBjdXJyZW50RWRpdFJ1bGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRFZGl0UnVsZS5pZCkgfHwgJycgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdHlwZTogXCJwcmltYXJ5XCIsIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29weU91dGxpbmVkLCBudWxsKSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoKGN1cnJlbnRFZGl0UnVsZSA9PT0gbnVsbCB8fCBjdXJyZW50RWRpdFJ1bGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRFZGl0UnVsZS5pZCkgfHwgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdDb3BpZWQgdG8gY2xpcGJvYXJkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LlRpdGxlLCB7IGxldmVsOiA0IH0sIFwiTGFiZWw6XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZTogKGN1cnJlbnRFZGl0UnVsZSA9PT0gbnVsbCB8fCBjdXJyZW50RWRpdFJ1bGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRFZGl0UnVsZS5sYWJlbCkgfHwgJycsIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVkaXRSdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50RWRpdFJ1bGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50RWRpdFJ1bGUpLCB7IGxhYmVsOiBlLnRhcmdldC52YWx1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LlRpdGxlLCB7IGxldmVsOiA0IH0sIFwiTWF0Y2g6XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dC5UZXh0QXJlYSwgeyByb3dzOiAxMCwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWU6IChjdXJyZW50RWRpdFJ1bGUgPT09IG51bGwgfHwgY3VycmVudEVkaXRSdWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RWRpdFJ1bGUubWF0Y2gpIHx8ICcnLCBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFZGl0UnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEVkaXRSdWxlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudEVkaXRSdWxlKSwgeyBtYXRjaDogZS50YXJnZXQudmFsdWUgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkVkaXRvciwgeyByb290TmFtZTogJycsIGNsYXNzTmFtZTogJ2pzb24tZWRpdG9yJywgZGF0YTogSlNPTi5wYXJzZSgoY3VycmVudEVkaXRSdWxlID09PSBudWxsIHx8IGN1cnJlbnRFZGl0UnVsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudEVkaXRSdWxlLm92ZXJyaWRlVHh0KSB8fCAne30nKSwgc2V0RGF0YTogaGFuZGxlUnVsZXNDaGFuZ2UgfSkpKSkpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYWpheC1tb2RpZmllci1tYWluXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgICB9IH0sXG4gICAgICAgIHJlbmRlckhlYWRlcigpLFxuICAgICAgICBzaG93QWxsUnVsZXMgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSlNPTlByZXR0eSwgeyBkYXRhOiBydWxlcyB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGl2aWRlciwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEpTT05QcmV0dHksIHsgZGF0YTogZGF0YUxpc3QgfSkpKSxcbiAgICAgICAgIXNob3dBbGxSdWxlcyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3NldHRpbmctYm9keScsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSknXG4gICAgICAgICAgICB9IH0sIHJlbmRlclRhYnMoKSkpKSk7XG59O1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbnJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuU3RyaWN0TW9kZSwgbnVsbCxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCkpKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuLy8gU2luY2UgYWxsIHJlZmVyZW5jZWQgY2h1bmtzIGFyZSBhbHJlYWR5IGluY2x1ZGVkXG4vLyBpbiB0aGlzIGZpbGUsIHRoaXMgZnVuY3Rpb24gaXMgZW1wdHkgaGVyZS5cbl9fd2VicGFja19yZXF1aXJlX18uZSA9ICgpID0+IChQcm9taXNlLnJlc29sdmUoKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWlucGFuZWxcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX2V4dGVuc2lvbl90eXBlc2NyaXB0X3N0YXJ0ZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX2V4dGVuc2lvbl90eXBlc2NyaXB0X3N0YXJ0ZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW5wYW5lbC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==