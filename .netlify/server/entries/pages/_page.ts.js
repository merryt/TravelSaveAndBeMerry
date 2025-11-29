import { g as getAllPosts } from "../../chunks/getAllPosts.js";
async function load() {
  let sortedPosts = getAllPosts();
  const topPosts = (await sortedPosts).slice(0, 5);
  return {
    posts: topPosts
  };
}
export {
  load
};
