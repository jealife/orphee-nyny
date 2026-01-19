'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiArrowLeftLine, RiPlayCircleLine, RiSpotifyLine, RiYoutubeLine } from 'react-icons/ri';
import { BiLogoApple } from 'react-icons/bi';

export default function DiscographiePage() {
    const [videos, setVideos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchVideos() {
            try {
                const res = await fetch('/api/youtube');
                const text = await res.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'text/xml');
                const entries = xml.querySelectorAll('entry');

                const loadedVideos = Array.from(entries).slice(0, 8).map(entry => {
                    const title = entry.querySelector('title')?.textContent || '';
                    const videoId = entry.querySelector('videoId')?.textContent || '';
                    const published = entry.querySelector('published')?.textContent || '';
                    const mediaGroup = entry.querySelector('group');
                    const thumbnail = mediaGroup?.querySelector('thumbnail')?.getAttribute('url') || '/cover.png';
                    const description = mediaGroup?.querySelector('description')?.textContent || '';

                    return {
                        id: videoId,
                        title: title,
                        year: new Date(published).getFullYear(),
                        cover: thumbnail.replace('mqdefault', 'hqdefault'), // Use hqdefault for better reliability
                        type: 'Vidéo',
                        description: description.substring(0, 100) + '...',
                        links: {
                            youtube: `https://www.youtube.com/watch?v=${videoId}`,
                            spotify: "#",
                            apple: "#"
                        }
                    };
                });
                setVideos(loadedVideos);
            } catch (error) {
                console.error("Failed to load videos", error);
            } finally {
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    return (
        <div className="min-h-screen bg-[#F2E1CA]">
            {/* Hero Section */}
            <div className="relative h-[50vh] bg-gradient-to-br from-[#2f0f09] via-[#4a1810] to-[#2f0f09]">
                <div className="absolute inset-0 bg-[url('/JEaLiFe·Pictures-155.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    <Link
                        href="/"
                        className="absolute top-8 left-6 text-white/80 hover:text-white flex items-center gap-2 text-lg transition-colors"
                    >
                        <RiArrowLeftLine className="text-2xl" />
                        <span className="font-[family-name:var(--font-poppins)]">Retour</span>
                    </Link>
                    <h1 className="text-5xl lg:text-7xl text-[#F2E1CA] font-[family-name:var(--font-baskervville)] mb-4">
                        Discographie
                    </h1>
                    <p className="text-xl text-white/90 font-[family-name:var(--font-poppins)] max-w-2xl">
                        Explorez mes créations musicales
                    </p>
                </div>
            </div>

            {/* Albums Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <div className="col-span-full flex justify-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2f0f09]"></div>
                        </div>
                    ) : videos.map((album) => (
                        <div
                            key={album.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Album Cover */}
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={album.cover}
                                    alt={album.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex gap-3 justify-center">
                                            <a
                                                href={album.links.youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                                                aria-label="YouTube"
                                            >
                                                <RiYoutubeLine className="text-2xl text-white" />
                                            </a>
                                            <a
                                                href={album.links.spotify}
                                                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                                                aria-label="Spotify"
                                            >
                                                <RiSpotifyLine className="text-2xl text-white" />
                                            </a>
                                            <a
                                                href={album.links.apple}
                                                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                                                aria-label="Apple Music"
                                            >
                                                <BiLogoApple className="text-2xl text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Album Info */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-[#2f0f09]/60 font-[family-name:var(--font-poppins)]">
                                        {album.type}
                                    </span>
                                    <span className="text-sm text-[#2f0f09]/60 font-[family-name:var(--font-poppins)]">
                                        {album.year}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-3">
                                    {album.title}
                                </h3>
                                <p className="text-[#2f0f09]/70 font-[family-name:var(--font-poppins)] text-sm leading-relaxed mb-4">
                                    {album.description}
                                </p>
                                <a
                                    href={album.links.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#2f0f09] font-semibold hover:gap-3 transition-all"
                                >
                                    <RiPlayCircleLine className="text-2xl" />
                                    <span className="font-[family-name:var(--font-poppins)]">Écouter</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coming Soon Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-[#2f0f09] to-[#4a1810] rounded-2xl p-12 text-white">
                        <h2 className="text-4xl font-[family-name:var(--font-baskervville)] mb-4">
                            Nouveaux projets à venir
                        </h2>
                        <p className="text-xl text-white/80 font-[family-name:var(--font-poppins)] mb-8 max-w-2xl mx-auto">
                            Restez connectés pour découvrir mes prochaines créations musicales
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
        </div>
    );
}
