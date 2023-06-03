import { g as getAllPosts } from "../../../../chunks/getAllPosts.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../2020-11-09-about-us.md": () => import("../../../../chunks/2020-11-09-about-us.js"), "../2021-04-01-a-correction-is-coming.md": () => import("../../../../chunks/2021-04-01-a-correction-is-coming.js"), "../2021-04-01-croatia-dalmatia-region-plan-your-own-adventure.md": () => import("../../../../chunks/2021-04-01-croatia-dalmatia-region-plan-your-own-adventure.js"), "../2021-04-01-dalmatian-coast-for-the-frugal-traveler.md": () => import("../../../../chunks/2021-04-01-dalmatian-coast-for-the-frugal-traveler.js"), "../2021-04-01-mt-bierstadt.md": () => import("../../../../chunks/2021-04-01-mt-bierstadt.js"), "../2021-04-01-mt-huron.md": () => import("../../../../chunks/2021-04-01-mt-huron.js"), "../2021-04-01-north-table-mountain.md": () => import("../../../../chunks/2021-04-01-north-table-mountain.js"), "../2021-04-01-our-14ers-list.md": () => import("../../../../chunks/2021-04-01-our-14ers-list.js"), "../2021-04-01-white-ranch-open-space.md": () => import("../../../../chunks/2021-04-01-white-ranch-open-space.js"), "../2021-04-06-lessons-learned-living-in-490-square-feet.md": () => import("../../../../chunks/2021-04-06-lessons-learned-living-in-490-square-feet.js"), "../2021-04-06-stuck-in-the-snow-after-mt-democrat.md": () => import("../../../../chunks/2021-04-06-stuck-in-the-snow-after-mt-democrat.js"), "../2021-04-06-taking-a-sebatical.md": () => import("../../../../chunks/2021-04-06-taking-a-sebatical.js"), "../2021-04-07-crested-butte-to-crystal-mills-via-schofield-pass.md": () => import("../../../../chunks/2021-04-07-crested-butte-to-crystal-mills-via-schofield-pass.js"), "../2021-04-07-la-plata.md": () => import("../../../../chunks/2021-04-07-la-plata.js"), "../2021-04-07-lost-creek-wilderness.md": () => import("../../../../chunks/2021-04-07-lost-creek-wilderness.js"), "../2021-04-07-missouri-mountain.md": () => import("../../../../chunks/2021-04-07-missouri-mountain.js"), "../2021-04-07-mount-of-the-holy-cross.md": () => import("../../../../chunks/2021-04-07-mount-of-the-holy-cross.js"), "../2021-04-07-packing-lite-list-for-her.md": () => import("../../../../chunks/2021-04-07-packing-lite-list-for-her.js"), "../2021-04-07-packing-lite-list-for-him.md": () => import("../../../../chunks/2021-04-07-packing-lite-list-for-him.js"), "../2021-04-07-shavano-tabeguache-traverse.md": () => import("../../../../chunks/2021-04-07-shavano-tabeguache-traverse.js"), "../2021-10-18-selling-all-our-stuff.md": () => import("../../../../chunks/2021-10-18-selling-all-our-stuff.js"), "../2021-10-18-tulum-mexico-2021.md": () => import("../../../../chunks/2021-10-18-tulum-mexico-2021.js"), "../2021-10-26-playa-del-carmen-2021.md": () => import("../../../../chunks/2021-10-26-playa-del-carmen-2021.js"), "../2021-11-05-puerto-morelos.md": () => import("../../../../chunks/2021-11-05-puerto-morelos.js"), "../2021-11-12-valladolid.md": () => import("../../../../chunks/2021-11-12-valladolid.js"), "../2021-12-02-merida.md": () => import("../../../../chunks/2021-12-02-merida.js"), "../2021-12-10-guadalajara-mexico-2021.md": () => import("../../../../chunks/2021-12-10-guadalajara-mexico-2021.js"), "../2022-01-22-mexico-city-part-one.md": () => import("../../../../chunks/2022-01-22-mexico-city-part-one.js"), "../2022-02-05-mexico-city-part-two-and-a-little-nc-and-denver.md": () => import("../../../../chunks/2022-02-05-mexico-city-part-two-and-a-little-nc-and-denver.js"), "../2022-03-04-san-cristóbal-de-las-casas.md": () => import("../../../../chunks/2022-03-04-san-cristóbal-de-las-casas.js"), "../2022-04-11-puebla.md": () => import("../../../../chunks/2022-04-11-puebla.js"), "../2022-04-21-queretaro.md": () => import("../../../../chunks/2022-04-21-queretaro.js"), "../2022-04-27-getting-started-on-our-bike-trip.md": () => import("../../../../chunks/2022-04-27-getting-started-on-our-bike-trip.js"), "../2022-05-01-eurovelo-3.md": () => import("../../../../chunks/2022-05-01-eurovelo-3.js"), "../2022-05-17-ev6-france-and-the-first-500-miles-of-our-journey-are-behind-us.md": () => import("../../../../chunks/2022-05-17-ev6-france-and-the-first-500-miles-of-our-journey-are-behind-us.js"), "../2022-05-31-switzerland-2022-bike-trip.md": () => import("../../../../chunks/2022-05-31-switzerland-2022-bike-trip.js"), "../2022-07-07-austria-to-visit-dylan.md": () => import("../../../../chunks/2022-07-07-austria-to-visit-dylan.js"), "../2022-07-07-ev6-germany-2022.md": () => import("../../../../chunks/2022-07-07-ev6-germany-2022.js"), "../2022-09-29-back-to-the-states.md": () => import("../../../../chunks/2022-09-29-back-to-the-states.js"), "../2022-10-01-merry-midwest-roadtrip-part-i-north-shore-of-lake-superior.md": () => import("../../../../chunks/2022-10-01-merry-midwest-roadtrip-part-i-north-shore-of-lake-superior.js"), "../2022-10-19-merry-midwest-roadtrip-part-3-cleveland.md": () => import("../../../../chunks/2022-10-19-merry-midwest-roadtrip-part-3-cleveland.js"), "../2022-10-31-merry-midwest-roadtrip-part-2-michigan.md": () => import("../../../../chunks/2022-10-31-merry-midwest-roadtrip-part-2-michigan.js"), "../2022-11-11-merry-midwest-roadtrip-part-4-dc.md": () => import("../../../../chunks/2022-11-11-merry-midwest-roadtrip-part-4-dc.js"), "../2023-01-28-malta-month-of-merry-ment.md": () => import("../../../../chunks/2023-01-28-malta-month-of-merry-ment.js"), "../2023-02-13-malta-month-of-merry-ment-part-ii.md": () => import("../../../../chunks/2023-02-13-malta-month-of-merry-ment-part-ii.js"), "../2023-03-02-lisbon-lagos-and-portimao…we’re-in-portugal.md": () => import("../../../../chunks/2023-03-02-lisbon-lagos-and-portimao…we’re-in-portugal.js"), "../2023-03-30-how-to-launch-a-boat-in-fethiye.md": () => import("../../../../chunks/2023-03-30-how-to-launch-a-boat-in-fethiye.js"), "../2023-03-31-türkiye-part-i-fethiye-and-the-turquoise-coast.md": () => import("../../../../chunks/2023-03-31-türkiye-part-i-fethiye-and-the-turquoise-coast.js"), "../2023-04-19-türkiye-part-ii-cappadocia-and-istanbul.md": () => import("../../../../chunks/2023-04-19-türkiye-part-ii-cappadocia-and-istanbul.js"), "../2023-06-02-budapest.md": () => import("../../../../chunks/2023-06-02-budapest.js") }), `../${params.slug}.md`);
  let { title, date, description, coverPhoto, authors, tags, updatedDate } = post.metadata;
  const content = post.default;
  let filteredPosts = [];
  let firstTag = tags ? tags.split(",")[0] : "Europe";
  const sortedPosts = getAllPosts();
  filteredPosts = (await sortedPosts).filter((post2) => post2.meta.tags?.includes(firstTag));
  authors = authors.toString().split(",");
  return {
    description,
    coverPhoto,
    content,
    title,
    date,
    authors,
    tags,
    firstTag,
    updatedDate,
    related: filteredPosts.slice(0, 2)
  };
}
export {
  load
};
