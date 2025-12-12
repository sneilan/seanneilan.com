import { _ as c, __tla as __tla_0 } from "./index.js";
import { k as s, b as d, L as p } from "./wasm.js";
import { p as h, __tla as __tla_1 } from "./snippet.js";
let f, v;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })()
]).then(async ()=>{
    f = class {
        [s];
        constructor(e){
            this[s] = e;
        }
        reset() {
            this[s].reset();
        }
        current() {
            return this[s].current();
        }
        setAttachDebugInfo(e) {
            this[s].set_attach_debug_info(e);
        }
    };
    const _ = new p(async (t)=>await (await c(()=>import("./wasm-pack-shim.js"), [])).default(t));
    v = function() {
        return new w;
    };
    class w {
        compiler;
        compilerJs;
        constructor(){}
        async init(e) {
            this.compilerJs = await c(()=>import("./wasm-pack-shim.js"), []);
            const r = this.compilerJs.TypstCompilerBuilder, n = {
                ...e || {}
            }, m = n.beforeBuild?.some((i)=>i._preloadRemoteFontOptions !== void 0), l = n.beforeBuild?.some((i)=>i._preloadRemoteFontOptions?.assets !== void 0), u = n.beforeBuild?.some((i)=>i._preloadRemoteFontOptions?.assets === !1);
            (!m || !l && !u) && n.beforeBuild?.push(h([], {
                assets: [
                    "text"
                ]
            })), this.compiler = await d(e, _, r, {});
        }
        compile(e) {
            return new Promise((r)=>{
                if ("incrementalServer" in e) {
                    r(this.compiler.incr_compile(e.mainFilePath, a(e.inputs), e.incrementalServer[s], o(e.diagnostics)));
                    return;
                }
                r(this.compiler.compile(e.mainFilePath, a(e.inputs), e.format || "vector", o(e.diagnostics)));
            });
        }
        query(e) {
            return new Promise((r)=>{
                r(JSON.parse(this.compiler.query(e.mainFilePath, a(e.inputs), e.selector, e.field)));
            });
        }
        getSemanticTokenLegend() {
            return new Promise((e)=>{
                e(this.compiler.get_semantic_token_legend());
            });
        }
        getSemanticTokens(e) {
            return new Promise((r)=>{
                this.compiler.reset(), r(this.compiler.get_semantic_tokens(e.offsetEncoding || "utf-16", e.mainFilePath, e.resultId));
            });
        }
        async withIncrementalServer(e) {
            const r = new f(this.compiler.create_incr_server());
            try {
                return await e(r);
            } finally{
                r[s].free();
            }
        }
        async getAst(e) {
            return this.compiler.get_ast(e);
        }
        async reset() {
            await new Promise((e)=>{
                this.compiler.reset(), e(void 0);
            });
        }
        addSource(e, r) {
            if (arguments.length > 2) throw new Error("use of addSource(path, source, isMain) is deprecated, please use addSource(path, source) instead");
            this.compiler.add_source(e, r);
        }
        mapShadow(e, r) {
            this.compiler.map_shadow(e, r);
        }
        unmapShadow(e) {
            this.compiler.unmap_shadow(e);
        }
        resetShadow() {
            this.compiler.reset_shadow();
        }
        renderPageToCanvas() {
            throw new Error("Please use the api TypstRenderer.renderToCanvas in v0.4.0");
        }
    }
    function a(t) {
        return t ? Object.entries(t) : void 0;
    }
    function o(t) {
        switch(t){
            case "none":
                return 1;
            case "unix":
                return 2;
            case "full":
                return 3;
            default:
                return 0;
        }
    }
});
export { f as IncrementalServer, v as createTypstCompiler, __tla };
