import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"ORVECT — Investor presentation",description:"Context. Evidence. Control. Learning."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
