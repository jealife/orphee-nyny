import { NextResponse } from 'next/server';

export async function GET() {
    const channelId = 'UCve2-fzXts0qU4fDb909iIg';
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

    try {
        const response = await fetch(rssUrl);
        const xml = await response.text();
        return new NextResponse(xml, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 's-maxage=3600, stale-while-revalidate', // Cache for 1 hour
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}
