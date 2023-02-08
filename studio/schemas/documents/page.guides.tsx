import { baseLanguage } from "../../../languages";
import { SchemaName } from "../../../types.sanity";
import {
  ORDER_PUBLISHED_DESC,
  pageBase,
  PARENT_FIELD,
  PUBLISHED_AT_FIELD,
} from "./_page";
import { Textbook } from "@vectopus/atlas-icons-react";
import React from "react";
import { defineType } from "sanity";

export const SCHEMA_NAME: SchemaName = "page.guides";

export default defineType({
  name: SCHEMA_NAME,
  title: "Guides",
  type: "document",
  orderings: [ORDER_PUBLISHED_DESC],
  options: {
    singleton: true,
  },
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: "hero.0.image",
    },
  },
  icon: () => <Textbook weight="thin" size={20} />,
  fieldsets: [...pageBase.fieldsets],
  fields: [PARENT_FIELD, ...pageBase.fields, PUBLISHED_AT_FIELD],
});
