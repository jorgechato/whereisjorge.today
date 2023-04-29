import { NextResponse } from 'next/server';

import { lib } from '@jorgechato/manyo';
import packageInfo from '@/package.json';


export async function GET() {
    const status: lib.StatusPage = {
        name: 'WHERE IS</br>JORGE TODAY?',
        type: lib.StatusPageCode.MAINTENANCE,
        url: 'https://whereisjorge.today',
        version: packageInfo.version,
    };

    return NextResponse.json(status, {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
        },
    });

}