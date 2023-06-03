import { g as getAllPosts } from "../../../chunks/getAllPosts.js";
async function load() {
  const sortedPosts = getAllPosts();
  return {
    posts: sortedPosts
  };
}
export {
  load
};
