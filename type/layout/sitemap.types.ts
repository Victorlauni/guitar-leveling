export type Sitemap = {
  items: SitemapItem[];
};

type SitemapItem = {
  title: string;
  url?: string;
  description?: string;
  children?: SitemapItem[];
};
