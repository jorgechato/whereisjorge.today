export const metadata = {
    title: 'Where is really Jorge today?',
};

export default function Home() {
    return (
        <>
            <section className="mb-12">
                <div
                    className="bg-accent border-radius-5 alert alert-dismissible fade show rounded-lg py-6 px-6 text-white md:flex justify-between items-center text-center md:text-left transition duration-300 hover:scale-105 cursor-pointer">
                    <div className="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start">
                        <strong className="mr-1">Page under maintenance</strong> We will come back soon, better and stronger.
                    </div>
                </div>
            </section>
        </>
    )
}
