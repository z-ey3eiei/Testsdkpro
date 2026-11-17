import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TestSDKPro · Next.js Starter",
  description: "Next.js App Router static-export starter for ai-sdk.pro import and deploy testing.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
