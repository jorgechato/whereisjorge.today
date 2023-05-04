import { NextResponse } from 'next/server';

import { NomadList } from '@/lib/nomadlist/NomadList.types';
import { GetLocation } from '@/lib/nomadlist/FetchData';


export async function GET() {
    const location: NomadList|null = await GetLocation();

    return NextResponse.json(location, {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
        },
    });
}