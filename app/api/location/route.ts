import { NextResponse } from 'next/server';

import { lib } from '@jorgechato/manyo';

export const dynamic = 'force-dynamic';

const config: { [key: string]: any } = require('@/locations.js');


export async function GET() {
    const nomad: lib.NomadList | null = await lib.GetLocation();
    if (nomad != null) {
        nomad.location.now.thumbnail = config[nomad?.location.now.city] ?? nomad.location.now.thumbnail;
    }

    return NextResponse.json(nomad, {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'stale-while-revalidate=86400, s-maxage=86400, max-age=86400', // 24h cache
        },
    });
}
