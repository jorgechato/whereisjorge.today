import { Location } from '@jorgechato/manyo';


export const metadata = {
    title: 'Where is really Jorge today?',
};

export default function Home() {
    return (
        <>
            <Location of="Jorge" />
        </>
    )
}
