import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <Header />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
