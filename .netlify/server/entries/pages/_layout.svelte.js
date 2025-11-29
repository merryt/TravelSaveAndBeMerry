import { c as create_ssr_component } from "../../chunks/index2.js";
const style = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".logo.svelte-1ahpfgn a.svelte-1ahpfgn{font-size:24px;text-decoration:none;color:var(--green-3)}.navigation.svelte-1ahpfgn.svelte-1ahpfgn{width:100%;padding:10px;background:var(--white);display:flex;justify-content:space-between}.nav-items.svelte-1ahpfgn>a.svelte-1ahpfgn{text-transform:uppercase;font-weight:300;font-size:24px;margin-left:1rem;text-decoration:none;color:var(--blackish)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `


<div><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Montserrat:wght@100;400;700&display=swap" rel="stylesheet">

	<div class="navigation svelte-1ahpfgn"><div class="logo display svelte-1ahpfgn"><a href="/" class="svelte-1ahpfgn">Travel Save &amp; Be Merry</a></div>
		<div class="nav-items svelte-1ahpfgn"><a href="/" class="svelte-1ahpfgn">Home</a>
			<a href="/blog" class="svelte-1ahpfgn">Blog</a></div></div>

	<main>${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
