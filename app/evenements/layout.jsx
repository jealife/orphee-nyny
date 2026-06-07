export const metadata = {
    title: 'Événements',
    description: "Retrouvez tous les concerts et événements d'Orphée NYNY. Dates de tournée, festivals et performances live à venir.",
    alternates: {
        canonical: 'https://www.orphee-nyny.com/evenements',
    },
    openGraph: {
        title: 'Événements & Concerts — Orphée NYNY',
        description: "Retrouvez tous les concerts et événements d'Orphée NYNY. Dates de tournée et performances live à venir.",
        url: 'https://www.orphee-nyny.com/evenements',
        images: ['/Orphée-nyny-opengraph@2x.jpg'],
    },
};

export default function EvenementsLayout({ children }) {
    return children;
}
