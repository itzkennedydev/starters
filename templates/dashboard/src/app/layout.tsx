import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Dashboard";
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: `${appName} admin panel`,
  metadataBase: new URL(appUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="ml-64 min-h-screen p-8">{children}</main>
      </body>
    </html>
  );
}
