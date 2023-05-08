'use client';
import './banner.css';
import { useState, useEffect } from 'react';

import { GetLocation } from './GetData';
import { NomadList } from '@/lib/nomadlist/NomadList.types';


export function Banner({ name }: { name: string }) {
    const [thumbnail, setThumbnail] = useState<string>();
    const [nomadList, setNomadList] = useState<NomadList | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetLocation().then((data) => {
            setNomadList(data);

            if (!Array.isArray(data?.location.now)) {
                setThumbnail(data?.location.now.thumbnail);
                setLoading(false);
            }
        });
    }, []);

    return (
        <>
            <div className='w-full object-center m-auto text-center select-none'>
                <div className="svg-mask w-[230.625px] h-[307.2px] max-w-full color-transparent m-auto
                object-center bg-cover scale-100
                duration-500 transition-all group hover:scale-105 cursor-cell">
                    {
                        loading &&
                        <div className='animate-pulse h-full w-full bg-grey-dark rounded inline-block align-middle'></div> ||
                        <img src={thumbnail}
                            className='w-full h-full object-center object-cover
                            duration-500 transition-all scale-125 group-hover:scale-100' />
                    }
                </div>

                <div className="font-h1 font-bold mt-4 text-lg cursor-cell">
                    <span className='text-grey-dark'>{name} is currently in </span>
                    {
                        loading &&
                        <div className='animate-pulse h-4 w-32 p-4 bg-grey-dark rounded inline-block align-middle'></div> ||
                        nomadList?.location.now.city.toUpperCase() + ', ' + nomadList?.location.now.countryCode.toLocaleUpperCase()
                    }
                </div>
            </div>
        </>
    );
}