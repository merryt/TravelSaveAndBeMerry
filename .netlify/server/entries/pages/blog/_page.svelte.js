import { c as create_ssr_component, d as each, v as validate_component } from "../../../chunks/index2.js";
import { C as Card } from "../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="cards">${each(data.posts, (post) => {
    return `${validate_component(Card, "Card").$$render($$result, { contents: post }, {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};
