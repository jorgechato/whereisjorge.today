import { NextResponse } from 'next/server';

import { lib } from '@jorgechato/manyo';

export const dynamic = 'force-dynamic';


export async function GET() {
    const location: lib.NomadList|null = await lib.GetLocation();

    return NextResponse.json(location,{
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'stale-while-revalidate=86400, s-maxage=86400, max-age=86400', // 24h cache
        },
    });
}