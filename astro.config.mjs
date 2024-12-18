import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://PawelGawlikDev.github.io/extensions_space",
  base: "startify_web",
  integrations: [tailwind(), icon(), react()],
});
