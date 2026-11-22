import Link from "next/link";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ items, dark = false }: { items: readonly BreadcrumbItem[]; dark?: boolean }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav className={`breadcrumbs${dark ? " breadcrumbs--dark" : ""}`} aria-label="Breadcrumb">
        <ol className="page-shell breadcrumbs-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.name}>
                {item.path && !isLast ? (
                  <Link href={item.path}>{item.name}</Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>{item.name}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
