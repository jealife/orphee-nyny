'use client'
import Link from 'next/link';
import Image from 'next/image';
import { BiLogoFacebookCircle, BiLogoYoutube, BiLogoInstagramAlt, BiLogoTiktok, BiLogoSpotify } from 'react-icons/bi';
import { RiMailLine, RiPhoneLine } from 'react-icons/ri';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2f0f09] text-white py-12 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Logo et description */}
                    <div className="space-y-4">
                        <Link href="/">
                            <Image
                                src="/logo-Orphée-Nyny.svg"
                                alt="Logo Orphée NYNY"
                                width={120}
                                height={120}
                                className="brightness-0 invert"
                            />
                        </Link>
                        <p className="text-[#F2E1CA]/80 text-sm font-[family-name:var(--font-poppins)]">
                            Artiste, chanteuse, compositrice et interprète professionnelle originaire du Gabon.
                        </p>
                    </div>

                    {/* Navigation rapide */}
                    <div>
                        <h3 className="text-[#F2E1CA] text-lg font-semibold mb-4 font-[family-name:var(--font-baskervville)]">
                            Navigation
                        </h3>
                        <ul className="space-y-2 font-[family-name:var(--font-poppins)] text-sm">
                            <li><Link href="/" className="text-[#F2E1CA]/80 hover:text-[#F2E1CA] transition-colors">Accueil</Link></li>
                            <li><Link href="/biographie" className="text-[#F2E1CA]/80 hover:text-[#F2E1CA] transition-colors">Biographie</Link></li>
                            <li><Link href="/discographie" className="text-[#F2E1CA]/80 hover:text-[#F2E1CA] transition-colors">Discographie</Link></li>
                            <li><Link href="/videos" className="text-[#F2E1CA]/80 hover:text-[#F2E1CA] transition-colors">Clips & Médias</Link></li>
                            <li><Link href="/evenements" className="text-[#F2E1CA]/80 hover:text-[#F2E1CA] transition-colors">Événements</Link></li>
                            <li><Link href="/contact" className="text-[#F2E1CA]/80 hover:text-[#F2E1CA] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[#F2E1CA] text-lg font-semibold mb-4 font-[family-name:var(--font-baskervville)]">
                            Contact
                        </h3>
                        <ul className="space-y-3 font-[family-name:var(--font-poppins)] text-sm">
                            {/* <li className="flex items-center gap-2 text-[#F2E1CA]/80">
                                <RiMailLine className="text-lg" />
                                <a href="mailto:contact@orphee-nyny.com" className="hover:text-[#F2E1CA] transition-colors">
                                    contact@orphee-nyny.com
                                </a>
                            </li> */}
                            <li className="flex items-center gap-2 text-[#F2E1CA]/80">
                                <RiPhoneLine className="text-lg" />
                                <a href="tel:+24177128627" className="hover:text-[#F2E1CA] transition-colors">
                                    +241 77 128-627
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Réseaux sociaux */}
                    <div>
                        <h3 className="text-[#F2E1CA] text-lg font-semibold mb-4 font-[family-name:var(--font-baskervville)]">
                            Suivez-moi
                        </h3>
                        <div className="flex gap-4">
                            <Link
                                href="https://www.facebook.com/profile.php?id=100087274472246&mibextid=ZbWKwL"
                                target="_blank"
                                className="text-[#F2E1CA] hover:text-white transition-all hover:scale-110 text-3xl"
                                aria-label="Facebook"
                            >
                                <BiLogoFacebookCircle />
                            </Link>
                            <Link
                                href="https://youtube.com/@orpheenyny7407?si=ZeSFgfgN4uWf3Uza"
                                target="_blank"
                                className="text-[#F2E1CA] hover:text-white transition-all hover:scale-110 text-3xl"
                                aria-label="YouTube"
                            >
                                <BiLogoYoutube />
                            </Link>
                            <Link
                                href="https://www.instagram.com/orphe_enyny/profilecard/?igsh=Zzd0YWNwYmRpb2N2"
                                target="_blank"
                                className="text-[#F2E1CA] hover:text-white transition-all hover:scale-110 text-3xl"
                                aria-label="Instagram"
                            >
                                <BiLogoInstagramAlt />
                            </Link>
                            <Link
                                href="https://www.tiktok.com/@orphee_nyny?_t=8rIgSNVGizQ&_r=1"
                                target="_blank"
                                className="text-[#F2E1CA] hover:text-white transition-all hover:scale-110 text-3xl"
                                aria-label="TikTok"
                            >
                                <BiLogoTiktok />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Ligne de séparation */}
                <div className="border-t border-[#F2E1CA]/20 pt-6 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F2E1CA]/60 font-[family-name:var(--font-poppins)]">
                        <p>© {currentYear} Orphée NYNY. Tous droits réservés.</p>
                        <p>
                            Site conçu par{' '}
                            <a
                                href="https://www.jealife.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#F2E1CA] transition-colors underline underline-offset-2"
                            >
                                JEaLiFe Agency
                            </a>
                        </p>
                        <div className="flex gap-4">
                            <Link href="/mentions-legales" className="hover:text-[#F2E1CA] transition-colors">
                                Mentions légales
                            </Link>
                            <Link href="/politique-confidentialite" className="hover:text-[#F2E1CA] transition-colors">
                                Politique de confidentialité
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
