import { NextResponse } from 'next/server';

import { Status, StatusType } from '@/lib/status-page/FetchData';
import packageInfo from '@/package.json';


export async function GET() {
    const status: Status = {
        name: 'WHERE IS</br>JORGE TODAY?',
        type: StatusType.MAINTENANCE,
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