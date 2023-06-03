import { c as create_ssr_component, f as add_attribute, d as each, e as escape, v as validate_component, m as missing_component } from "../../../../chunks/index2.js";
import { C as Card } from "../../../../chunks/Card.js";
import { P as PromoCard } from "../../../../chunks/PromoCard.js";
import moment from "moment";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-zz9e5g{object-fit:cover;width:100%;height:200px;margin-bottom:-4px}.post-meta.svelte-zz9e5g{display:flex;align-items:center;justify-content:space-between}.author.svelte-zz9e5g{display:flex;align-items:center}.authorPhoto.svelte-zz9e5g{width:40px;height:40px;object-fit:cover;border-radius:50%;margin-right:10px}.blog-author_name.svelte-zz9e5g,.blog-date.svelte-zz9e5g{color:var(--blackish);font-size:2rem}.blog-header.svelte-zz9e5g{font-size:4rem;color:var(--green-2)}.blog-content.svelte-zz9e5g{background-color:var(--white);padding:var(--small-margin) 10% var(--large-margin) 10%;margin-top:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<article><img alt="" class="hero svelte-zz9e5g"${add_attribute("src", data.coverPhoto, 0)}>
	<div class="blog-content svelte-zz9e5g"><div class="post-meta svelte-zz9e5g">${each(data.authors, (author) => {
    return `<div class="author svelte-zz9e5g"><img${add_attribute("alt", author, 0)} class="authorPhoto svelte-zz9e5g" src="${"/" + escape(author.toLowerCase(), true) + "-profile.png"}">
					<h3 class="blog-author_name display svelte-zz9e5g">${escape(author)}</h3>
				</div>`;
  })}
			<h3 class="blog-date display svelte-zz9e5g"><div>Posted: ${escape(moment(data.date).format("MMMM Do YYYY"))}</div>
				${moment(data.updatedDate).format("MMMM Do YYYY") != moment(data.date).format("MMMM Do YYYY") ? `<div>Updated:
						${escape(moment(data.updatedDate).format("MMMM Do YYYY"))}</div>` : ``}</h3></div>
		<h1 class="display blog-header svelte-zz9e5g">${escape(data.title)}</h1>
		<div class="blog">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></article>

<div class="cards">${data.related ? `${each(data.related, (post) => {
    return `${validate_component(Card, "Card").$$render($$result, { contents: post }, {}, {})}`;
  })}` : ``}
	${data.firstTag ? `${validate_component(PromoCard, "PromoCard").$$render($$result, { tag: data.firstTag }, {}, {})}` : ``}
</div>`;
});
export {
  Page as default
};
