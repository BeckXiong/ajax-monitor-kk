/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup.tsx":
/*!***********************!*\
  !*** ./src/popup.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/collapse/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/badge/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/switch/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/upload/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/PlusOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _components_Replacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Replacer */ "./src/components/Replacer/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/index.less");





const { Panel } = antd__WEBPACK_IMPORTED_MODULE_2__["default"];
const { Option } = antd__WEBPACK_IMPORTED_MODULE_3__["default"];


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
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
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
            alert('beforeUpload');
            console.log(file);
            // get json database
            const jsonDatabase = file;
            console.log(jsonDatabase);
            // replace rules
            setRules(jsonDatabase);
            // set to storage
            set('ajaxInterceptor_rules', jsonDatabase);
            // group rules by tab
            groupRulesByTab();
            return false;
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                antd__WEBPACK_IMPORTED_MODULE_6__["default"].success(`${info.file.name} file uploaded successfully`);
            }
            else if (info.file.status === 'error') {
                antd__WEBPACK_IMPORTED_MODULE_6__["default"].error(`${info.file.name} file upload failed.`);
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
        chrome.runtime.sendMessage(chrome.runtime.id, {
            type: 'ajaxInterceptor',
            to: 'background',
            key,
            value,
        });
        (_a = chrome.storage) === null || _a === void 0 ? void 0 : _a.local.set({ [key]: value });
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
        const rulesForExport = rules.map(rule => (Object.assign(Object.assign({}, rule), { overrideTxt: typeof rule.overrideTxt === 'string' ? JSON.parse(rule.overrideTxt) : rule.overrideTxt })));
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
        const value = e.target.value.replace(/\n$/, ''); // Remove trailing newline
        setRules(prevRules => {
            const newRules = prevRules.map(rule => rule.id === ruleId ? Object.assign(Object.assign({}, rule), { match: value }) : rule);
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
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], { activeKey: activeKey, size: 'small', onChange: (key) => setActiveKey(key), type: "editable-card", items: Object.entries(dataList).map(([tabId, rules]) => {
                const filteredRules = rules.filter(rule => searchName ? rule.label.indexOf(searchName) > -1 : true).filter(rule => searchUrl ? rule.match.indexOf(searchUrl) > -1 : true);
                const newLocal = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], { className: 'collapse', onChange: handleCollaseChange }, renderRules(filteredRules)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { size: "large", className: 'btn-add', type: "primary", onClick: () => handleClickAdd(tabId), disabled: !switchOn },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
                return {
                    key: tabId,
                    label: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { className: "site-badge-count-109", count: filteredRules.length, size: 'small', style: { backgroundColor: '#52c41a' } }),
                        "\u00A0",
                        tabId)),
                    children: newLocal,
                };
            }), onEdit: handleTabEdit }));
    };
    const renderRules = (rules) => {
        return rules.map((rule) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Panel, { key: rule.key, header: renderPanelHeader(rule) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Replacer__WEBPACK_IMPORTED_MODULE_4__["default"], { updateAddBtnTop_interval: () => { }, ruleId: rule.id, set: set, rule: rule, rules: rules }),
            renderInterceptedRequests(rule.match))));
    };
    const renderPanelHeader = ({ id, filterType = 'normal', limitMethod = 'ALL', match, label, switchOn = true, key }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "panel-header", onClick: e => e.stopPropagation() },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Compact, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], { size: "small", placeholder: "name", style: {
                        maxWidth: '200px',
                        flex: 'auto',
                        display: 'inline-block',
                    }, defaultValue: label, onChange: e => handleLabelChange(e, id) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], { size: "small", defaultValue: limitMethod, style: {
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
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], { size: "small", defaultValue: filterType, style: {
                        width: '1px',
                        maxWidth: '120px',
                        flex: '1.5 1 auto',
                        display: 'inline-block',
                    }, onChange: val => handleFilterTypeChange(val, id) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "normal" }, "normal"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { value: "regex" }, "regex"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"].TextArea, { rows: 2, size: "small", placeholder: filterType === 'normal' ? 'eg: abc/get' : 'eg: abc.*', style: {
                    flex: '1',
                    width: '100%',
                    display: 'inline-block',
                    marginTop: 10,
                }, defaultValue: match, onChange: e => handleMatchChange(e, id) })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "button-group" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { size: "small", defaultChecked: switchOn, onChange: val => handleSingleSwitchChange(val, id), style: {
                    width: '28px',
                    flex: 'none',
                    marginRight: '8px',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { danger: true, type: "primary", shape: "circle", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["default"], null), size: "small", onClick: e => handleClickRemove(e, id), style: { width: '24px', flex: 'none' } }))));
    const renderInterceptedRequests = (match) => {
        if (!interceptedRequests[match]) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "intercepted-requests" }, "Intercepted Networks:"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "intercepted" }, interceptedRequests[match].map(({ url, num }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_15__["default"], { placement: "top", title: url, key: url },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { count: num, style: {
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
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { checked: switchOn, onChange: handleSwitchChange }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Compact, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], { allowClear: true, onChange: (e) => {
                            setNewTabName(e.target.value);
                        }, placeholder: "Add new tab", onPressEnter: (e) => {
                            handleClickAdd(newTabName || generateRandomString(5));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { type: "primary", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["default"], null), onClick: () => handleClickAdd(newTabName || generateRandomString(5)) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { type: "primary", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__.FaFileExport, { style: {
                                marginBottom: -1
                            } }), onClick: () => handleExportRules() }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: './popup.html', target: '_blank' }, "open popup"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_17__["default"], Object.assign({}, uploadProps),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { type: "primary", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__.FaFileImport, { style: {
                                    marginBottom: -1
                                } }) })))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'center',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], { style: { marginRight: 10 }, placeholder: "Search by name", onPressEnter: handleSearch }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], { style: { marginRight: 10 }, placeholder: "Search by url", onPressEnter: handleUrlSearch }),
                showRefreshTip && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                        color: '#1890ff',
                        lineHeight: '16px',
                        marginTop: '16px',
                    } }, "Please Refresh your page after changing rules."))))));
    if (isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { onClick: () => {
            window.open('./mainpanel.html', '_blank');
        } }, "open popup"));
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
/******/ 			"popup": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRDtXQUN0RCxzQ0FBc0MsaUVBQWlFO1dBQ3ZHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NIQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDVkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3BvcHVwLnRzeCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgU3dpdGNoLCBDb2xsYXBzZSwgSW5wdXQsIFNlbGVjdCwgQnV0dG9uLCBCYWRnZSwgVG9vbHRpcCwgU3BhY2UsIFRhYnMsIG1lc3NhZ2UsIFVwbG9hZCwgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBGYUZpbGVFeHBvcnQsIEZhRmlsZUltcG9ydCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuY29uc3QgeyBQYW5lbCB9ID0gQ29sbGFwc2U7XG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuaW1wb3J0IFJlcGxhY2VyIGZyb20gJy4vY29tcG9uZW50cy9SZXBsYWNlcic7XG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5jb25zdCBidWlsZFVVSUQgPSAoKSA9PiB7XG4gICAgY29uc3QgZHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xuICAgICAgICBjb25zdCByID0gKGR0ICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICAgICAgcmV0dXJuIChjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XG4gICAgfSk7XG59O1xuY29uc3QgZ2VuZXJhdGVVbmlxdWVJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMik7XG59O1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpbnRlcmNlcHRlZFJlcXVlc3RzLCBzZXRJbnRlcmNlcHRlZFJlcXVlc3RzXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbc2hvd0FsbFJ1bGVzLCBzZXRTaG93QWxsUnVsZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwb3NpdGlvbkNsYXNzLCBzZXRQb3NpdGlvbkNsYXNzXSA9IHVzZVN0YXRlKCdzdXNwZW5kJyk7XG4gICAgY29uc3QgW2N1c3RvbUZ1bmN0aW9uLCBzZXRDdXN0b21GdW5jdGlvbl0gPSB1c2VTdGF0ZSh7IHBhbmVsUG9zaXRpb246IDAgfSk7XG4gICAgY29uc3QgW3Nob3dSZWZyZXNoVGlwLCBzZXRTaG93UmVmcmVzaFRpcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlYXJjaE5hbWUsIHNldFNlYXJjaE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtuZXdUYWJOYW1lLCBzZXROZXdUYWJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VhcmNoVXJsLCBzZXRTZWFyY2hVcmxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IGZvcmNlVXBkYXRlVGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbLCBmb3JjZVVwZGF0ZV0gPSB1c2VSZWR1Y2VyKHggPT4geCArIDEsIDApO1xuICAgIGNvbnN0IFthY3RpdmVLZXksIHNldEFjdGl2ZUtleV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtzd2l0Y2hPbiwgc2V0U3dpdGNoT25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtydWxlcywgc2V0UnVsZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtkYXRhTGlzdCwgc2V0RGF0YUxpc3RdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydhamF4SW50ZXJjZXB0b3Jfc3dpdGNoT24nLCAnYWpheEludGVyY2VwdG9yX3J1bGVzJywgJ2N1c3RvbUZ1bmN0aW9uJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHNldFN3aXRjaE9uKHJlc3VsdC5hamF4SW50ZXJjZXB0b3Jfc3dpdGNoT24gfHwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHJ1bGUgaWYgbm8gcnVsZXMgZXhpc3RcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmFqYXhJbnRlcmNlcHRvcl9ydWxlcyB8fCByZXN1bHQuYWpheEludGVyY2VwdG9yX3J1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRSdWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZ2VuZXJhdGVVbmlxdWVJZCgpLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogJycsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGVmYXVsdCBSdWxlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoT246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtleTogYnVpbGRVVUlEKCksXG4gICAgICAgICAgICAgICAgICAgIHRhYklkOiAnRGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0UnVsZXMgPSBbZGVmYXVsdFJ1bGVdO1xuICAgICAgICAgICAgICAgIHNldFJ1bGVzKGRlZmF1bHRSdWxlcyk7XG4gICAgICAgICAgICAgICAgc2V0KCdhamF4SW50ZXJjZXB0b3JfcnVsZXMnLCBkZWZhdWx0UnVsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UnVsZXMocmVzdWx0LmFqYXhJbnRlcmNlcHRvcl9ydWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRDdXN0b21GdW5jdGlvbihyZXN1bHQuY3VzdG9tRnVuY3Rpb24gfHwgeyBwYW5lbFBvc2l0aW9uOiAwIH0pO1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldHVwTWVzc2FnZUxpc3RlbmVyKCk7XG4gICAgICAgIG5vdGlmeUJhY2tncm91bmRTY3JpcHRMb2FkZWQoKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZ3JvdXBSdWxlc0J5VGFiID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cGVkUnVsZXMgPSBydWxlcy5yZWR1Y2UoKGFjYywgcnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFiID0gcnVsZS50YWJJZCB8fCAnRGVmYXVsdCc7XG4gICAgICAgICAgICBpZiAoIWFjY1t0YWJdKSB7XG4gICAgICAgICAgICAgICAgYWNjW3RhYl0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY1t0YWJdLnB1c2gocnVsZSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhncm91cGVkUnVsZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZ3JvdXBlZFJ1bGVzWydEZWZhdWx0J10gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhTGlzdChncm91cGVkUnVsZXMpO1xuICAgICAgICAvLyBPbmx5IHNldCB0aGUgYWN0aXZlS2V5IGlmIGl0J3Mgbm90IGFscmVhZHkgc2V0XG4gICAgICAgIGlmICghYWN0aXZlS2V5KSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFRhYklkID0gT2JqZWN0LmtleXMoZ3JvdXBlZFJ1bGVzKVswXTtcbiAgICAgICAgICAgIHNldEFjdGl2ZUtleShmaXJzdFRhYklkKTtcbiAgICAgICAgfVxuICAgIH0sIFtydWxlcywgYWN0aXZlS2V5XSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ3JvdXBSdWxlc0J5VGFiKCk7XG4gICAgfSwgW3J1bGVzLCBncm91cFJ1bGVzQnlUYWJdKTtcbiAgICBjb25zdCBzZXR1cE1lc3NhZ2VMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGhhbmRsZUluY29taW5nTWVzc2FnZSk7XG4gICAgfTtcbiAgICBjb25zdCB1cGxvYWRQcm9wcyA9IHtcbiAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICBhY3Rpb246ICcjJyxcbiAgICAgICAgYWNjZXB0OiAnLmpzb24nLFxuICAgICAgICBiZWZvcmVVcGxvYWQoZmlsZSkge1xuICAgICAgICAgICAgYWxlcnQoJ2JlZm9yZVVwbG9hZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgICAgICAgICAvLyBnZXQganNvbiBkYXRhYmFzZVxuICAgICAgICAgICAgY29uc3QganNvbkRhdGFiYXNlID0gZmlsZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb25EYXRhYmFzZSk7XG4gICAgICAgICAgICAvLyByZXBsYWNlIHJ1bGVzXG4gICAgICAgICAgICBzZXRSdWxlcyhqc29uRGF0YWJhc2UpO1xuICAgICAgICAgICAgLy8gc2V0IHRvIHN0b3JhZ2VcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywganNvbkRhdGFiYXNlKTtcbiAgICAgICAgICAgIC8vIGdyb3VwIHJ1bGVzIGJ5IHRhYlxuICAgICAgICAgICAgZ3JvdXBSdWxlc0J5VGFiKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlKGluZm8pIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUluY29taW5nTWVzc2FnZSA9IHVzZUNhbGxiYWNrKCh7IHR5cGUsIHRvLCB1cmwsIG1hdGNoLCBjb250ZW50U2NyaXB0TG9hZGVkID0gZmFsc2UsIHNob3dGcmVzaFRpcCA9IGZhbHNlLCB9KSA9PiB7XG4gICAgICAgIGlmICh0eXBlID09PSAnYWpheEludGVyY2VwdG9yJyAmJiB0byA9PT0gJ2lmcmFtZScpIHtcbiAgICAgICAgICAgIGlmIChjb250ZW50U2NyaXB0TG9hZGVkIHx8IHNob3dGcmVzaFRpcCkge1xuICAgICAgICAgICAgICAgIHNldFNob3dSZWZyZXNoVGlwKHNob3dGcmVzaFRpcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SW50ZXJjZXB0ZWRSZXF1ZXN0cyhwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSZXF1ZXN0cyA9IE9iamVjdC5hc3NpZ24oe30sIHByZXYpO1xuICAgICAgICAgICAgICAgIGlmICghbmV3UmVxdWVzdHNbbWF0Y2hdKVxuICAgICAgICAgICAgICAgICAgICBuZXdSZXF1ZXN0c1ttYXRjaF0gPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdHMgPSBuZXdSZXF1ZXN0c1ttYXRjaF0uc29tZShvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLnVybCA9PT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoubnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UmVxdWVzdHNbbWF0Y2hdLnB1c2goeyB1cmwsIG51bTogMSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1JlcXVlc3RzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3Qgbm90aWZ5QmFja2dyb3VuZFNjcmlwdExvYWRlZCA9ICgpID0+IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoY2hyb21lLnJ1bnRpbWUuaWQsIHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4SW50ZXJjZXB0b3InLFxuICAgICAgICAgICAgdG86ICdiYWNrZ3JvdW5kJyxcbiAgICAgICAgICAgIGlmcmFtZVNjcmlwdExvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBzZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGNocm9tZS5ydW50aW1lLmlkLCB7XG4gICAgICAgICAgICB0eXBlOiAnYWpheEludGVyY2VwdG9yJyxcbiAgICAgICAgICAgIHRvOiAnYmFja2dyb3VuZCcsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIChfYSA9IGNocm9tZS5zdG9yYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubG9jYWwuc2V0KHsgW2tleV06IHZhbHVlIH0pO1xuICAgIH07XG4gICAgY29uc3QgZm9yY2VVcGRhdGVEZWJvdWNlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZm9yY2VVcGRhdGVUaW1lb3V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChmb3JjZVVwZGF0ZVRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yY2VVcGRhdGVUaW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU2luZ2xlU3dpdGNoQ2hhbmdlID0gKHN3aXRjaE9uLCBydWxlSWQpID0+IHtcbiAgICAgICAgc2V0UnVsZXMocHJldlJ1bGVzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1J1bGVzID0gcHJldlJ1bGVzLm1hcChydWxlID0+IHJ1bGUuaWQgPT09IHJ1bGVJZCA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcnVsZSksIHsgc3dpdGNoT24gfSkgOiBydWxlKTtcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgbmV3UnVsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUxpbWl0TWV0aG9kQ2hhbmdlID0gKHZhbCwgcnVsZUlkKSA9PiB7XG4gICAgICAgIHNldFJ1bGVzKHByZXZSdWxlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdSdWxlcyA9IHByZXZSdWxlcy5tYXAocnVsZSA9PiBydWxlLmlkID09PSBydWxlSWQgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJ1bGUpLCB7IGxpbWl0TWV0aG9kOiB2YWwgfSkgOiBydWxlKTtcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgbmV3UnVsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUV4cG9ydFJ1bGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBydWxlc0ZvckV4cG9ydCA9IHJ1bGVzLm1hcChydWxlID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJ1bGUpLCB7IG92ZXJyaWRlVHh0OiB0eXBlb2YgcnVsZS5vdmVycmlkZVR4dCA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKHJ1bGUub3ZlcnJpZGVUeHQpIDogcnVsZS5vdmVycmlkZVR4dCB9KSkpO1xuICAgICAgICBjb25zdCBkYXRhU3RyID0gSlNPTi5zdHJpbmdpZnkocnVsZXNGb3JFeHBvcnQsIG51bGwsIDIpO1xuICAgICAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04LCR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFTdHIpfWA7XG4gICAgICAgIGNvbnN0IGV4cG9ydEZpbGVEZWZhdWx0TmFtZSA9ICdhamF4X2ludGVyY2VwdG9yX3J1bGVzLmpzb24nO1xuICAgICAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgZGF0YVVyaSk7XG4gICAgICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBleHBvcnRGaWxlRGVmYXVsdE5hbWUpO1xuICAgICAgICBsaW5rRWxlbWVudC5jbGljaygpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlSW1wb3J0UnVsZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVJbXBvcnRSdWxlcycpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlRmlsdGVyVHlwZUNoYW5nZSA9ICh2YWwsIHJ1bGVJZCkgPT4ge1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBwcmV2UnVsZXMubWFwKHJ1bGUgPT4gcnVsZS5pZCA9PT0gcnVsZUlkID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBydWxlKSwgeyBmaWx0ZXJUeXBlOiB2YWwgfSkgOiBydWxlKTtcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgbmV3UnVsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU1hdGNoQ2hhbmdlID0gKGUsIHJ1bGVJZCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJyk7IC8vIFJlbW92ZSB0cmFpbGluZyBuZXdsaW5lXG4gICAgICAgIHNldFJ1bGVzKHByZXZSdWxlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdSdWxlcyA9IHByZXZSdWxlcy5tYXAocnVsZSA9PiBydWxlLmlkID09PSBydWxlSWQgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJ1bGUpLCB7IG1hdGNoOiB2YWx1ZSB9KSA6IHJ1bGUpO1xuICAgICAgICAgICAgc2V0KCdhamF4SW50ZXJjZXB0b3JfcnVsZXMnLCBuZXdSdWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UnVsZXM7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTGFiZWxDaGFuZ2UgPSAoZSwgcnVsZUlkKSA9PiB7XG4gICAgICAgIHNldFJ1bGVzKHByZXZSdWxlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdSdWxlcyA9IHByZXZSdWxlcy5tYXAocnVsZSA9PiBydWxlLmlkID09PSBydWxlSWQgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJ1bGUpLCB7IGxhYmVsOiBlLnRhcmdldC52YWx1ZSB9KSA6IHJ1bGUpO1xuICAgICAgICAgICAgc2V0KCdhamF4SW50ZXJjZXB0b3JfcnVsZXMnLCBuZXdSdWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UnVsZXM7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tBZGQgPSAodGFiSWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UnVsZSA9IHtcbiAgICAgICAgICAgIGlkOiBnZW5lcmF0ZVVuaXF1ZUlkKCksXG4gICAgICAgICAgICBtYXRjaDogJycsXG4gICAgICAgICAgICBsYWJlbDogYHVybCR7cnVsZXMubGVuZ3RoICsgMX1gLFxuICAgICAgICAgICAgc3dpdGNoT246IHRydWUsXG4gICAgICAgICAgICBrZXk6IGJ1aWxkVVVJRCgpLFxuICAgICAgICAgICAgdGFiSWQ6IHRhYklkLFxuICAgICAgICB9O1xuICAgICAgICBzZXRBY3RpdmVLZXkodGFiSWQpO1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBbLi4ucHJldlJ1bGVzLCBuZXdSdWxlXTtcbiAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgbmV3UnVsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUJhdGNoUmVtb3ZlID0gKHJ1bGVJZHMsIG5lZWRHcm91cFJ1bGVzQnlUYWIgPSBmYWxzZSkgPT4ge1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBwcmV2UnVsZXMuZmlsdGVyKHJ1bGUgPT4gIXJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZCkpO1xuICAgICAgICAgICAgc2V0KCdhamF4SW50ZXJjZXB0b3JfcnVsZXMnLCBuZXdSdWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UnVsZXM7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRJbnRlcmNlcHRlZFJlcXVlc3RzKHByZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UmVxdWVzdHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2KTtcbiAgICAgICAgICAgIHJ1bGVJZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzLmZpbmQociA9PiByLmlkID09PSBpZCk7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1JlcXVlc3RzW3J1bGUubWF0Y2hdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbmV3UmVxdWVzdHNbcnVsZS5sYWJlbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UmVxdWVzdHM7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmVlZEdyb3VwUnVsZXNCeVRhYikge1xuICAgICAgICAgICAgZ3JvdXBSdWxlc0J5VGFiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXREYXRhTGlzdChwcmV2RGF0YUxpc3QgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFMaXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldkRhdGFMaXN0KTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhuZXdEYXRhTGlzdCkuZm9yRWFjaCh0YWJJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFMaXN0W3RhYklkXSA9IG5ld0RhdGFMaXN0W3RhYklkXS5maWx0ZXIocnVsZSA9PiAhcnVsZUlkcy5pbmNsdWRlcyhydWxlLmlkKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGFMaXN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrUmVtb3ZlID0gKGUsIHJ1bGVJZCkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFiSWQgPSBhY3RpdmVLZXk7XG4gICAgICAgIGhhbmRsZUJhdGNoUmVtb3ZlKFtydWxlSWRdKTtcbiAgICAgICAgc2V0RGF0YUxpc3QocHJldkRhdGFMaXN0ID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFMaXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldkRhdGFMaXN0KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFiSWQgJiYgKChfYSA9IG5ld0RhdGFMaXN0W2N1cnJlbnRUYWJJZF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5ld0RhdGFMaXN0W2N1cnJlbnRUYWJJZF07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nVGFicyA9IE9iamVjdC5rZXlzKG5ld0RhdGFMaXN0KTtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVLZXkocmVtYWluaW5nVGFicy5sZW5ndGggPiAwID8gcmVtYWluaW5nVGFic1swXSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3RGF0YUxpc3Q7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ29sbGFzZUNoYW5nZSA9ICgpID0+IHtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVN3aXRjaENoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgc2V0U3dpdGNoT24ocHJldiA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTd2l0Y2hPbiA9ICFwcmV2O1xuICAgICAgICAgICAgc2V0KCdhamF4SW50ZXJjZXB0b3Jfc3dpdGNoT24nLCBuZXdTd2l0Y2hPbik7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3dpdGNoT247XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcbiAgICAgICAgc2V0U2VhcmNoTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVVcmxTZWFyY2ggPSAoZSkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hVcmwoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21TdHJpbmcgPSAobGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVUYWJFZGl0ID0gKHRhcmdldEtleSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdhZGQnKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYWJJZCA9IGdlbmVyYXRlUmFuZG9tU3RyaW5nKDUpO1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2tBZGQobmV3VGFiSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFiSWQgPSB0YXJnZXRLZXk7XG4gICAgICAgICAgICBsZXQgZGVsZXRpbmdSdWxlSWRzID0gZGF0YUxpc3RbdGFiSWRdLm1hcChydWxlID0+IHJ1bGUuaWQpO1xuICAgICAgICAgICAgaGFuZGxlQmF0Y2hSZW1vdmUoZGVsZXRpbmdSdWxlSWRzLCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RhYnMgPSBPYmplY3Qua2V5cyhkYXRhTGlzdCkuZmlsdGVyKGlkID0+IGlkICE9PSB0YWJJZCk7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIGFjdGl2ZUtleSB0byB0aGUgbGFzdCByZW1haW5pbmcgdGFiLCBvciB1bmRlZmluZWQgaWYgbm8gdGFicyBsZWZ0XG4gICAgICAgICAgICBzZXRBY3RpdmVLZXkocmVtYWluaW5nVGFicy5sZW5ndGggPiAwID8gcmVtYWluaW5nVGFic1tyZW1haW5pbmdUYWJzLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVuZGVyVGFicyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFRhYnMsIHsgYWN0aXZlS2V5OiBhY3RpdmVLZXksIHNpemU6ICdzbWFsbCcsIG9uQ2hhbmdlOiAoa2V5KSA9PiBzZXRBY3RpdmVLZXkoa2V5KSwgdHlwZTogXCJlZGl0YWJsZS1jYXJkXCIsIGl0ZW1zOiBPYmplY3QuZW50cmllcyhkYXRhTGlzdCkubWFwKChbdGFiSWQsIHJ1bGVzXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkUnVsZXMgPSBydWxlcy5maWx0ZXIocnVsZSA9PiBzZWFyY2hOYW1lID8gcnVsZS5sYWJlbC5pbmRleE9mKHNlYXJjaE5hbWUpID4gLTEgOiB0cnVlKS5maWx0ZXIocnVsZSA9PiBzZWFyY2hVcmwgPyBydWxlLm1hdGNoLmluZGV4T2Yoc2VhcmNoVXJsKSA+IC0xIDogdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TG9jYWwgPSAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2xsYXBzZSwgeyBjbGFzc05hbWU6ICdjb2xsYXBzZScsIG9uQ2hhbmdlOiBoYW5kbGVDb2xsYXNlQ2hhbmdlIH0sIHJlbmRlclJ1bGVzKGZpbHRlcmVkUnVsZXMpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgc2l6ZTogXCJsYXJnZVwiLCBjbGFzc05hbWU6ICdidG4tYWRkJywgdHlwZTogXCJwcmltYXJ5XCIsIG9uQ2xpY2s6ICgpID0+IGhhbmRsZUNsaWNrQWRkKHRhYklkKSwgZGlzYWJsZWQ6ICFzd2l0Y2hPbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQbHVzT3V0bGluZWQsIG51bGwpKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogdGFiSWQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYWRnZSwgeyBjbGFzc05hbWU6IFwic2l0ZS1iYWRnZS1jb3VudC0xMDlcIiwgY291bnQ6IGZpbHRlcmVkUnVsZXMubGVuZ3RoLCBzaXplOiAnc21hbGwnLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjNTJjNDFhJyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHUwMEEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJZCkpLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbmV3TG9jYWwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLCBvbkVkaXQ6IGhhbmRsZVRhYkVkaXQgfSkpO1xuICAgIH07XG4gICAgY29uc3QgcmVuZGVyUnVsZXMgPSAocnVsZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIHJ1bGVzLm1hcCgocnVsZSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFuZWwsIHsga2V5OiBydWxlLmtleSwgaGVhZGVyOiByZW5kZXJQYW5lbEhlYWRlcihydWxlKSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZXBsYWNlciwgeyB1cGRhdGVBZGRCdG5Ub3BfaW50ZXJ2YWw6ICgpID0+IHsgfSwgcnVsZUlkOiBydWxlLmlkLCBzZXQ6IHNldCwgcnVsZTogcnVsZSwgcnVsZXM6IHJ1bGVzIH0pLFxuICAgICAgICAgICAgcmVuZGVySW50ZXJjZXB0ZWRSZXF1ZXN0cyhydWxlLm1hdGNoKSkpKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlclBhbmVsSGVhZGVyID0gKHsgaWQsIGZpbHRlclR5cGUgPSAnbm9ybWFsJywgbGltaXRNZXRob2QgPSAnQUxMJywgbWF0Y2gsIGxhYmVsLCBzd2l0Y2hPbiA9IHRydWUsIGtleSB9KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYW5lbC1oZWFkZXJcIiwgb25DbGljazogZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZS5Db21wYWN0LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgc2l6ZTogXCJzbWFsbFwiLCBwbGFjZWhvbGRlcjogXCJuYW1lXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICB9LCBkZWZhdWx0VmFsdWU6IGxhYmVsLCBvbkNoYW5nZTogZSA9PiBoYW5kbGVMYWJlbENoYW5nZShlLCBpZCkgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgc2l6ZTogXCJzbWFsbFwiLCBkZWZhdWx0VmFsdWU6IGxpbWl0TWV0aG9kLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnMS41IDEgYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IHZhbCA9PiBoYW5kbGVMaW1pdE1ldGhvZENoYW5nZSh2YWwsIGlkKSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogXCJBTExcIiB9LCBcIkFMTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6IFwiR0VUXCIgfSwgXCJHRVRcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7IHZhbHVlOiBcIlBPU1RcIiB9LCBcIlBPU1RcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7IHZhbHVlOiBcIlBVVFwiIH0sIFwiUFVUXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogXCJIRUFEXCIgfSwgXCJIRUFEXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogXCJERUxFVEVcIiB9LCBcIkRFTEVURVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6IFwiT1BUSU9OU1wiIH0sIFwiT1BUSU9OU1wiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgc2l6ZTogXCJzbWFsbFwiLCBkZWZhdWx0VmFsdWU6IGZpbHRlclR5cGUsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzFweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6ICcxLjUgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogdmFsID0+IGhhbmRsZUZpbHRlclR5cGVDaGFuZ2UodmFsLCBpZCkgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6IFwibm9ybWFsXCIgfSwgXCJub3JtYWxcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7IHZhbHVlOiBcInJlZ2V4XCIgfSwgXCJyZWdleFwiKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dC5UZXh0QXJlYSwgeyByb3dzOiAyLCBzaXplOiBcInNtYWxsXCIsIHBsYWNlaG9sZGVyOiBmaWx0ZXJUeXBlID09PSAnbm9ybWFsJyA/ICdlZzogYWJjL2dldCcgOiAnZWc6IGFiYy4qJywgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogJzEnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICB9LCBkZWZhdWx0VmFsdWU6IG1hdGNoLCBvbkNoYW5nZTogZSA9PiBoYW5kbGVNYXRjaENoYW5nZShlLCBpZCkgfSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbi1ncm91cFwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaCwgeyBzaXplOiBcInNtYWxsXCIsIGRlZmF1bHRDaGVja2VkOiBzd2l0Y2hPbiwgb25DaGFuZ2U6IHZhbCA9PiBoYW5kbGVTaW5nbGVTd2l0Y2hDaGFuZ2UodmFsLCBpZCksIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjhweCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxuICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBkYW5nZXI6IHRydWUsIHR5cGU6IFwicHJpbWFyeVwiLCBzaGFwZTogXCJjaXJjbGVcIiwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChEZWxldGVPdXRsaW5lZCwgbnVsbCksIHNpemU6IFwic21hbGxcIiwgb25DbGljazogZSA9PiBoYW5kbGVDbGlja1JlbW92ZShlLCBpZCksIHN0eWxlOiB7IHdpZHRoOiAnMjRweCcsIGZsZXg6ICdub25lJyB9IH0pKSkpO1xuICAgIGNvbnN0IHJlbmRlckludGVyY2VwdGVkUmVxdWVzdHMgPSAobWF0Y2gpID0+IHtcbiAgICAgICAgaWYgKCFpbnRlcmNlcHRlZFJlcXVlc3RzW21hdGNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbnRlcmNlcHRlZC1yZXF1ZXN0c1wiIH0sIFwiSW50ZXJjZXB0ZWQgTmV0d29ya3M6XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbnRlcmNlcHRlZFwiIH0sIGludGVyY2VwdGVkUmVxdWVzdHNbbWF0Y2hdLm1hcCgoeyB1cmwsIG51bSB9KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCB7IHBsYWNlbWVudDogXCJ0b3BcIiwgdGl0bGU6IHVybCwga2V5OiB1cmwgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhZGdlLCB7IGNvdW50OiBudW0sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzk5OScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgMCAxcHggI2Q5ZDlkOSBpbnNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJ1cmxcIiB9LCB1cmwpKSkpKSkpO1xuICAgIH07XG4gICAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHpJbmRleDogMTAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAsXG4gICAgICAgIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMCxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2gsIHsgY2hlY2tlZDogc3dpdGNoT24sIG9uQ2hhbmdlOiBoYW5kbGVTd2l0Y2hDaGFuZ2UgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZS5Db21wYWN0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IGFsbG93Q2xlYXI6IHRydWUsIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5ld1RhYk5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcGxhY2Vob2xkZXI6IFwiQWRkIG5ldyB0YWJcIiwgb25QcmVzc0VudGVyOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrQWRkKG5ld1RhYk5hbWUgfHwgZ2VuZXJhdGVSYW5kb21TdHJpbmcoNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdHlwZTogXCJwcmltYXJ5XCIsIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGx1c091dGxpbmVkLCBudWxsKSwgb25DbGljazogKCkgPT4gaGFuZGxlQ2xpY2tBZGQobmV3VGFiTmFtZSB8fCBnZW5lcmF0ZVJhbmRvbVN0cmluZyg1KSkgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHR5cGU6IFwicHJpbWFyeVwiLCBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhRmlsZUV4cG9ydCwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgb25DbGljazogKCkgPT4gaGFuZGxlRXhwb3J0UnVsZXMoKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiAnLi9wb3B1cC5odG1sJywgdGFyZ2V0OiAnX2JsYW5rJyB9LCBcIm9wZW4gcG9wdXBcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXBsb2FkLCBPYmplY3QuYXNzaWduKHt9LCB1cGxvYWRQcm9wcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInByaW1hcnlcIiwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChGYUZpbGVJbXBvcnQsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHN0eWxlOiB7IG1hcmdpblJpZ2h0OiAxMCB9LCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggYnkgbmFtZVwiLCBvblByZXNzRW50ZXI6IGhhbmRsZVNlYXJjaCB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHN0eWxlOiB7IG1hcmdpblJpZ2h0OiAxMCB9LCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggYnkgdXJsXCIsIG9uUHJlc3NFbnRlcjogaGFuZGxlVXJsU2VhcmNoIH0pLFxuICAgICAgICAgICAgICAgIHNob3dSZWZyZXNoVGlwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzE4OTBmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgfSB9LCBcIlBsZWFzZSBSZWZyZXNoIHlvdXIgcGFnZSBhZnRlciBjaGFuZ2luZyBydWxlcy5cIikpKSkpKTtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwiTG9hZGluZy4uLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbignLi9tYWlucGFuZWwuaHRtbCcsICdfYmxhbmsnKTtcbiAgICAgICAgfSB9LCBcIm9wZW4gcG9wdXBcIikpO1xufTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG5yb290LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LlN0cmljdE1vZGUsIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbi8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuLy8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoKSA9PiAoUHJvbWlzZS5yZXNvbHZlKCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicG9wdXBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX2V4dGVuc2lvbl90eXBlc2NyaXB0X3N0YXJ0ZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX2V4dGVuc2lvbl90eXBlc2NyaXB0X3N0YXJ0ZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BvcHVwLnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9