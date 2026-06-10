import { marked } from "marked";

import content from "./content.md?raw";

export function load() {
  return {
    content: marked.parse(content, { async: false }),
  };
}
