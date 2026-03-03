import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { Urbanist } from "next/font/google";

// Font for body/paragraphs
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Elisha's Portfolio",
  description:
    "Showcasing my projects, skills, and experience in web development and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={` ${urbanist.variable} font-sans antialiased`}
      >
        <Header />
        <Toaster position="top-center" />
        <div>{children}</div>
      </body>
    </html>
  );
}
