import { Outfit } from "next/font/google";
import './about.css'
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return <div className="">{children}</div>;
}
