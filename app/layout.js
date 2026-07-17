import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NetlifyIdentityRedirect from "@/components/NetlifyIdentityRedirect";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://anytechsolution.netlify.app"
  ),
  title: "AnyTech Solution — Your Dream is Our Mission",
  description:
    "AnyTech Solution delivers innovative IT, networking, and hardware solutions at affordable prices for businesses worldwide.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        <NetlifyIdentityRedirect />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
