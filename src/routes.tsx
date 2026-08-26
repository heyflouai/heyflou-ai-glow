import type { RouteRecord } from "vite-react-ssg";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import { SpanishRoute } from "@/components/i18n/SpanishRoute";

/** Wrap a default-exporting page module into a react-router lazy result. */
const page = (loader: () => Promise<{ default: React.ComponentType }>) => async () => {
  const mod = await loader();
  return { Component: mod.default };
};

/** Same, but forces the page into Spanish (es-MX). */
const spanishPage = (loader: () => Promise<{ default: React.ComponentType }>) => async () => {
  const mod = await loader();
  const Page = mod.default;
  return {
    Component: () => (
      <SpanishRoute>
        <Page />
      </SpanishRoute>
    ),
  };
};

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, lazy: page(() => import("./pages/Home")), entry: "src/pages/Home.tsx" },
      { path: "services", lazy: page(() => import("./pages/Services")) },
      { path: "services/custom", lazy: page(() => import("./pages/services/CustomAutomation")) },
      { path: "services/consulting", lazy: page(() => import("./pages/services/Consulting")) },
      { path: "services/agents", lazy: page(() => import("./pages/services/Agents")) },
      { path: "services/infrastructure", lazy: page(() => import("./pages/services/Infrastructure")) },
      {/* Retired industry pages — redirect to the services hub */}
      { path: "services/healthcare", element: <Navigate to="/services" replace /> },
      { path: "services/fitness-education", element: <Navigate to="/services" replace /> },
      { path: "services/travel-agencies", element: <Navigate to="/services" replace /> },
      { path: "case-studies", lazy: page(() => import("./pages/CaseStudies")) },
      { path: "about", lazy: page(() => import("./pages/About")) },
      { path: "contact", lazy: page(() => import("./pages/Contact")) },
      { path: "pricing", lazy: page(() => import("./pages/Pricing")) },
      { path: "calculator", lazy: page(() => import("./pages/Calculator")) },
      { path: "privacy-policy", lazy: page(() => import("./pages/PrivacyPolicy")) },
      { path: "privacy", element: <Navigate to="/privacy-policy" replace /> },
      { path: "terms", lazy: page(() => import("./pages/Terms")) },
      { path: "refund", lazy: page(() => import("./pages/Refund")) },
      {
        path: "blog/agentic-ai-implementation-guide",
        lazy: page(() => import("./pages/blog/AgenticAiImplementationGuide")),
      },
      // Spanish (es-MX) versions
      { path: "es", lazy: spanishPage(() => import("./pages/Home")) },
      { path: "es/servicios", lazy: spanishPage(() => import("./pages/Services")) },
      { path: "es/precios", lazy: spanishPage(() => import("./pages/Pricing")) },
      { path: "es/contacto", lazy: spanishPage(() => import("./pages/Contact")) },
      // English-slug aliases under /es
      { path: "es/services", element: <Navigate to="/es/servicios" replace /> },
      { path: "es/pricing", element: <Navigate to="/es/precios" replace /> },
      { path: "es/contact", element: <Navigate to="/es/contacto" replace /> },
      // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
      { path: "*", lazy: page(() => import("./pages/NotFound")) },
    ],
  },
];

export default routes;
