import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bone px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-sm text-stone">404</div>
        <h1 className="mt-4 text-3xl font-light lowercase text-graphite">página no encontrada · page not found</h1>
        <p className="mt-3 text-sm text-graphite/70">la url que buscas no existe o se ha movido.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block label-tag bg-graphite text-bone px-4 py-2 hover:bg-moss transition-colors"
          >
            volver a inicio →
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "auba — ropa técnica honesta · barcelona" },
      { name: "description", content: "Una camiseta merino/tencel a 72€. Fabricada en Portugal. Desglose público de costes." },
      { name: "author", content: "auba" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "auba" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#5a6b4a" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
