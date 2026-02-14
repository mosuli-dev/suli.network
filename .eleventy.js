module.exports = function (eleventyConfig) {
  /* =========================
     Static assets (CSS, images, etc.)
     ========================= */
  eleventyConfig.addPassthroughCopy("src/assets");

  /* =========================
     Blog collection (sorted by date)
     ========================= */
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  /* =========================
     Tags filter
     ========================= */
  eleventyConfig.addFilter("filterTags", function (tags) {
    return (tags || []).filter(tag => !["all", "collections"].includes(tag));
  });

  /* =========================
     Image shortcode
     ========================= */
  eleventyConfig.addShortcode("image", function (src, alt = "", className="", width = "", height = "") {
    return `
      <figure class="content-image">
        <img src="/assets${src}" alt="${alt}"
        class="${className}"
        ${width ? `width="${width}"` : ""} 
        ${height ? `height="${height}"` : ""}
        loading="lazy" />
      </figure>
    `;
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
