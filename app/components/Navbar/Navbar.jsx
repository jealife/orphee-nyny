"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiLogoFacebookCircle, BiLogoYoutube, BiLogoInstagramAlt, BiLogoTiktok } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/biographie", label: "Biographie" },
    { href: "/discographie", label: "Discographie" },
    { href: "/videos", label: "Clips & Médias" },
    // { href: "/evenements", label: "Événements" },
    { href: "/galerie", label: "Galerie" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=100087274472246&mibextid=ZbWKwL", icon: BiLogoFacebookCircle, label: "Facebook" },
    { href: "https://youtube.com/@orpheenyny7407?si=ZeSFgfgN4uWf3Uza", icon: BiLogoYoutube, label: "YouTube" },
    { href: "https://www.instagram.com/orphe_enyny/profilecard/?igsh=Zzd0YWNwYmRpb2N2", icon: BiLogoInstagramAlt, label: "Instagram" },
    { href: "https://www.tiktok.com/@orphee_nyny?_t=8rIgSNVGizQ&_r=1", icon: BiLogoTiktok, label: "TikTok" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-black/95 backdrop-blur-2xl shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-md py-4'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8">

          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex items-center justify-between">

            {/* Logo Left */}
            <Link href="/" className="group flex-shrink-0 relative z-50">
              <div className="relative w-16 h-16 transition-all duration-500 group-hover:scale-110">
                <Image
                  src="/logo-Orphée-Nyny.svg"
                  alt="Logo Orphée NYNY"
                  fill
                  className="object-contain brightness-0 invert drop-shadow-2xl"
                />
              </div>
            </Link>

            {/* Navigation Links Center/Right */}
            <ul className="flex items-center gap-6 xl:gap-8 mx-auto">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="relative text-[#F2E1CA] font-[family-name:var(--font-poppins)] text-sm font-light tracking-wider uppercase transition-all duration-300 hover:text-white group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.px] bg-gradient-to-r from-transparent via-[#F2E1CA] to-transparent transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons Right */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="text-[#F2E1CA]/70 hover:text-white transition-all duration-300 hover:scale-125 text-lg"
                    aria-label={social.label}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* MOBILE LAYOUT */}
          <div className="lg:hidden flex items-center justify-between">
            {/* Logo */}
            <Link href="/" onClick={() => setIsOpen(false)} className="relative z-50">
              <div className="relative w-12 h-12 transition-transform duration-300 active:scale-95">
                <Image
                  src="/logo-Orphée-Nyny.svg"
                  alt="Logo Orphée NYNY"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 w-10 h-10 flex items-center justify-center p-1"
              aria-label="Menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-[#F2E1CA] rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''
                    }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-[#F2E1CA] rounded-full transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                    }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-[#F2E1CA] rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#F2E1CA]/20 overflow-hidden transition-all duration-500 ease-in-out ${isOpen
            ? 'opacity-100 visible translate-y-0 max-h-[90vh]'
            : 'opacity-0 invisible -translate-y-4 max-h-0'
            }`}
        >
          <div className="py-6 px-4 overflow-y-auto max-h-[80dvh]">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`transform transition-all duration-300 ${isOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-5 text-[#F2E1CA] font-[family-name:var(--font-baskervville)] text-xl text-center hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 border border-transparent hover:border-[#F2E1CA]/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className={`mt-8 pt-6 border-t border-[#F2E1CA]/10 transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-[#F2E1CA]/60 text-xs font-[family-name:var(--font-poppins)] mb-4 text-center tracking-widest uppercase">
                Suivez-moi
              </p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      onClick={() => setIsOpen(false)}
                      className="bg-white/5 p-3 rounded-full text-[#F2E1CA] hover:bg-[#F2E1CA] hover:text-black transition-all duration-300 hover:scale-110 border border-[#F2E1CA]/20"
                      aria-label={social.label}
                    >
                      <Icon className="text-xl" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
}
