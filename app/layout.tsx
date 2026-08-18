import type { Metadata } from "next";
import "./globals.css";

const assetPrefix = process.env.GITHUB_ACTIONS === "true" ? "/clarivoz" : "";

export const metadata: Metadata = {
  title: "ClariVoz — Aplicativo Acessível",
  description: "Tecnologia que transforma informação em autonomia.",
  icons: {
    icon: `${assetPrefix}/favicon.svg`,
    shortcut: `${assetPrefix}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
