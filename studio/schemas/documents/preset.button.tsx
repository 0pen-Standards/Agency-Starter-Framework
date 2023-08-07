import {
  BUTTON_FONT_OPTIONS,
  BUTTON_FONT_SIZE_OPTIONS,
  BUTTON_FONT_WEIGHT_OPTIONS,
} from "../../../components/buttons/button.options";
import {
  BORDER_RADIUS_OPTIONS,
  BORDER_WIDTH_OPTIONS,
  PADDING_OPTIONS,
} from "../../../types";
import { optionsToList } from "../../utils/fields/optionsToList";
import { StarBookmark } from "@vectopus/atlas-icons-react";
import React from "react";
import { defineField, defineType, StringRule, SlugRule } from "sanity";

export default defineType({
  name: "preset.button",
  title: "Button preset",
  type: "document",
  icon: () => <StarBookmark weight="thin" size={20} />,
  preview: {
    select: {
      title: "title",
      description: "description",
    },
    prepare({ title = "Button preset", description = "" }) {
      return {
        title: title,
        subtitle: description,
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Identifier",
      type: "slug",
      validation: (Rule: SlugRule) => Rule.required(),
      options: {
        source: (doc, options) => (options.parent as any).title,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "theme",
      title: "Theme",
      type: "object",
      components: {
        field: (props) => (
          <div>
            <pre>{JSON.stringify(props.value, null, 2)}</pre>
            {props.renderDefault(props)}
          </div>
        ),
      },
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "styles",
          options: {
            fields: [
              {
                name: "size",
                type: "select",
                options: {
                  list: optionsToList(BUTTON_FONT_SIZE_OPTIONS),
                },
              },
              {
                name: "weight",
                type: "select",
                options: {
                  list: optionsToList(BUTTON_FONT_WEIGHT_OPTIONS),
                },
              },
              {
                name: "font",
                type: "select",
                options: {
                  list: optionsToList(BUTTON_FONT_OPTIONS),
                },
              },
              {
                name: "color",
                type: "color",
              },
              {
                name: "uppercase",
                type: "boolean",
              },
            ],
          },
        }),

        defineField({
          name: "background",
          title: "Background",
          type: "styles",
          options: {
            fields: [
              {
                name: "color",
                type: "color",
              },
              {
                name: "paddingX",
                type: "select",
                options: {
                  list: optionsToList(PADDING_OPTIONS, true),
                },
              },
              {
                name: "paddingY",
                type: "select",
                options: {
                  list: optionsToList(PADDING_OPTIONS, true),
                },
              },
            ],
          },
        }),

        defineField({
          name: "border",
          title: "Border",
          type: "styles",
          options: {
            fields: [
              {
                name: "color",
                type: "color",
              },
              {
                name: "width",
                type: "select",
                options: {
                  list: optionsToList(BORDER_WIDTH_OPTIONS),
                },
              },
              {
                name: "radius",
                type: "select",
                options: {
                  list: optionsToList(BORDER_RADIUS_OPTIONS),
                },
              },
            ],
          },
        }),
      ],
    }),
  ],
});
