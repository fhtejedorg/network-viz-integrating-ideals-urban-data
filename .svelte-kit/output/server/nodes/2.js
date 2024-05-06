

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4792be00.js","_app/immutable/chunks/index.f284bd3d.js","_app/immutable/chunks/index.253c8e76.js"];
export const stylesheets = ["_app/immutable/assets/2.fbb7cc82.css"];
export const fonts = [];
