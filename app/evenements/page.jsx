'use client'
import Link from 'next/link';
import { RiArrowLeftLine, RiCalendarLine, RiMapPinLine, RiTimeLine, RiTicketLine } from 'react-icons/ri';

export default function EvenementsPage() {
    const upcomingEvents = [
        {
            id: 1,
            title: "Concert Live - Libreville",
            date: "15 Mars 2026",
            time: "20h00",
            location: "Palais des Sports, Libreville",
            description: "Une soirée exceptionnelle avec mes plus grands succès et des surprises exclusives.",
            status: "upcoming",
            ticketLink: "#"
        },
        {
            id: 2,
            title: "Festival de Musique Gabonaise",
            date: "22 Avril 2026",
            time: "18h00",
            location: "Stade Omnisports, Port-Gentil",
            description: "Participation au plus grand festival de musique du Gabon avec d'autres artistes renommés.",
            status: "upcoming",
            ticketLink: "#"
        }
    ];

    const pastEvents = [
        {
            id: 3,
            title: "Concert Privé - Bitam",
            date: "10 Décembre 2025",
            location: "Centre Culturel de Bitam",
            description: "Un retour aux sources avec un concert intimiste dans ma ville natale."
        },
        {
            id: 4,
            title: "Showcase Acoustique",
            date: "5 Novembre 2025",
            location: "Café des Arts, Libreville",
            description: "Une performance acoustique exclusive avec mes titres revisités."
        }
    ];

    return (
        <div className="min-h-screen bg-[#F2E1CA]">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-gradient-to-br from-[#2f0f09] via-[#4a1810] to-[#2f0f09]">
                <div className="absolute inset-0 bg-[url('/images/ORPHÉE-NYNY_Plage_22.webp')] bg-cover bg-center opacity-20"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    <Link
                        href="/"
                        className="absolute top-8 left-6 text-white/80 hover:text-white flex items-center gap-2 text-lg transition-colors"
                    >
                        <RiArrowLeftLine className="text-2xl" />
                        <span className="font-[family-name:var(--font-poppins)]">Retour</span>
                    </Link>
                    <h1 className="text-5xl lg:text-7xl text-[#F2E1CA] font-[family-name:var(--font-baskervville)] mb-4">
                        Événements
                    </h1>
                    <p className="text-xl text-white/90 font-[family-name:var(--font-poppins)] max-w-2xl">
                        Retrouvez-moi en concert
                    </p>
                </div>
            </div>

            {/* Events Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                {/* Upcoming Events */}
                <div className="mb-16">
                    <h2 className="text-4xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-8">
                        Événements à venir
                    </h2>

                    {upcomingEvents.length > 0 ? (
                        <div className="space-y-6">
                            {upcomingEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                                >
                                    <div className="p-8 lg:flex lg:items-center lg:justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="bg-[#2f0f09] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                                    À venir
                                                </span>
                                            </div>

                                            <h3 className="text-3xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-4">
                                                {event.title}
                                            </h3>

                                            <div className="space-y-3 mb-4">
                                                <div className="flex items-center gap-3 text-[#2f0f09]/70">
                                                    <RiCalendarLine className="text-xl" />
                                                    <span className="font-[family-name:var(--font-poppins)]">{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-[#2f0f09]/70">
                                                    <RiTimeLine className="text-xl" />
                                                    <span className="font-[family-name:var(--font-poppins)]">{event.time}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-[#2f0f09]/70">
                                                    <RiMapPinLine className="text-xl" />
                                                    <span className="font-[family-name:var(--font-poppins)]">{event.location}</span>
                                                </div>
                                            </div>

                                            <p className="text-[#2f0f09]/70 font-[family-name:var(--font-poppins)] leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>

                                        <div className="mt-6 lg:mt-0 lg:ml-8">
                                            <a
                                                href={event.ticketLink}
                                                className="inline-flex items-center gap-2 bg-[#2f0f09] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a1810] transition-colors"
                                            >
                                                <RiTicketLine className="text-xl" />
                                                Réserver
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl p-12 text-center">
                            <p className="text-xl text-[#2f0f09]/70 font-[family-name:var(--font-poppins)]">
                                Aucun événement prévu pour le moment. Restez connectés pour les prochaines dates !
                            </p>
                        </div>
                    )}
                </div>

                {/* Past Events */}
                <div>
                    <h2 className="text-4xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-8">
                        Événements passés
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {pastEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-[#2f0f09]/20 text-[#2f0f09] px-4 py-1 rounded-full text-sm font-semibold">
                                        Terminé
                                    </span>
                                </div>

                                <h3 className="text-2xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-3">
                                    {event.title}
                                </h3>

                                <div className="space-y-2 mb-3">
                                    <div className="flex items-center gap-2 text-[#2f0f09]/70 text-sm">
                                        <RiCalendarLine className="text-lg" />
                                        <span className="font-[family-name:var(--font-poppins)]">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#2f0f09]/70 text-sm">
                                        <RiMapPinLine className="text-lg" />
                                        <span className="font-[family-name:var(--font-poppins)]">{event.location}</span>
                                    </div>
                                </div>

                                <p className="text-[#2f0f09]/70 font-[family-name:var(--font-poppins)] text-sm leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter CTA */}
                <div className="mt-16 bg-gradient-to-br from-[#2f0f09] to-[#4a1810] rounded-2xl p-12 text-center text-white">
                    <h2 className="text-4xl font-[family-name:var(--font-baskervville)] mb-4">
                        Ne manquez aucun événement
                    </h2>
                    <p className="text-xl text-white/80 font-[family-name:var(--font-poppins)] mb-8 max-w-2xl mx-auto">
                        Inscrivez-vous pour être informé en priorité de mes prochains concerts et événements
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#F2E1CA] text-[#2f0f09] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors"
                    >
                        Me contacter
                    </Link>
                </div>
            </div>
        </div>
    );
}
