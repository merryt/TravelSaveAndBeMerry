import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "./index2.js";
import { g as getAllPosts } from "./getAllPosts.js";
const PromoCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".promo-card.svelte-njqvfu.svelte-njqvfu{position:relative;background-color:var(--green-3);align-items:center}.promo-card.svelte-njqvfu>.svelte-njqvfu{position:relative;z-index:10;color:white}.promo-card.svelte-njqvfu.svelte-njqvfu::before,.promo-card.svelte-njqvfu.svelte-njqvfu::after{content:' ';position:absolute;top:0;left:0;width:100%;height:100%}.promo-card.svelte-njqvfu.svelte-njqvfu::before{background:url(/images/crystalmills4.jpg) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;filter:blur(8px) sepia(76%) hue-rotate(89deg) grayscale(17%) brightness(0.6);z-index:1;opacity:90%}.promo-card.svelte-njqvfu.svelte-njqvfu::after{z-index:2;opacity:60%;background-color:var(--green-3)}.promo-card.svelte-njqvfu>h4.svelte-njqvfu{font-size:14px;font-weight:500;margin:33px 0 0 0}.promo-card.svelte-njqvfu>h2.svelte-njqvfu{margin:0;color:var(--white);text-align:center;font-size:56px}.promo-card.svelte-njqvfu>a.svelte-njqvfu{text-decoration:none;margin-top:var(--small-margin);border-bottom:1px solid rgba(255, 255, 255, 0.5);padding:0 10px var(--small-margin) 10px;text-align:center;width:90%}.promo-card.svelte-njqvfu>a.svelte-njqvfu:first-of-type{margin-top:0}.promo-card.svelte-njqvfu>a.svelte-njqvfu:last-of-type{border-bottom:none}",
  map: null
};
const PromoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  const sortedPosts = getAllPosts();
  let topThreePosts = [123];
  sortedPosts.then((data) => {
    topThreePosts = data.filter((post) => post.meta?.tags?.toLowerCase().includes(tag.toLowerCase())).slice(0, 3);
  });
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  $$result.css.add(css);
  return `<div class="promo-card card svelte-njqvfu"><h4 class="svelte-njqvfu">Travel, Save, and be Merry</h4>
	<h2 class="display svelte-njqvfu">${escape(tag)}</h2>
	<svg width="183" height="149" viewBox="0 0 183 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-njqvfu"><path opacity="0.5" d="M52.1029 41.75C53.8349 38.75 58.1651 38.75
        59.8971 41.75L94.5381 101.75C96.2702 104.75 94.1051 108.5 90.641
        108.5H21.359C17.8949 108.5 15.7298 104.75 17.4619 101.75L52.1029
                    41.75Z" stroke="white" stroke-width="7"></path><path opacity="0.5" d="M104.603 13.75C106.335 10.75 110.665 10.75 112.397 13.75L163.06 101.5C164.792 104.5 162.627 108.25 159.162 108.25H57.8375C54.3734 108.25 52.2083 104.5 53.9404 101.5L104.603 13.75Z" stroke="white" stroke-width="7"></path></svg>
	${each(topThreePosts, (post) => {
    return `<a${add_attribute("href", post.path, 0)} class="svelte-njqvfu">${escape(post.meta?.title)}</a>`;
  })}
</div>`;
});
export {
  PromoCard as P
};
