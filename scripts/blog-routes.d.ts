export interface BlogRoutePost {
  lang: 'en' | 'es';
  slug: string;
  route: string;
  date: string;
  dateModified: string;
}

export declare function getBlogPosts(): BlogRoutePost[];
export declare function getBlogRoutes(): string[];
