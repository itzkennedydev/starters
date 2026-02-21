import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "My Store";
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: `Shop the latest products at ${appName}`,
  metadataBase: new URL(appUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL ?? "/logo.svg";

  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
              <a href="/" className="flex items-center gap-2">
                <img src={logoUrl} alt={appName} className="h-8 w-auto" />
                <span className="text-lg font-bold">{appName}</span>
              </a>
              <div className="flex items-center gap-6">
                <a href="/shop" className="text-sm font-medium hover:text-primary">
                  Shop
                </a>
                <a href="/admin" className="text-sm font-medium hover:text-primary">
                  Admin
                </a>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="border-t border-gray-200 bg-surface py-8">
            <div className="mx-auto max-w-7xl px-4 text-center text-sm text-text-secondary">
              &copy; {new Date().getFullYear()} {appName}. All rights reserved.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
