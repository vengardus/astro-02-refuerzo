import { defineCollection, z } from "astro:content";

const guidesCollection = defineCollection({
    type: "content",
    schema: ({image}) =>  z.object({
        title: z.string(),
        description: z.string(),
        image: image().refine(
            (img) => img.width < 1200,
            "La imagen debe tener un ancho menor a 1200",
          ),
        date: z.date(),
        tags: z.array(z.string()),
        category: z.string(),
        // Relation
        //category: reference("categories"),
    }),
});

const blogCollection = defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine(
          (img) => img.width < 1200,
          "La imagen debe tener un ancho menor a 1200",
        ),
        isDraft: z.boolean().default(false),
  
        // Relation
        author: z.string(),
        //author: reference("authors"),
  
        // Relationm
        tags: z.array(z.string()),
      }),
  });

export const collections = {
    guides: guidesCollection,
    blog: blogCollection
}