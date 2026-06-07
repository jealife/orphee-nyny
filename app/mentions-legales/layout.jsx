export const metadata = {
    title: 'Mentions Légales',
    description: "Mentions légales du site officiel d'Orphée NYNY : éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation.",
    alternates: {
        canonical: 'https://www.orphee-nyny.com/mentions-legales',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function MentionsLegalesLayout({ children }) {
    return children;
}
