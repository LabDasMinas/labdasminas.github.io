import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export const metadata: Metadata = {
  title: "Lab das Minas",
  description: "Conheça o Lab das Minas, grupo de pesquisa e extensão da USP Leste focado na inserção de mulheres na Ciência e Tecnologia por meio de atividades e oficinas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_Lab.png" sizes="any" />
      </head>
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
