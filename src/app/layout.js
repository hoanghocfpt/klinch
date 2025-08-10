import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "AI SHOPPING AGENT",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* favicon */}
      <head>
        <link rel="icon" href="/images/klinch_logo.png" />
        <link rel="apple-touch-icon" href="/images/klinch_logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
