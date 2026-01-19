'use client'
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowLeftLine } from 'react-icons/ri';

export default function BiographiePage() {
    return (
        <div className="min-h-screen bg-[#F2E1CA]">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-[url('/images/ORPHÉE-NYNY_Plage_37.webp')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#F2E1CA]"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    <Link
                        href="/"
                        className="absolute top-8 left-6 text-white/80 hover:text-white flex items-center gap-2 text-lg transition-colors"
                    >
                        <RiArrowLeftLine className="text-2xl" />
                        <span className="font-[family-name:var(--font-poppins)]">Retour</span>
                    </Link>
                    <h1 className="text-5xl lg:text-7xl text-[#F2E1CA] font-[family-name:var(--font-baskervville)] mb-4">
                        Biographie
                    </h1>
                    <p className="text-xl text-white/90 font-[family-name:var(--font-poppins)] max-w-2xl">
                        Découvrez le parcours d'Orphée NYNY
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    {/* Image */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/ORPHÉE-NYNY_Plage_38.webp"
                                    alt="Orphée NYNY"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Biography Text */}
                    <div className="lg:col-span-2 space-y-6 text-[#2f0f09] font-[family-name:var(--font-poppins)]">
                        <div className="prose prose-lg">
                            <p className="text-lg leading-relaxed">
                                Je suis une artiste chanteuse, compositrice, et interprète originaire de la ville de Bitam,
                                dans le nord du Gabon. Passionnée par la musique depuis mon enfance, j'ai grandi bercée par
                                les rythmes traditionnels gabonais et les mélodies contemporaines qui ont façonné mon identité artistique.
                            </p>

                            <h2 className="text-3xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mt-12 mb-6">
                                Mes Débuts
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Mon parcours musical a commencé très tôt, inspirée par les grands noms de la musique africaine
                                et internationale. J'ai développé ma voix et mon style unique en fusionnant les sonorités
                                traditionnelles de mon pays avec des influences modernes, créant ainsi une signature musicale
                                qui me distingue.
                            </p>

                            <h2 className="text-3xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mt-12 mb-6">
                                Mon Univers Musical
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Ma musique est un mélange harmonieux de rythmes afro-pop, de mélodies soul et de textes profonds
                                qui racontent des histoires de vie, d'amour et d'espoir. Chaque chanson que je compose est une
                                partie de mon âme, un message que je souhaite partager avec le monde.
                            </p>

                            <p className="text-lg leading-relaxed">
                                En tant que compositrice, j'explore constamment de nouveaux horizons sonores, cherchant à innover
                                tout en restant fidèle à mes racines. Mon objectif est de créer une musique qui touche les cœurs
                                et transcende les frontières culturelles.
                            </p>

                            <h2 className="text-3xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mt-12 mb-6">
                                Mes Projets
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Au fil des années, j'ai eu l'honneur de partager ma musique sur différentes scènes et plateformes.
                                Mes titres comme "Tu as orné ma main", "Rondy" et "Otiti" ont touché de nombreux cœurs et continuent
                                de résonner auprès de mon public.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Je travaille actuellement sur de nouveaux projets musicaux qui promettent d'apporter une nouvelle
                                dimension à mon art. Mon ambition est de continuer à grandir en tant qu'artiste et de porter
                                la musique gabonaise sur la scène internationale.
                            </p>

                            <h2 className="text-3xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mt-12 mb-6">
                                Ma Vision
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Pour moi, la musique est bien plus qu'un métier, c'est une vocation. Je crois fermement au pouvoir
                                de la musique pour unir les gens, guérir les âmes et inspirer le changement. À travers mes compositions
                                et mes performances, je m'efforce de créer des moments magiques qui restent gravés dans les mémoires.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Mon rêve est de continuer à évoluer, à apprendre et à partager ma passion avec le monde entier.
                                Chaque note que je chante, chaque mélodie que je compose est un pas de plus vers la réalisation
                                de cette vision.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-12 pt-8 border-t border-[#2f0f09]/20">
                            <div className="bg-[#2f0f09] text-white rounded-2xl p-8 text-center">
                                <h3 className="text-2xl font-[family-name:var(--font-baskervville)] mb-4">
                                    Découvrez ma musique
                                </h3>
                                <p className="mb-6 font-[family-name:var(--font-poppins)] text-white/80">
                                    Explorez mes créations et laissez-vous emporter par mes mélodies
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/discographie"
                                        className="bg-[#F2E1CA] text-[#2f0f09] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors"
                                    >
                                        Discographie
                                    </Link>
                                    <Link
                                        href="/videos"
                                        className="border-2 border-[#F2E1CA] text-[#F2E1CA] px-8 py-3 rounded-full font-semibold hover:bg-[#F2E1CA] hover:text-[#2f0f09] transition-colors"
                                    >
                                        Clips & Médias
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
