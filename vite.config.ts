import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { getBlogRoutes } from "./scripts/blog-routes.mjs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    dirStyle: "nested",
    beastiesOptions: false,
    includedRoutes: () => [
      "/",
      "/services",
      "/services/custom",
      "/services/consulting",
      "/services/agents",
      "/services/infrastructure",
      "/about",
      "/case-studies",
      "/contact",
      "/privacy-policy",
      "/terms",
      "/refund",
      "/blog/agentic-ai-implementation-guide",
      "/es",
      "/es/servicios",
      "/es/servicios/agentes",
      "/es/servicios/infraestructura",
      "/es/servicios/consultoria",
      "/es/servicios/personalizado",
      "/es/nosotros",
      "/es/casos-de-exito",
      "/es/contacto",
      "/404",
      ...getBlogRoutes(),

    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes("node_modules")) return;
          if (id.includes("react-router")) return "router";
          if (id.includes("framer-motion") || id.includes("motion-dom") || id.includes("motion-utils")) return "motion";
          if (id.includes("@supabase")) return "supabase";
          if (id.includes("dotted-map") || id.includes("proj4") || id.includes("mgrs") || id.includes("wkt-parser")) return "worldmap";
          if (id.includes("three") || id.includes("cobe") || id.includes("ogl")) return "three";
          if (id.includes("recharts") || id.includes("d3-")) return "charts";
          if (id.includes("@radix-ui")) return "radix";
          if (id.includes("react-dom") || id.includes("/react/") || id.includes("scheduler")) return "react";
          return "vendor";
        },
      },
    },
  },
}));

