import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@/styles/styles.scss";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--ff-default",
});

export const metadata: Metadata = {
  title: "Estatein",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <body className={`${urbanist.variable}`}>
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
