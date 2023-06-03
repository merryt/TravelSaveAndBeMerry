import { c as create_ssr_component, d as each, v as validate_component } from "../../chunks/index2.js";
import { C as Card } from "../../chunks/Card.js";
import { P as PromoCard } from "../../chunks/PromoCard.js";
const Ecap_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".ecap-container.svelte-1p6t58t.svelte-1p6t58t{margin:var(--large-margin) 0;background-color:var(--white);padding:5% 20%;box-shadow:var(--shadowColor)}.ecap-container.svelte-1p6t58t h2.svelte-1p6t58t{margin:0 var(--large-margin) 0}#mc_embed_signup.svelte-1p6t58t form.svelte-1p6t58t{padding:0;margin:0 var(--large-margin) 0}#mce-responses.svelte-1p6t58t.svelte-1p6t58t{margin:0;padding:0}#mc_embed_signup.svelte-1p6t58t div.response.svelte-1p6t58t{margin:0.5rem 0;padding:0}",
  map: null
};
const Ecap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="ecap-container svelte-1p6t58t">
	<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
	<h2 class="svelte-1p6t58t">Sign up for our mailing list!</h2>
	<div id="mc_embed_signup" class="svelte-1p6t58t"><form action="https://travelsaveandbemerry.us20.list-manage.com/subscribe/post?u=6295ef881a181db0a3aabb81b&id=d8b406e59a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate svelte-1p6t58t" target="_blank" novalidate><div id="mc_embed_signup_scroll"><div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
					<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"></div>
				<div id="mce-responses" class="clear foot svelte-1p6t58t"><div class="response svelte-1p6t58t" id="mce-error-response" style="display: none"></div>
					<div class="response svelte-1p6t58t" id="mce-success-response" style="display: none"></div></div>
				
				<div style="position: absolute; left: -5000px" aria-hidden="true"><input type="text" name="b_6295ef881a181db0a3aabb81b_d8b406e59a" tabindex="-1" value=""></div>
				<div class="optionalParent"><div class="clear foot"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
						</div></div></div></form></div>
	<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"><\/script>
	<script type="text/javascript">(function ($) {
			window.fnames = new Array();
			window.ftypes = new Array();
			fnames[0] = 'EMAIL';
			ftypes[0] = 'email';
			fnames[1] = 'FNAME';
			ftypes[1] = 'text';
			fnames[2] = 'LNAME';
			ftypes[2] = 'text';
		})(jQuery);
		var $mcj = jQuery.noConflict(true);
	<\/script>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title.svelte-9qlr7i.svelte-9qlr7i{font-size:18vw;letter-spacing:-10px;width:110%;overflow:hidden;margin-left:-5%;text-align:center;color:var(--green-2)}@media only screen and (max-width: 800px){.title.svelte-9qlr7i.svelte-9qlr7i{font-size:19.3vw}}.personas.svelte-9qlr7i.svelte-9qlr7i{display:flex;justify-content:space-between;height:300px;overflow:hidden;margin-top:-10vw}.personas.svelte-9qlr7i>img.svelte-9qlr7i{align-self:start}@media only screen and (max-width: 600px){.personas.svelte-9qlr7i.svelte-9qlr7i{height:150px}.personas.svelte-9qlr7i>img.svelte-9qlr7i{height:200px}.title.svelte-9qlr7i.svelte-9qlr7i{font-size:22vw}}.about-us.svelte-9qlr7i.svelte-9qlr7i{background-color:var(--white);padding:5% 20%;box-shadow:var(--shadowColor)}.about-us.svelte-9qlr7i>h2.svelte-9qlr7i{font-size:2em;color:var(--green-3)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div><div><h1 class="title display svelte-9qlr7i">Travel Save &amp; Be Merry</h1>
		<div class="personas svelte-9qlr7i"><img alt="Randi's smiling face" src="Randi.png" class="svelte-9qlr7i">
			<img alt="Tyler's smiling face" src="Tyler.png" class="svelte-9qlr7i"></div>

		<div class="about-us svelte-9qlr7i"><h2 class="display svelte-9qlr7i">About Us</h2>
			<p>Randi and Tyler walk through their experiences traveling, saving, and finding happiness,
				well, sorta, we just liked the domain name! We are currently slow traveling around
				Europe.
			</p></div>
		<div class="cards">${each(data.posts, (post) => {
    return `${validate_component(Card, "Card").$$render($$result, { contents: post }, {}, {})}`;
  })}
			${validate_component(PromoCard, "PromoCard").$$render($$result, { tag: "Europe" }, {}, {})}</div>
		${validate_component(Ecap, "Ecap").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
