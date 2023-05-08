'use client';
import { useState, useEffect } from 'react';

import { GetLocation } from './GetData';
import { NomadList } from '@/lib/nomadlist/NomadList.types';
import { Marker } from './Marker';
import { Alt } from './Alt';
import { TripList } from './TripList';


export function Location({ of }: { of: string }) {
    const [thumbnail, setThumbnail] = useState<string>();
    const [nomadList, setNomadList] = useState<NomadList | null>(null);
    const [loading, setLoading] = useState(true);
    const [nextIn, setNextIn] = useState<string>();

    useEffect(() => {
        GetLocation().then((data) => {
            setNomadList(data);

            if (!Array.isArray(data?.location.now)) {
                setThumbnail(data?.location.now.thumbnail);
            }

            if (!Array.isArray(data?.location.next)) {
                setNextIn(data?.location.next.dateStart);
            }

            setLoading(false);
        });
    }, []);

    return (
        <>
            <div className='w-full object-center m-auto text-center select-none'>
                <Marker loading={loading} thumbnail={thumbnail} />
                <Alt of={of} loading={loading} now={nomadList?.location.now} next={nomadList?.location.next} in={nextIn} />
                <TripList loading={loading} trips={nomadList?.trips} />
            </div>
        </>
    );
}