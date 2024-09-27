import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection, type CollectionEntry } from "astro:content";
import MarkdownIt from "markdown-it/index.mjs";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export const GET: APIRoute = async ({ params, request, site }) => {
  const guides: CollectionEntry<"guides">[] = await getCollection("guides");

  return rss({
    //stylesheet: '/styles/rss.xsl',

    // `<title>` field in output xml
    title: "Vengardus’s Blog",
    // `<description>` field in output xml
    description: "Mis pininos en Astro",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite

    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
    },

    site: site ?? "",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: guides.map(({ data, slug, body }) => ({
      title: data.title,
      description: data.description,
      link: `/guides/${slug}`,
      pubDate: data.date,

      content: sanitizeHtml(parser.render(body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),

      customData: `<media:content
          type="image/${data.image.format === "jpg" ? "jpeg" : "png"}"
          width="${data.image.width}"
          height="${data.image.height}"
          medium="image"
          url="${site + data.image.src}" />
      `,
    })),
    // (optional) inject custom xml
    customData: `<language>es-mx</language>`,
  });
};
