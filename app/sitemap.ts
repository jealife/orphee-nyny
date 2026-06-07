import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.orphee-nyny.com';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
            images: [
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_22.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_3.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_20.webp`,
                `${BASE_URL}/Orphée-nyny-opengraph@2x.jpg`,
            ],
        },
        {
            url: `${BASE_URL}/biographie`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            images: [
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_38.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_37.webp`,
            ],
        },
        {
            url: `${BASE_URL}/discographie`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/videos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/galerie`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
            images: [
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_3.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_5.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_14.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_19.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_20.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_22.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_26.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_30.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_32.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_36.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_37.webp`,
                `${BASE_URL}/images/ORPHÉE-NYNY_Plage_38.webp`,
                `${BASE_URL}/images/concert/EKEAM-LIVE-IF-12-avril-202600002.jpg`,
                `${BASE_URL}/images/concert/EKEAM-LIVE-IF-12-avril-202600003.jpg`,
                `${BASE_URL}/images/concert/EKEAM-LIVE-IF-12-avril-202600004.jpg`,
                `${BASE_URL}/images/concert/EKEAM-LIVE-IF-12-avril-202600006.jpg`,
                `${BASE_URL}/images/concert/EKEAM-LIVE-IF-12-avril-202600007.jpg`,
                `${BASE_URL}/images/concert/EKEAM-LIVE-IF-12-avril-202600008.jpg`,
            ],
        },
        {
            url: `${BASE_URL}/evenements`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/mentions-legales`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${BASE_URL}/politique-confidentialite`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ];
}
