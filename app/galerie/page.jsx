'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowLeftLine, RiCloseLine } from 'react-icons/ri';

function getEvent(src) {
    if (src.includes('Plage')) return 'plage';
    if (src.includes('EKEAM')) return 'ekeam';
    return 'jealife-concert';
}

function interleaveByEvent(photos) {
    const groups = {};
    for (const photo of photos) {
        const event = getEvent(photo.src);
        if (!groups[event]) groups[event] = [];
        groups[event].push(photo);
    }
    const queues = Object.values(groups);
    const result = [];
    let hasMore = true;
    while (hasMore) {
        hasMore = false;
        for (const queue of queues) {
            if (queue.length > 0) {
                result.push(queue.shift());
                hasMore = true;
            }
        }
    }
    return result;
}

export default function GaleriePage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const photos = [
        { id: 1, src: '/images/ORPHÉE-NYNY_Plage_3.webp', alt: 'Orphée NYNY - Portrait Plage', category: 'Portraits' },
        { id: 2, src: '/images/ORPHÉE-NYNY_Plage_5.webp', alt: 'Orphée NYNY - Portrait Nature', category: 'Portraits' },
        { id: 3, src: '/images/ORPHÉE-NYNY_Plage_14.webp', alt: 'Orphée NYNY - Style', category: 'Portraits' },
        { id: 21, src: '/images/concert/JEaLiFe· Pictures-152.jpg', alt: 'Orphée NYNY - Scène', category: 'Concerts' },
        { id: 4, src: '/images/ORPHÉE-NYNY_Plage_19.webp', alt: 'Orphée NYNY - Élégance', category: 'Portraits' },
        { id: 18, src: '/images/concert/JEaLiFe· Pictures-229.jpg', alt: 'Orphée NYNY - Scène', category: 'Concerts' },
        { id: 5, src: '/images/ORPHÉE-NYNY_Plage_20.webp', alt: 'Orphée NYNY - Regard', category: 'Portraits' },
        { id: 19, src: '/images/concert/JEaLiFe· Pictures-155.jpg', alt: 'Orphée NYNY - Scène', category: 'Concerts' },
        { id: 6, src: '/images/ORPHÉE-NYNY_Plage_22.webp', alt: 'Orphée NYNY - Ambiance', category: 'Portraits' },
        { id: 14, src: '/images/concert/JEaLiFe· Pictures-3.jpg', alt: 'Orphée NYNY - Scène', category: 'Concerts' },
        { id: 7, src: '/images/ORPHÉE-NYNY_Plage_26.webp', alt: 'Orphée NYNY - Pose', category: 'Portraits' },
        { id: 8, src: '/images/ORPHÉE-NYNY_Plage_30.webp', alt: 'Orphée NYNY - Lumière', category: 'Portraits' },
        { id: 15, src: '/images/concert/JEaLiFe· Pictures-217.jpg', alt: 'Orphée NYNY - Scène', category: 'Concerts' },
        { id: 9, src: '/images/ORPHÉE-NYNY_Plage_32.webp', alt: 'Orphée NYNY - Shooting', category: 'Portraits' },
        { id: 17, src: '/images/concert/JEaLiFe· Pictures-228.jpg', alt: 'Orphée NYNY - Scène', category: 'Concerts' },
        { id: 10, src: '/images/ORPHÉE-NYNY_Plage_36.webp', alt: 'Orphée NYNY - Artiste', category: 'Portraits' },
        { id: 16, src: '/images/concert/JEaLiFe· Pictures-220.jpg', alt: 'Orphée NYNY - Scène', category: 'Concerts' },
        { id: 11, src: '/images/ORPHÉE-NYNY_Plage_37.webp', alt: 'Orphée NYNY - Charisme', category: 'Portraits' },
        { id: 12, src: '/images/ORPHÉE-NYNY_Plage_38.webp', alt: 'Orphée NYNY - Beauté', category: 'Portraits' },
        { id: 13, src: '/images/concert/JEaLiFe· Pictures-238.jpg', alt: 'Orphée NYNY - Scène', category: 'Concerts' },
        { id: 20, src: '/images/concert/JEaLiFe· Pictures-148.jpg', alt: 'Orphée NYNY - Scène', category: 'Concerts' },
        { id: 22, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600002.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 23, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600003.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 24, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600004.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 25, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600006.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 26, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600007.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 27, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600008.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 28, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600009.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 29, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600010.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 30, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600012.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 31, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600015.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 32, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600017.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 33, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600019.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
        { id: 34, src: '/images/concert/EKEAM-LIVE-IF-12-avril-202600022.jpg', alt: 'Orphée NYNY - EKEKAM LIVE', category: 'Concerts' },
    ];

    const categories = ['Tous', 'Portraits', 'Concerts'];
    const [activeCategory, setActiveCategory] = useState('Tous');

    const filteredPhotos = interleaveByEvent(
        activeCategory === 'Tous'
            ? photos
            : photos.filter(photo => photo.category === activeCategory)
    );

    return (
        <div className="min-h-screen bg-[#F2E1CA]">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-gradient-to-br from-[#2f0f09] via-[#4a1810] to-[#2f0f09]">
                <div className="absolute inset-0 bg-[url('/images/ORPHÉE-NYNY_Plage_20.webp')] bg-cover bg-center opacity-20"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    <Link
                        href="/"
                        className="absolute top-8 left-6 text-white/80 hover:text-white flex items-center gap-2 text-lg transition-colors"
                    >
                        <RiArrowLeftLine className="text-2xl" />
                        <span className="font-[family-name:var(--font-poppins)]">Retour</span>
                    </Link>
                    <h1 className="text-5xl lg:text-7xl text-[#F2E1CA] font-[family-name:var(--font-baskervville)] mb-4">
                        Galerie
                    </h1>
                    <p className="text-xl text-white/90 font-[family-name:var(--font-poppins)] max-w-2xl">
                        Découvrez mes moments en images
                    </p>
                </div>
            </div>

            {/* Gallery Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${activeCategory === category
                                ? 'bg-[#2f0f09] text-white shadow-lg'
                                : 'bg-white text-[#2f0f09] hover:bg-[#2f0f09]/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPhotos.map((photo) => (
                        <div
                            key={photo.id}
                            onClick={() => setSelectedImage(photo)}
                            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-semibold font-[family-name:var(--font-poppins)]">
                                        {photo.alt}
                                    </p>
                                    <p className="text-white/80 text-sm font-[family-name:var(--font-poppins)]">
                                        {photo.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredPhotos.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-[#2f0f09]/70 font-[family-name:var(--font-poppins)]">
                            Aucune photo dans cette catégorie pour le moment.
                        </p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white hover:text-[#F2E1CA] transition-colors"
                        aria-label="Fermer"
                    >
                        <RiCloseLine className="text-4xl" />
                    </button>

                    <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-center">
                        <p className="text-white text-xl font-semibold font-[family-name:var(--font-poppins)]">
                            {selectedImage.alt}
                        </p>
                        <p className="text-white/80 font-[family-name:var(--font-poppins)]">
                            {selectedImage.category}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
