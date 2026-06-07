export const metadata = {
    title: 'Clips & Médias',
    description: "Regardez tous les clips et vidéos d'Orphée NYNY. Plongez dans l'univers visuel et musical de l'artiste gabonaise.",
    alternates: {
        canonical: 'https://www.orphee-nyny.com/videos',
    },
    openGraph: {
        title: 'Clips & Médias — Orphée NYNY',
        description: "Regardez tous les clips et vidéos d'Orphée NYNY.",
        url: 'https://www.orphee-nyny.com/videos',
        images: ['/Orphée-nyny-opengraph@2x.jpg'],
    },
};

export default function VideosLayout({ children }) {
    return children;
}
