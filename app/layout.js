import { Geist, Geist_Mono , Iceland, Iceland} from "next/font/google";
import "./globals.css";


const IcelandFont = Iceland({
  subsets : ['latin'],
  weight : '400'
})

export const metadata = {
  title: "Meraki 2K25",
  description:
    "Official website of Meraki 2K25, the annual techfest of IIIT Una",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${IcelandFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
