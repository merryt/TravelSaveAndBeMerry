import { c as create_ssr_component, f as add_attribute, e as escape, d as each } from "./index2.js";
const Card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card-authors.svelte-9kfzj2{display:flex}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contents } = $$props;
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  $$result.css.add(css);
  return `<div class="card"><img class="card-img"${add_attribute("alt", contents.meta.title, 0)}${add_attribute("src", contents.meta.coverPhoto, 0)}>
	<a${add_attribute("href", contents.path, 0)} class="display card-header-link"><h2 class="card-header">${escape(contents.meta.title)}</h2></a>
	<p>${escape(contents.meta.description)}</p>
	<div class="card-authors svelte-9kfzj2">${each(contents.meta.authors, (author) => {
    return `<div class="card-author-profile"><img${add_attribute("alt", author, 0)} class="profile-img" src="${"/" + escape(author.toLowerCase(), true) + "-profile.png"}">
				${escape(author)}
			</div>`;
  })}</div>
</div>`;
});
export {
  Card as C
};
