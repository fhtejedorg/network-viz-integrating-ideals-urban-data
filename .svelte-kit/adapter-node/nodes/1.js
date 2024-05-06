

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.51b202e7.js","_app/immutable/chunks/index.f284bd3d.js","_app/immutable/chunks/singletons.f5ddafee.js","_app/immutable/chunks/index.253c8e76.js"];
export const stylesheets = [];
export const fonts = [];
