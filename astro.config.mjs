import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://pawelgawlikdev.github.io/extensions_space/",
  base: "extensions_space",
  integrations: [tailwind(), icon(), react()],
});
