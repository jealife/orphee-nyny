const BASE_URL = 'https://www.orphee-nyny.com';

const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Galerie Photos — Orphée NYNY',
    description: "Galerie officielle d'Orphée NYNY : portraits en extérieur et photos de concerts.",
    url: `${BASE_URL}/galerie`,
    author: {
        '@type': 'Person',
        name: 'Orphée NYNY',
        url: BASE_URL,
    },
    image: [
        {
            '@type': 'ImageObject',
            contentUrl: `${BASE_URL}/images/ORPHÉE-NYNY_Plage_3.webp`,
            name: 'Orphée NYNY — Portrait plage',
            description: 'Portrait artistique d\'Orphée NYNY en extérieur sur la plage',
        },
        {
            '@type': 'ImageObject',
            contentUrl: `${BASE_URL}/images/ORPHÉE-NYNY_Plage_5.webp`,
            name: 'Orphée NYNY — Portrait nature',
            description: 'Orphée NYNY en shooting photo en pleine nature',
        },
        {
            '@type': 'ImageObject',
            contentUrl: `${BASE_URL}/images/ORPHÉE-NYNY_Plage_20.webp`,
            name: 'Orphée NYNY — Regard',
            description: 'Portrait regard d\'Orphée NYNY lors d\'un shooting professionnel',
        },
        {
            '@type': 'ImageObject',
            contentUrl: `${BASE_URL}/images/ORPHÉE-NYNY_Plage_22.webp`,
            name: 'Orphée NYNY — Ambiance',
            description: 'Photo artistique d\'Orphée NYNY en ambiance naturelle',
        },
        {
            '@type': 'ImageObject',
            contentUrl: `${BASE_URL}/images/concert/EKEAM-LIVE-IF-12-avril-202600002.jpg`,
            name: 'Orphée NYNY — EKEAM LIVE Concert',
            description: 'Orphée NYNY en performance lors du concert EKEAM LIVE, avril 2026',
        },
        {
            '@type': 'ImageObject',
            contentUrl: `${BASE_URL}/images/concert/EKEAM-LIVE-IF-12-avril-202600004.jpg`,
            name: 'Orphée NYNY — EKEAM LIVE scène',
            description: 'Orphée NYNY sur scène lors du concert EKEAM LIVE IF, avril 2026',
        },
    ],
};

export const metadata = {
    title: 'Galerie',
    description: "Galerie photos d'Orphée NYNY : portraits, concerts et moments en coulisses. Découvrez l'univers visuel de l'artiste gabonaise.",
    alternates: {
        canonical: `${BASE_URL}/galerie`,
    },
    openGraph: {
        title: 'Galerie Photos — Orphée NYNY',
        description: "Galerie photos d'Orphée NYNY : portraits, concerts et moments en coulisses.",
        url: `${BASE_URL}/galerie`,
        images: ['/Orphée-nyny-opengraph@2x.jpg'],
    },
};

export default function GalerieLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
            />
            {children}
        </>
    );
}
