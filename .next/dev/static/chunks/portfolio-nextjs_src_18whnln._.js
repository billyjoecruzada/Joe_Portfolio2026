(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio-nextjs/src/components/BeforeAfter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BeforeAfter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BeforeAfterWidget({ item }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(75);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const updateFromX = (clientX)=>{
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (!rect.width) return;
        const pct = Math.max(0, Math.min(100, (clientX - rect.left) / rect.width * 100));
        setPos(pct);
    };
    const onPointerDown = (e)=>{
        if (e.pointerType === "mouse" && e.button !== 0) return;
        e.preventDefault();
        setDragging(true);
        updateFromX(e.clientX);
        e.currentTarget.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e)=>{
        if (!dragging) return;
        updateFromX(e.clientX);
    };
    const onPointerUp = (e)=>{
        setDragging(false);
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch  {}
    };
    const onKeyDown = (e)=>{
        const step = e.shiftKey ? 25 : 5;
        if (e.key === "ArrowRight") {
            e.preventDefault();
            setPos((p)=>Math.min(100, p + step));
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            setPos((p)=>Math.max(0, p - step));
        } else if (e.key === "Home") {
            e.preventDefault();
            setPos(0);
        } else if (e.key === "End") {
            e.preventDefault();
            setPos(100);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                onPointerDown: onPointerDown,
                onPointerMove: onPointerMove,
                onPointerUp: onPointerUp,
                onPointerCancel: onPointerUp,
                className: `relative rounded-2xl overflow-hidden bg-[#2A2A2A] border border-[#2A2A2A] select-none touch-none cursor-ew-resize transition-[box-shadow,border-color] ${dragging ? "border-[rgba(255,107,0,0.6)] shadow-[0_16px_36px_rgba(0,0,0,0.35),0_0_24px_rgba(255,107,0,0.12)]" : "hover:border-[rgba(255,107,0,0.4)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35),0_0_24px_rgba(255,107,0,0.12)]"}`,
                style: {
                    touchAction: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.after,
                        alt: `${item.title} - After`,
                        className: "block w-full h-auto object-cover select-none",
                        draggable: false,
                        style: {
                            touchAction: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.before,
                        alt: `${item.title} - Before`,
                        className: "absolute inset-0 w-full h-full object-cover select-none",
                        draggable: false,
                        style: {
                            clipPath: `inset(0 0 0 ${pos}%)`,
                            touchAction: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-3 right-3 font-[Poppins] text-[11px] font-bold tracking-widest px-3 py-1 rounded-full bg-[linear-gradient(135deg,#FF6B00,#FF1493)] text-white pointer-events-none z-10",
                        children: "AFTER"
                    }, void 0, false, {
                        fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-3 left-3 font-[Poppins] text-[11px] font-bold tracking-widest px-3 py-1 rounded-full bg-[rgba(26,26,26,0.75)] text-white pointer-events-none z-10",
                        children: "BEFORE"
                    }, void 0, false, {
                        fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "slider",
                        tabIndex: 0,
                        "aria-label": "Before and after comparison",
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": Math.round(pos),
                        onKeyDown: onKeyDown,
                        className: "absolute top-0 bottom-0 w-0 pointer-events-none z-20 outline-none",
                        style: {
                            left: `${pos}%`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 bottom-0 left-0 w-0.5 bg-[linear-gradient(135deg,#FF6B00,#FF1493)] shadow-[0_0_12px_rgba(255,107,0,0.6)]"
                            }, void 0, false, {
                                fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#252525] border-2 border-[#FF6B00] flex items-center justify-center text-[#FF6B00] text-base shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform ${dragging ? "scale-110" : ""}`,
                                children: "↔"
                            }, void 0, false, {
                                fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-3.5 font-[Poppins] text-[15px] font-semibold",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(BeforeAfterWidget, "d0r367uHG8KOKyDlKNISbgc3mnI=");
_c = BeforeAfterWidget;
function BeforeAfter({ items }) {
    if (!items.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-6 max-[768px]:grid-cols-1",
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BeforeAfterWidget, {
                item: item
            }, item.id, false, {
                fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
                lineNumber: 81,
                columnNumber: 28
            }, this))
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/BeforeAfter.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c1 = BeforeAfter;
var _c, _c1;
__turbopack_context__.k.register(_c, "BeforeAfterWidget");
__turbopack_context__.k.register(_c1, "BeforeAfter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio-nextjs/src/components/HomeSections.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIAvatarsPreview",
    ()=>AIAvatarsPreview,
    "AIVideosPreview",
    ()=>AIVideosPreview,
    "About",
    ()=>About,
    "ColorGrading",
    ()=>ColorGrading,
    "EditedPhotos",
    ()=>EditedPhotos,
    "Featured",
    ()=>Featured,
    "GalleryPreview",
    ()=>GalleryPreview,
    "Hero",
    ()=>Hero,
    "Services",
    ()=>Services,
    "Showcases",
    ()=>Showcases
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-nextjs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-nextjs/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-nextjs/src/components/Lightbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$BeforeAfter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-nextjs/src/components/BeforeAfter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Hero() {
    _s();
    const { profile } = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"];
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "hero",
        id: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "hero-video",
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                poster: "/Elements/Video/Fall-back-image_hyperlapse.jpg",
                preload: "metadata",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/Elements/Video/Hyperlapse.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-overlay"
            }, void 0, false, {
                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "subtitle gradient-text",
                                    id: "heroSubtitle",
                                    children: profile.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: [
                                        "Hi, I'm ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text",
                                            children: "Billy Joe Cruzada"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 21,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bio-wrapper",
                                    children: [
                                        !hidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "bio",
                                            id: "heroBio",
                                            children: profile.bio
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 23,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "toggle-text-btn",
                                            onClick: ()=>setHidden((v)=>!v),
                                            "aria-label": "Toggle bio visibility",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                        lineNumber: 25,
                                                        columnNumber: 195
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                        lineNumber: 25,
                                                        columnNumber: 252
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-stats",
                                    id: "heroStats",
                                    children: profile.stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stat-number",
                                                    children: s.number
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stat-label",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.label, true, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-cta",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#work",
                                        className: "btn btn-primary",
                                        children: "View My Work"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                        lineNumber: 36,
                                        columnNumber: 39
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "profile-image-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: profile.image,
                                    alt: profile.name,
                                    id: "heroProfileImage",
                                    loading: "eager"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Hero, "kQt600tPsTduHMlWvIDJn56wzAI=");
_c = Hero;
function Featured() {
    _s1();
    const { openLightbox } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "featured",
        id: "work",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "Selected Projects"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "Featured Artworks"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "featured-grid",
                    id: "featuredGrid",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].featured.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "project-card",
                            onClick: ()=>openLightbox(i, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].featured.map((f)=>({
                                        src: f.src,
                                        title: f.title
                                    }))),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.src,
                                    alt: item.title,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overlay",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 64,
                                            columnNumber: 40
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "category",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 64,
                                            columnNumber: 61
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s1(Featured, "jdlPTMG6781M9kFH8E6h+/uUXZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"]
    ];
});
_c1 = Featured;
function Showcases() {
    _s2();
    const { openLightbox } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"])();
    const visible = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].showcases.filter((s)=>s.visible);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "showcases",
        id: "showcases",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "Project Showcases"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "showcases-grid",
                    id: "showcasesGrid",
                    children: visible.map((showcase)=>{
                        const imgs = showcase.images.filter((x)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(x));
                        const vids = showcase.images.filter(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"]);
                        const preview = imgs.length >= 3 ? imgs.slice(0, 3) : [
                            ...imgs,
                            ...vids
                        ].slice(0, 4);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "showcase-card",
                            onClick: ()=>openLightbox(0, showcase.images.map((src)=>({
                                        src,
                                        title: showcase.title
                                    })), showcase.title, showcase.tools),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "showcase-preview",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: preview.length === 4 ? "showcase-grid-2x2 four" : "showcase-grid-2x2",
                                        children: preview.map((src)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(src) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                className: "preview-tile preview-video",
                                                muted: true,
                                                loop: true,
                                                playsInline: true,
                                                preload: "metadata",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                    src: src
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 123
                                                }, this)
                                            }, src, false, {
                                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                lineNumber: 94,
                                                columnNumber: 25
                                            }, this) : // eslint-disable-next-line @next/next/no-img-element
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: src,
                                                alt: showcase.title,
                                                className: "preview-tile preview-img",
                                                loading: "lazy"
                                            }, src, false, {
                                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                lineNumber: 97,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "showcase-title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: showcase.title
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 102,
                                            columnNumber: 49
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: showcase.category
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 102,
                                            columnNumber: 74
                                        }, this),
                                        showcase.tools.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "showcase-tools",
                                            children: showcase.tools.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "showcase-tool-badge",
                                                    children: t
                                                }, t, false, {
                                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 108
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 103,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, showcase.id, true, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-cta reveal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/graphic-design-gallery",
                        className: "btn btn-secondary",
                        children: [
                            "View Full Design Gallery ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "9 18 15 12 9 6"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 109,
                                    columnNumber: 270
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                lineNumber: 109,
                                columnNumber: 137
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                        lineNumber: 109,
                        columnNumber: 45
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s2(Showcases, "jdlPTMG6781M9kFH8E6h+/uUXZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"]
    ];
});
_c2 = Showcases;
function ColorGrading() {
    _s3();
    const { openLightbox } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"])();
    const cards = [
        {
            src: "/Elements/Video/Colorgrading/Color grading process 001.mov",
            poster: "/Elements/Video/Colorgrading/Thumbnail for - Color grading process 001.PNG",
            title: "Color Grading Process 001",
            tools: "DaVinci Resolve"
        },
        {
            src: "/Elements/Video/Colorgrading/Day to night.mov",
            poster: "/Elements/Video/Colorgrading/Thumbnail for - Day to night.jpg",
            title: "Day to Night",
            tools: "DaVinci Resolve"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "video-edits",
        id: "videoEdits",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "Video Editing"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 124,
                            columnNumber: 48
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "Color Grading Projects"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 124,
                            columnNumber: 94
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-grid",
                    children: cards.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "video-card reveal",
                            "data-video": c.src,
                            "data-title": c.title,
                            "data-tools": c.tools,
                            onClick: ()=>openLightbox(i, cards.map((x)=>({
                                        src: x.src,
                                        title: x.title,
                                        tools: [
                                            x.tools
                                        ]
                                    })), c.title, [
                                    c.tools
                                ]),
                            onMouseEnter: (e)=>{
                                const v = e.currentTarget.querySelector("video");
                                if (v) {
                                    v.currentTime = 0;
                                    v.play().catch(()=>{});
                                }
                            },
                            onMouseLeave: (e)=>{
                                const v = e.currentTarget.querySelector("video");
                                if (v) {
                                    v.pause();
                                    v.currentTime = 0;
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    preload: "metadata",
                                    poster: c.poster,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                        src: c.src,
                                        type: "video/quicktime"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                        lineNumber: 131,
                                        columnNumber: 59
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "video-overlay",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "play-btn",
                                        "aria-label": "Play video",
                                        children: "▶"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                        lineNumber: 132,
                                        columnNumber: 46
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "video-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "video-title",
                                            children: c.title
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 133,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "video-tools",
                                            children: c.tools
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 133,
                                            columnNumber: 87
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, c.src, true, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s3(ColorGrading, "jdlPTMG6781M9kFH8E6h+/uUXZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"]
    ];
});
_c3 = ColorGrading;
function AIVideosPreview() {
    _s4();
    const { openLightbox } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"])();
    const videos = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].aiVideos.slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "ai-videos",
        id: "aiVideos",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "AI Generated"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 148,
                            columnNumber: 48
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "AI Videos & Motion"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 148,
                            columnNumber: 93
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ai-video-grid",
                    id: "aiVideoGrid",
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "32px"
                    },
                    children: videos.map((video, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `ai-video-card ${video.ratio}`,
                            onClick: ()=>openLightbox(i, videos.map((v)=>({
                                        src: v.src,
                                        title: v.title,
                                        tools: [
                                            v.tool
                                        ]
                                    })), video.title, [
                                    video.tool
                                ]),
                            onMouseEnter: (e)=>{
                                const v = e.currentTarget.querySelector("video");
                                if (v) {
                                    v.currentTime = 0;
                                    v.play().catch(()=>{});
                                }
                            },
                            onMouseLeave: (e)=>{
                                const v = e.currentTarget.querySelector("video");
                                if (v) {
                                    v.pause();
                                    v.currentTime = 0;
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    preload: "metadata",
                                    muted: true,
                                    loop: true,
                                    playsInline: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                        src: video.src,
                                        type: "video/mp4"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                        lineNumber: 158,
                                        columnNumber: 64
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "video-overlay",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "play-btn",
                                        "aria-label": "Play video",
                                        children: "▶"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                        lineNumber: 159,
                                        columnNumber: 46
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "video-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "video-title",
                                            children: video.title
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 160,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "video-tools",
                                            children: video.tool
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 160,
                                            columnNumber: 91
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, video.id, true, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-cta reveal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/ai-videos",
                        className: "btn btn-secondary",
                        children: [
                            "View All Videos ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "9 18 15 12 9 6"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 164,
                                    columnNumber: 248
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                lineNumber: 164,
                                columnNumber: 115
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                        lineNumber: 164,
                        columnNumber: 45
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s4(AIVideosPreview, "jdlPTMG6781M9kFH8E6h+/uUXZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"]
    ];
});
_c4 = AIVideosPreview;
function TeaserGallery({ items, href, remaining }) {
    _s5();
    const { openLightbox } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"])();
    const sharp = items.slice(0, 8);
    const blurred = items.slice(8, 14);
    const all = [
        ...sharp,
        ...blurred
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-grid",
                children: all.map((item, idx)=>{
                    const isBlurred = idx >= 8;
                    if (isBlurred) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            className: "gallery-item",
                            style: {
                                filter: "blur(6px)",
                                opacity: 0.65
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.src,
                                alt: item.title,
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                lineNumber: 184,
                                columnNumber: 17
                            }, this)
                        }, item.src + idx, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery-item",
                        onClick: ()=>openLightbox(idx, sharp.map((s)=>({
                                    src: s.src,
                                    title: s.title
                                }))),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.src,
                            alt: item.title,
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 191,
                            columnNumber: 15
                        }, this)
                    }, item.src + idx, false, {
                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            blurred.length > 0 && remaining > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "linear-gradient(135deg,#FF6B00,#FF1493)",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "50px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 600,
                    zIndex: 5,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
                },
                children: [
                    "+",
                    remaining,
                    " more"
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s5(TeaserGallery, "jdlPTMG6781M9kFH8E6h+/uUXZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightbox"]
    ];
});
_c5 = TeaserGallery;
function AIAvatarsPreview() {
    _s6();
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AIAvatarsPreview.useState": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].aiAvatars.slice(0, 14)
    }["AIAvatarsPreview.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAvatarsPreview.useEffect": ()=>{
            setPreview([
                ...__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].aiAvatars
            ].sort({
                "AIAvatarsPreview.useEffect": ()=>Math.random() - 0.5
            }["AIAvatarsPreview.useEffect"]).slice(0, 14));
        }
    }["AIAvatarsPreview.useEffect"], []);
    const remaining = Math.max(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].aiAvatars.length - 8);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "gallery-section",
        id: "aiAvatars",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "AI Generated"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 210,
                            columnNumber: 48
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "AI Avatars"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 210,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-subtitle",
                            children: "Higgsfield | Seedream 4.5 | Nano Banana Pro"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 210,
                            columnNumber: 138
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeaserGallery, {
                    items: preview,
                    href: "/ai-avatars-gallery",
                    remaining: remaining
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-cta reveal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/ai-avatars-gallery",
                        className: "btn btn-secondary",
                        children: [
                            "View All AI Avatars ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "9 18 15 12 9 6"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 212,
                                    columnNumber: 261
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                lineNumber: 212,
                                columnNumber: 128
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                        lineNumber: 212,
                        columnNumber: 45
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_s6(AIAvatarsPreview, "X0hmpdbhYQOSeITRtvpZpT7al4c=");
_c6 = AIAvatarsPreview;
function GalleryPreview() {
    _s7();
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GalleryPreview.useState": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].gallery.slice(0, 14)
    }["GalleryPreview.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryPreview.useEffect": ()=>{
            setPreview([
                ...__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].gallery
            ].sort({
                "GalleryPreview.useEffect": ()=>Math.random() - 0.5
            }["GalleryPreview.useEffect"]).slice(0, 14));
        }
    }["GalleryPreview.useEffect"], []);
    const remaining = Math.max(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].gallery.length - 8);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "gallery-section",
        id: "gallery",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "Gallery"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 225,
                            columnNumber: 48
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "Gallery & Moodboard"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 225,
                            columnNumber: 88
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-subtitle",
                            children: "Photography Collections"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 225,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeaserGallery, {
                    items: preview,
                    href: "/photography-gallery",
                    remaining: remaining
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-cta reveal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/photography-gallery",
                        className: "btn btn-secondary",
                        children: [
                            "View Full Gallery ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "9 18 15 12 9 6"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 227,
                                    columnNumber: 260
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                lineNumber: 227,
                                columnNumber: 127
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                        lineNumber: 227,
                        columnNumber: 45
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
            lineNumber: 224,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_s7(GalleryPreview, "CK5J0tExbTxLsJEogfLeqgiC0bM=");
_c7 = GalleryPreview;
function EditedPhotos() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "edited-photos",
        id: "editedPhotos",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "Photo Editing"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 237,
                            columnNumber: 48
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "Edited Photos Samples"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 237,
                            columnNumber: 94
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-subtitle",
                            children: "Drag to compare before & after"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 237,
                            columnNumber: 150
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "before-after-grid",
                    id: "beforeAfterGrid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$components$2f$BeforeAfter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        items: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].beforeAfter
                    }, void 0, false, {
                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                        lineNumber: 238,
                        columnNumber: 65
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
}
_c8 = EditedPhotos;
function About() {
    _s8();
    const { about, profile } = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"];
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "about",
        id: "about",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "About Me"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 250,
                            columnNumber: 48
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "The Designer"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 250,
                            columnNumber: 89
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-image reveal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: about.aboutImage,
                                alt: profile.name,
                                id: "aboutProfileImage",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-content reveal reveal-delay-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "quote",
                                    id: "aboutQuote",
                                    children: about.quote
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bio-wrapper",
                                    children: [
                                        !hidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "aboutBio",
                                            style: {
                                                whiteSpace: "pre-line"
                                            },
                                            children: about.bio
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 259,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "toggle-text-btn",
                                            onClick: ()=>setHidden((v)=>!v),
                                            "aria-label": "Toggle bio visibility",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 150
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 207
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "aboutLocation",
                                    children: about.location
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-stats",
                                    id: "aboutStats",
                                    children: profile.stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stat-number",
                                                    children: s.number
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stat-label",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 98
                                                }, this)
                                            ]
                                        }, s.label, true, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
            lineNumber: 249,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s8(About, "kQt600tPsTduHMlWvIDJn56wzAI=");
_c9 = About;
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "services",
        id: "services",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "What I Do"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 281,
                            columnNumber: 48
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 281,
                            columnNumber: 90
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-grid",
                    id: "servicesGrid",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultData"].services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "service-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "28",
                                        height: "28",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                            lineNumber: 285,
                                            columnNumber: 178
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                        lineNumber: 285,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: s.title
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: s.description
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                                    lineNumber: 286,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, s.title, true, {
                            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-nextjs/src/components/HomeSections.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_c10 = Services;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "Hero");
__turbopack_context__.k.register(_c1, "Featured");
__turbopack_context__.k.register(_c2, "Showcases");
__turbopack_context__.k.register(_c3, "ColorGrading");
__turbopack_context__.k.register(_c4, "AIVideosPreview");
__turbopack_context__.k.register(_c5, "TeaserGallery");
__turbopack_context__.k.register(_c6, "AIAvatarsPreview");
__turbopack_context__.k.register(_c7, "GalleryPreview");
__turbopack_context__.k.register(_c8, "EditedPhotos");
__turbopack_context__.k.register(_c9, "About");
__turbopack_context__.k.register(_c10, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio-nextjs/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultData",
    ()=>defaultData,
    "isVideoFile",
    ()=>isVideoFile
]);
function p(path) {
    return path.startsWith("/") ? path : "/" + path;
}
const defaultData = {
    profile: {
        name: "Billy Joe Cruzada",
        title: "Graphic Designer | Video Editor | Photographer | Photo Editor | Generative AI Specialist",
        subtitle: "Graphic Designer \u00b7 AI Content Creator \u00b7 Web Developer",
        bio: "Creative professional with 6+ years of experience across brand identity, generative AI content, and web development. I help brands turn ideas into scroll-stopping visuals, from packaging design to AI-generated campaigns and Shopify storefronts.",
        image: p("Billy ID.jpg"),
        stats: [
            {
                number: "6+",
                label: "Years Experience"
            },
            {
                number: "100+",
                label: "Projects"
            },
            {
                number: "50+",
                label: "Clients"
            }
        ]
    },
    social: {
        instagram: "https://www.instagram.com/ezii_yooow",
        linkedin: "https://linkedin.com/in/iam-billycruzada/",
        behance: "https://behance.net/billyjoeCrzGraphx",
        email: "billyjoecruzada12@gmail.com"
    },
    featured: [
        {
            id: 1,
            src: p("Elements/Designs/Food Product Design/(1) Primary Logo.jpg"),
            title: "Kamote Crisps",
            category: "Food Product Design"
        },
        {
            id: 2,
            src: p("Elements/Designs/Food Product Design/(3) Best-seller.jpg"),
            title: "Kamote Crisps Ad",
            category: "Food Product Design"
        },
        {
            id: 3,
            src: p("Elements/Designs/Health and Wellness/(5) Passiflora front cover.jpg"),
            title: "Passiflora",
            category: "Health & Wellness"
        },
        {
            id: 4,
            src: p("Elements/Designs/Health and Wellness/(7) Pefume Mockup -- Passiflora 001 Burning desire 1x1.jpg"),
            title: "Passiflora Mockup",
            category: "Health & Wellness"
        },
        {
            id: 5,
            src: p("Elements/Designs/Print Designs/Nmax ii color 1 variation.png"),
            title: "Nmax Design",
            category: "Print"
        },
        {
            id: 6,
            src: p("Elements/Designs/Shopify - Berrimora/Logo.png"),
            title: "Berrimora Shopify",
            category: "Shopify"
        }
    ],
    aiAvatars: [
        {
            id: 1,
            src: p("Elements/AI girl models/hf_20260207_140808_57bef821-8724-40f2-9ab5-1adc3dc0b1d6.JPG"),
            title: "AI Avatar 001",
            category: "higgsfield"
        },
        {
            id: 2,
            src: p("Elements/AI girl models/hf_20260207_141327_62d81650-99b0-4bcf-a60f-9c3e6c1769a7.JPG"),
            title: "AI Avatar 002",
            category: "higgsfield"
        },
        {
            id: 3,
            src: p("Elements/AI girl models/hf_20260207_142137_c255d793-8599-426c-b412-0105b5836bd7.JPG"),
            title: "AI Avatar 003",
            category: "higgsfield"
        },
        {
            id: 4,
            src: p("Elements/AI girl models/hf_20260523_090742_3d81af76-8d89-4223-aeef-09f932024543.JPG"),
            title: "AI Avatar 004",
            category: "higgsfield"
        },
        {
            id: 5,
            src: p("Elements/AI girl models/hf_20260523_090849_8cdfd0a1-8022-4494-a2eb-4420fd776a61.JPG"),
            title: "AI Avatar 005",
            category: "higgsfield"
        },
        {
            id: 6,
            src: p("Elements/AI girl models/hf_20260528_070301_44c989bc-0bb7-487c-97fc-d018002f653c.JPG"),
            title: "AI Avatar 006",
            category: "higgsfield"
        },
        {
            id: 7,
            src: p("Elements/AI girl models/hf_20260528_070906_2a89543c-511e-4b9d-b4cf-ff62b7101c10.JPG"),
            title: "AI Avatar 007",
            category: "higgsfield"
        },
        {
            id: 8,
            src: p("Elements/AI girl models/hf_20260528_071030_60d31156-752f-4f9a-9cd5-bb7ea199ae09.JPG"),
            title: "AI Avatar 008",
            category: "higgsfield"
        },
        {
            id: 9,
            src: p("Elements/AI girl models/hf_20260530_172249_2473e0fd-f47e-4dd4-91e7-e06e8497964e.JPG"),
            title: "AI Avatar 009",
            category: "higgsfield"
        },
        {
            id: 10,
            src: p("Elements/AI girl models/hf_20260530_173035_0dd56dfa-56f2-4594-93ae-db768ed652a8.JPG"),
            title: "AI Avatar 010",
            category: "higgsfield"
        },
        {
            id: 11,
            src: p("Elements/AI girl models/seedream-i2i-1770723061247-0.JPG"),
            title: "AI Avatar 011",
            category: "seedream"
        },
        {
            id: 12,
            src: p("Elements/AI girl models/seedream-i2i-1770723342004-2.JPG"),
            title: "AI Avatar 012",
            category: "seedream"
        },
        {
            id: 13,
            src: p("Elements/AI girl models/seedream-i2i-1770723639744-0.JPG"),
            title: "AI Avatar 013",
            category: "seedream"
        },
        {
            id: 14,
            src: p("Elements/AI girl models/seedream-i2i-1770724512254-2.JPG"),
            title: "AI Avatar 014",
            category: "seedream"
        },
        {
            id: 15,
            src: p("Elements/AI girl models/seedream-i2i-1771074683603-1.JPG"),
            title: "AI Avatar 015",
            category: "seedream"
        },
        {
            id: 16,
            src: p("Elements/AI girl models/seedream-i2i-1771075085491-0.JPG"),
            title: "AI Avatar 016",
            category: "seedream"
        },
        {
            id: 17,
            src: p("Elements/AI girl models/seedream-i2i-1773822480542-1.JPG"),
            title: "AI Avatar 017",
            category: "seedream"
        },
        {
            id: 18,
            src: p("Elements/AI girl models/seedream-i2i-1773822833538-1.JPG"),
            title: "AI Avatar 018",
            category: "seedream"
        },
        {
            id: 19,
            src: p("Elements/AI girl models/seedream-i2i-1774002339447-2.JPG"),
            title: "AI Avatar 019",
            category: "seedream"
        },
        {
            id: 20,
            src: p("Elements/AI girl models/seedream-i2i-1774002485283-1.JPG"),
            title: "AI Avatar 020",
            category: "seedream"
        },
        {
            id: 21,
            src: p("Elements/AI girl models/seedream-i2i-1774002921298-0.JPG"),
            title: "AI Avatar 021",
            category: "seedream"
        },
        {
            id: 22,
            src: p("Elements/AI girl models/seedream-i2i-1774003195561-0.JPG"),
            title: "AI Avatar 022",
            category: "seedream"
        },
        {
            id: 23,
            src: p("Elements/AI girl models/seedream-i2i-cmlayjy8p003rlb04kugqrcqk.JPG"),
            title: "AI Avatar 023",
            category: "seedream"
        },
        {
            id: 24,
            src: p("Elements/AI girl models/seedream-i2i-cmlayjz6r003tlb04vecib1qn.JPG"),
            title: "AI Avatar 024",
            category: "seedream"
        },
        {
            id: 25,
            src: p("Elements/AI girl models/2a8d3f9e-664d-11f1-af80-c1af0e67a990.png"),
            title: "AI Avatar 025",
            category: "nanoBanana"
        },
        {
            id: 26,
            src: p("Elements/AI girl models/95a14ade-664b-11f1-af80-c1af0e67a990.jpg"),
            title: "AI Avatar 026",
            category: "nanoBanana"
        },
        {
            id: 27,
            src: p("Elements/AI girl models/86ac6242-6651-11f1-af83-c1af0e67a990.png"),
            title: "AI Avatar 027",
            category: "nanoBanana"
        },
        {
            id: 28,
            src: p("Elements/AI girl models/d29b04d8-6651-11f1-af83-c1af0e67a990.png"),
            title: "AI Avatar 028",
            category: "nanoBanana"
        }
    ],
    gallery: [
        {
            id: 1,
            src: p("Elements/Photography/Food & Travel/1x1 format IG 15 copy.webp"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 2,
            src: p("Elements/Photography/Food & Travel/2x3 format IG White BG - 3 copy.webp"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 3,
            src: p("Elements/Photography/Food & Travel/2x3 format IG White BG - 6 copy.webp"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 4,
            src: p("Elements/Photography/Food & Travel/Food Samgy1-01 copy.webp"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 5,
            src: p("Elements/Photography/Food & Travel/Food Samgy1-02 copy.webp"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 6,
            src: p("Elements/Photography/Food & Travel/Imag-1.jpg"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 7,
            src: p("Elements/Photography/Food & Travel/Imag-2.jpg"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 8,
            src: p("Elements/Photography/Food & Travel/Img-1.jpg"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 9,
            src: p("Elements/Photography/Food & Travel/Img-3.jpg"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 10,
            src: p("Elements/Photography/Food & Travel/Imga-3 copy.webp"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 11,
            src: p("Elements/Photography/Food & Travel/KRV DSCF6221-Enhanced-NR copy.webp"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 12,
            src: p("Elements/Photography/Food & Travel/Malico --8.jpg"),
            title: "Food & Travel",
            category: "foodTravel"
        },
        {
            id: 13,
            src: p("Elements/Photography/Portrait photography/Grad 2024.jpg"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 14,
            src: p("Elements/Photography/Portrait photography/IMG-100.JPG"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 15,
            src: p("Elements/Photography/Portrait photography/IMG-11.JPG"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 16,
            src: p("Elements/Photography/Portrait photography/IMG-114.JPG"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 17,
            src: p("Elements/Photography/Portrait photography/IMG-43.JPG"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 18,
            src: p("Elements/Photography/Portrait photography/IMG-44.JPG"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 19,
            src: p("Elements/Photography/Portrait photography/IMG-50.JPG"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 20,
            src: p("Elements/Photography/Portrait photography/IMG-58.JPG"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 21,
            src: p("Elements/Photography/Portrait photography/Imga-2.jpg"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 22,
            src: p("Elements/Photography/Portrait photography/Julia 1st Process-11.jpg"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 23,
            src: p("Elements/Photography/Portrait photography/Julia 1st Process-5.jpg"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 24,
            src: p("Elements/Photography/Portrait photography/Julia 1st Process-7.jpg"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 25,
            src: p("Elements/Photography/Portrait photography/Julia 1st Process.jpg"),
            title: "Portrait Photography",
            category: "portrait"
        },
        {
            id: 26,
            src: p("Elements/Photography/Sports Photography/DSCF6543.jpg"),
            title: "Sports Photography",
            category: "sports"
        },
        {
            id: 27,
            src: p("Elements/Photography/Sports Photography/DSCF6602.jpg"),
            title: "Sports Photography",
            category: "sports"
        },
        {
            id: 28,
            src: p("Elements/Photography/Street photography/1x1 format IG 11 copy.webp"),
            title: "Street Photography",
            category: "street"
        },
        {
            id: 29,
            src: p("Elements/Photography/Street photography/1x1 format IG 2 copy.webp"),
            title: "Street Photography",
            category: "street"
        },
        {
            id: 30,
            src: p("Elements/Photography/Street photography/1x1 format IG 4.jpg"),
            title: "Street Photography",
            category: "street"
        },
        {
            id: 31,
            src: p("Elements/Photography/Street photography/1x1 format IG 7 copy.webp"),
            title: "Street Photography",
            category: "street"
        },
        {
            id: 32,
            src: p("Elements/Photography/Street photography/baag --6 copy.webp"),
            title: "Street Photography",
            category: "street"
        },
        {
            id: 33,
            src: p("Elements/Photography/Street photography/Imag-4 copy.webp"),
            title: "Street Photography",
            category: "street"
        },
        {
            id: 34,
            src: p("Elements/Photography/Street photography/Img-2.jpg"),
            title: "Street Photography",
            category: "street"
        }
    ],
    showcases: [
        {
            id: 1,
            title: "Kamote Crisps Branding",
            category: "Food Product Design",
            tools: [
                "Ai",
                "Ps",
                "Ae"
            ],
            visible: true,
            images: [
                p("Elements/Designs/Food Product Design/(1) Primary Logo.jpg"),
                p("Elements/Designs/Food Product Design/(2) Front - Kamote behanc.jpg"),
                p("Elements/Designs/Food Product Design/(3) Best-seller.jpg"),
                p("Elements/Designs/Food Product Design/(3) Best-seller-A.jpg"),
                p("Elements/Designs/Food Product Design/(4) Kamote-Chips-ad-001.jpg"),
                p("Elements/Designs/Food Product Design/(5) Kamote chips ads sample.mov")
            ]
        },
        {
            id: 2,
            title: "Passiflora Perfume",
            category: "Health & Wellness",
            tools: [
                "Higgsfield",
                "Nano Banana Pro",
                "Photoshop"
            ],
            visible: true,
            images: [
                p("Elements/Designs/Health and Wellness/(1) Artboard 19@2x.png"),
                p("Elements/Designs/Health and Wellness/(2) Artboard 4@2x.png"),
                p("Elements/Designs/Health and Wellness/(3) Artboard 1@2x.png"),
                p("Elements/Designs/Health and Wellness/(5) Passiflora front cover.jpg"),
                p("Elements/Designs/Health and Wellness/(6) passiflora-white.jpg"),
                p("Elements/Designs/Health and Wellness/(7) Pefume Mockup -- Passiflora 001 Burning desire 1x1.jpg"),
                p("Elements/Designs/Health and Wellness/(8) Pefume Mockup -- Passiflora 001 Burning desire.jpg"),
                p("Elements/Designs/Health and Wellness/(9) passiflora-Business card.jpg"),
                p("Elements/Designs/Wellness Product ads/Ad 1 _ Problem - Solution.png"),
                p("Elements/Designs/Wellness Product ads/Ad 2 _ Medical - Clinical.png"),
                p("Elements/Designs/Wellness Product ads/Ad 3 _ Emotional - Lifestyle.png"),
                p("Elements/Designs/Wellness Product ads/Ad1 - Human Using Product.png"),
                p("Elements/Designs/Wellness Product ads/Ad2 - Premium Product Hero.png"),
                p("Elements/Designs/Wellness Product ads/Ad3 - Medical_Clinical.png"),
                p("Elements/Designs/Wellness Product ads/raw gen 001.jpg"),
                p("Elements/Designs/Wellness Product ads/raw gen 002.jpg"),
                p("Elements/Designs/Wellness Product ads/raw gen 003.jpg")
            ]
        },
        {
            id: 3,
            title: "Print Designs",
            category: "Print",
            tools: [
                "Ai",
                "Ps"
            ],
            visible: true,
            images: [
                p("Elements/Designs/Print Designs/Nmax ii color 1 variation.png"),
                p("Elements/Designs/Print Designs/Nmax mock up.jpg"),
                p("Elements/Designs/Print Designs/Shirt mockup.jpg"),
                p("Elements/Designs/Print Designs/Shirt mockup 2.jpg"),
                p("Elements/Designs/Print Designs/Nature-sample-2.png"),
                p("Elements/Designs/Print Designs/Post-evening-vector-sample.png"),
                p("Elements/Designs/Print Designs/Rectangle 1.png")
            ]
        },
        {
            id: 4,
            title: "Berrimora Shopify Store",
            category: "Shopify",
            tools: [
                "Ps",
                "Figma"
            ],
            visible: true,
            images: [
                p("Elements/Designs/Shopify - Berrimora/Logo.png"),
                p("Elements/Designs/Shopify - Berrimora/Berrimora snaps 01.PNG"),
                p("Elements/Designs/Shopify - Berrimora/Berrimora snaps 02.PNG"),
                p("Elements/Designs/Shopify - Berrimora/Berrimora snaps 03.PNG"),
                p("Elements/Designs/Shopify - Berrimora/Backdrop.jpg"),
                p("Elements/Designs/Shopify - Berrimora/Mobile View.jpg")
            ]
        },
        {
            id: 5,
            title: "Avory",
            category: "AI UGC Ad",
            tools: [
                "Higgsfield",
                "Premiere Pro",
                "Lightroom"
            ],
            visible: true,
            images: [
                p("Elements/Designs/Avory/hf_20260802_180235_f41097bd-12bc-495c-bf04-5cf75a282a36.png"),
                p("Elements/AI videos - Higgsfield/Avory - AI UGC Ad.mp4"),
                p("Elements/Designs/Avory/Avory - AI UGC Ad - 002.mp4"),
                p("Elements/Designs/Avory/hf_20260802_181707_09bd931a-dff0-4b6b-bb6e-ab4d0de9bc82.mp4")
            ]
        },
        {
            id: 6,
            title: "Jewelries & Accessories",
            category: "Jewelries & Accessories",
            tools: [
                "Higgsfield",
                "Photoshop"
            ],
            visible: true,
            images: [
                p("Elements/Designs/Jewelries and Accessories/Velvet Aura graphics.jpg"),
                p("Elements/Designs/Jewelries and Accessories/edited photo-01.jpg"),
                p("Elements/Designs/Jewelries and Accessories/edited photo-02.jpg"),
                p("Elements/Designs/Jewelries and Accessories/Travel Pendant Ad Graphics.jpg"),
                p("Elements/Designs/Jewelries and Accessories/Travel Pendant.jpg")
            ]
        }
    ],
    aiVideos: [
        {
            id: 1,
            src: p("Elements/AI videos - Higgsfield/AI-Seedance footage.mp4"),
            title: "Higgsfield AI Cinematic",
            tool: "Seedance | Nano Banana Pro",
            ratio: "horizontal"
        },
        {
            id: 2,
            src: p("Elements/AI videos - Higgsfield/Avory - AI UGC Ad.mp4"),
            title: "Avory - AI UGC Ad",
            tool: "Higgsfield | Premiere Pro",
            ratio: "vertical"
        },
        {
            id: 3,
            src: p("Elements/AI videos - Higgsfield/hf_20260605_114930_7583322b-8f04-4e59-b108-d6bebaf1419a.mp4"),
            title: "Higgsfield AI 001",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 4,
            src: p("Elements/AI videos - Higgsfield/hf_20260605_120624_5e56f7f8-97dd-4f25-957e-01bd78da919d.mp4"),
            title: "Higgsfield AI 002",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 5,
            src: p("Elements/AI videos - Higgsfield/hf_20260606_104322_abf631e7-9aac-493b-9d22-920cb3913057.mp4"),
            title: "Higgsfield AI 003",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 6,
            src: p("Elements/AI videos - Higgsfield/YTS_001.mp4"),
            title: "YTS 001",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 7,
            src: p("Elements/AI videos - Higgsfield/YTS-002.mp4"),
            title: "YTS 002",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 8,
            src: p("Elements/AI videos - Higgsfield/YTS-007.mp4"),
            title: "YTS 007",
            tool: "Higgsfield",
            ratio: "vertical"
        }
    ],
    services: [
        {
            title: "Brand Identity & Visual Design",
            description: "Creating memorable brand identities including logos, typography systems, color palettes, and comprehensive brand guidelines. I help businesses establish a cohesive visual presence that resonates with their target audience."
        },
        {
            title: "Photography & Photo Editing",
            description: "Professional photography services and expert retouching. From product shots to portraits, I capture moments and transform them into stunning visual content that tells your story."
        },
        {
            title: "Print & Packaging Design",
            description: "Eye-catching print designs for packaging, posters, business cards, and marketing materials. I ensure your brand makes a lasting tangible impression in the physical world."
        },
        {
            title: "Generative AI Content Creation",
            description: "Cutting-edge AI-generated imagery and content using state-of-the-art tools. Specializing in creative AI workflows for marketing, product visualization, and unique artistic expressions."
        }
    ],
    tools: [
        {
            group: "Generative AI Toolkit",
            tools: [
                {
                    name: "Higgsfield",
                    purpose: "AI video generation & motion for cinematic UGC-style ads and social content",
                    logo: p("SVG Logos/Higgsfield_AI-logo_brandlogos.net_cfc6a5.svg")
                },
                {
                    name: "Heygen",
                    purpose: "AI avatar & talking-head video generation for presenter-style content",
                    badge: "HG"
                },
                {
                    name: "Wavespeed",
                    purpose: "Fast AI image/video generation pipeline for rapid concept iteration",
                    badge: "WS"
                },
                {
                    name: "Nano Banana Pro",
                    purpose: "AI image generation & editing for photorealistic creative assets",
                    logo: p("SVG Logos/Nano banana-icon.svg")
                },
                {
                    name: "Seedream",
                    purpose: "AI image generation for high-fidelity stylized visuals",
                    badge: "SD"
                },
                {
                    name: "Seedance",
                    purpose: "AI video/motion generation for dynamic short-form content",
                    badge: "SC"
                },
                {
                    name: "Kling",
                    purpose: "AI video generation for cinematic motion and camera work",
                    badge: "K"
                },
                {
                    name: "Wan",
                    purpose: "Open-source AI video generation model (WAN 2.1/2.2) for custom workflows",
                    badge: "W"
                },
                {
                    name: "ComfyUI",
                    purpose: "Node-based AI workflow builder for custom image/video generation pipelines",
                    logo: p("SVG Logos/comfyui-color.svg")
                }
            ]
        },
        {
            group: "Graphic Design Toolkit",
            tools: [
                {
                    name: "Adobe Photoshop",
                    purpose: "Photo retouching, compositing, and digital artwork",
                    logo: p("SVG Logos/photoshop-svgrepo-com.svg")
                },
                {
                    name: "Adobe Illustrator",
                    purpose: "Vector-based logo design, branding, and print-ready artwork",
                    logo: p("SVG Logos/illustrator-svgrepo-com.svg")
                },
                {
                    name: "Canva",
                    purpose: "Fast graphical edits and quick social media layouts",
                    logo: p("SVG Logos/canva-icon.svg")
                }
            ]
        },
        {
            group: "Video Editing Toolkit",
            tools: [
                {
                    name: "Adobe Premiere Pro",
                    purpose: "Non-linear video editing for ads, promos, and social content",
                    logo: p("SVG Logos/premiere-svgrepo-com.svg")
                },
                {
                    name: "Adobe After Effects",
                    purpose: "Motion graphics, animation, and visual effects",
                    badge: "AE"
                },
                {
                    name: "DaVinci Resolve",
                    purpose: "Professional color grading and cinematic color correction",
                    logo: p("SVG Logos/icons8-davinci-resolve.svg")
                },
                {
                    name: "CapCut",
                    purpose: "Fast-turnaround short-form video editing for social media",
                    logo: p("SVG Logos/capcut logo.svg")
                }
            ]
        }
    ],
    beforeAfter: [
        {
            id: 1,
            title: "Edit 01",
            before: p("Elements/Designs/Before and after edit images/image_001 - Before.png"),
            after: p("Elements/Designs/Before and after edit images/image_001 - After.jpg")
        },
        {
            id: 2,
            title: "Edit 02",
            before: p("Elements/Designs/Before and after edit images/image_002 - Before.png"),
            after: p("Elements/Designs/Before and after edit images/image_002 - After.jpg")
        }
    ],
    about: {
        aboutImage: p("Billy ID.jpg"),
        quote: "\u201cDesign is not just what it looks like. Design is how it works.\u201d",
        bio: "I'm Billy Joe Cruzada, a graphic designer, AI content creator, and web developer based in Santa Ignacia, Tarlac, Philippines. Over the past 6+ years I've built a career at the intersection of traditional design craft and next-generation AI tooling. Helping brands look good and move fast.\n\nMy work spans brand identity and packaging design, generative AI content production (image, video, and UGC-style ads), photo and video editing, and Shopify e-commerce development. I've built complete branding systems for food and wellness products, produced AI-generated ad campaigns for social platforms, developed Shopify storefronts from scratch, and delivered hundreds of AI-generated assets for agency clients using tools like ComfyUI, WAN, Flux, Seedream/Seedance, Nano Banana Pro, Kling, and Higgsfield.\n\nI hold a Bachelor of Science in Information Technology (Web & Mobile Application Development) from Tarlac State University, which grounds my design work in a real understanding of how things actually get built and deployed, not just how they look.\n\nEvery project starts with the same question: what does this brand need to say, and how do I say it in a way people actually stop for? Whether that's a logo, a product mockup, an AI-generated ad, or a fully working online store, I bring the same mix of craft, speed, and curiosity to make it happen.",
        location: "Santa Ignacia, Tarlac, Philippines",
        bioVisible: true
    }
};
function isVideoFile(src) {
    return /\.(mov|mp4|webm)$/i.test(src);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=portfolio-nextjs_src_18whnln._.js.map