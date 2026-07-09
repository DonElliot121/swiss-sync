import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { site } from "@/content/site";

const grotesk = Hanken_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Webdesign Schweiz",
    "Website erstellen",
    "Hosting Schweiz",
    "KI Services",
    "B2B Webagentur",
    "Zürich",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-CH"
      suppressHydrationWarning
      className={`${grotesk.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Nav />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
