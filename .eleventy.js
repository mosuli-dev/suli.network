module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};