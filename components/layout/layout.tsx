import { Sitemap } from "@/type/layout/sitemap.types";
import React from "react";

type LayoutProps = {
  sitemaps: Sitemap[];
} & React.PropsWithChildren;
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children}</>;
}
