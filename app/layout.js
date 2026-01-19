import { Poppins, Baskervville } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Orphée Nyny",
  description: "Orphée NYNY est une chanteuse, compositrice, et interprète originaire de la ville de Bitam, dans le nord du Gabon.",
  keywords: "Orphée NYNY, chanteuse gabonaise, musique gabonaise, artiste gabonaise, compositrice africaine, interprète gabonaise, afro-pop Gabon, chanteuse Bitam, musique urbaine Gabon, culture musicale gabonaise, talent gabonais, musique africaine, chanteuse francophone, scène musicale gabonaise, chansons Orphée NYNY",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Orphée Nyny",
    description: "Orphée NYNY est une chanteuse, compositrice, et interprète originaire de la ville de Bitam, dans le nord du Gabon. Propulsez votre présence en ligne avec notre expertise.",
    url: "https://www.orphee-nyny.com/",
    siteName: "Orphée Nyny",
    images: [
      {
        url: "/Orphée-nyny-opengraph@2x.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orphée Nyny",
    description: "Orphée NYNY est une chanteuse, compositrice, et interprète originaire de la ville de Bitam, dans le nord du Gabon. Propulsez votre présence en ligne avec notre expertise.",
    creator: "@orphee_nyny",
    images: ["/Orphée-nyny-opengraph@2x.jpg"],
  },
  verification: {
    google: "******",
  },
  alternates: {
    canonical: "https://www.orphee-nyny.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#FF2600",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${baskervville.variable} antialiased`}
      >
        <ScrollToTop />
        <link href="https://cdn.jsdelivr.net/gh/vaibhav111tandon/vov.css@latest/vov.css" rel="stylesheet" type="text/css"></link>
        <header className="flex items-center justify-center top-0 w-full">
          <Navbar />
        </header>
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

