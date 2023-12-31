import "./globals.css";
import { connect } from "./dbConfig/dbConfig";
import { Inter } from "next/font/google";
import Nav from "./{components}/Nav";
connect();

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by benjamin samuel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen bg-nav">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
