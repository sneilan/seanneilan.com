const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/compiler.js","assets/index.js","assets/index.css","assets/wasm.js","assets/renderer.js"])))=>i.map(i=>d[i]);
import { _ as d, __tla as __tla_0 } from "./index.js";
let F, M;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const P = [
        "LinLibertine_R.ttf",
        "LinLibertine_RB.ttf",
        "LinLibertine_RBI.ttf",
        "LinLibertine_RI.ttf",
        "NewCMMath-Book.otf",
        "NewCMMath-Regular.otf",
        "NewCM10-Regular.otf",
        "NewCM10-Bold.otf",
        "NewCM10-Italic.otf",
        "NewCM10-BoldItalic.otf",
        "DejaVuSansMono.ttf",
        "DejaVuSansMono-Bold.ttf",
        "DejaVuSansMono-Oblique.ttf",
        "DejaVuSansMono-BoldOblique.ttf"
    ], R = [
        "InriaSerif-Bold.ttf",
        "InriaSerif-BoldItalic.ttf",
        "InriaSerif-Italic.ttf",
        "InriaSerif-Regular.ttf",
        "Roboto-Regular.ttf",
        "NotoSerifCJKsc-Regular.otf"
    ], C = [
        "TwitterColorEmoji.ttf",
        "NotoColorEmoji.ttf"
    ];
    F = function(a, e) {
        const t = [
            ...a
        ];
        if (e && e?.assets !== !1 && e?.assets?.length && e?.assets?.length > 0) {
            let r = e.assetUrlPrefix ?? "https://raw.githubusercontent.com/Myriad-Dreamin/typst/assets-fonts";
            r[r.length - 1] !== "/" && (r += "/");
            const n = (c)=>c.map((s)=>r + s);
            for (const c of e.assets)switch(c){
                case "text":
                    t.push(...n(P));
                    break;
                case "cjk":
                    t.push(...n(R));
                    break;
                case "emoji":
                    t.push(...n(C));
                    break;
            }
        }
        const i = async (r, { ref: n, builder: c })=>{
            e?.fetcher && n.setFetcher(e.fetcher), await n.loadFonts(c, t);
        };
        return i._preloadRemoteFontOptions = e, i;
    };
    function f(a) {
        return async (e, { builder: t })=>new Promise((i)=>{
                t.set_package_registry(a, function(r) {
                    return a.resolve(r, this);
                }), i();
            });
    }
    function g(a) {
        return async (e, t)=>{
            if (t.alreadySetAccessModel) throw new Error(`already set some assess model before: ${t.alreadySetAccessModel.constructor?.name}(${t.alreadySetAccessModel})`);
            return t.alreadySetAccessModel = a, new Promise((i)=>{
                t.builder.set_access_model(a, (r)=>{
                    const n = a.getMTime(r);
                    return n ? n.getTime() : 0;
                }, (r)=>a.isFile(r) || !1, (r)=>a.getRealPath(r) || r, (r)=>a.readAll(r)), i();
            });
        };
    }
    class w {
        mTimes = new Map;
        mData = new Map;
        constructor(){}
        reset() {
            this.mTimes.clear(), this.mData.clear();
        }
        insertFile(e, t, i) {
            this.mTimes.set(e, i), this.mData.set(e, t);
        }
        removeFile(e) {
            this.mTimes.delete(e), this.mData.delete(e);
        }
        getMTime(e) {
            if (e.startsWith("/@memory/") && this.mTimes.has(e)) return this.mTimes.get(e);
        }
        isFile() {
            return !0;
        }
        getRealPath(e) {
            return e;
        }
        readAll(e) {
            if (e.startsWith("/@memory/") && this.mData.has(e)) return this.mData.get(e);
        }
    }
    class y {
        am;
        cache = new Map;
        constructor(e){
            this.am = e;
        }
        resolvePath(e) {
            return `https://packages.typst.org/preview/${e.name}-${e.version}.tar.gz`;
        }
        pullPackageData(e) {
            const t = new XMLHttpRequest;
            if (t.overrideMimeType("text/plain; charset=x-user-defined"), t.open("GET", this.resolvePath(e), !1), t.send(null), t.status === 200 && (t.response instanceof String || typeof t.response == "string")) return Uint8Array.from(t.response, (i)=>i.charCodeAt(0));
        }
        resolve(e, t) {
            if (e.namespace !== "preview") return;
            const i = this.resolvePath(e);
            if (this.cache.has(i)) return this.cache.get(i)();
            const r = this.pullPackageData(e);
            if (!r) return;
            const n = `/@memory/fetch/packages/preview/${e.namespace}/${e.name}/${e.version}`, c = [];
            t.untar(r, (l, u, h)=>{
                c.push([
                    n + "/" + l,
                    u,
                    new Date(h)
                ]);
            });
            const s = ()=>{
                for (const [l, u, h] of c)this.am.insertFile(l, u, h);
                return n;
            };
            return this.cache.set(i, s), s();
        }
    }
    function _(a) {
        return Math.random().toString(36).replace("0.", "");
    }
    const k = typeof process < "u" && process.versions != null && process.versions.node != null;
    class o {
        mainFilePath;
        cc;
        ex;
        constructor(e){
            this.cc = e?.compiler, this.ex = e?.renderer, this.mainFilePath = "/main.typ", this.providers = [];
        }
        setCompiler(e) {
            this.cc = e;
        }
        async getCompiler() {
            return typeof this.cc == "function" ? this.cc = await this.cc() : this.cc;
        }
        setRenderer(e) {
            this.ex = e;
        }
        async getRenderer() {
            return typeof this.ex == "function" ? this.ex = await this.ex() : this.ex;
        }
        providers;
        use(...e) {
            if (!this.providers) throw new Error("already prepare uses for instances");
            this.providers.push(...e);
        }
        static withAccessModel(e) {
            return {
                key: "access-model",
                forRoles: [
                    "compiler"
                ],
                provides: [
                    g(e)
                ]
            };
        }
        static withPackageRegistry(e) {
            return {
                key: "package-registry",
                forRoles: [
                    "compiler"
                ],
                provides: [
                    f(e)
                ]
            };
        }
        static fetchPackageRegistry(e) {
            const t = e || new w, i = [
                ...e ? [] : [
                    g(t)
                ],
                f(new y(t))
            ];
            return {
                key: "package-registry$fetch",
                forRoles: [
                    "compiler"
                ],
                provides: i
            };
        }
        static fetchPackageBy(e, t) {
            class i extends y {
                pullPackageData(n) {
                    return t(n, this.resolvePath(n));
                }
            }
            return {
                key: "package-registry$lambda",
                forRoles: [
                    "compiler"
                ],
                provides: [
                    f(new i(e))
                ]
            };
        }
        ccOptions;
        setCompilerInitOptions(e) {
            this.requireIsUninitialized("compiler", this.cc, o.$buildC), this.ccOptions = e;
        }
        exOptions;
        setRendererInitOptions(e) {
            this.requireIsUninitialized("renderer", this.ex, o.$buildR), this.exOptions = e;
        }
        setMainFilePath(e) {
            this.mainFilePath = e;
        }
        getMainFilePath() {
            return this.mainFilePath;
        }
        removeTmp(e) {
            return e.mainFilePath.startsWith("/tmp/") ? this.unmapShadow(e.mainFilePath) : Promise.resolve();
        }
        async addSource(e, t) {
            (await this.getCompiler()).addSource(e, t);
        }
        async resetShadow() {
            (await this.getCompiler()).resetShadow();
        }
        async mapShadow(e, t) {
            (await this.getCompiler()).mapShadow(e, t);
        }
        async unmapShadow(e) {
            (await this.getCompiler()).unmapShadow(e);
        }
        async vector(e) {
            const t = await this.getCompileOptions(e);
            return (await this.getCompiler()).compile(t).then((i)=>i.result).finally(()=>this.removeTmp(t));
        }
        async pdf(e) {
            const t = await this.getCompileOptions(e);
            return t.format = "pdf", (await this.getCompiler()).compile(t).then((i)=>i.result).finally(()=>this.removeTmp(t));
        }
        async svg(e) {
            return this.transientRender(e, (t, i)=>t.renderSvg({
                    ...e,
                    renderSession: i
                }));
        }
        async canvas(e, t) {
            return this.transientRender(t, (i, r)=>i.renderToCanvas({
                    container: e,
                    ...t,
                    renderSession: r
                }));
        }
        async query(e) {
            const t = await this.getCompileOptions(e);
            return (await this.getCompiler()).query({
                ...e,
                ...t
            }).finally(()=>this.removeTmp(t));
        }
        async getSemanticTokenLegend() {
            return (await this.getCompiler()).getSemanticTokenLegend();
        }
        async getSemanticTokens(e) {
            const t = await this.getCompileOptions(e);
            return (await this.getCompiler()).getSemanticTokens({
                mainFilePath: t.mainFilePath,
                resultId: e.resultId
            }).finally(()=>this.removeTmp(t));
        }
        async getCompileOptions(e) {
            if (e === void 0) return {
                mainFilePath: this.mainFilePath,
                diagnostics: "none"
            };
            if (typeof e == "string") throw new Error("please specify opts as {mainContent: '...'} or {mainFilePath: '...'}");
            if ("mainFilePath" in e) return {
                ...e,
                diagnostics: "none"
            };
            {
                const t = `/tmp/${_()}.typ`;
                return await this.addSource(t, e.mainContent), {
                    mainFilePath: t,
                    inputs: e.inputs,
                    diagnostics: "none"
                };
            }
        }
        async getVector(e) {
            if (e && "vectorData" in e) return e.vectorData;
            const t = await this.getCompileOptions(e);
            return (await this.getCompiler()).compile(t).then((i)=>i.result).finally(()=>this.removeTmp(t));
        }
        async transientRender(e, t) {
            const i = await this.getRenderer();
            if (!i) throw new Error("does not provide renderer instance");
            const r = await this.getVector(e);
            return await i.runWithSession(async (n)=>(i.manipulateData({
                    renderSession: n,
                    action: "reset",
                    data: r
                }), t(i, n)));
        }
        async prepareUse() {
            if (!this.providers) return;
            const e = await Promise.all(this.providers.map((s)=>typeof s == "function" ? s() : s));
            if (this.providers = [], m == this && !e.some((s)=>s.key.includes("package-registry") || s.key.includes("access-model"))) if (k) {
                const s = new Function("m", "return import(m)");
                try {
                    const l = new w, { default: u } = await s("sync-request");
                    m.use(o.withAccessModel(l), o.fetchPackageBy(l, (h, v)=>{
                        const p = u("GET", v);
                        if (p.statusCode === 200) return p.getBody(void 0);
                    }));
                } catch  {}
            } else m.use(o.fetchPackageRegistry());
            const t = await Promise.all(this.providers.map((s)=>typeof s == "function" ? s() : s)), i = this.ccOptions ||= {}, r = i.beforeBuild ||= [], n = this.exOptions ||= {}, c = n.beforeBuild ||= [];
            for (const s of [
                ...e,
                ...t
            ])s.forRoles.includes("compiler") && (this.requireIsUninitialized("compiler", this.cc, o.$buildC), r.push(...s.provides)), s.forRoles.includes("renderer") && (this.requireIsUninitialized("renderer", this.ex, o.$buildR), c.push(...s.provides));
            this.providers = void 0;
        }
        requireIsUninitialized(e, t, i) {
            if (typeof t != "function") throw new Error(`${e} has been initialized: ${t}`);
            if (i && t != i) throw new Error(`${e} instance is set to non default value`);
        }
        static async $buildC() {
            const { createGlobalCompiler: e } = await d(()=>import("./global-compiler.js"), []), { createTypstCompiler: t } = await d(()=>import("./compiler.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }), __vite__mapDeps([0,1,2,3]));
            return await this.prepareUse(), e(t, this.ccOptions);
        }
        static async $buildR() {
            const { createGlobalRenderer: e } = await d(()=>import("./global-renderer.js"), []), { createTypstRenderer: t } = await d(()=>import("./renderer.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }), __vite__mapDeps([4,1,2,3]));
            return await this.prepareUse(), e(t, this.exOptions);
        }
    }
    let m;
    m = new o({
        compiler: o.$buildC,
        renderer: o.$buildR
    });
    M = Object.freeze(Object.defineProperty({
        __proto__: null,
        $typst: m,
        TypstSnippet: o
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { F as p, M as s, __tla };
