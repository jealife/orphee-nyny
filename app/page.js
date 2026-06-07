'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiScrollToBottomLine, RiPlayLargeFill, RiArrowRightLine, RiCalendarLine, RiMusicLine } from "react-icons/ri";

export default function Home() {
  const artistName = "Orphée NYNY";
  const artistprofile = "Artiste , chanteuse, compositrice, interprète professionnelle.";
  const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/_umAVbQj-jI?si=hL6kwPkOxDPpM3Q1&autoplay=1");

  const songs = [
    { title: "Orphée - Tu as orné ma main", url: "https://www.youtube.com/embed/VdixCHI5e2M?si=r8LYNxT_o0APfeDU&autoplay=1" },
    { title: "Orphée - Rondy ", url: "https://www.youtube.com/embed/-rsqAK7s3lc?si=CjPwPGL4c-gejPrc&autoplay=1" },
    { title: "Orphée - Otiti ", url: "https://www.youtube.com/embed/Zg-g8v9pAAQ?si=pWU1PO2qANYHVB3y&autoplay=1" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Concert Live - Libreville",
      date: "15 Mars 2026",
      location: "Palais des Sports"
    },
    {
      id: 2,
      title: "Festival de Musique Gabonaise",
      date: "22 Avril 2026",
      location: "Stade Omnisports"
    }
  ];

  return (
    <div className="font-[family-name:var(--font-baskervville)] bg-[#1a0a06] text-[#F2E1CA] min-h-screen">
      {/* 1. Hero Section - Artistic & Immersive */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Dynamic Background */}
        < div className="absolute inset-0 z-0" >
          <Image
            src="/images/ORPHÉE-NYNY_Plage_22.webp"
            alt="Orphée NYNY — Chanteuse et compositrice gabonaise originaire de Bitam"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Artistic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#1a0a06] backdrop-blur-[2px]"></div>
        </div >

        {/* Hero Content */}
        < div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center" >
          <span className="text-[#F2E1CA] tracking-[0.5em] text-sm md:text-base uppercase mb-4 opacity-90 font-[family-name:var(--font-poppins)] animate-fade-in-down">
            Artiste Chanteuse & Compositrice
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-[#F2E1CA] mb-6 font-thin tracking-tight drop-shadow-lg">
            {artistName}
          </h1>
          <div className="w-24 h-[1px] bg-[#F2E1CA] mb-8 opacity-60"></div>
          <p className="md:text-xl text-white/90 font-[family-name:var(--font-poppins)] max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md">
            Une voix unique originaire du nord du Gabon, mêlant tradition et modernité.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center">
            <Link
              href="/discographie"
              className="group relative px-8 py-4 bg-[#F2E1CA] text-[#2f0f09] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(242,225,202,0.4)]"
            >
              <span className="relative z-10 font-[family-name:var(--font-poppins)] font-medium">Découvrir l'univers</span>
              <div className="absolute inset-0 bg-white/50 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-4 border border-[#F2E1CA]/50 text-[#F2E1CA] rounded-full backdrop-blur-sm hover:bg-[#F2E1CA] hover:text-[#2f0f09] transition-all duration-300 font-[family-name:var(--font-poppins)]"
            >
              Me contacter
            </Link>
          </div>
        </div >

        {/* Scroll Indicator */}
        < div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70" >
          <RiScrollToBottomLine className="text-3xl text-[#F2E1CA]" />
        </div >
      </section >

      {/* 2. Biography Section - Modern/Editorial Layout */}
      < section className="relative py-24 px-6 bg-[#1a0a06] overflow-hidden" id="bio" >
        {/* Background Texture/Elements */}
        < div className="absolute top-0 right-0 w-1/2 h-full bg-[#2f0f09]/10 rounded-l-[100px] -z-0 blur-3xl" ></div >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image Side - Artistic Frame */}
          <div className="relative group">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ORPHÉE-NYNY_Plage_3.webp"
                alt="Orphée NYNY — Portrait artistique de la chanteuse gabonaise"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a06]/80 via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Decorative Borders */}
            <div className="absolute -inset-4 border border-[#F2E1CA]/20 rounded-2xl -z-10 translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-[#1a0a06] p-6 rounded-xl shadow-xl border border-[#F2E1CA]/10 max-w-xs hidden md:block">
              <p className="text-[#F2E1CA] font-[family-name:var(--font-baskervville)] text-2xl italic">"La musique est le reflet de l'âme."</p>
            </div>
          </div>

          {/* Text Side - Editorial Style */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <span className="text-[#F2E1CA]/60 uppercase tracking-widest text-sm font-[family-name:var(--font-poppins)]">Biographie</span>
              <h2 className="text-5xl lg:text-6xl text-[#F2E1CA]">L'histoire d'<span className="italic font-light">Orphée</span></h2>
            </div>

            <div className="space-y-6 text-lg text-white/70 font-[family-name:var(--font-poppins)] font-light leading-relaxed">
              <p>
                Je suis une artiste chanteuse, compositrice, et interprète originaire de la ville de Bitam, dans le nord du Gabon.
                Bercée par les rythmes traditionnels et influencée par la soul moderne, j'ai forgé mon identité musicale unique.
              </p>
              <p>
                Mon parcours est un voyage entre les cultures, une quête d'harmonie où chaque note raconte une histoire, chaque mélodie porte une émotion pure.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/biographie"
                className="inline-flex items-center space-x-3 text-[#F2E1CA] hover:text-white transition-colors group"
              >
                <span className="uppercase tracking-wider border-b border-[#F2E1CA] pb-1 group-hover:border-white transition-all">Lire ma biographie complète</span>
                <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* 3. Music Player Section - Clean Integration */}
      <section className="relative py-20 bg-[#F2E1CA]">
        {/* Subtle Grainy Texture Overlay using CSS */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Video Container */}
            <div className="w-full lg:w-2/3 shadow-2xl rounded-2xl overflow-hidden border-4 border-white/20">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={videoSrc}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Playlist */}
            <div className="w-full lg:w-1/3 space-y-6">
              <h3 className="text-3xl text-[#2f0f09] border-b-2 border-[#2f0f09]/10 pb-4">En écoute</h3>
              <ul className="space-y-4">
                {songs.map((song, index) => (
                  <li
                    key={index}
                    onClick={() => setVideoSrc(song.url)}
                    className="group flex items-center p-4 bg-white/40 hover:bg-white/80 rounded-xl cursor-pointer transition-all duration-300 border border-transparent hover:border-[#2f0f09]/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#2f0f09] text-[#F2E1CA] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <RiPlayLargeFill className="text-lg" />
                    </div>
                    <span className="text-[#2f0f09] font-medium font-[family-name:var(--font-poppins)] group-hover:translate-x-1 transition-transform">{song.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section >

      {/* Featured Albums Section */}
      < section className="bg-white py-24 px-6" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-4">
              Mes Dernières Créations
            </h2>
            <p className="text-xl text-[#2f0f09]/70 font-[family-name:var(--font-poppins)]">
              Découvrez mes titres les plus récents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {songs.map((song, index) => (
              <div key={index} className="group bg-[#F2E1CA] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={`/images/ORPHÉE-NYNY_Plage_${index === 0 ? '20' : index === 1 ? '22' : '3'}.webp`}
                    alt={song.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-3">
                    {song.title}
                  </h3>
                  <button
                    onClick={() => {
                      setVideoSrc(song.url);
                      document.querySelector('#bio').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-[#2f0f09] font-semibold hover:gap-3 transition-all"
                  >
                    <RiMusicLine className="text-2xl" />
                    <span className="font-[family-name:var(--font-poppins)]">Écouter</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/discographie"
              className="inline-flex items-center gap-2 bg-[#2f0f09] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a1810] transition-all hover:gap-3"
            >
              Voir toute la discographie
              <RiArrowRightLine className="text-xl" />
            </Link>
          </div>
        </div>
      </section >

      {/* Upcoming Events Section */}
      < section className="bg-gradient-to-br from-[#2f0f09] to-[#4a1810] py-24 px-6" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-[family-name:var(--font-baskervville)] text-[#F2E1CA] mb-4">
              Prochains Événements
            </h2>
            <p className="text-xl text-white/80 font-[family-name:var(--font-poppins)]">
              Venez me rencontrer en concert
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-[#F2E1CA] p-3 rounded-full">
                    <RiCalendarLine className="text-2xl text-[#2f0f09]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-[family-name:var(--font-baskervville)] text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-[#F2E1CA] font-[family-name:var(--font-poppins)] mb-1">
                      {event.date}
                    </p>
                    <p className="text-white/80 font-[family-name:var(--font-poppins)]">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/evenements"
              className="inline-flex items-center gap-2 bg-[#F2E1CA] text-[#2f0f09] px-8 py-4 rounded-full font-semibold hover:bg-white transition-all hover:gap-3"
            >
              Voir tous les événements
              <RiArrowRightLine className="text-xl" />
            </Link>
          </div>
        </div>
      </section >

      {/* Call to Action Section */}
      < section className="bg-[#F2E1CA] py-24 px-6" >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-6">
            Travaillons Ensemble
          </h2>
          <p className="text-xl text-[#2f0f09]/70 font-[family-name:var(--font-poppins)] mb-8 leading-relaxed">
            Vous avez un projet musical ? Besoin d'une artiste pour votre événement ?
            N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-[#2f0f09] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a1810] transition-all hover:scale-105"
            >
              Découvrir mes services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#2f0f09] text-[#2f0f09] px-8 py-4 rounded-full font-semibold hover:bg-[#2f0f09] hover:text-white transition-all hover:scale-105"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
}
