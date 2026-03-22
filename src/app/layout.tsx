import type { Metadata } from "next";
import "./globals.css";
import { OSProvider } from "../components/OSProvider";
import DeviceShell from "../components/DeviceShell";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "iOS Portfolio",
  description: "A highly interactive, responsive portfolio website that replicates an iOS interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased overflow-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <OSProvider>
            <DeviceShell>
              {children}
            </DeviceShell>
          </OSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
