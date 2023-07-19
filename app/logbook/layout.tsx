export default function LogbookLayout({ children }: { children: React.ReactNode }) {
    return (
        <main id="content">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </main>
    )
}