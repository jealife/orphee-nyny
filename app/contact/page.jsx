'use client'
import { useState } from 'react';
import Link from 'next/link';
import { RiArrowLeftLine, RiMailLine, RiPhoneLine, RiMapPinLine, RiSendPlaneLine } from 'react-icons/ri';
import { BiLogoFacebookCircle, BiLogoYoutube, BiLogoInstagramAlt, BiLogoTiktok } from 'react-icons/bi';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }, 1500);
    };

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
                        Contact
                    </h1>
                    <p className="text-xl text-white/90 font-[family-name:var(--font-poppins)] max-w-2xl">
                        Restons en contact
                    </p>
                </div>
            </div>

            {/* Contact Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-6">
                                Parlons de votre projet
                            </h2>
                            <p className="text-lg text-[#2f0f09]/70 font-[family-name:var(--font-poppins)] leading-relaxed">
                                Que ce soit pour une collaboration, une prestation, ou simplement pour échanger,
                                n'hésitez pas à me contacter. Je serai ravie de discuter avec vous.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#2f0f09] p-3 rounded-full">
                                    <RiMailLine className="text-2xl text-[#F2E1CA]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#2f0f09] font-[family-name:var(--font-poppins)] mb-1">
                                        Email
                                    </h3>
                                    <a
                                        href="mailto:contact@orphee-nyny.com"
                                        className="text-[#2f0f09]/70 hover:text-[#2f0f09] transition-colors"
                                    >
                                        contact@orphee-nyny.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#2f0f09] p-3 rounded-full">
                                    <RiPhoneLine className="text-2xl text-[#F2E1CA]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#2f0f09] font-[family-name:var(--font-poppins)] mb-1">
                                        Téléphone
                                    </h3>
                                    <a
                                        href="tel:+241"
                                        className="text-[#2f0f09]/70 hover:text-[#2f0f09] transition-colors"
                                    >
                                        +241 XX XX XX XX
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#2f0f09] p-3 rounded-full">
                                    <RiMapPinLine className="text-2xl text-[#F2E1CA]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#2f0f09] font-[family-name:var(--font-poppins)] mb-1">
                                        Localisation
                                    </h3>
                                    <p className="text-[#2f0f09]/70">
                                        Bitam, Gabon
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="font-semibold text-[#2f0f09] font-[family-name:var(--font-poppins)] mb-4">
                                Suivez-moi sur les réseaux sociaux
                            </h3>
                            <div className="flex gap-4">
                                <Link
                                    href="https://www.facebook.com/profile.php?id=100087274472246&mibextid=ZbWKwL"
                                    target="_blank"
                                    className="bg-[#2f0f09] p-3 rounded-full text-[#F2E1CA] hover:bg-[#4a1810] transition-all hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <BiLogoFacebookCircle className="text-2xl" />
                                </Link>
                                <Link
                                    href="https://youtube.com/@orpheenyny7407?si=ZeSFgfgN4uWf3Uza"
                                    target="_blank"
                                    className="bg-[#2f0f09] p-3 rounded-full text-[#F2E1CA] hover:bg-[#4a1810] transition-all hover:scale-110"
                                    aria-label="YouTube"
                                >
                                    <BiLogoYoutube className="text-2xl" />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/orphe_enyny/profilecard/?igsh=Zzd0YWNwYmRpb2N2"
                                    target="_blank"
                                    className="bg-[#2f0f09] p-3 rounded-full text-[#F2E1CA] hover:bg-[#4a1810] transition-all hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <BiLogoInstagramAlt className="text-2xl" />
                                </Link>
                                <Link
                                    href="https://www.tiktok.com/@orphee_nyny?_t=8rIgSNVGizQ&_r=1"
                                    target="_blank"
                                    className="bg-[#2f0f09] p-3 rounded-full text-[#F2E1CA] hover:bg-[#4a1810] transition-all hover:scale-110"
                                    aria-label="TikTok"
                                >
                                    <BiLogoTiktok className="text-2xl" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-[family-name:var(--font-baskervville)] text-[#2f0f09] mb-6">
                            Envoyez-moi un message
                        </h3>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-[#2f0f09] font-semibold mb-2 font-[family-name:var(--font-poppins)]">
                                    Nom complet *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-[#2f0f09]/20 rounded-lg focus:border-[#2f0f09] focus:outline-none transition-colors"
                                    placeholder="Votre nom"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-[#2f0f09] font-semibold mb-2 font-[family-name:var(--font-poppins)]">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-[#2f0f09]/20 rounded-lg focus:border-[#2f0f09] focus:outline-none transition-colors"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-[#2f0f09] font-semibold mb-2 font-[family-name:var(--font-poppins)]">
                                    Sujet *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-[#2f0f09]/20 rounded-lg focus:border-[#2f0f09] focus:outline-none transition-colors"
                                    placeholder="Sujet de votre message"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[#2f0f09] font-semibold mb-2 font-[family-name:var(--font-poppins)]">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border-2 border-[#2f0f09]/20 rounded-lg focus:border-[#2f0f09] focus:outline-none transition-colors resize-none"
                                    placeholder="Votre message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#2f0f09] text-white py-4 rounded-lg font-semibold hover:bg-[#4a1810] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <RiSendPlaneLine className="text-xl" />
                                        Envoyer le message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
