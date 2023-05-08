import './marker.css';


export function Marker({ loading, thumbnail }: { loading: boolean, thumbnail: string|undefined }) {
    return (
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
    )
}