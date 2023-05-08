import { Location } from '@/lib/nomadlist/NomadList.types';


type AltProps = {
    of: string,
    loading: boolean,
    now?: Location,
    next?: Location,
    in?: string,
}

export function Alt(props: AltProps) {
    return (
        <>
            <div className="font-h1 font-bold mt-4 text-lg">
                <span className='text-grey-darkest'>{props.of} is currently in </span>
                {
                    (props.loading || props.now == undefined) &&
                    <div className='animate-pulse h-4 w-32 p-4 bg-grey-dark rounded inline-block align-middle'></div> ||
                    props.now?.city.toUpperCase() + ', ' + props.now?.countryCode.toLocaleUpperCase()
                }
            </div>
            {
                (props.loading || props.in == undefined) &&
                <div className='animate-pulse h-3 w-40 p-1 bg-grey-dark rounded inline-block align-middle'></div> ||
                (
                    <div className='font-h1 font-bold text-xs text-grey-darker'>
                        Leaving for {props.next?.country} {props.in}
                    </div>
                )
            }
        </>
    )
}