module.exports = function (eleventyConfig) {
  /* =========================
     Static assets (CSS, images, etc.)
     ========================= */
  eleventyConfig.addPassthroughCopy("src/assets");

  /* =========================
     Blog collection (sorted by date)
     ========================= */
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });

  /* =========================
     Return Eleventy config
     ========================= */
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
  };
};
