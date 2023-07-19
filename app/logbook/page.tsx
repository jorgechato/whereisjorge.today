import { ArticleList } from '@jorgechato/manyo';


export const metadata = {
    title: 'The secret logbook',
};

export default function Home() {
    return (
        <>
            <h1 className="text-2xl mb-6 text-center font-h1 font-bold">
                Logbook
            </h1>
            <ArticleList endpoint="/logbook" />
        </>
    )
}