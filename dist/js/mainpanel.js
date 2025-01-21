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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/collapse/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/switch/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/badge/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/spin/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/upload/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/table/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/EditOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ExportOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/PlusOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CopyOutlined.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var json_edit_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! json-edit-react */ "./node_modules/json-edit-react/build/index.esm.js");
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
    const tableBoxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [tableBoxHeight, setTableBoxHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [showDetail, setShowDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [currentEditRule, setCurrentEditRule] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (tableBoxRef.current) {
            setTableBoxHeight(window.innerHeight - tableBoxRef.current.offsetTop - 34);
        }
    }, [tableBoxRef.current]);
    const readRulesFromStorage = () => {
        chrome.storage.local.get(['ajaxInterceptor_rules'], (result) => {
            setRules(result.ajaxInterceptor_rules || []);
        });
    };
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
                // set('ajaxInterceptor_rules', defaultRules);
            }
            else {
                setRules(result.ajaxInterceptor_rules);
            }
            setCustomFunction(result.customFunction || { panelPosition: 0 });
            setIsLoading(false);
        });
        window.addEventListener('resize', () => {
            if (tableBoxRef.current) {
                setTableBoxHeight(window.innerHeight - tableBoxRef.current.offsetTop - 34);
            }
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
        showUploadList: false,
        beforeUpload(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                var _a;
                try {
                    const jsonDatabase = JSON.parse((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
                    console.log('jsonDatabase', jsonDatabase);
                    if (jsonDatabase.length > 0) {
                        jsonDatabase.forEach(rule => {
                            try {
                                rule.overrideTxt = JSON.stringify(rule.overrideTxt);
                            }
                            catch (error) {
                                rule.overrideTxt = '{}';
                            }
                        });
                        setRules(jsonDatabase);
                        set('ajaxInterceptor_rules', jsonDatabase);
                        groupRulesByTab();
                        antd__WEBPACK_IMPORTED_MODULE_6__["default"].success(`${file.name} uploaded successfully`);
                    }
                    else {
                        antd__WEBPACK_IMPORTED_MODULE_6__["default"].error('Failed to parse JSON file');
                    }
                }
                catch (error) {
                    antd__WEBPACK_IMPORTED_MODULE_6__["default"].error('Failed to parse JSON file');
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
        console.log('handleSingleSwitchChange', switchOn, ruleId);
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
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        console.log('searchName', searchName);
        console.log('searchUrl', searchUrl);
        if (searchName || searchUrl) {
            setRules(prevRules => {
                const newRules = prevRules.filter(rule => {
                    return rule.label.includes(searchName) && rule.match.includes(searchUrl);
                });
                console.log('newRules', newRules);
                return newRules;
            });
        }
        else {
            readRulesFromStorage();
        }
    }, [searchName, searchUrl]);
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
            return newRules;
        });
    };
    const handleLabelChange = (e, ruleId) => {
        setRules(prevRules => {
            const newRules = prevRules.map(rule => rule.id === ruleId ? Object.assign(Object.assign({}, rule), { label: e.target.value }) : rule);
            // set('ajaxInterceptor_rules', newRules);
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
            // set('ajaxInterceptor_rules', newRules);
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
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"].Compact, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { size: "small", placeholder: "name", style: {
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
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"].TextArea, { rows: 2, size: "small", placeholder: filterType === 'normal' ? 'eg: abc/get' : 'eg: abc.*', style: {
                    flex: '1',
                    width: '100%',
                    display: 'inline-block',
                    marginTop: 10,
                }, defaultValue: match, onChange: e => handleMatchChange(e, id) })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "button-group" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { size: "small", defaultChecked: switchOn, onChange: val => handleSingleSwitchChange(val, id), style: {
                    width: '28px',
                    flex: 'none',
                    marginRight: '8px',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { danger: true, type: "primary", shape: "circle", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["default"], null), size: "small", onClick: e => handleClickRemove(e, id), style: { width: '24px', flex: 'none' } }))));
    const renderInterceptedRequests = (match) => {
        if (!interceptedRequests[match]) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "intercepted-requests" }, "Intercepted Networks:"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "intercepted" }, interceptedRequests[match].map(({ url, num }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], { placement: "top", title: url, key: url },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { count: num, style: {
                        backgroundColor: '#fff',
                        color: '#999',
                        boxShadow: '0 0 0 1px #d9d9d9 inset',
                        marginTop: '-3px',
                        marginRight: '4px',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "url" }, url)))))));
    };
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
            render: (text, record) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], { title: text },
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
            render: (text, record) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { checked: record.switchOn, onChange: (val) => handleSingleSwitchChange(val, record.id) }))
        },
        {
            title: "match",
            dataIndex: "match",
            key: "match",
            ellipsis: true,
            render: (text, record) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], { placement: "topLeft", title: text },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "link", size: "small", onClick: () => handleViewDetail(text, record) }, text)))
        },
        {
            title: "Action",
            width: '100px',
            render: (text, record) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "link", onClick: () => handleViewDetail(text, record), icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "text", danger: true, onClick: () => handleClickRemove(text, record.id), icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["default"], null) })))
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
            let newRules = [...rules];
            if (index !== -1) {
                newRules[index] = currentEditRule;
            }
            else {
                // new rule
                newRules.push(currentEditRule);
            }
            setRules(newRules);
            set('ajaxInterceptor_rules', newRules);
            setShowDetail(false);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_15__["default"], { spinning: isLoading },
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
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { checkedChildren: "On", unCheckedChildren: "Off", checked: switchOn, onChange: handleSwitchChange })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"].Search, { style: {
                            width: 200,
                        }, placeholder: "Search by name", onPressEnter: handleSearch }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"].Search, { style: {
                            width: 200,
                        }, placeholder: "Search by url", onPressEnter: handleUrlSearch }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { style: {
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                        }, color: "primary", variant: "filled", onClick: () => handleExportRules(), icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_16__["default"], null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_17__["default"], Object.assign({}, uploadProps),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { style: {
                                width: '32px',
                                height: '32px',
                                borderRadius: '4px',
                            }, color: "primary", variant: "filled", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_18__.FaFileImport, { style: {
                                    marginBottom: -1
                                } }) })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "primary", onClick: handleAddNewRule },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_19__["default"], null),
                        "Add Rule"))),
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
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_20__["default"], { bordered: true, pagination: {
                        pageSize: 20,
                    }, style: {
                        height: tableBoxHeight,
                        opacity: switchOn ? 1 : 0.65,
                    }, scroll: { y: tableBoxHeight - 78 }, size: 'small', columns: tableColumns, dataSource: rules })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_21__["default"], { maskClosable: false, width: 1200, title: "Detail", open: showDetail, onClose: () => {
                    setShowDetail(false);
                }, extra: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { onClick: () => setShowDetail(false) }, "Cancel"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "primary", onClick: handleUpdateRules }, "OK")) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                        display: 'flex',
                        gap: '10px',
                        height: '100%',
                        overflowY: 'scroll',
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                            width: 500
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_22__["default"].Title, { level: 4, style: {
                                marginTop: 0
                            } }, "Id:"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"].Compact, { style: {
                                width: '100%',
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { style: {
                                    marginBottom: '10px',
                                }, disabled: true, value: (currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.id) || '' }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "primary", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_23__["default"], null), onClick: () => {
                                    navigator.clipboard.writeText((currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.id) || '');
                                    antd__WEBPACK_IMPORTED_MODULE_6__["default"].success('Copied to clipboard');
                                } })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_22__["default"].Title, { level: 4 }, "Label:"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { style: {
                                marginBottom: '10px',
                            }, value: (currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.label) || '', onChange: (e) => {
                                if (currentEditRule) {
                                    setCurrentEditRule(Object.assign(Object.assign({}, currentEditRule), { label: e.target.value }));
                                }
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_22__["default"].Title, { level: 4 }, "Match:"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"].TextArea, { rows: 10, style: {
                                marginBottom: '10px',
                            }, value: (currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.match) || '', onChange: (e) => {
                                if (currentEditRule) {
                                    setCurrentEditRule(Object.assign(Object.assign({}, currentEditRule), { match: e.target.value }));
                                }
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(json_edit_react__WEBPACK_IMPORTED_MODULE_24__.JsonEditor, { rootName: '', className: 'json-editor', data: JSON.parse((currentEditRule === null || currentEditRule === void 0 ? void 0 : currentEditRule.overrideTxt) || '{}'), setData: handleRulesChange }))))));
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9tYWlucGFuZWwudHN4Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBTd2l0Y2gsIENvbGxhcHNlLCBJbnB1dCwgU2VsZWN0LCBCdXR0b24sIEJhZGdlLCBUb29sdGlwLCBTcGFjZSwgbWVzc2FnZSwgVXBsb2FkLCBUYWJsZSwgRHJhd2VyLCBUeXBvZ3JhcGh5LCBTcGluLCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRWRpdE91dGxpbmVkLCBQbHVzT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkLCBFeHBvcnRPdXRsaW5lZCwgQ29weU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgRmFGaWxlSW1wb3J0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBKc29uRWRpdG9yIH0gZnJvbSAnanNvbi1lZGl0LXJlYWN0JztcbmNvbnN0IHsgUGFuZWwgfSA9IENvbGxhcHNlO1xuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcbmltcG9ydCBSZXBsYWNlciBmcm9tICcuL2NvbXBvbmVudHMvUmVwbGFjZXInO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuY29uc3QgYnVpbGRVVUlEID0gKCkgPT4ge1xuICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICAgICAgY29uc3QgciA9IChkdCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgIHJldHVybiAoYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4OCkudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xufTtcbmNvbnN0IGdlbmVyYXRlVW5pcXVlSWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xufTtcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBbaW50ZXJjZXB0ZWRSZXF1ZXN0cywgc2V0SW50ZXJjZXB0ZWRSZXF1ZXN0c10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW3Nob3dBbGxSdWxlcywgc2V0U2hvd0FsbFJ1bGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcG9zaXRpb25DbGFzcywgc2V0UG9zaXRpb25DbGFzc10gPSB1c2VTdGF0ZSgnc3VzcGVuZCcpO1xuICAgIGNvbnN0IFtjdXN0b21GdW5jdGlvbiwgc2V0Q3VzdG9tRnVuY3Rpb25dID0gdXNlU3RhdGUoeyBwYW5lbFBvc2l0aW9uOiAwIH0pO1xuICAgIGNvbnN0IFtzaG93UmVmcmVzaFRpcCwgc2V0U2hvd1JlZnJlc2hUaXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzZWFyY2hOYW1lLCBzZXRTZWFyY2hOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbmV3VGFiTmFtZSwgc2V0TmV3VGFiTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlYXJjaFVybCwgc2V0U2VhcmNoVXJsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBmb3JjZVVwZGF0ZVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgWywgZm9yY2VVcGRhdGVdID0gdXNlUmVkdWNlcih4ID0+IHggKyAxLCAwKTtcbiAgICBjb25zdCBbYWN0aXZlS2V5LCBzZXRBY3RpdmVLZXldID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCBbc3dpdGNoT24sIHNldFN3aXRjaE9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcnVsZXMsIHNldFJ1bGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZGF0YUxpc3QsIHNldERhdGFMaXN0XSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCB0YWJsZUJveFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RhYmxlQm94SGVpZ2h0LCBzZXRUYWJsZUJveEhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2N1cnJlbnRFZGl0UnVsZSwgc2V0Q3VycmVudEVkaXRSdWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0YWJsZUJveFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRUYWJsZUJveEhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0YWJsZUJveFJlZi5jdXJyZW50Lm9mZnNldFRvcCAtIDM0KTtcbiAgICAgICAgfVxuICAgIH0sIFt0YWJsZUJveFJlZi5jdXJyZW50XSk7XG4gICAgY29uc3QgcmVhZFJ1bGVzRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2FqYXhJbnRlcmNlcHRvcl9ydWxlcyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBzZXRSdWxlcyhyZXN1bHQuYWpheEludGVyY2VwdG9yX3J1bGVzIHx8IFtdKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydhamF4SW50ZXJjZXB0b3Jfc3dpdGNoT24nLCAnYWpheEludGVyY2VwdG9yX3J1bGVzJywgJ2N1c3RvbUZ1bmN0aW9uJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHNldFN3aXRjaE9uKHJlc3VsdC5hamF4SW50ZXJjZXB0b3Jfc3dpdGNoT24gfHwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHJ1bGUgaWYgbm8gcnVsZXMgZXhpc3RcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmFqYXhJbnRlcmNlcHRvcl9ydWxlcyB8fCByZXN1bHQuYWpheEludGVyY2VwdG9yX3J1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRSdWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZ2VuZXJhdGVVbmlxdWVJZCgpLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogJycsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGVmYXVsdCBSdWxlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoT246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtleTogYnVpbGRVVUlEKCksXG4gICAgICAgICAgICAgICAgICAgIHRhYklkOiAnRGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0UnVsZXMgPSBbZGVmYXVsdFJ1bGVdO1xuICAgICAgICAgICAgICAgIHNldFJ1bGVzKGRlZmF1bHRSdWxlcyk7XG4gICAgICAgICAgICAgICAgLy8gc2V0KCdhamF4SW50ZXJjZXB0b3JfcnVsZXMnLCBkZWZhdWx0UnVsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UnVsZXMocmVzdWx0LmFqYXhJbnRlcmNlcHRvcl9ydWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRDdXN0b21GdW5jdGlvbihyZXN1bHQuY3VzdG9tRnVuY3Rpb24gfHwgeyBwYW5lbFBvc2l0aW9uOiAwIH0pO1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFibGVCb3hSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHNldFRhYmxlQm94SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCAtIHRhYmxlQm94UmVmLmN1cnJlbnQub2Zmc2V0VG9wIC0gMzQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0dXBNZXNzYWdlTGlzdGVuZXIoKTtcbiAgICAgICAgbm90aWZ5QmFja2dyb3VuZFNjcmlwdExvYWRlZCgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBncm91cFJ1bGVzQnlUYWIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwZWRSdWxlcyA9IHJ1bGVzLnJlZHVjZSgoYWNjLCBydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWIgPSBydWxlLnRhYklkIHx8ICdEZWZhdWx0JztcbiAgICAgICAgICAgIGlmICghYWNjW3RhYl0pIHtcbiAgICAgICAgICAgICAgICBhY2NbdGFiXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW3RhYl0ucHVzaChydWxlKTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGdyb3VwZWRSdWxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBncm91cGVkUnVsZXNbJ0RlZmF1bHQnXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGFMaXN0KGdyb3VwZWRSdWxlcyk7XG4gICAgICAgIC8vIE9ubHkgc2V0IHRoZSBhY3RpdmVLZXkgaWYgaXQncyBub3QgYWxyZWFkeSBzZXRcbiAgICAgICAgaWYgKCFhY3RpdmVLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGFiSWQgPSBPYmplY3Qua2V5cyhncm91cGVkUnVsZXMpWzBdO1xuICAgICAgICAgICAgc2V0QWN0aXZlS2V5KGZpcnN0VGFiSWQpO1xuICAgICAgICB9XG4gICAgfSwgW3J1bGVzLCBhY3RpdmVLZXldKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBncm91cFJ1bGVzQnlUYWIoKTtcbiAgICB9LCBbcnVsZXMsIGdyb3VwUnVsZXNCeVRhYl0pO1xuICAgIGNvbnN0IHNldHVwTWVzc2FnZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoaGFuZGxlSW5jb21pbmdNZXNzYWdlKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwbG9hZFByb3BzID0ge1xuICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgIGFjdGlvbjogJyMnLFxuICAgICAgICBhY2NlcHQ6ICcuanNvbicsXG4gICAgICAgIHNob3dVcGxvYWRMaXN0OiBmYWxzZSxcbiAgICAgICAgYmVmb3JlVXBsb2FkKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkRhdGFiYXNlID0gSlNPTi5wYXJzZSgoX2EgPSBlLnRhcmdldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqc29uRGF0YWJhc2UnLCBqc29uRGF0YWJhc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoanNvbkRhdGFiYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb25EYXRhYmFzZS5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUub3ZlcnJpZGVUeHQgPSBKU09OLnN0cmluZ2lmeShydWxlLm92ZXJyaWRlVHh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUub3ZlcnJpZGVUeHQgPSAne30nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UnVsZXMoanNvbkRhdGFiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywganNvbkRhdGFiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUnVsZXNCeVRhYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKGAke2ZpbGUubmFtZX0gdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKCdGYWlsZWQgdG8gcGFyc2UgSlNPTiBmaWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSBKU09OIGZpbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGRlZmF1bHQgdXBsb2FkIGJlaGF2aW9yXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlKGluZm8pIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVJbmNvbWluZ01lc3NhZ2UgPSB1c2VDYWxsYmFjaygoeyB0eXBlLCB0bywgdXJsLCBtYXRjaCwgY29udGVudFNjcmlwdExvYWRlZCA9IGZhbHNlLCBzaG93RnJlc2hUaXAgPSBmYWxzZSwgfSkgPT4ge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2FqYXhJbnRlcmNlcHRvcicgJiYgdG8gPT09ICdpZnJhbWUnKSB7XG4gICAgICAgICAgICBpZiAoY29udGVudFNjcmlwdExvYWRlZCB8fCBzaG93RnJlc2hUaXApIHtcbiAgICAgICAgICAgICAgICBzZXRTaG93UmVmcmVzaFRpcChzaG93RnJlc2hUaXApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEludGVyY2VwdGVkUmVxdWVzdHMocHJldiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmVxdWVzdHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2KTtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1JlcXVlc3RzW21hdGNoXSlcbiAgICAgICAgICAgICAgICAgICAgbmV3UmVxdWVzdHNbbWF0Y2hdID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RzID0gbmV3UmVxdWVzdHNbbWF0Y2hdLnNvbWUob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai51cmwgPT09IHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLm51bSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1JlcXVlc3RzW21hdGNoXS5wdXNoKHsgdXJsLCBudW06IDEgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdSZXF1ZXN0cztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG5vdGlmeUJhY2tncm91bmRTY3JpcHRMb2FkZWQgPSAoKSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGNocm9tZS5ydW50aW1lLmlkLCB7XG4gICAgICAgICAgICB0eXBlOiAnYWpheEludGVyY2VwdG9yJyxcbiAgICAgICAgICAgIHRvOiAnYmFja2dyb3VuZCcsXG4gICAgICAgICAgICBpZnJhbWVTY3JpcHRMb2FkZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgc2V0ID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIC8vIEZpcnN0IGVuc3VyZSB3ZSBoYXZlIHRoZSBsYXRlc3Qgc3RhdGUgYmVmb3JlIHNlbmRpbmcgbWVzc2FnZXNcbiAgICAgICAgKF9hID0gY2hyb21lLnN0b3JhZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sb2NhbC5zZXQoeyBba2V5XTogdmFsdWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFtzZXRdIGtleTogJHtrZXl9LCB2YWx1ZTogJHt2YWx1ZX1gKTtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGNocm9tZS5ydW50aW1lLmlkLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FqYXhJbnRlcmNlcHRvcicsXG4gICAgICAgICAgICAgICAgdG86ICdiYWNrZ3JvdW5kJyxcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBmb3JjZVVwZGF0ZURlYm91Y2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChmb3JjZVVwZGF0ZVRpbWVvdXRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGZvcmNlVXBkYXRlVGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBmb3JjZVVwZGF0ZVRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTaW5nbGVTd2l0Y2hDaGFuZ2UgPSAoc3dpdGNoT24sIHJ1bGVJZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlU2luZ2xlU3dpdGNoQ2hhbmdlJywgc3dpdGNoT24sIHJ1bGVJZCk7XG4gICAgICAgIHNldFJ1bGVzKHByZXZSdWxlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdSdWxlcyA9IHByZXZSdWxlcy5tYXAocnVsZSA9PiBydWxlLmlkID09PSBydWxlSWQgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJ1bGUpLCB7IHN3aXRjaE9uIH0pIDogcnVsZSk7XG4gICAgICAgICAgICBzZXQoJ2FqYXhJbnRlcmNlcHRvcl9ydWxlcycsIG5ld1J1bGVzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdSdWxlcztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVMaW1pdE1ldGhvZENoYW5nZSA9ICh2YWwsIHJ1bGVJZCkgPT4ge1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBwcmV2UnVsZXMubWFwKHJ1bGUgPT4gcnVsZS5pZCA9PT0gcnVsZUlkID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBydWxlKSwgeyBsaW1pdE1ldGhvZDogdmFsIH0pIDogcnVsZSk7XG4gICAgICAgICAgICBzZXQoJ2FqYXhJbnRlcmNlcHRvcl9ydWxlcycsIG5ld1J1bGVzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdSdWxlcztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVFeHBvcnRSdWxlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZXNGb3JFeHBvcnQgPSBydWxlcy5tYXAocnVsZSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBydWxlKSwgeyBvdmVycmlkZVR4dDogdHlwZW9mIHJ1bGUub3ZlcnJpZGVUeHQgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocnVsZS5vdmVycmlkZVR4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlLm92ZXJyaWRlVHh0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgIDogcnVsZS5vdmVycmlkZVR4dCB9KSkpO1xuICAgICAgICBjb25zdCBkYXRhU3RyID0gSlNPTi5zdHJpbmdpZnkocnVsZXNGb3JFeHBvcnQsIG51bGwsIDIpO1xuICAgICAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04LCR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFTdHIpfWA7XG4gICAgICAgIGNvbnN0IGV4cG9ydEZpbGVEZWZhdWx0TmFtZSA9ICdhamF4X2ludGVyY2VwdG9yX3J1bGVzLmpzb24nO1xuICAgICAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgZGF0YVVyaSk7XG4gICAgICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBleHBvcnRGaWxlRGVmYXVsdE5hbWUpO1xuICAgICAgICBsaW5rRWxlbWVudC5jbGljaygpO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlYXJjaE5hbWUnLCBzZWFyY2hOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlYXJjaFVybCcsIHNlYXJjaFVybCk7XG4gICAgICAgIGlmIChzZWFyY2hOYW1lIHx8IHNlYXJjaFVybCkge1xuICAgICAgICAgICAgc2V0UnVsZXMocHJldlJ1bGVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSdWxlcyA9IHByZXZSdWxlcy5maWx0ZXIocnVsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlLmxhYmVsLmluY2x1ZGVzKHNlYXJjaE5hbWUpICYmIHJ1bGUubWF0Y2guaW5jbHVkZXMoc2VhcmNoVXJsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3UnVsZXMnLCBuZXdSdWxlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWFkUnVsZXNGcm9tU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfSwgW3NlYXJjaE5hbWUsIHNlYXJjaFVybF0pO1xuICAgIGNvbnN0IGhhbmRsZUZpbHRlclR5cGVDaGFuZ2UgPSAodmFsLCBydWxlSWQpID0+IHtcbiAgICAgICAgc2V0UnVsZXMocHJldlJ1bGVzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1J1bGVzID0gcHJldlJ1bGVzLm1hcChydWxlID0+IHJ1bGUuaWQgPT09IHJ1bGVJZCA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcnVsZSksIHsgZmlsdGVyVHlwZTogdmFsIH0pIDogcnVsZSk7XG4gICAgICAgICAgICBzZXQoJ2FqYXhJbnRlcmNlcHRvcl9ydWxlcycsIG5ld1J1bGVzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdSdWxlcztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVNYXRjaENoYW5nZSA9IChlLCBydWxlSWQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXG4kLywgJycpO1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBwcmV2UnVsZXMubWFwKHJ1bGUgPT4gcnVsZS5pZCA9PT0gcnVsZUlkID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBydWxlKSwgeyBtYXRjaDogdmFsdWUgfSkgOiBPYmplY3QuYXNzaWduKHt9LCBydWxlKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW2hhbmRsZU1hdGNoQ2hhbmdlXSBuZXdSdWxlczpgLCBuZXdSdWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UnVsZXM7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTGFiZWxDaGFuZ2UgPSAoZSwgcnVsZUlkKSA9PiB7XG4gICAgICAgIHNldFJ1bGVzKHByZXZSdWxlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdSdWxlcyA9IHByZXZSdWxlcy5tYXAocnVsZSA9PiBydWxlLmlkID09PSBydWxlSWQgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJ1bGUpLCB7IGxhYmVsOiBlLnRhcmdldC52YWx1ZSB9KSA6IHJ1bGUpO1xuICAgICAgICAgICAgLy8gc2V0KCdhamF4SW50ZXJjZXB0b3JfcnVsZXMnLCBuZXdSdWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UnVsZXM7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQWRkTmV3UnVsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UnVsZSA9IHtcbiAgICAgICAgICAgIGlkOiBnZW5lcmF0ZVVuaXF1ZUlkKCksXG4gICAgICAgICAgICBtYXRjaDogJycsXG4gICAgICAgICAgICBsYWJlbDogYHVybCR7cnVsZXMubGVuZ3RoICsgMX1gLFxuICAgICAgICAgICAgc3dpdGNoT246IHRydWUsXG4gICAgICAgICAgICBrZXk6IGJ1aWxkVVVJRCgpLFxuICAgICAgICAgICAgdGFiSWQ6ICdEZWZhdWx0JyxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0Q3VycmVudEVkaXRSdWxlKG5ld1J1bGUpO1xuICAgICAgICBzZXRTaG93RGV0YWlsKHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tBZGQgPSAodGFiSWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UnVsZSA9IHtcbiAgICAgICAgICAgIGlkOiBnZW5lcmF0ZVVuaXF1ZUlkKCksXG4gICAgICAgICAgICBtYXRjaDogJycsXG4gICAgICAgICAgICBsYWJlbDogYHVybCR7cnVsZXMubGVuZ3RoICsgMX1gLFxuICAgICAgICAgICAgc3dpdGNoT246IHRydWUsXG4gICAgICAgICAgICBrZXk6IGJ1aWxkVVVJRCgpLFxuICAgICAgICAgICAgdGFiSWQ6IHRhYklkLFxuICAgICAgICB9O1xuICAgICAgICBzZXRBY3RpdmVLZXkodGFiSWQpO1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBbLi4ucHJldlJ1bGVzLCBuZXdSdWxlXTtcbiAgICAgICAgICAgIC8vIHNldCgnYWpheEludGVyY2VwdG9yX3J1bGVzJywgbmV3UnVsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1J1bGVzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUJhdGNoUmVtb3ZlID0gKHJ1bGVJZHMsIG5lZWRHcm91cFJ1bGVzQnlUYWIgPSBmYWxzZSkgPT4ge1xuICAgICAgICBzZXRSdWxlcyhwcmV2UnVsZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UnVsZXMgPSBwcmV2UnVsZXMuZmlsdGVyKHJ1bGUgPT4gIXJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZCkpO1xuICAgICAgICAgICAgc2V0KCdhamF4SW50ZXJjZXB0b3JfcnVsZXMnLCBuZXdSdWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UnVsZXM7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRJbnRlcmNlcHRlZFJlcXVlc3RzKHByZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UmVxdWVzdHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2KTtcbiAgICAgICAgICAgIHJ1bGVJZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzLmZpbmQociA9PiByLmlkID09PSBpZCk7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1JlcXVlc3RzW3J1bGUubWF0Y2hdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbmV3UmVxdWVzdHNbcnVsZS5sYWJlbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UmVxdWVzdHM7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmVlZEdyb3VwUnVsZXNCeVRhYikge1xuICAgICAgICAgICAgZ3JvdXBSdWxlc0J5VGFiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXREYXRhTGlzdChwcmV2RGF0YUxpc3QgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFMaXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldkRhdGFMaXN0KTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhuZXdEYXRhTGlzdCkuZm9yRWFjaCh0YWJJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFMaXN0W3RhYklkXSA9IG5ld0RhdGFMaXN0W3RhYklkXS5maWx0ZXIocnVsZSA9PiAhcnVsZUlkcy5pbmNsdWRlcyhydWxlLmlkKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGFMaXN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrUmVtb3ZlID0gKGUsIHJ1bGVJZCkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFiSWQgPSBhY3RpdmVLZXk7XG4gICAgICAgIGhhbmRsZUJhdGNoUmVtb3ZlKFtydWxlSWRdKTtcbiAgICAgICAgc2V0RGF0YUxpc3QocHJldkRhdGFMaXN0ID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFMaXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldkRhdGFMaXN0KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFiSWQgJiYgKChfYSA9IG5ld0RhdGFMaXN0W2N1cnJlbnRUYWJJZF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5ld0RhdGFMaXN0W2N1cnJlbnRUYWJJZF07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nVGFicyA9IE9iamVjdC5rZXlzKG5ld0RhdGFMaXN0KTtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVLZXkocmVtYWluaW5nVGFicy5sZW5ndGggPiAwID8gcmVtYWluaW5nVGFic1swXSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3RGF0YUxpc3Q7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ29sbGFzZUNoYW5nZSA9ICgpID0+IHtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVN3aXRjaENoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgc2V0U3dpdGNoT24ocHJldiA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTd2l0Y2hPbiA9ICFwcmV2O1xuICAgICAgICAgICAgc2V0KCdhamF4SW50ZXJjZXB0b3Jfc3dpdGNoT24nLCBuZXdTd2l0Y2hPbik7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3dpdGNoT247XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcbiAgICAgICAgc2V0U2VhcmNoTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVVcmxTZWFyY2ggPSAoZSkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hVcmwoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21TdHJpbmcgPSAobGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVUYWJFZGl0ID0gKHRhcmdldEtleSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdhZGQnKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYWJJZCA9IGdlbmVyYXRlUmFuZG9tU3RyaW5nKDUpO1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2tBZGQobmV3VGFiSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFiSWQgPSB0YXJnZXRLZXk7XG4gICAgICAgICAgICBsZXQgZGVsZXRpbmdSdWxlSWRzID0gZGF0YUxpc3RbdGFiSWRdLm1hcChydWxlID0+IHJ1bGUuaWQpO1xuICAgICAgICAgICAgaGFuZGxlQmF0Y2hSZW1vdmUoZGVsZXRpbmdSdWxlSWRzLCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RhYnMgPSBPYmplY3Qua2V5cyhkYXRhTGlzdCkuZmlsdGVyKGlkID0+IGlkICE9PSB0YWJJZCk7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIGFjdGl2ZUtleSB0byB0aGUgbGFzdCByZW1haW5pbmcgdGFiLCBvciB1bmRlZmluZWQgaWYgbm8gdGFicyBsZWZ0XG4gICAgICAgICAgICBzZXRBY3RpdmVLZXkocmVtYWluaW5nVGFicy5sZW5ndGggPiAwID8gcmVtYWluaW5nVGFic1tyZW1haW5pbmdUYWJzLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVuZGVyUnVsZXMgPSAocnVsZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIHJ1bGVzLm1hcCgocnVsZSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFuZWwsIHsga2V5OiBydWxlLmtleSwgaGVhZGVyOiByZW5kZXJQYW5lbEhlYWRlcihydWxlKSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZXBsYWNlciwgeyB1cGRhdGVBZGRCdG5Ub3BfaW50ZXJ2YWw6ICgpID0+IHsgfSwgcnVsZUlkOiBydWxlLmlkLCBzZXQ6IHNldCwgcnVsZTogcnVsZSwgcnVsZXM6IHJ1bGVzIH0pLFxuICAgICAgICAgICAgcmVuZGVySW50ZXJjZXB0ZWRSZXF1ZXN0cyhydWxlLm1hdGNoKSkpKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlclBhbmVsSGVhZGVyID0gKHsgaWQsIGZpbHRlclR5cGUgPSAnbm9ybWFsJywgbGltaXRNZXRob2QgPSAnQUxMJywgbWF0Y2gsIGxhYmVsLCBzd2l0Y2hPbiA9IHRydWUsIGtleSB9KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYW5lbC1oZWFkZXJcIiwgb25DbGljazogZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZS5Db21wYWN0LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgc2l6ZTogXCJzbWFsbFwiLCBwbGFjZWhvbGRlcjogXCJuYW1lXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICB9LCBkZWZhdWx0VmFsdWU6IGxhYmVsLCBvbkNoYW5nZTogZSA9PiBoYW5kbGVMYWJlbENoYW5nZShlLCBpZCkgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgc2l6ZTogXCJzbWFsbFwiLCBkZWZhdWx0VmFsdWU6IGxpbWl0TWV0aG9kLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnMS41IDEgYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IHZhbCA9PiBoYW5kbGVMaW1pdE1ldGhvZENoYW5nZSh2YWwsIGlkKSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogXCJBTExcIiB9LCBcIkFMTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6IFwiR0VUXCIgfSwgXCJHRVRcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7IHZhbHVlOiBcIlBPU1RcIiB9LCBcIlBPU1RcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7IHZhbHVlOiBcIlBVVFwiIH0sIFwiUFVUXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogXCJIRUFEXCIgfSwgXCJIRUFEXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogXCJERUxFVEVcIiB9LCBcIkRFTEVURVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6IFwiT1BUSU9OU1wiIH0sIFwiT1BUSU9OU1wiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgc2l6ZTogXCJzbWFsbFwiLCBkZWZhdWx0VmFsdWU6IGZpbHRlclR5cGUsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzFweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6ICcxLjUgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogdmFsID0+IGhhbmRsZUZpbHRlclR5cGVDaGFuZ2UodmFsLCBpZCkgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6IFwibm9ybWFsXCIgfSwgXCJub3JtYWxcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7IHZhbHVlOiBcInJlZ2V4XCIgfSwgXCJyZWdleFwiKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dC5UZXh0QXJlYSwgeyByb3dzOiAyLCBzaXplOiBcInNtYWxsXCIsIHBsYWNlaG9sZGVyOiBmaWx0ZXJUeXBlID09PSAnbm9ybWFsJyA/ICdlZzogYWJjL2dldCcgOiAnZWc6IGFiYy4qJywgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogJzEnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICB9LCBkZWZhdWx0VmFsdWU6IG1hdGNoLCBvbkNoYW5nZTogZSA9PiBoYW5kbGVNYXRjaENoYW5nZShlLCBpZCkgfSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbi1ncm91cFwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaCwgeyBzaXplOiBcInNtYWxsXCIsIGRlZmF1bHRDaGVja2VkOiBzd2l0Y2hPbiwgb25DaGFuZ2U6IHZhbCA9PiBoYW5kbGVTaW5nbGVTd2l0Y2hDaGFuZ2UodmFsLCBpZCksIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjhweCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxuICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBkYW5nZXI6IHRydWUsIHR5cGU6IFwicHJpbWFyeVwiLCBzaGFwZTogXCJjaXJjbGVcIiwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChEZWxldGVPdXRsaW5lZCwgbnVsbCksIHNpemU6IFwic21hbGxcIiwgb25DbGljazogZSA9PiBoYW5kbGVDbGlja1JlbW92ZShlLCBpZCksIHN0eWxlOiB7IHdpZHRoOiAnMjRweCcsIGZsZXg6ICdub25lJyB9IH0pKSkpO1xuICAgIGNvbnN0IHJlbmRlckludGVyY2VwdGVkUmVxdWVzdHMgPSAobWF0Y2gpID0+IHtcbiAgICAgICAgaWYgKCFpbnRlcmNlcHRlZFJlcXVlc3RzW21hdGNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbnRlcmNlcHRlZC1yZXF1ZXN0c1wiIH0sIFwiSW50ZXJjZXB0ZWQgTmV0d29ya3M6XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbnRlcmNlcHRlZFwiIH0sIGludGVyY2VwdGVkUmVxdWVzdHNbbWF0Y2hdLm1hcCgoeyB1cmwsIG51bSB9KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCB7IHBsYWNlbWVudDogXCJ0b3BcIiwgdGl0bGU6IHVybCwga2V5OiB1cmwgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhZGdlLCB7IGNvdW50OiBudW0sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzk5OScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgMCAxcHggI2Q5ZDlkOSBpbnNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJ1cmxcIiB9LCB1cmwpKSkpKSkpO1xuICAgIH07XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcIkxvYWRpbmcuLi5cIik7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVZpZXdEZXRhaWwgPSAodGV4dCwgcmVjb3JkKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRFZGl0UnVsZShyZWNvcmQpO1xuICAgICAgICBzZXRTaG93RGV0YWlsKHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgdGFibGVDb2x1bW5zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJpZFwiLFxuICAgICAgICAgICAgZGF0YUluZGV4OiBcImlkXCIsXG4gICAgICAgICAgICB3aWR0aDogJzE2MHB4JyxcbiAgICAgICAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgICAgICAga2V5OiBcImlkXCIsXG4gICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgdGl0bGU6IHRleHQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCB0ZXh0KSkpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk5hbWVcIixcbiAgICAgICAgICAgIHdpZHRoOiAnMTUwcHgnLFxuICAgICAgICAgICAgZGF0YUluZGV4OiBcImxhYmVsXCIsXG4gICAgICAgICAgICBrZXk6IFwibGFiZWxcIixcbiAgICAgICAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJFbmFibGVcIixcbiAgICAgICAgICAgIHdpZHRoOiAnMTIwcHgnLFxuICAgICAgICAgICAgZGF0YUluZGV4OiBcInN3aXRjaE9uXCIsXG4gICAgICAgICAgICBrZXk6IFwic3dpdGNoT25cIixcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoLCB7IGNoZWNrZWQ6IHJlY29yZC5zd2l0Y2hPbiwgb25DaGFuZ2U6ICh2YWwpID0+IGhhbmRsZVNpbmdsZVN3aXRjaENoYW5nZSh2YWwsIHJlY29yZC5pZCkgfSkpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIm1hdGNoXCIsXG4gICAgICAgICAgICBkYXRhSW5kZXg6IFwibWF0Y2hcIixcbiAgICAgICAgICAgIGtleTogXCJtYXRjaFwiLFxuICAgICAgICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgcGxhY2VtZW50OiBcInRvcExlZnRcIiwgdGl0bGU6IHRleHQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcImxpbmtcIiwgc2l6ZTogXCJzbWFsbFwiLCBvbkNsaWNrOiAoKSA9PiBoYW5kbGVWaWV3RGV0YWlsKHRleHQsIHJlY29yZCkgfSwgdGV4dCkpKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJBY3Rpb25cIixcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcImxpbmtcIiwgb25DbGljazogKCkgPT4gaGFuZGxlVmlld0RldGFpbCh0ZXh0LCByZWNvcmQpLCBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEVkaXRPdXRsaW5lZCwgbnVsbCkgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdHlwZTogXCJ0ZXh0XCIsIGRhbmdlcjogdHJ1ZSwgb25DbGljazogKCkgPT4gaGFuZGxlQ2xpY2tSZW1vdmUodGV4dCwgcmVjb3JkLmlkKSwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChEZWxldGVPdXRsaW5lZCwgbnVsbCkgfSkpKVxuICAgICAgICB9XG4gICAgXTtcbiAgICBjb25zdCBoYW5kbGVSdWxlc0NoYW5nZSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKDEpO1xuICAgICAgICBpZiAoY3VycmVudEVkaXRSdWxlKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RWRpdFJ1bGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50RWRpdFJ1bGUpLCB7IG92ZXJyaWRlVHh0OiBKU09OLnN0cmluZ2lmeShkYXRhKSB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZVJ1bGVzID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEVkaXRSdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHJ1bGVzLmZpbmRJbmRleChydWxlID0+IHJ1bGUuaWQgPT09IGN1cnJlbnRFZGl0UnVsZS5pZCk7XG4gICAgICAgICAgICBsZXQgbmV3UnVsZXMgPSBbLi4ucnVsZXNdO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIG5ld1J1bGVzW2luZGV4XSA9IGN1cnJlbnRFZGl0UnVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5ldyBydWxlXG4gICAgICAgICAgICAgICAgbmV3UnVsZXMucHVzaChjdXJyZW50RWRpdFJ1bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0UnVsZXMobmV3UnVsZXMpO1xuICAgICAgICAgICAgc2V0KCdhamF4SW50ZXJjZXB0b3JfcnVsZXMnLCBuZXdSdWxlcyk7XG4gICAgICAgICAgICBzZXRTaG93RGV0YWlsKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW4sIHsgc3Bpbm5pbmc6IGlzTG9hZGluZyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSknLFxuICAgICAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2gsIHsgY2hlY2tlZENoaWxkcmVuOiBcIk9uXCIsIHVuQ2hlY2tlZENoaWxkcmVuOiBcIk9mZlwiLCBjaGVja2VkOiBzd2l0Y2hPbiwgb25DaGFuZ2U6IGhhbmRsZVN3aXRjaENoYW5nZSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTAsXG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dC5TZWFyY2gsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGJ5IG5hbWVcIiwgb25QcmVzc0VudGVyOiBoYW5kbGVTZWFyY2ggfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQuU2VhcmNoLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBieSB1cmxcIiwgb25QcmVzc0VudGVyOiBoYW5kbGVVcmxTZWFyY2ggfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgY29sb3I6IFwicHJpbWFyeVwiLCB2YXJpYW50OiBcImZpbGxlZFwiLCBvbkNsaWNrOiAoKSA9PiBoYW5kbGVFeHBvcnRSdWxlcygpLCBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEV4cG9ydE91dGxpbmVkLCBudWxsKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChVcGxvYWQsIE9iamVjdC5hc3NpZ24oe30sIHVwbG9hZFByb3BzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNvbG9yOiBcInByaW1hcnlcIiwgdmFyaWFudDogXCJmaWxsZWRcIiwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChGYUZpbGVJbXBvcnQsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHR5cGU6IFwicHJpbWFyeVwiLCBvbkNsaWNrOiBoYW5kbGVBZGROZXdSdWxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBsdXNPdXRsaW5lZCwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFkZCBSdWxlXCIpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiB0YWJsZUJveFJlZiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGFibGVCb3hIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAhc3dpdGNoT24gJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB9IH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlLCB7IGJvcmRlcmVkOiB0cnVlLCBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgIH0sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhYmxlQm94SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogc3dpdGNoT24gPyAxIDogMC42NSxcbiAgICAgICAgICAgICAgICAgICAgfSwgc2Nyb2xsOiB7IHk6IHRhYmxlQm94SGVpZ2h0IC0gNzggfSwgc2l6ZTogJ3NtYWxsJywgY29sdW1uczogdGFibGVDb2x1bW5zLCBkYXRhU291cmNlOiBydWxlcyB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYXdlciwgeyBtYXNrQ2xvc2FibGU6IGZhbHNlLCB3aWR0aDogMTIwMCwgdGl0bGU6IFwiRGV0YWlsXCIsIG9wZW46IHNob3dEZXRhaWwsIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RldGFpbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgZXh0cmE6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2UsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG9uQ2xpY2s6ICgpID0+IHNldFNob3dEZXRhaWwoZmFsc2UpIH0sIFwiQ2FuY2VsXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInByaW1hcnlcIiwgb25DbGljazogaGFuZGxlVXBkYXRlUnVsZXMgfSwgXCJPS1wiKSkgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeS5UaXRsZSwgeyBsZXZlbDogNCwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCBcIklkOlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2UuQ29tcGFjdCwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGlzYWJsZWQ6IHRydWUsIHZhbHVlOiAoY3VycmVudEVkaXRSdWxlID09PSBudWxsIHx8IGN1cnJlbnRFZGl0UnVsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudEVkaXRSdWxlLmlkKSB8fCAnJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInByaW1hcnlcIiwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChDb3B5T3V0bGluZWQsIG51bGwpLCBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgoY3VycmVudEVkaXRSdWxlID09PSBudWxsIHx8IGN1cnJlbnRFZGl0UnVsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudEVkaXRSdWxlLmlkKSB8fCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0NvcGllZCB0byBjbGlwYm9hcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHkuVGl0bGUsIHsgbGV2ZWw6IDQgfSwgXCJMYWJlbDpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlOiAoY3VycmVudEVkaXRSdWxlID09PSBudWxsIHx8IGN1cnJlbnRFZGl0UnVsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudEVkaXRSdWxlLmxhYmVsKSB8fCAnJywgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWRpdFJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRFZGl0UnVsZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRFZGl0UnVsZSksIHsgbGFiZWw6IGUudGFyZ2V0LnZhbHVlIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHkuVGl0bGUsIHsgbGV2ZWw6IDQgfSwgXCJNYXRjaDpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LlRleHRBcmVhLCB7IHJvd3M6IDEwLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZTogKGN1cnJlbnRFZGl0UnVsZSA9PT0gbnVsbCB8fCBjdXJyZW50RWRpdFJ1bGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRFZGl0UnVsZS5tYXRjaCkgfHwgJycsIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVkaXRSdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50RWRpdFJ1bGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50RWRpdFJ1bGUpLCB7IG1hdGNoOiBlLnRhcmdldC52YWx1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChKc29uRWRpdG9yLCB7IHJvb3ROYW1lOiAnJywgY2xhc3NOYW1lOiAnanNvbi1lZGl0b3InLCBkYXRhOiBKU09OLnBhcnNlKChjdXJyZW50RWRpdFJ1bGUgPT09IG51bGwgfHwgY3VycmVudEVkaXRSdWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RWRpdFJ1bGUub3ZlcnJpZGVUeHQpIHx8ICd7fScpLCBzZXREYXRhOiBoYW5kbGVSdWxlc0NoYW5nZSB9KSkpKSkpO1xufTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG5yb290LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LlN0cmljdE1vZGUsIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbi8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuLy8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoKSA9PiAoUHJvbWlzZS5yZXNvbHZlKCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpbnBhbmVsXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Nocm9tZV9leHRlbnNpb25fdHlwZXNjcmlwdF9zdGFydGVyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Nocm9tZV9leHRlbnNpb25fdHlwZXNjcmlwdF9zdGFydGVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWlucGFuZWwudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=