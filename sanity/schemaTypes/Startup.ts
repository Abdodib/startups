import { defineField, defineType } from "sanity";

export const Startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
        }),
        defineField({
            name: "Author",
            type: "reference",
            to: [{ type: "author" }],
        }),
        defineField({
            name: "views",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (rule) => rule.required().error("please enter a category").min(1).max(20),
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "pitch",
            type: "markdown",
        }),
    ],
});