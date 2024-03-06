import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header/Header";
import { Bar } from "../components/Bar/Bar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skypro-music",
  description: "Music service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <div className="wrapper">
          <div className="container">
            <main className="main">
              <Header />
              {children}
            </main>
            <Bar />
            <footer />
          </div>
        </div>
      </body>
    </html>
  );
}
