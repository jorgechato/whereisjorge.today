import { NextResponse } from 'next/server';

import { NomadList } from '@/lib/nomadlist/NomadList.types';
import { GetLocation } from '@/lib/nomadlist/FetchData';

export const dynamic = 'force-dynamic';


export async function GET() {
    const location: NomadList|null = await GetLocation();

    return NextResponse.json(location,{
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'stale-while-revalidate=86400, s-maxage=86400, max-age=86400', // 24h cache
        },
    });
}