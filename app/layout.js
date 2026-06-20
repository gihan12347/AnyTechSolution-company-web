import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NetlifyIdentityRedirect from "@/components/NetlifyIdentityRedirect";
import "./globals.css";

export const metadata = {
  title: "AnyTech Solution — Your Dream is Our Mission",
  description:
    "AnyTech Solution delivers innovative IT, networking, and hardware solutions at affordable prices for businesses worldwide.",
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
