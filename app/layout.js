import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jason Alexander's Website",
  description: "Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      </head>
      <body className="cool-background cool-background-2 page-content">
        <NavBar/>

        <div className="page-content">
          {children}
        </div>
      </body>
    </html>
  );
}
