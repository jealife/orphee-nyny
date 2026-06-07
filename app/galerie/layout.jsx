export const metadata = {
    title: 'Galerie',
    description: "Galerie photos d'Orphée NYNY : portraits, concerts et moments en coulisses. Découvrez l'univers visuel de l'artiste gabonaise.",
    alternates: {
        canonical: 'https://www.orphee-nyny.com/galerie',
    },
    openGraph: {
        title: 'Galerie Photos — Orphée NYNY',
        description: "Galerie photos d'Orphée NYNY : portraits, concerts et moments en coulisses.",
        url: 'https://www.orphee-nyny.com/galerie',
        images: ['/Orphée-nyny-opengraph@2x.jpg'],
    },
};

export default function GalerieLayout({ children }) {
    return children;
}
