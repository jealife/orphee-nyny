'use client'
import Link from 'next/link';
import { RiArrowLeftLine, RiMicLine, RiMusic2Line, RiVoiceprintLine, RiUserVoiceLine, RiCalendarEventLine, RiStarLine } from 'react-icons/ri';

export default function ServicesPage() {
    const services = [
        {
            id: 1,
            icon: <RiMicLine className="text-5xl" />,
            title: "Concerts & Performances",
            description: "Des performances live inoubliables pour vos événements privés, festivals, et célébrations. Une expérience musicale unique qui marquera les esprits.",
            features: [
                "Concerts privés",
                "Festivals et événements publics",
                "Performances acoustiques",
                "Shows personnalisés"
            ]
        },
        {
            id: 2,
            icon: <RiMusic2Line className="text-5xl" />,
            title: "Composition Musicale",
            description: "Création de compositions originales sur mesure pour vos projets. Des mélodies uniques qui racontent votre histoire.",
            features: [
                "Compositions personnalisées",
                "Arrangements musicaux",
                "Musique pour films/publicités",
                "Jingles et génériques"
            ]
        },
        {
            id: 3,
            icon: <RiVoiceprintLine className="text-5xl" />,
            title: "Enregistrement Studio",
            description: "Services d'enregistrement professionnel en studio avec une qualité sonore exceptionnelle.",
            features: [
                "Enregistrement vocal",
                "Production musicale",
                "Mixage et mastering",
                "Direction artistique"
            ]
        },
        {
            id: 4,
            icon: <RiUserVoiceLine className="text-5xl" />,
            title: "Featuring & Collaborations",
            description: "Collaborations artistiques pour enrichir vos projets musicaux avec ma voix et mon style unique.",
            features: [
                "Featuring sur vos titres",
                "Duos et collaborations",
                "Chœurs et harmonies",
                "Projets artistiques communs"
            ]
        },
        {
            id: 5,
            icon: <RiCalendarEventLine className="text-5xl" />,
            title: "Animation d'Événements",
            description: "Animation musicale pour tous types d'événements : mariages, galas, soirées d'entreprise, et plus encore.",
            features: [
                "Mariages",
                "Événements d'entreprise",
                "Galas et cérémonies",
                "Soirées privées"
            ]
        },
        {
            id: 6,
            icon: <RiStarLine className="text-5xl" />,
            title: "Coaching Vocal",
            description: "Accompagnement personnalisé pour développer votre talent vocal et votre présence scénique.",
            features: [
                "Cours de chant individuels",
                "Technique vocale",
                "Préparation scénique",
                "Développement artistique"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#F2E1CA]">
            {/* Hero Section */}
            <div className="relative h-[50vh] bg-gradient-to-br from-[#2f0f09] via-[#4a1810] to-[#2f0f09]">
                <div className="absolute inset-0 bg-[url('/images/ORPHÉE-NYNY_Plage_5.webp')] bg-cover bg-center opacity-20"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    <Link
                        href="/"
                        className="absolute top-8 left-6 text-white/80 hover:text-white flex items-center gap-2 text-lg transition-colors"
                    >
                        <RiArrowLeftLine className="text-2xl" />
                        <span className="font-[family-name:var(--font-poppins)]">Retour</span>
                    </Link>
                    <h1 className="text-5xl lg:text-7xl text-[#F2E1CA] font-[family-name:var(--font-baskervville)] mb-4">
                        Services
                    </h1>
                    <p className="text-xl text-white/90 font-[family-name:var(--font-poppins)] max-w-2xl">
                        Des prestations musicales professionnelles pour tous vos projets
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="text-[#2f0f09] mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-4">
                                {service.title}
                            </h3>

                            <p className="text-[#2f0f09]/70 font-[family-name:var(--font-poppins)] leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 text-[#2f0f09]/80 font-[family-name:var(--font-poppins)] text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#2f0f09] rounded-full"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="bg-white rounded-2xl p-12 mb-16">
                    <h2 className="text-4xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-8 text-center">
                        Comment ça marche ?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-[#2f0f09] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-3">
                                Contact
                            </h3>
                            <p className="text-[#2f0f09]/70 font-[family-name:var(--font-poppins)]">
                                Contactez-moi pour discuter de votre projet et de vos besoins spécifiques.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-[#2f0f09] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-3">
                                Planification
                            </h3>
                            <p className="text-[#2f0f09]/70 font-[family-name:var(--font-poppins)]">
                                Nous établissons ensemble un plan détaillé et un devis personnalisé.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-[#2f0f09] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-3">
                                Réalisation
                            </h3>
                            <p className="text-[#2f0f09]/70 font-[family-name:var(--font-poppins)]">
                                Je concrétise votre projet avec professionnalisme et passion.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-[#2f0f09] to-[#4a1810] rounded-2xl p-12 text-center text-white">
                    <h2 className="text-4xl font-[family-name:var(--font-baskervville)] mb-4">
                        Prêt à démarrer votre projet ?
                    </h2>
                    <p className="text-xl text-white/80 font-[family-name:var(--font-poppins)] mb-8 max-w-2xl mx-auto">
                        Contactez-moi dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-[#F2E1CA] text-[#2f0f09] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors"
                        >
                            Me contacter
                        </Link>
                        <Link
                            href="/evenements"
                            className="border-2 border-[#F2E1CA] text-[#F2E1CA] px-8 py-4 rounded-full font-semibold hover:bg-[#F2E1CA] hover:text-[#2f0f09] transition-colors"
                        >
                            Voir mes événements
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
