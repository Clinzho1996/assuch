import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  weight: "400",
});

export const metadata = {
  title: "Assuch Global",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(inter.className, montserrat.variable)}>{children}</body>
    </html>
  );
}