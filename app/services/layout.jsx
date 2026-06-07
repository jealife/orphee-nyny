export const metadata = {
    title: 'Services',
    description: "Orphée NYNY propose ses services artistiques : concerts & performances live, composition musicale, coaching vocal et collaborations. Faites de votre projet une expérience unique.",
    alternates: {
        canonical: 'https://www.orphee-nyny.com/services',
    },
    openGraph: {
        title: 'Services Artistiques — Orphée NYNY',
        description: "Concerts, compositions musicales, coaching vocal et collaborations avec Orphée NYNY.",
        url: 'https://www.orphee-nyny.com/services',
        images: ['/Orphée-nyny-opengraph@2x.jpg'],
    },
};

export default function ServicesLayout({ children }) {
    return children;
}
