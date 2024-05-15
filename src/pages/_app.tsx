import "@/styles/globals.css";
import "@/Component/Navbar/navbar.css"
import "@/Component/Header/header.css"
import "@/Component/Contact/contact.css"
import "@/Component/About/about.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
