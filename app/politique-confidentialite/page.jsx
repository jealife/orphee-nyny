'use client'
import Link from 'next/link';
import { RiArrowLeftLine } from 'react-icons/ri';

export default function PolitiqueConfidentialitePage() {
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
                        Politique de Confidentialité
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8 text-[#2f0f09]">
                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Introduction
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed">
                            La présente politique de confidentialité définit et vous informe de la manière dont Orphée NYNY
                            utilise et protège les informations que vous nous transmettez, le cas échéant, lorsque vous utilisez
                            le présent site accessible à partir de l'URL suivante : www.orphee-nyny.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Collecte des données personnelles
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed mb-4">
                            Les données personnelles collectées sur ce site sont les suivantes :
                        </p>
                        <ul className="list-disc list-inside font-[family-name:var(--font-poppins)] space-y-2 ml-4">
                            <li>Nom et prénom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone (si fourni)</li>
                            <li>Message ou demande de contact</li>
                        </ul>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed mt-4">
                            Ces données sont collectées uniquement lorsque vous remplissez le formulaire de contact présent sur le site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Utilisation des données
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed">
                            Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition
                            des services du site, leur amélioration et le maintien d'un environnement sécurisé. Plus précisément,
                            les utilisations sont les suivantes :
                        </p>
                        <ul className="list-disc list-inside font-[family-name:var(--font-poppins)] space-y-2 ml-4 mt-4">
                            <li>Répondre à vos demandes de contact</li>
                            <li>Vous informer de nos actualités et événements (avec votre consentement)</li>
                            <li>Gérer et optimiser notre relation client</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Partage des données personnelles avec des tiers
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed">
                            Les données personnelles ne sont pas partagées avec des tiers. Elles sont utilisées uniquement
                            par Orphée NYNY pour les finalités décrites dans la présente politique de confidentialité.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Cookies
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed">
                            Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie
                            de tracking ou publicitaire n'est utilisé sans votre consentement préalable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Vos droits
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed mb-4">
                            Conformément à la réglementation en vigueur, vous disposez des droits suivants :
                        </p>
                        <ul className="list-disc list-inside font-[family-name:var(--font-poppins)] space-y-2 ml-4">
                            <li>Droit d'accès à vos données personnelles</li>
                            <li>Droit de rectification de vos données</li>
                            <li>Droit à l'effacement de vos données</li>
                            <li>Droit d'opposition au traitement de vos données</li>
                            <li>Droit à la portabilité de vos données</li>
                        </ul>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed mt-4">
                            Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante :
                            <a href="mailto:contact@orphee-nyny.com" className="text-[#2f0f09] underline hover:no-underline ml-1">
                                contact@orphee-nyny.com
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Sécurité des données
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed">
                            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées afin de
                            garantir un niveau de sécurité adapté au regard des risques d'accès accidentels, non autorisés
                            ou illégaux, de divulgation, d'altération, de perte ou encore de destruction des données personnelles
                            vous concernant.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[family-name:var(--font-baskervville)] mb-4">
                            Contact
                        </h2>
                        <p className="font-[family-name:var(--font-poppins)] leading-relaxed">
                            Pour toute question relative à la présente politique de confidentialité ou pour toute demande
                            relative à vos données personnelles, vous pouvez nous contacter à l'adresse suivante :
                            <a href="mailto:contact@orphee-nyny.com" className="text-[#2f0f09] underline hover:no-underline ml-1">
                                contact@orphee-nyny.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
