(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const translations = {
    // Navigation
    "nav.atmosphere": {
        DE: "Atmosphäre",
        VI: "Không gian"
    },
    "nav.menu": {
        DE: "Karte",
        VI: "Thực đơn"
    },
    "nav.gallery": {
        DE: "Galerie",
        VI: "Thư viện"
    },
    "nav.book": {
        DE: "Tisch reservieren",
        VI: "Đặt Bàn"
    },
    "nav.call": {
        DE: "Anrufen",
        VI: "Gọi điện"
    },
    "nav.reserve": {
        DE: "Tisch reservieren",
        VI: "Đặt bàn ngay"
    },
    "nav.faq": {
        DE: "Fragen",
        VI: "Hỏi đáp"
    },
    // Hero
    "hero.est": {
        DE: "Est. 2025 • Dortmund",
        VI: "Thành lập 2025 • Dortmund"
    },
    "hero.title1": {
        DE: "Die Seele",
        VI: "Chạm đến"
    },
    "hero.title2": {
        DE: "berühren.",
        VI: "tâm hồn."
    },
    "hero.desc": {
        DE: "Wo authentische Aromen auf warmes Holz und gedimmtes Licht treffen. Eine Reise durch Vietnam, mitten im Herzen der Stadt.",
        VI: "Nơi hương vị đích thực gặp gỡ ánh sáng dịu nhẹ và không gian ấm áp. Một hành trình về Việt Nam ngay giữa lòng thành phố."
    },
    // Vibe
    "vibe.label": {
        DE: "Mood & Vibe",
        VI: "Cảm xúc & Không gian"
    },
    "vibe.title": {
        DE: "Ein Abend im",
        VI: "Một buổi tối tại"
    },
    "vibe.desc": {
        DE: "Das Klirren von Gläsern, der Duft von geröstetem Sesam und das warme Leuchten unserer handgefertigten Laternen. Lassen Sie den Alltag an der Tür zurück.",
        VI: "Tiếng ly chạm nhau, hương mè rang thơm lừng và ánh sáng ấm áp từ những chiếc đèn lồng thủ công. Hãy để những lo toan lại phía sau cánh cửa."
    },
    "vibe.film": {
        DE: "Film abspielen",
        VI: "Xem phim"
    },
    // Atmosphere
    "atm.label": {
        DE: "Signature",
        VI: "Đặc trưng"
    },
    "atm.title": {
        DE: "Was uns besonders macht",
        VI: "Điều làm nên sự khác biệt"
    },
    "atm.card1.title": {
        DE: "Warmes Holz",
        VI: "Gỗ Ấm"
    },
    "atm.card1.desc": {
        DE: "Ein Interieur, das umarmt. Natürliche Materialien.",
        VI: "Nội thất ôm trọn cảm xúc. Vật liệu tự nhiên."
    },
    "atm.card2.title": {
        DE: "Sushi Handwerk",
        VI: "Nghệ thuật Sushi"
    },
    "atm.card2.desc": {
        DE: "Präzision in jedem Schnitt. Tradition & Kreativität.",
        VI: "Chính xác trong từng đường cắt. Truyền thống & Sáng tạo."
    },
    "atm.card3.title": {
        DE: "Plant Based",
        VI: "Thực vật"
    },
    "atm.card3.desc": {
        DE: "Nachhaltig genießen. Über 40% der Karte rein pflanzlich.",
        VI: "Thưởng thức bền vững. Hơn 40% thực đơn là thuần chay."
    },
    // Quote
    "quote.text": {
        DE: "Genießen ist eine",
        VI: "Thưởng thức là một"
    },
    "quote.art": {
        DE: "Kunst",
        VI: "Nghệ thuật"
    },
    "quote.sub": {
        DE: "Essen ist ein Bedürfnis,",
        VI: "Ăn uống là nhu cầu,"
    },
    "quote.desc": {
        DE: "Im Saigon Soul zelebrieren wir die Langsamkeit. Jeder Teller erzählt eine Geschichte von fernen Märkten.",
        VI: "Tại Saigon Soul, chúng tôi tôn vinh sự chậm rãi. Mỗi chiếc đĩa kể một câu chuyện về những khu chợ xa xôi."
    },
    "quote.btn": {
        DE: "Unsere Philosophie",
        VI: "Triết lý của chúng tôi"
    },
    // Menu
    "menu.label": {
        DE: "Kulinarik",
        VI: "Ẩm thực"
    },
    "menu.title": {
        DE: "Auszug der Karte",
        VI: "Thực đơn chọn lọc"
    },
    "menu.btn.all": {
        DE: "Ganze Karte ansehen",
        VI: "Xem toàn bộ thực đơn"
    },
    // Gallery
    "gallery.title": {
        DE: "Impressionen",
        VI: "Hình ảnh"
    },
    "gallery.desc": {
        DE: "Einblicke in unser Restaurant. Jeder Winkel wurde mit Bedacht gestaltet.",
        VI: "Cái nhìn thoáng qua về nhà hàng. Mọi góc cạnh đều được thiết kế cẩn thận."
    },
    "gallery.more": {
        DE: "Mehr anzeigen",
        VI: "Xem thêm"
    },
    "gallery.less": {
        DE: "Weniger anzeigen",
        VI: "Thu gọn"
    },
    // Team
    "team.label": {
        DE: "Unser Team",
        VI: "Đội ngũ"
    },
    "team.title": {
        DE: "Meister der Aromen",
        VI: "Những bậc thầy hương vị"
    },
    "team.desc": {
        DE: "Hinter jedem Gericht stehen Menschen mit Leidenschaft.",
        VI: "Đằng sau mỗi món ăn là những con người đầy đam mê."
    },
    // Social
    "social.title": {
        DE: "Folgen Sie uns",
        VI: "Theo dõi chúng tôi"
    },
    "social.handle": {
        DE: "@saigonsoul.do",
        VI: "@saigonsoul.do"
    },
    // FAQ
    "faq.title": {
        DE: "Häufige Fragen",
        VI: "Câu hỏi thường gặp"
    },
    "faq.q1": {
        DE: "Bieten Sie vegetarische Optionen an?",
        VI: "Nhà hàng có món chay không?"
    },
    "faq.a1": {
        DE: "Ja, ca. 40% unserer Karte ist vegan oder vegetarisch.",
        VI: "Có, khoảng 40% thực đơn của chúng tôi là món chay hoặc thuần chay."
    },
    "faq.q2": {
        DE: "Sind Hunde erlaubt?",
        VI: "Có được mang theo chó không?"
    },
    "faq.a2": {
        DE: "Ja, gut erzogene Hunde sind willkommen.",
        VI: "Có, những chú chó ngoan ngoãn luôn được chào đón."
    },
    "faq.q3": {
        DE: "Gibt es Parkmöglichkeiten?",
        VI: "Có chỗ đậu xe không?"
    },
    "faq.a3": {
        DE: "Es gibt öffentliche Parkplätze direkt an der Kleppingstraße.",
        VI: "Có bãi đậu xe công cộng ngay trên đường Kleppingstraße."
    },
    // Location
    "loc.label": {
        DE: "Standort",
        VI: "Địa điểm"
    },
    "loc.title": {
        DE: "Hier finden Sie uns",
        VI: "Tìm chúng tôi tại"
    },
    "loc.route": {
        DE: "Route planen",
        VI: "Chỉ đường"
    },
    "loc.call": {
        DE: "Jetzt anrufen",
        VI: "Gọi ngay"
    },
    "loc.hours": {
        DE: "Öffnungszeiten",
        VI: "Giờ mở cửa"
    },
    // Reservation
    "res.label": {
        DE: "Kontakt",
        VI: "Liên hệ"
    },
    "res.title": {
        DE: "Ihr Tisch wartet.",
        VI: "Bàn của bạn đang chờ."
    },
    "res.desc": {
        DE: "Für Gruppen ab 8 Personen senden Sie uns bitte eine E-Mail.",
        VI: "Đối với nhóm trên 8 người, vui lòng gửi email cho chúng tôi."
    },
    "res.date": {
        DE: "Datum",
        VI: "Ngày"
    },
    "res.time": {
        DE: "Uhrzeit",
        VI: "Giờ"
    },
    "res.guests": {
        DE: "Gäste",
        VI: "Số khách"
    },
    "res.contact": {
        DE: "Kontaktdaten",
        VI: "Thông tin liên hệ"
    },
    "res.btn": {
        DE: "Verbindlich anfragen",
        VI: "Gửi yêu cầu đặt bàn"
    },
    // Footer
    "footer.newsletter.title": {
        DE: "Inner Circle",
        VI: "Kết nối"
    },
    "footer.newsletter.desc": {
        DE: "Erhalten Sie Einladungen zu exklusiven Events & Tastings.",
        VI: "Nhận lời mời tham dự các sự kiện và buổi nếm thử độc quyền."
    },
    "footer.newsletter.placeholder": {
        DE: "Ihre E-Mail Adresse",
        VI: "Địa chỉ email của bạn"
    },
    "footer.newsletter.btn": {
        DE: "Anmelden",
        VI: "Đăng ký"
    },
    "footer.imprint": {
        DE: "Impressum",
        VI: "Pháp lý"
    },
    "footer.privacy": {
        DE: "Datenschutz",
        VI: "Bảo mật"
    },
    "footer.cookie": {
        DE: "Cookie Einstellungen",
        VI: "Cài đặt Cookie"
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('DE');
    const t = (key)=>{
        return translations[key]?.[language] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/LanguageContext.tsx",
        lineNumber: 126,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "myNOV5FM3OAA7nU96Pd0ulFcrbw=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_cc8cc8ca._.js.map