import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "CaspianJournal Studio",
  projectId: "ap6a0ezp",
  dataset: "production",
  tools: [deskTool(), visionTool()],  // ← plugins yerine tools
  schema: {
    types: schemaTypes,
  },
});
