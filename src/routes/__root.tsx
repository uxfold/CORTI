import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCtas } from "@/components/floating-ctas";
import { ScrollToTop } from "@/components/scroll-to-top";
import { AppErrorComponent } from "@/lib/error-component";
import appCss from "../styles.css?url";

const APP_NAME = "Corti Hearing Clinic";

function NotFound() {
  return (
    <main className="site-grid flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-medium tracking-widest text-gold uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        That page isn’t on the Corti site. Head home or book an appointment.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-pill bg-gold px-6 text-sm font-medium text-ink"
      >
        Back to home
      </a>
    </main>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Corti Hearing Clinic — pioneers in hearing care since 2006. Hearing tests, hearing aids, and therapy at Frazer Town, Vijayanagar, and Tumkur.",
      },
      { name: "theme-color", content: "#FAAE00" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
  errorComponent: AppErrorComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <ScrollToTop />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:bg-gold focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <Header />
          <Outlet />
          <Footer />
          <FloatingCtas />
          <Toaster position="top-center" richColors />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
