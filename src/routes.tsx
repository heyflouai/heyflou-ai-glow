import type { RouteRecord } from "vite-react-ssg";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";

/** Wrap a default-exporting page module into a react-router lazy result. */
const page = (loader: () => Promise<{ default: React.ComponentType }>) => async () => {
  const mod = await loader();
  return { Component: mod.default };
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
      // Retired industry pages — redirect to the services hub
      { path: "services/healthcare", element: <Navigate to="/services" replace /> },
      { path: "services/fitness-education", element: <Navigate to="/services" replace /> },
      { path: "services/travel-agencies", element: <Navigate to="/services" replace /> },
      { path: "case-studies", lazy: page(() => import("./pages/CaseStudies")) },
      { path: "about", lazy: page(() => import("./pages/About")) },
      { path: "contact", lazy: page(() => import("./pages/Contact")) },
      { path: "pricing", element: <Navigate to="/services" replace /> },
      { path: "calculator", element: <Navigate to="/services" replace /> },
      { path: "privacy-policy", lazy: page(() => import("./pages/PrivacyPolicy")) },
      { path: "privacy", element: <Navigate to="/privacy-policy" replace /> },
      { path: "terms", lazy: page(() => import("./pages/Terms")) },
      { path: "refund", lazy: page(() => import("./pages/Refund")) },
      { path: "blog", lazy: page(() => import("./pages/blog/BlogIndex")) },
      {
        path: "blog/agentic-ai-implementation-guide",
        lazy: page(() => import("./pages/blog/AgenticAiImplementationGuide")),
      },
      { path: "blog/:slug", lazy: page(() => import("./pages/blog/BlogPost")) },
      // Spanish (es-MX) versions — locale is part of the route, so translations
      // resolve at build time and the pre-rendered HTML is Spanish.
      { path: "es", lazy: page(() => import("./pages/Home")) },
      { path: "es/servicios", lazy: page(() => import("./pages/Services")) },
      { path: "es/servicios/agentes", lazy: page(() => import("./pages/services/Agents")) },
      {
        path: "es/servicios/infraestructura",
        lazy: page(() => import("./pages/services/Infrastructure")),
      },
      { path: "es/servicios/consultoria", lazy: page(() => import("./pages/services/Consulting")) },
      {
        path: "es/servicios/personalizado",
        lazy: page(() => import("./pages/services/CustomAutomation")),
      },
      { path: "es/nosotros", lazy: page(() => import("./pages/About")) },
      { path: "es/casos-de-exito", lazy: page(() => import("./pages/CaseStudies")) },
      { path: "es/contacto", lazy: page(() => import("./pages/Contact")) },
      { path: "es/blog", lazy: page(() => import("./pages/blog/BlogIndex")) },
      { path: "es/blog/:slug", lazy: page(() => import("./pages/blog/BlogPost")) },
      { path: "es/precios", element: <Navigate to="/es/servicios" replace /> },
      // English-slug aliases under /es
      { path: "es/services", element: <Navigate to="/es/servicios" replace /> },
      { path: "es/services/agents", element: <Navigate to="/es/servicios/agentes" replace /> },
      {
        path: "es/services/infrastructure",
        element: <Navigate to="/es/servicios/infraestructura" replace />,
      },
      {
        path: "es/services/consulting",
        element: <Navigate to="/es/servicios/consultoria" replace />,
      },
      { path: "es/services/custom", element: <Navigate to="/es/servicios/personalizado" replace /> },
      { path: "es/about", element: <Navigate to="/es/nosotros" replace /> },
      { path: "es/case-studies", element: <Navigate to="/es/casos-de-exito" replace /> },
      { path: "es/contact", element: <Navigate to="/es/contacto" replace /> },
      // Pre-rendered 404 document used by static hosting for unknown paths
      { path: "404", lazy: page(() => import("./pages/NotFound")) },
      // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
      { path: "*", lazy: page(() => import("./pages/NotFound")) },
    ],
  },
];

export default routes;
