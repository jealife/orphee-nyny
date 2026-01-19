'use client'
import { useState } from 'react';
import Link from 'next/link';
import { RiArrowLeftLine, RiPlayLargeFill } from 'react-icons/ri';

export default function VideosPage() {
    const [activeVideo, setActiveVideo] = useState("https://www.youtube.com/embed/_umAVbQj-jI?si=hL6kwPkOxDPpM3Q1&autoplay=1");

    const videos = [
        {
            id: 1,
            title: "Orphée - Tu as orné ma main",
            url: "https://www.youtube.com/embed/VdixCHI5e2M?si=r8LYNxT_o0APfeDU&autoplay=1",
            thumbnail: "https://img.youtube.com/vi/VdixCHI5e2M/maxresdefault.jpg",
            description: "Clip officiel",
            year: "2023"
        },
        {
            id: 2,
            title: "Orphée - Rondy",
            url: "https://www.youtube.com/embed/-rsqAK7s3lc?si=CjPwPGL4c-gejPrc&autoplay=1",
            thumbnail: "https://img.youtube.com/vi/-rsqAK7s3lc/maxresdefault.jpg",
            description: "Clip officiel",
            year: "2023"
        },
        {
            id: 3,
            title: "Orphée - Otiti",
            url: "https://www.youtube.com/embed/Zg-g8v9pAAQ?si=pWU1PO2qANYHVB3y&autoplay=1",
            thumbnail: "https://img.youtube.com/vi/Zg-g8v9pAAQ/maxresdefault.jpg",
            description: "Clip officiel",
            year: "2023"
        },
        {
            id: 4,
            title: "Orphée NYNY - Présentation",
            url: "https://www.youtube.com/embed/_umAVbQj-jI?si=hL6kwPkOxDPpM3Q1&autoplay=1",
            thumbnail: "https://img.youtube.com/vi/_umAVbQj-jI/maxresdefault.jpg",
            description: "Vidéo de présentation",
            year: "2023"
        }
    ];

    return (
        <div className="min-h-screen bg-[#F2E1CA]">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-gradient-to-br from-[#2f0f09] via-[#4a1810] to-[#2f0f09]">
                <div className="absolute inset-0 bg-[url('/images/ORPHÉE-NYNY_Plage_3.webp')] bg-cover bg-center opacity-20"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    <Link
                        href="/"
                        className="absolute top-8 left-6 text-white/80 hover:text-white flex items-center gap-2 text-lg transition-colors"
                    >
                        <RiArrowLeftLine className="text-2xl" />
                        <span className="font-[family-name:var(--font-poppins)]">Retour</span>
                    </Link>
                    <h1 className="text-5xl lg:text-7xl text-[#F2E1CA] font-[family-name:var(--font-baskervville)] mb-4">
                        Clips & Médias
                    </h1>
                    <p className="text-xl text-white/90 font-[family-name:var(--font-poppins)] max-w-2xl">
                        Découvrez mes clips vidéo et contenus exclusifs
                    </p>
                </div>
            </div>

            {/* Main Video Player */}
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full"
                            src={activeVideo}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Video Grid */}
                <div>
                    <h2 className="text-3xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-8">
                        Tous les clips
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => setActiveVideo(video.url)}
                                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-video overflow-hidden bg-gray-200">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/30 transition-colors">
                                            <RiPlayLargeFill className="text-4xl text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Video Info */}
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold text-[#2f0f09]/60 font-[family-name:var(--font-poppins)]">
                                            {video.description}
                                        </span>
                                        <span className="text-xs text-[#2f0f09]/60 font-[family-name:var(--font-poppins)]">
                                            {video.year}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-[family-name:var(--font-baskervville)] text-[#2f0f09] line-clamp-2">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-br from-[#2f0f09] to-[#4a1810] rounded-2xl p-12 text-center text-white">
                    <h2 className="text-4xl font-[family-name:var(--font-baskervville)] mb-4">
                        Abonnez-vous à ma chaîne YouTube
                    </h2>
                    <p className="text-xl text-white/80 font-[family-name:var(--font-poppins)] mb-8 max-w-2xl mx-auto">
                        Ne manquez aucune de mes nouvelles sorties et contenus exclusifs
                    </p>
                    <a
                        href="https://youtube.com/@orpheenyny7407?si=ZeSFgfgN4uWf3Uza"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#F2E1CA] text-[#2f0f09] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors"
                    >
                        S'abonner sur YouTube
                    </a>
                </div>
            </div>
        </div>
    );
}
