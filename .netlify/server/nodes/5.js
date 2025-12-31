import * as universal from '../entries/pages/blog/tags/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/tags/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/tags/+page.ts";
export const imports = ["_app/immutable/nodes/5.ff403d05.js","_app/immutable/chunks/Card.21b5dcdf.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.1ef5338e.js"];
export const stylesheets = ["_app/immutable/assets/Card.7872c2ff.css"];
export const fonts = [];
