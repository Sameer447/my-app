import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Click on the play icon to open video",
  description: "",
  openGraph: {
    title: "Viral Video",
    description: "",
    url: "https://my-app-five-ruby.vercel.app/",
    siteName: "My Site",
    images: [
      {
        url: "https://my-app-five-ruby.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
