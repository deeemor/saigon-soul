module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('DE');
    const t = (key)=>{
        return translations[key]?.[language] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
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
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e56d3def._.js.map