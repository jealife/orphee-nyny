'use client'
import Link from 'next/link';
import { RiArrowLeftLine } from 'react-icons/ri';

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen bg-[#F2E1CA]">
            {/* Hero Section */}
            <div className="relative h-[30vh] bg-gradient-to-br from-[#2f0f09] to-[#4a1810]">
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    <Link
                        href="/"
                        className="absolute top-8 left-6 text-white/80 hover:text-white flex items-center gap-2 text-lg transition-colors"
                    >
                        <RiArrowLeftLine className="text-2xl" />
                        <span className="font-[family-name:var(--font-poppins)]">Retour</span>
                    </Link>
                    <h1 className="text-4xl lg:text-6xl text-[#F2E1CA] font-[family-name:var(--font-baskervville)]">
                        Mentions Légales
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8 text-[#2f0f09]">
                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Éditeur du site
                        </h2>
                        <div className="font-[family-name:var(--font-poppins)] space-y-2">
                            <p><strong>Nom :</strong> Orphée NYNY</p>
                            <p><strong>Activité :</strong> Artiste, chanteuse, compositrice, interprète professionnelle</p>
                            <p><strong>Localisation :</strong> Bitam, Gabon</p>
                            <p><strong>Email :</strong> contact@orphee-nyny.com</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Hébergement
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)]">
                            Ce site est hébergé par [Nom de l'hébergeur]<br />
                            [Adresse de l'hébergeur]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Propriété intellectuelle
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed">
                            L'ensemble de ce site relève de la législation sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les
                            représentations iconographiques et photographiques.
                        </p>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed mt-4">
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement
                            interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Crédits
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed">
                            Conception et réalisation : [Nom du développeur/agence]<br />
                            Photographies : © Orphée NYNY - Tous droits réservés
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Contact
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed">
                            Pour toute question ou demande d'information concernant le site, vous pouvez nous contacter à l'adresse
                            suivante : <a href="mailto:contact@orphee-nyny.com" className="text-[#2f0f09] underline hover:no-underline">contact@orphee-nyny.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
